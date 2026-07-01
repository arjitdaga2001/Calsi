const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'favicon.png');
const dest192 = path.join(__dirname, 'public', 'pwa-192x192.png');
const dest512 = path.join(__dirname, 'public', 'pwa-512x512.png');

async function processIcons() {
  try {
    // Generate 192x192
    await sharp(srcPath)
      .resize(192, 192)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(dest192);
      
    // Generate 512x512
    await sharp(srcPath)
      .resize(512, 512)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(dest512);

    // Optimize original favicon.png to 64x64 to save space
    const optimizedFavicon = await sharp(srcPath)
      .resize(64, 64)
      .png({ quality: 90, compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(srcPath, optimizedFavicon);

    console.log('PWA icons generated and favicon optimized successfully.');
  } catch (err) {
    console.error('Error processing icons:', err);
  }
}

processIcons();
