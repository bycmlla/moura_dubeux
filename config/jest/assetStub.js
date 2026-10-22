// Jest stub for the development images (src/assets/Empreendimentos/**).
// Loading the real files made Jest read several GB of PNG/MP4 data just to import App.js,
// which ran out of memory. The tests only need a string here, not the actual file.
module.exports = 'asset-stub';
