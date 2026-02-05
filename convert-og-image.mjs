import sharp from 'sharp';

// Convert SVG og-image to JPG
await sharp('./public/og-image.svg')
  .resize(1200, 630)
  .jpeg({ quality: 95 })
  .toFile('./public/og-image.jpg');

console.log('✅ og-image.jpg created (1200x630px, 95% quality)');
