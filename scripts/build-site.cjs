// As imagens de empreendimentos ficam no mesmo repositório, fora da cota do Pages.
// Fixar a revisão mantém cada publicação ligada às imagens do respectivo commit.
const { execFileSync, spawnSync } = require('child_process');
const path = require('path');
const root = path.resolve(__dirname, '..');
let revision = 'main';
try {
  revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
} catch { /* Projetos exportados sem .git usam a branch main. */ }
if (revision !== 'main') {
  const changes = execFileSync('git', ['status', '--porcelain', '--untracked-files=normal', '--', 'src/assets/Empreendimentos'], { cwd: root, encoding: 'utf8' }).trim();
  if (changes) throw new Error('Faça commit das imagens dos empreendimentos antes de gerar o build; a publicação usa os arquivos da revisão registrada no Git.');
}

const result = spawnSync(process.execPath, [
  '--max-old-space-size=8192',
  require.resolve('react-scripts/scripts/build'),
], {
  stdio: 'inherit',
  env: {
    ...process.env,
    REACT_APP_MEDIA_BASE_URL: process.env.REACT_APP_MEDIA_BASE_URL
      || `https://raw.githubusercontent.com/bycmlla/moura_dubeux/${revision}/src/assets/`,
  },
  windowsHide: true,
  cwd: root,
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
