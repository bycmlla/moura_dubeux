const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const indexFile = path.join(buildDirectory, 'index.html');
const fallbackFile = path.join(buildDirectory, '404.html');

fs.copyFileSync(indexFile, fallbackFile);
console.log('Created build/404.html for direct SPA routes.');
