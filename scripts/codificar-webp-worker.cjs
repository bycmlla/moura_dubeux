// Processo auxiliar isolado para converter imagens independentes em paralelo.
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const assert = require('assert');
let sharp;
try { sharp = require('sharp'); } catch {
  sharp = require(process.env.DIONE_SHARP_MODULE || path.join(os.tmpdir(), 'dione-webp-tools/node_modules/sharp'));
}
sharp.cache({ memory: 32, files: 0 });
sharp.concurrency(4);
const hash = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

process.on('message', async ({ source, target, mode }) => {
  try {
    const input = fs.readFileSync(source);
    const metadata = await sharp(input).metadata();
    assert((metadata.pages || 1) === 1, `Imagem animada: ${source}`);
    const options = mode === 'lossless'
      ? { lossless: true, exact: true, effort: 4 }
      : { quality: 85, alphaQuality: 100, smartSubsample: true, effort: 4 };
    const { data, info } = await sharp(input).rotate().webp(options).toBuffer({ resolveWithObject: true });
    const output = await sharp(data).metadata();
    const rotated = [5, 6, 7, 8].includes(metadata.orientation);
    assert.strictEqual(output.width, rotated ? metadata.height : metadata.width);
    assert.strictEqual(output.height, rotated ? metadata.width : metadata.height);
    if (metadata.hasAlpha && !output.hasAlpha) {
      // WebP remove o canal alpha quando todos os pixels já são opacos.
      const alpha = await sharp(input).rotate().extractChannel('alpha').raw().toBuffer();
      assert(alpha.every((value) => value === 255), 'Transparência removida de uma imagem que não é opaca.');
    } else assert.strictEqual(!!output.hasAlpha, !!metadata.hasAlpha);
    assert.strictEqual(output.format, 'webp');
    fs.writeFileSync(target, data, { flag: 'wx' });
    process.send({ result: { path: target, bytes: data.length, sha256: hash(data), inputSha256: hash(input), width: info.width, height: info.height, originalWidth: metadata.width, originalHeight: metadata.height, hasAlpha: !!output.hasAlpha } });
  } catch (error) {
    process.send({ error: error.stack || error.message });
  }
});
process.on('disconnect', () => process.exit(0));
