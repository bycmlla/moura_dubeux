// Conversão local: cria WebP, atualiza referências e registra a recuperação.
// Os originais são movidos separadamente para o backup indicado no manifesto.
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const assert = require('assert');
const vm = require('vm');
const { fork } = require('child_process');

const root = path.resolve(__dirname, '..');
const date = '2026-10-23';
const manifestPath = path.join(root, 'relatorios', `conversao-webp-${date}.json`);
const backupRoot = path.join(path.dirname(root), `${path.basename(root)}-originais-webp-${date}`);
const relative = (file) => path.relative(root, file).split(path.sep).join('/');
const hash = (data) => crypto.createHash('sha256').update(data).digest('hex');
const technical = (file) => /planta|implantacao|pavimento|legenda|tipologia|mapa|localizacao|entorno|referencia|logo|bandeira/i.test(file);
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  if (entry.isSymbolicLink() || ['node_modules', '.git'].includes(entry.name)) return [];
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const sourceCode = () => walk(path.join(root, 'src')).filter((file) => /\.(js|jsx|ts|tsx|css|scss|html|json)$/.test(file) && !relative(file).startsWith('src/assets/'));
const totals = (files) => ({ files: files.length, bytes: files.reduce((sum, file) => sum + fs.statSync(file).size, 0) });
let manifest;
const save = () => fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

function loadSharp() {
  try { return require('sharp'); } catch {
    return require(process.env.DIONE_SHARP_MODULE || path.join(os.tmpdir(), 'dione-webp-tools/node_modules/sharp'));
  }
}

function createEncoder() {
  const child = fork(path.join(__dirname, 'codificar-webp-worker.cjs'), [], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe', 'ipc'] });
  let stderr = '';
  child.stderr.on('data', (chunk) => { stderr = (stderr + chunk).slice(-4000); });
  return {
    run(job) {
      return new Promise((resolve, reject) => {
        const cleanup = () => { child.removeListener('message', onMessage); child.removeListener('error', onError); child.removeListener('exit', onExit); };
        const onError = (error) => { cleanup(); reject(error); };
        const onExit = (code) => onError(new Error(`Codificador encerrou com código ${code}: ${stderr}`));
        const onMessage = (message) => { cleanup(); if (message.error) reject(new Error(message.error)); else resolve(message.result); };
        child.once('message', onMessage);
        child.once('error', onError);
        child.once('exit', onExit);
        child.send(job);
      });
    },
    close() { child.kill(); },
  };
}

function plan() {
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    assert.strictEqual(manifest.workspace, root);
    return;
  }
  assert(!fs.existsSync(backupRoot), 'O diretório de backup já existe; confira o manifesto antes de continuar.');
  const files = walk(path.join(root, 'src/assets')).filter((file) => /\.(png|jpe?g)$/i.test(file));
  const targets = new Set();
  const entries = files.map((file) => {
    const target = file.replace(/\.(png|jpe?g)$/i, '.webp');
    assert(!targets.has(target) && !fs.existsSync(target), `WebP já existe: ${target}`);
    targets.add(target);
    return { source: relative(file), target: relative(target), mode: technical(file) ? 'lossless' : 'quality85', originalBytes: fs.statSync(file).size, status: 'pending' };
  });
  manifest = {
    date, workspace: root, backupRoot, status: 'planned',
    settings: { preserveDimensions: true, losslessTechnicalImages: true, photoQuality: 85, alphaQuality: 100, effort: 4, concurrency: 4, sharpThreadsPerImage: 4 },
    before: { originalImages: { files: entries.length, bytes: entries.reduce((sum, file) => sum + file.originalBytes, 0) }, build: totals(walk(path.join(root, 'build'))) },
    files: entries,
  };
  save();
}

