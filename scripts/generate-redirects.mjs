import { readFile, readdir, writeFile } from 'node:fs/promises';

const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
const seo = await readJson('../src/data/seo.json');
const legacy = await readJson('../src/data/redirects.json');
const copy = await readJson('../src/data/page-copy.json');
const pageFiles = await readdir(new URL('../src/pages/', import.meta.url));
const paths = new Set([
  ...pageFiles.filter((file) => file.endsWith('.astro')).map((file) => file === 'index.astro' ? '/' : `/${file.slice(0, -6)}/`),
  ...Object.values(copy).map((page) => new URL(page.url).pathname)
]);
const redirect = (source, destination) => ({ source, destination: new URL(destination, seo.site).href, statusCode: 301 });
const redirects = [];

// Specific legacy and URL-format rules precede the host catch-all so that
// HTTPS requests reach their final canonical destination in one redirect.
for (const [source, destination] of Object.entries(legacy)) {
  for (const variant of [source.slice(0, -1), source, `${source}index.html`]) {
    redirects.push(redirect(variant, destination));
  }
}
for (const path of [...paths].sort()) {
  if (path !== '/') redirects.push(redirect(path.slice(0, -1), path));
  redirects.push(redirect(`${path}index.html`, path));
}
redirects.push({
  source: '/:path(.*)',
  has: [{ type: 'host', value: 'prosurfaceworks.com' }],
  destination: `${seo.site}/:path`,
  statusCode: 301
});

// Commit this generated file: Vercel reads project configuration before build.
await writeFile(new URL('../vercel.json', import.meta.url), `${JSON.stringify({
  $schema: 'https://openapi.vercel.sh/vercel.json',
  redirects
}, null, 2)}\n`);
console.log(`Generated ${redirects.length} Vercel redirects for ${paths.size} content routes and ${Object.keys(legacy).length} legacy routes.`);
