import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { access, mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicDir = join(root, 'public');
const images = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) images.push(path);
  }
}
await collect(join(publicDir, 'images'));
images.push(join(publicDir, 'update-Pro.png'));
const manifest = {};
const generated = new Set();
for (const path of images.sort()) {
  const input = await readFile(path);
  const metadata = await sharp(input).metadata();
  const rotated = [5, 6, 7, 8].includes(metadata.orientation);
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  const logo = basename(path) === 'update-Pro.png';
  const maxWidth = Math.min(width, logo ? 480 : 1920);
  const widths = [...new Set((logo ? [160, 240, 320, maxWidth] : [480, 960, 1600, maxWidth]).filter((size) => size <= maxWidth))].sort((a, b) => a - b);
  const source = `/${relative(publicDir, path)}`;
  const hash = createHash('sha256').update(input).update('webp-86-v2').digest('hex').slice(0, 12);
  const stem = basename(path, extname(path));
  const candidates = [];
  for (const size of widths) {
    const src = `/${join('optimized', relative(publicDir, dirname(path)), `${stem}-${size}-${hash}.webp`)}`;
    const output = join(publicDir, src);
    generated.add(output);
    await mkdir(dirname(output), { recursive: true });
    try { await access(output); }
    catch {
      await sharp(input).rotate().resize({ width: size, withoutEnlargement: true })
        .webp({ quality: 86, effort: 5, ...(stem === 'update-Pro' ? { lossless: true } : {}) }).toFile(output);
    }
    candidates.push({ src, width: size });
  }
  manifest[source] = {
    src: candidates.at(-1).src,
    width: maxWidth,
    height: Math.round(height * maxWidth / width),
    candidates
  };
  if (source === '/images/home-banner.jpeg' || source.startsWith('/images/services/')) {
    const src = `/${join('optimized', relative(publicDir, dirname(path)), `${stem}-hero-avif60-${maxWidth}-${hash}.avif`)}`;
    const output = join(publicDir, src);
    generated.add(output);
    try { await access(output); }
    catch {
      await sharp(input).rotate().resize({ width: maxWidth, withoutEnlargement: true })
        .avif({ quality: 60, effort: 4 }).toFile(output);
    }
    manifest[source].hero = { src, type: 'image/avif' };
  }
  if (source === '/images/home-banner.jpeg') {
    // Portrait phones display only the middle of this landscape photo.
    // Retain the full height and the mobile CSS's 64% horizontal position
    // so removing the hidden sides does not change the visible composition.
    const size = Math.min(width, height);
    const src = `/optimized/images/${stem}-mobile-pos64-avif60-${size}-${hash}.avif`;
    const output = join(publicDir, src);
    generated.add(output);
    try { await access(output); }
    catch {
      await sharp(input).rotate().extract({ left: Math.round((width - size) * 0.64), top: 0, width: size, height: size })
        .avif({ quality: 60, effort: 4 }).toFile(output);
    }
    manifest[source].mobileHero = { src, type: 'image/avif' };
  }
  // Category/service cards use a centered 16:10 cover crop. Pre-cropping
  // preserves that composition while avoiding downloading invisible pixels.
  if (source.startsWith('/images/services/')) {
    const cardCandidates = [];
    const cardWidth = Math.min(width, 960);
    for (const size of [...new Set([480, cardWidth].filter((size) => size <= cardWidth))]) {
      const src = `/optimized/images/services/${stem}-card-${size}-${hash}.webp`;
      const output = join(publicDir, src);
      generated.add(output);
      try { await access(output); }
      catch {
        await sharp(input).rotate().resize({ width: size, height: Math.round(size / 1.6), fit: 'cover', position: 'centre' })
          .webp({ quality: 86, effort: 5 }).toFile(output);
      }
      cardCandidates.push({ src, width: size });
    }
    manifest[source].card = {
      src: cardCandidates.at(-1).src,
      width: cardWidth,
      height: Math.round(cardWidth / 1.6),
      candidates: cardCandidates
    };
  }
}
await writeFile(join(root, 'src/data/image-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
async function removeStale(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await removeStale(path);
    else if (!generated.has(path)) await unlink(path);
  }
}
await removeStale(join(publicDir, 'optimized'));
console.log(`Prepared responsive WebP images for ${images.length} source images (originals preserved).`);