async function convert() {
  plan();
  assert(['planned', 'converting', 'converted'].includes(manifest.status), `Conversão já ativada: ${manifest.status}`);
  const sharp = loadSharp();
  sharp.cache({ memory: 64, files: 0 });
  sharp.concurrency(4);
  manifest.sharpVersion = sharp.versions.sharp;
  manifest.status = 'converting';
  save();
  const deduplicated = new Map();
  const encoders = Array.from({ length: manifest.settings.concurrency }, createEncoder);
  let index = 0, finished = 0;
  let stopped = false;
  process.once('SIGINT', () => { stopped = true; });
  const start = Date.now();
  async function processFile(entry, encoder) {
    const source = path.join(root, entry.source), target = path.join(root, entry.target);
    if (entry.status === 'kept-original') return;
    if (entry.status === 'converted') {
      assert.strictEqual(hash(fs.readFileSync(source)), entry.originalSha256, `Original mudou: ${entry.source}`);
      assert.strictEqual(hash(fs.readFileSync(target)), entry.webpSha256, `WebP mudou: ${entry.target}`);
      return;
    }
    assert(!fs.existsSync(target), `Saída sem registro no manifesto: ${entry.target}`);
    const input = fs.readFileSync(source);
    entry.originalSha256 = hash(input);
    if (/\.png$/i.test(source) && input.subarray(-12).toString('hex') !== '0000000049454e44ae426082') {
      entry.status = 'kept-original';
      entry.reason = 'PNG original incompleto: bloco final IEND ausente. Preservado para evitar conversão com regiões danificadas.';
      delete entry.error;
      return;
    }
    const key = entry.originalSha256 + ':' + entry.mode;
    if (!deduplicated.has(key)) {
      deduplicated.set(key, encoder.run({ source, target, mode: entry.mode }).then((result) => {
        assert.strictEqual(result.inputSha256, entry.originalSha256, `Original mudou durante a conversão: ${entry.source}`);
        return result;
      }));
    }
    const result = await deduplicated.get(key);
    if (result.path !== target) fs.copyFileSync(result.path, target, fs.constants.COPYFILE_EXCL);
    Object.assign(entry, { status: 'converted', webpBytes: result.bytes, webpSha256: result.sha256, width: result.width, height: result.height, originalWidth: result.originalWidth, originalHeight: result.originalHeight, hasAlpha: result.hasAlpha });
    delete entry.error;
  }
  async function worker(_unused, workerIndex) {
    while (!stopped && index < manifest.files.length) {
      const entry = manifest.files[index++];
      try {
        await processFile(entry, encoders[workerIndex]);
        finished++;
        if (finished % 25 === 0) {
          save();
          console.log(JSON.stringify({ converted: finished, total: manifest.files.length, elapsedSeconds: Math.round((Date.now() - start) / 1000) }));
        }
      } catch (error) {
        stopped = true;
        entry.error = error.message;
        throw error;
      }
    }
  }
  const results = await Promise.allSettled(Array.from({ length: manifest.settings.concurrency }, worker));
  encoders.forEach((encoder) => encoder.close());
  save();
  const failed = results.find((result) => result.status === 'rejected');
  if (failed) throw failed.reason;
  assert(manifest.files.every((file) => ['converted', 'kept-original'].includes(file.status)));
  manifest.status = 'converted';
  manifest.convertedFiles = manifest.files.filter((file) => file.status === 'converted').length;
  manifest.retainedOriginals = manifest.files.filter((file) => file.status === 'kept-original').map((file) => ({ path: file.source, bytes: file.originalBytes, reason: file.reason }));
  manifest.afterImages = { files: manifest.files.length, bytes: manifest.files.reduce((sum, file) => sum + (file.webpBytes ?? file.originalBytes), 0) };
  manifest.elapsedSeconds = Math.round((Date.now() - start) / 1000);
  save();
  console.log(JSON.stringify({ status: manifest.status, before: manifest.before.originalImages, after: manifest.afterImages, backupRoot, elapsedSeconds: manifest.elapsedSeconds }));
}

function activate() {
  plan();
  assert.strictEqual(manifest.status, 'converted', 'Conclua a conversão antes de atualizar as referências.');
  for (const entry of manifest.files.filter((file) => file.status === 'converted')) {
    assert.strictEqual(hash(fs.readFileSync(path.join(root, entry.source))), entry.originalSha256);
    assert.strictEqual(hash(fs.readFileSync(path.join(root, entry.target))), entry.webpSha256);
  }
  const changes = [];
  for (const file of sourceCode()) {
    const before = fs.readFileSync(file, 'utf8');
    let after = before, replacements = 0;
    for (const entry of manifest.files.filter((file) => file.status === 'converted')) {
      let source = path.relative(path.dirname(file), path.join(root, entry.source)).split(path.sep).join('/');
      if (!source.startsWith('.')) source = './' + source;
      const target = source.replace(/\.(png|jpe?g)$/i, '.webp');
      const count = after.split(source).length - 1;
      if (count) { after = after.split(source).join(target); replacements += count; }
    }
    if (after !== before) changes.push({ file, before, after, replacements });
  }
  assert(changes.length > 0, 'Nenhuma referência encontrada.');
  // Preparar todos os backups antes de alterar o primeiro arquivo de código.
  for (const change of changes) {
    const backup = path.join(backupRoot, 'codigo', relative(change.file));
    fs.mkdirSync(path.dirname(backup), { recursive: true });
    fs.writeFileSync(backup, change.before, { flag: 'wx' });
  }
  manifest.codeChanges = changes.map((change) => ({ path: relative(change.file), replacements: change.replacements, beforeSha256: hash(change.before), afterSha256: hash(change.after) }));
  save();
  for (const change of changes) fs.writeFileSync(change.file, change.after, 'utf8');
  manifest.status = 'references-updated';
  save();
  console.log(JSON.stringify({ status: manifest.status, codeChanges: manifest.codeChanges, backupRoot }, null, 2));
}

