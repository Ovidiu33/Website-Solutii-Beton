import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, parse } from 'path';

const GALLERY_DIR = './src/assets/gallery';
const WEBP_DIR = './src/assets/gallery-webp';
const QUALITY = 85; // High quality WebP (85-90 recommended)

// Create output directory
if (!existsSync(WEBP_DIR)) {
  mkdirSync(WEBP_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  const startSize = statSync(inputPath).size;
  
  await sharp(inputPath)
    .webp({ quality: QUALITY, effort: 6 }) // effort 6 = better compression
    .toFile(outputPath);
  
  const endSize = statSync(outputPath).size;
  const reduction = ((1 - endSize / startSize) * 100).toFixed(1);
  
  console.log(`✓ ${parse(inputPath).base}`);
  console.log(`  ${(startSize / 1024).toFixed(1)}KB → ${(endSize / 1024).toFixed(1)}KB (-${reduction}%)`);
}

async function processGallery() {
  console.log('🖼️  Optimizare imagini Gallery → WebP...\n');
  
  const files = readdirSync(GALLERY_DIR)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  
  let totalBefore = 0;
  let totalAfter = 0;
  
  for (const file of files) {
    const inputPath = join(GALLERY_DIR, file);
    const outputPath = join(WEBP_DIR, parse(file).name + '.webp');
    
    totalBefore += statSync(inputPath).size;
    await optimizeImage(inputPath, outputPath);
    totalAfter += statSync(outputPath).size;
  }
  
  const totalReduction = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  
  console.log(`\n✅ Procesate ${files.length} imagini`);
  console.log(`📦 Mărime totală: ${(totalBefore / 1024).toFixed(1)}KB → ${(totalAfter / 1024).toFixed(1)}KB`);
  console.log(`🚀 Reducere: -${totalReduction}%`);
  console.log(`\n💡 Next step: Actualizează Gallery.tsx să folosească imaginile WebP`);
}

processGallery().catch(console.error);
