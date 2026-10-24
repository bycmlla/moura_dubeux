// Auditoria somente de leitura. Gera listas; nunca remove ou altera imagens.
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

const root = path.resolve(__dirname, '..');
const date = process.argv[2] || new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Sao_Paulo' }).format(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Data deve ter o formato AAAA-MM-DD.');
const relative = (file) => path.relative(root, file).split(path.sep).join('/');
const imagePattern = /\.(png|jpe?g|webp|avif|gif|svg|ico|bmp|tiff?|heic)$/i;
const mediaPattern = /\.(png|jpe?g|webp|avif|gif|svg|ico|bmp|tiff?|heic|mp4|webm|mov|m4v|pdf)$/i;
const codePattern = /\.(jsx?|tsx?|css|scss|html|json)$/i;
const warnings = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isSymbolicLink() || entry.name === 'node_modules' || entry.name === '.git') return [];
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [{ file, path: relative(file), bytes: fs.statSync(file).size }];
  });
}

const sourceFiles = walk(path.join(root, 'src'));
const publicFiles = walk(path.join(root, 'public'));
const inventory = [...sourceFiles, ...publicFiles];
const byFile = new Map(inventory.map((item) => [item.file, item]));
const edges = new Map();
const references = new Map();
const resolvedLiterals = new Map();
const unusedImports = [];
const sourceTexts = [];

