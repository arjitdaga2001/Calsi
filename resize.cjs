const sharp = require('sharp');
const fs = require('fs');

const inputPath = 'public/logo.png';
const outputPath = 'public/logo_optimized.png';

sharp(inputPath)
  .resize(128, 128) // The image is displayed at 56x56 or 32x32, so 128 is plenty for retina screens
  .png({ quality: 80, compressionLevel: 9 })
  .toFile(outputPath)
  .then(() => {
    fs.renameSync(outputPath, inputPath);
    console.log('Logo optimized and resized successfully.');
  })
  .catch(err => {
    console.error('Error optimizing logo:', err);
  });
