import sharp from 'sharp';
import { mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const SRC = './src/assets/gallery';
const OUT = './src/assets/img';

// slug, sursă, crop opțional (fracții din imagine: left, top, width, height), lățimi generate
const IMAGES = [
  { slug: 'hero-wide', src: 'carotaj,prima poza vreau.jpeg', crop: [0, 0.14, 1, 0.75], widths: [960, 1600], quality: [36, 50] },
  { slug: 'hero-mobile', src: 'carotaj,prima poza vreau.jpeg', crop: [0.08, 0.17, 0.85, 0.6375], widths: [480, 760, 1080, 1360], quality: [50, 70], sharpen: true },
  { slug: 'carotaj-stativ', src: 'carotaj,prima poza vreau.jpeg' },
  { slug: 'carotaj-santier', src: 'carotaj pe santier.jpeg' },
  { slug: 'gauri-traversare', src: 'Gauri traversare tevi.jpeg' },
  { slug: 'gaura-centrala', src: 'Gaura centrala.jpeg', crop: [0.3, 0.3, 0.45, 0.45], widths: [480, 720] },
  { slug: 'decupaj-perete', src: 'imagine_decupaj_beton.jpg' },
  { slug: 'taiere-moloz', src: 'taiere_beton1.jpeg' },
  { slug: 'taiere-deschidere', src: 'taiere_Beton2.jpeg' },
  { slug: 'taiere-perete-90', src: 'taiere_beton3.jpeg' },
  { slug: 'carotaj-500-stativ', src: 'carotaj-500mm-1.jpeg' },
  { slug: 'carotaj-500-carota', src: 'carotaj-500mm-2.jpeg' },
];
const DEFAULT_WIDTHS = [480, 720, 1200];

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

async function build({ slug, src, crop, widths = DEFAULT_WIDTHS, quality: [qAvif, qWebp] = [44, 64], sharpen = false }) {
  const input = join(SRC, src);
  const meta = await sharp(input).rotate().metadata();
  let base = sharp(input).rotate();
  let w = meta.width, h = meta.height;
  if (crop) {
    const [l, t, cw, ch] = crop;
    const region = { left: Math.round(l * w), top: Math.round(t * h), width: Math.round(cw * w), height: Math.round(ch * h) };
    base = base.extract(region);
    w = region.width; h = region.height;
  }
  const graded = await base
    .modulate({ saturation: 0.92 })
    .linear(1.06, -6)
    .toBuffer();
  for (const width of widths) {
    const target = Math.min(width, w);
    let resized = sharp(graded).resize({ width: target, withoutEnlargement: true });
    if (sharpen) resized = resized.sharpen({ sigma: 0.6 }); // poza din hero pe telefon: mai clară după micșorare
    await resized.clone().avif({ quality: qAvif, effort: 6 }).toFile(join(OUT, `${slug}-${width}.avif`));
    await resized.clone().webp({ quality: qWebp, effort: 6, smartSubsample: true }).toFile(join(OUT, `${slug}-${width}.webp`));
  }
  console.log(`${slug}: ${w}x${h} -> ${widths.join(', ')}`);
}

for (const img of IMAGES) await build(img);

const total = readdirSync(OUT).reduce((s, f) => s + statSync(join(OUT, f)).size, 0);
console.log(`total ${(total / 1024).toFixed(0)} KB in ${OUT}`);