function resolveReference(from, raw) {
  if (!raw || /^(data:|mailto:|tel:|#)/i.test(raw)) return null;
  let value = raw.replace(/%PUBLIC_URL%/g, '').split(/[?#]/)[0];
  try { value = decodeURIComponent(value); } catch { /* Preserve literal percent signs. */ }
  if (/^https?:\/\//i.test(value)) {
    try {
      const pathname = new URL(value).pathname;
      return publicFiles.find((item) => pathname.endsWith('/' + item.path.slice('public/'.length)))?.file || null;
    } catch { return null; }
  }
  const candidates = value.startsWith('/')
    ? [path.join(root, 'public', value.slice(1))]
    : [path.resolve(path.dirname(from), value), path.resolve(root, 'public', value)];
  for (const candidate of candidates) {
    for (const suffix of ['', '.js', '.jsx', '.ts', '.tsx', '.css', '/index.js', '/index.jsx']) {
      const file = path.normalize(candidate + suffix);
      if (byFile.has(file)) return file;
    }
  }
  return null;
}

function record(from, raw, kind, line, required = false) {
  const target = resolveReference(from, raw);
  if (!target) {
    if (required && raw.startsWith('.')) warnings.push({ type: 'referencia-local-ausente', source: relative(from), line, value: raw });
    return;
  }
  if (!edges.has(from)) edges.set(from, new Set());
  edges.get(from).add(target);
  if (!references.has(target)) references.set(target, []);
  references.get(target).push({ source: relative(from), line, kind });
  if (!resolvedLiterals.has(from)) resolvedLiterals.set(from, new Set());
  resolvedLiterals.get(from).add(raw);
}

for (const item of inventory.filter((item) => codePattern.test(item.path) && !item.path.startsWith('src/assets/'))) {
  const content = fs.readFileSync(item.file, 'utf8');
  sourceTexts.push({ ...item, content });
  if (/\.[jt]sx?$/.test(item.path)) {
    const ast = parser.parse(content, { sourceType: 'unambiguous', plugins: ['jsx', ...(item.path.endsWith('ts') || item.path.endsWith('tsx') ? ['typescript'] : [])] });
    traverse(ast, {
      ImportDeclaration(p) {
        record(item.file, p.node.source.value, 'import', p.node.loc.start.line, true);
        const target = resolveReference(item.file, p.node.source.value);
        if (target && imagePattern.test(target)) {
          const names = p.node.specifiers.filter((s) => !p.scope.getBinding(s.local.name)?.referenced).map((s) => s.local.name);
          if (names.length) unusedImports.push({ path: relative(target), source: item.path, line: p.node.loc.start.line, names });
        }
      },
      ExportNamedDeclaration(p) { if (p.node.source) record(item.file, p.node.source.value, 'export', p.node.loc.start.line, true); },
      ExportAllDeclaration(p) { record(item.file, p.node.source.value, 'export', p.node.loc.start.line, true); },
      CallExpression(p) {
        const callee = p.node.callee;
        const moduleCall = callee.type === 'Import' || (callee.type === 'Identifier' && callee.name === 'require');
        if (moduleCall) {
          const arg = p.node.arguments[0];
          if (arg?.type === 'StringLiteral') record(item.file, arg.value, 'module-call', p.node.loc.start.line, true);
          else warnings.push({ type: 'modulo-dinamico', source: item.path, line: p.node.loc.start.line });
        }
        if (callee.type === 'MemberExpression' && ['context', 'glob', 'globEager'].includes(callee.property?.name)) warnings.push({ type: 'carregamento-por-padrao', source: item.path, line: p.node.loc.start.line });
      },
      StringLiteral(p) { if (mediaPattern.test(p.node.value.split(/[?#]/)[0])) record(item.file, p.node.value, 'literal', p.node.loc.start.line); },
      TemplateLiteral(p) {
        const value = p.node.quasis.map((q) => q.value.cooked || '').join('');
        if (!p.node.expressions.length) record(item.file, value, 'template-estatico', p.node.loc.start.line);
        else if (mediaPattern.test(value.split(/[?#]/)[0]) || /assets\/|book-pages\//.test(value)) warnings.push({ type: 'caminho-de-midia-dinamico', source: item.path, line: p.node.loc.start.line, value });
      },
    });
  } else if (/\.(css|scss)$/.test(item.path)) {
    postcss.parse(content, { from: item.file }).walk((node) => {
      const value = node.type === 'decl' ? node.value : node.type === 'atrule' ? node.params : '';
      valueParser(value).walk((part) => {
        if (part.type === 'function' && part.value.toLowerCase() === 'url') record(item.file, valueParser.stringify(part.nodes).replace(/^['"]|['"]$/g, ''), 'css-url', node.source.start.line, true);
        if (node.type === 'atrule' && node.name === 'import' && part.type === 'string') record(item.file, part.value, 'css-import', node.source.start.line, true);
      });
    });
  } else if (item.path.endsWith('.html')) {
    const html = content.replace(/<!--[\s\S]*?-->/g, '');
    for (const match of html.matchAll(/\b(?:src|href|content|poster)\s*=\s*['"]([^'"]+)['"]/gi)) record(item.file, match[1], 'html', null);
  } else if (item.path.endsWith('.json')) {
    const visit = (value) => {
      if (typeof value === 'string') record(item.file, value, 'json', null);
      else if (value && typeof value === 'object') Object.values(value).forEach(visit);
    };
    visit(JSON.parse(content));
  }
}

const reachable = new Set();
function follow(file) {
  if (reachable.has(file)) return;
  reachable.add(file);
  for (const target of edges.get(file) || []) follow(target);
}
follow(path.join(root, 'src/index.js'));
follow(path.join(root, 'public/index.html'));

// Retirar caminhos já resolvidos evita confundir arquivos de mesmo nome em pastas diferentes.
const unmatchedTexts = sourceTexts.map((source) => {
  let content = source.content;
  for (const value of [...(resolvedLiterals.get(source.file) || [])].sort((a, b) => b.length - a.length)) content = content.split(value).join('');
  return { ...source, content };
});
// Uma menção literal não resolvida também preserva a imagem para revisão manual.
const images = inventory.filter((item) => imagePattern.test(item.path));
const review = [];
const unused = images.filter((item) => {
  if (reachable.has(item.file) || references.has(item.file)) return false;
  const basename = path.basename(item.file);
  const mentions = unmatchedTexts.filter((source) => source.content.includes(basename));
  if (mentions.length) { review.push({ path: item.path, sources: mentions.map((s) => s.path) }); return false; }
  return true;
}).sort((a, b) => b.bytes - a.bytes);
const unusedSet = new Set(unused.map((item) => item.file));
const directories = new Map();
for (const item of inventory.filter((item) => item.path.startsWith('src/assets/') || item.path.startsWith('public/'))) {
  let dir = path.dirname(item.file);
  while (dir !== root && dir !== path.join(root, 'src')) {
    if (!directories.has(dir)) directories.set(dir, []);
    directories.get(dir).push(item);
    dir = path.dirname(dir);
  }
}
// Só indicar exclusão da pasta inteira quando todos os seus arquivos são imagens sem uso.
const complete = [...directories.entries()].filter(([, files]) => files.length && files.every((f) => unusedSet.has(f.file))).map(([dir, files]) => ({ path: relative(dir), files: files.length, bytes: files.reduce((sum, f) => sum + f.bytes, 0) }));
const wholeDirectories = complete.filter((item) => !complete.some((other) => item.path.startsWith(other.path + '/'))).sort((a, b) => b.bytes - a.bytes);
const groups = new Map();
for (const item of unused) {
  const parts = item.path.split('/');
  const name = item.path.startsWith('src/assets/Empreendimentos/') ? parts.slice(0, 5).join('/') : path.posix.dirname(item.path);
  if (!groups.has(name)) groups.set(name, { path: name, files: 0, bytes: 0 });
  groups.get(name).files++;
  groups.get(name).bytes += item.bytes;
}
const totals = (files) => ({ files: files.length, bytes: files.reduce((sum, f) => sum + f.bytes, 0) });
const buildFiles = walk(path.join(root, 'build'));
const bytes = (n) => (n / 1024 / 1024).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const summary = {
  date, unused: totals(unused), images: totals(images), source: totals(sourceFiles), public: totals(publicFiles), build: totals(buildFiles),
  usedImages: totals(images.filter((f) => reachable.has(f.file))),
  buildPngs: totals(buildFiles.filter((f) => /\.png$/i.test(f.path))),
  groups: [...groups.values()].sort((a, b) => b.bytes - a.bytes), wholeDirectories, unusedImports, review, warnings,
  biggestUsedImages: images.filter((f) => reachable.has(f.file)).sort((a, b) => b.bytes - a.bytes).slice(0, 20).map(({ path, bytes }) => ({ path, bytes })),
  otherMedia: inventory.filter((f) => mediaPattern.test(f.path) && !imagePattern.test(f.path)).sort((a, b) => b.bytes - a.bytes).map(({ file, path, bytes }) => ({ path, bytes, referenced: references.has(file), production: reachable.has(file) })),
};
const reportDir = path.join(root, 'relatorios');
fs.mkdirSync(reportDir, { recursive: true });
const prefix = path.join(reportDir, `imagens-sem-uso-${date}`);
fs.writeFileSync(prefix + '.txt', unused.map((item) => item.path).join('\n') + '\n', 'utf8');
const csv = (value) => '"' + String(value).replace(/"/g, '""') + '"';
fs.writeFileSync(prefix + '.csv', '\uFEFF' + [['Caminho', 'Tamanho_bytes', 'Tamanho_MiB', 'Caminho_absoluto'], ...unused.map((item) => [item.path, item.bytes, (item.bytes / 1024 / 1024).toFixed(2).replace('.', ','), item.file])].map((row) => row.map(csv).join(';')).join('\r\n') + '\r\n', 'utf8');
fs.writeFileSync(prefix + '.json', JSON.stringify({ ...summary, unusedFiles: unused.map(({ path, bytes }) => ({ path, bytes })) }, null, 2) + '\n', 'utf8');
const table = (rows) => ['| Pasta | Imagens | MiB |', '| --- | ---: | ---: |', ...rows.map((item) => `| \`${item.path}\` | ${item.files} | ${bytes(item.bytes)} |`)].join('\n');
const report = [
  '# Imagens sem uso no site', '', `Análise de ${date.split('-').reverse().join('/')}, sobre os arquivos existentes neste checkout. Nenhuma imagem foi alterada ou removida.`, '',
  `**${unused.length} imagens sem referência no código atual, somando ${(summary.unused.bytes / 1000000).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} MB (${bytes(summary.unused.bytes)} MiB).** As listas TXT e CSV desta mesma data contêm todos os caminhos exatos.`, '',
  '**Use esta lista de 23/10/2026 para a limpeza. Os relatórios de 20 e 22/10 já não refletem os imports atuais.** Por exemplo, a pasta Mirage_Organizado agora tem várias imagens em uso e não pode ser apagada inteira.', '',
  '## Grupos para conferir', '', 'Os grupos abaixo podem conter outras imagens em uso. Apague somente os arquivos da lista individual.', '', table(summary.groups), '',
  '## Pastas compostas inteiramente por imagens sem uso', '', 'Somente estas pastas têm todos os arquivos presentes classificados como imagens sem uso. As pastas dos grupos acima não devem ser apagadas por inteiro.', '', table(wholeDirectories), '',
  '## Lista completa', '', '| Imagem | MiB |', '| --- | ---: |', ...unused.map((item) => `| \`${item.path}\` | ${bytes(item.bytes)} |`), '',
  '## O que explica o tamanho do site', '',
  `- Código e arquivos em src: ${bytes(summary.source.bytes)} MiB.`,
  `- Build existente: ${bytes(summary.build.bytes)} MiB; é uma cópia gerada, que pode estar desatualizada.`,
  `- Imagens alcançadas pelas entradas de produção: ${summary.usedImages.files}, somando ${bytes(summary.usedImages.bytes)} MiB.`,
  `- PNGs no build existente: ${summary.buildPngs.files}, somando ${bytes(summary.buildPngs.bytes)} MiB.`,
  '- A exclusão das imagens listadas libera espaço no projeto local. Como elas não são referenciadas pelas entradas de produção, sua exclusão não reduz as imagens que o código manda para o build. Arquivos com o mesmo nome em pastas diferentes foram conferidos pelos caminhos completos.', '',
  'As imagens utilizadas são a principal oportunidade para reduzir o site publicado: reduzir dimensões excessivas e comprimir os PNGs de fotografias/renderizações. Plantas precisam manter os textos legíveis. Depois de mudanças nas mídias, gerar novamente o build e conferir o resultado.', '',
  '### Maiores imagens utilizadas — manter ou otimizar', '', '| Imagem | MiB |', '| --- | ---: |', ...summary.biggestUsedImages.map((item) => `| \`${item.path}\` | ${bytes(item.bytes)} |`), '',
  '### Outros arquivos de mídia', '', '| Arquivo | MiB | Alcançado pela produção |', '| --- | ---: | --- |', ...summary.otherMedia.map((item) => `| \`${item.path}\` | ${bytes(item.bytes)} | ${item.production ? 'Sim' : 'Não'} |`), '',
  '## Método e limites', '',
  'Foram lidos os imports e referências JavaScript/JSX, url() e imports CSS, HTML público, metadados sociais e manifesto. As entradas de produção são src/index.js e public/index.html. Referências de outros módulos também preservam arquivos; import sem uso não autoriza apagar uma imagem enquanto o import existir. Menções literais ambíguas são separadas para revisão. Não é uma inspeção da hospedagem: links externos para arquivos públicos não são observáveis nesta análise local.', '',
  `Imports de imagens sem uso da variável: ${unusedImports.length}. Menções para revisão: ${review.length}. Alertas de caminhos dinâmicos ou referências ausentes: ${warnings.length}. Consulte o JSON para detalhes.`, '',
  'Para repetir a análise: node scripts/auditar-imagens.cjs AAAA-MM-DD. O script só escreve os relatórios e nunca executa exclusões.', '',
].join('\n');
fs.writeFileSync(prefix + '.md', report, 'utf8');
console.log(JSON.stringify({ unused: summary.unused, usedImages: summary.usedImages, build: summary.build, groups: summary.groups, unusedImports, review, warnings, reports: relative(prefix) + '.{md,txt,csv,json}' }, null, 2));