async function verifyImages() {
  plan();
  assert.strictEqual(manifest.status, 'originals-backed-up');
  const sharp = loadSharp();
  sharp.cache({ memory: 32, files: 0 });
  sharp.concurrency(4);
  let next = 0, checked = 0;
  async function worker() {
    while (next < manifest.files.length) {
      const entry = manifest.files[next++];
      if (entry.status === 'kept-original') {
        assert.strictEqual(hash(fs.readFileSync(path.join(root, entry.source))), entry.originalSha256);
        continue;
      }
      assert(!fs.existsSync(path.join(root, entry.source)), `Original ainda dentro do projeto: ${entry.source}`);
      const backup = path.join(manifest.backupRoot, 'originais', entry.source);
      assert.strictEqual(hash(fs.readFileSync(backup)), entry.originalSha256, `Backup alterado: ${entry.source}`);
      const output = fs.readFileSync(path.join(root, entry.target));
      assert.strictEqual(hash(output), entry.webpSha256, `WebP alterado: ${entry.target}`);
      const metadata = await sharp(output).metadata();
      assert.strictEqual(metadata.format, 'webp');
      assert.strictEqual(metadata.width, entry.width);
      assert.strictEqual(metadata.height, entry.height);
      assert.strictEqual(!!metadata.hasAlpha, entry.hasAlpha);
      checked++;
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  const output = new Map();
  const auditScript = path.join(root, 'scripts/auditar-imagens.cjs');
  const auditFs = { ...fs, mkdirSync() {}, writeFileSync(file, data) { output.set(path.resolve(file), String(data)); } };
  vm.runInNewContext(fs.readFileSync(auditScript, 'utf8'), {
    require(name) { return name === 'fs' ? auditFs : require(name); },
    __dirname, process: { argv: ['node', auditScript, date] }, console: { log() {} },
  }, { filename: auditScript });
  const audit = JSON.parse(output.get(path.join(root, 'relatorios', `imagens-sem-uso-${date}.json`)));
  assert.strictEqual(audit.warnings.length, 0, JSON.stringify(audit.warnings));
  assert.strictEqual(audit.unused.files, 0, 'Há imagens convertidas sem uso.');
  for (const entry of manifest.codeChanges) assert.strictEqual(hash(fs.readFileSync(path.join(root, entry.path))), entry.afterSha256);
  manifest.verification = { ...(manifest.verification || {}), checkedWebps: checked, missingReferences: audit.warnings.length, unusedImages: audit.unused.files, originalsAndCodeBackedUp: true };
  save();
  console.log(JSON.stringify(manifest.verification, null, 2));
}

function report() {
  plan();
  assert.strictEqual(manifest.status, 'verified', 'Finalize o backup e a validação antes do relatório.');
  const mb = (value) => (value / 1000000).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  const gb = (value) => (value / 1000000000).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  const reduction = 100 * (1 - manifest.afterImages.bytes / manifest.before.originalImages.bytes);
  const buildReduction = 100 * (1 - manifest.afterBuild.bytes / manifest.before.build.bytes);
  const prefix = path.join(root, 'relatorios', `conversao-webp-${date}`);
  const lines = [
    '# Conversão das imagens para WebP', '',
    `Concluída em 23/10/2026. ${manifest.convertedFiles} imagens PNG/JPG convertidas e referências atualizadas no site. ${manifest.retainedOriginals.length} PNGs originais incompletos foram preservados.`, '',
    '| Conteúdo | Antes | Depois | Redução |', '| --- | ---: | ---: | ---: |',
    `| Imagens analisadas (inclui os PNGs preservados) | ${gb(manifest.before.originalImages.bytes)} GB | ${gb(manifest.afterImages.bytes)} GB | ${reduction.toFixed(1).replace('.', ',')}% |`,
    `| Pasta build completa | ${gb(manifest.before.build.bytes)} GB | ${gb(manifest.afterBuild.bytes)} GB | ${buildReduction.toFixed(1).replace('.', ',')}% |`, '',
    '## Qualidade e compatibilidade', '',
    '- Mantidas as dimensões das imagens e a transparência; aplicada a orientação EXIF, quando presente.',
    `- ${manifest.files.filter((file) => file.status === 'converted' && file.mode === 'lossless').length} plantas, mapas, logotipos e outras imagens técnicas com compressão sem perdas.`,
    `- ${manifest.files.filter((file) => file.status === 'converted' && file.mode === 'quality85').length} fotos/renderizações com qualidade 85 e canal de transparência com qualidade 100.`,
    '- As imagens que já eram WebP e os SVGs foram mantidos. Ícones do navegador, manifesto e imagem de compartilhamento em public mantêm seus formatos de compatibilidade.',
    '- [Documentação das opções WebP utilizadas no Sharp](https://sharp.pixelplumbing.com/api-output/#webp).', '',
    '## Backup dos originais', '', `Pasta fora do projeto: \`${manifest.backupRoot}\`.`, '',
    'Os PNGs/JPGs estão na subpasta originais, preservando o caminho src/assets. A subpasta codigo guarda os arquivos de código anteriores à troca das referências. Os originais não entram no build. O manifesto JSON desta mesma data registra caminhos, tamanhos e hashes SHA-256 para conferência.', '',
    '## Validação', '',
    '- Metadados, dimensões e hashes de todos os WebPs conferidos.',
    '- Auditoria dos imports e referências sem caminhos de imagens ausentes.',
    `- ${manifest.verification.tests}.`,
    '- npm run build concluído; arquivos gerados conferidos pelo manifesto da compilação.',
    '- O novo build está pronto localmente; nenhuma publicação foi executada.', '',
    '## Próxima publicação', '',
    'O comando deploy de package.json passou de gh-pages -d build --add para gh-pages -d build. Assim, a próxima publicação substitui os arquivos antigos pelo conteúdo do novo build; a opção --add manteria os PNGs antigos acumulados. O CNAME existente está incluído em public e no build. [Comportamento documentado da opção add](https://github.com/tschaub/gh-pages#optionsadd). Nenhuma publicação foi executada durante esta conversão.', '',
    '## Maiores economias', '', '| Arquivo original | Antes (MB) | WebP (MB) | Economia (MB) |', '| --- | ---: | ---: | ---: | ---: |',
    ...manifest.files.filter((file) => file.status === 'converted').sort((a, b) => (b.originalBytes - b.webpBytes) - (a.originalBytes - a.webpBytes)).slice(0, 20).map((file) => `| \`${file.source}\` | ${mb(file.originalBytes)} | ${mb(file.webpBytes)} | ${mb(file.originalBytes - file.webpBytes)} |`), '',
    '## Originais incompletos preservados', '',
    ...manifest.retainedOriginals.map((file) => `- \`${file.path}\`: ${file.reason}`), '',
    'A planilha CSV contém a relação completa de arquivos convertidos. Para repetir a ferramenta em outro projeto, instale sharp e adapte o diretório de backup e a data antes de iniciar. Não execute uma segunda conversão sobre os WebPs gerados.', '',
  ];
  fs.writeFileSync(prefix + '.md', lines.join('\n'), 'utf8');
  const quote = (value) => '"' + String(value).replace(/"/g, '""') + '"';
  const rows = [['Original', 'WebP', 'Compressao', 'Antes_bytes', 'Depois_bytes', 'Economia_bytes'], ...manifest.files.filter((file) => file.status === 'converted').map((file) => [file.source, file.target, file.mode, file.originalBytes, file.webpBytes, file.originalBytes - file.webpBytes])];
  fs.writeFileSync(prefix + '.csv', '\uFEFF' + rows.map((row) => row.map(quote).join(';')).join('\r\n') + '\r\n', 'utf8');
  console.log(JSON.stringify({ report: relative(prefix) + '.md', imageReductionPercent: reduction, buildReductionPercent: buildReduction, buildBytes: manifest.afterBuild.bytes }, null, 2));
}

if (process.argv.includes('--verify-images')) verifyImages().catch((error) => { console.error(error); process.exitCode = 1; });
else if (process.argv.includes('--report')) report();
else if (process.argv.includes('--activate')) activate();
else if (process.argv.includes('--convert')) convert().catch((error) => { console.error(error); process.exitCode = 1; });
else console.log('Uso: node scripts/converter-webp.cjs --convert | --activate | --verify-images | --report. Requer sharp instalado (ou DIONE_SHARP_MODULE). Consulte o manifesto antes de repetir.');
