import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(await readFile(join(root, 'src/data/image-manifest.json'), 'utf8'));
for (const [source, image] of Object.entries(manifest)) {
  await access(join(root, 'public', source));
  const variants = [...image.candidates, ...(image.card?.candidates ?? []), image.hero, image.mobileHero].filter(Boolean);
  for (const variant of variants) await access(join(root, 'dist', variant.src));
}
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
await walk(join(root, 'dist'));
let pages = 0;
for (const path of files) {
  const html = await readFile(path, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue;
  pages++;
  assert.ok(html.slice(0, 1024).includes('<meta charset="UTF-8">'), `${path}: charset must be within the first 1024 bytes`);
  assert.ok(!html.includes('fonts.googleapis.com'), `${path}: fonts must not require a remote stylesheet`);
  assert.ok(!/<link\b[^>]*rel="stylesheet"/.test(html), `${path}: critical CSS should be inlined`);
  assert.match(html, /<link[^>]*as="image"[^>]*fetchpriority="high"/, `${path}: hero must be preloaded at high priority`);
  assert.ok(html.includes('GTM-TVGXN4NW') && html.includes('window.dataLayer'), `${path}: analytics must remain enabled`);
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(tag, /\bwidth="\d+"/, `${path}: image width missing`);
    assert.match(tag, /\bheight="\d+"/, `${path}: image height missing`);
    assert.match(tag, /\bsrcset="/, `${path}: responsive image candidates missing`);
    assert.ok(!tag.includes('src="/images/') && !tag.includes('src="/update-Pro.png"'), `${path}: original image delivered instead of optimized variant`);
  }
}
console.log(`Performance checks passed: ${pages} pages, ${Object.keys(manifest).length} source images, all optimized variants present.`);
