import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const seo = JSON.parse(await read('src/data/seo.json'));
const legacy = JSON.parse(await read('src/data/redirects.json'));
const config = JSON.parse(await read('vercel.json'));
const files = [];
async function walk(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const file = join(path, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) files.push(file);
  }
}
await walk(new URL('../dist/', import.meta.url).pathname);
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const contentRoutes = new Set();
const titles = new Set();
const descriptions = new Set();
const localLinks = [];
let redirectPages = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const route = `/${file.split('/dist/')[1].replace(/index\.html$/, '')}`;
  const tags = [...html.matchAll(/<(?:meta|link|img|a|script)\b[^>]*>/g)].map(([tag]) => ({ tag, ...attributes(tag) }));
  const canonical = tags.filter((tag) => tag.rel === 'canonical');
  assert.equal(canonical.length, 1, `${route}: must have one canonical`);
  if (tags.some((tag) => tag['http-equiv'] === 'refresh')) {
    assert.equal(canonical[0].href, new URL(legacy[route], seo.site).href, `${route}: fallback destination`);
    redirectPages++;
    continue;
  }
  contentRoutes.add(route);
  const expected = new URL(route, seo.site).href;
  assert.equal(canonical[0].href, expected, `${route}: canonical`);
  const meta = (key) => tags.find((tag) => tag.name === key || tag.property === key)?.content;
  assert.equal(meta('og:url'), expected, `${route}: og:url`);
  assert.equal(meta('twitter:card'), 'summary_large_image', `${route}: Twitter card`);
  assert.ok(meta('og:image:alt'), `${route}: social image alt`);
  for (const name of ['og:image', 'twitter:image']) {
    const image = new URL(meta(name));
    assert.equal(image.protocol, 'https:', `${route}: ${name} HTTPS`);
    if (image.origin === seo.site) await access(new URL(`../dist${image.pathname}`, import.meta.url));
  }
  assert.equal(Boolean(meta('robots')?.includes('noindex')), seo.noindexPaths.includes(route), `${route}: indexing policy`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: one H1`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  assert.ok(title, `${route}: title`);
  assert.ok(!titles.has(title), `${route}: duplicate title`);
  titles.add(title);
  const description = meta('description');
  assert.ok(description, `${route}: description`);
  assert.ok(!descriptions.has(description), `${route}: duplicate description`);
  descriptions.add(description);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(([, json]) => JSON.parse(json));
  const business = schemas.find((item) => item['@type'] === 'LocalBusiness');
  assert.equal(business?.['@id'], `${seo.site}/#business`, `${route}: business ID`);
  assert.equal(business?.url, `${seo.site}/`, `${route}: business URL`);
  assert.ok(business?.address.streetAddress && business?.address.postalCode, `${route}: full business address`);
  for (const service of schemas.filter((item) => item['@type'] === 'Service')) {
    assert.equal(service.provider['@id'], business['@id'], `${route}: service provider reference`);
    assert.equal(service.url, expected, `${route}: service URL`);
  }
  for (const tag of tags) {
    const value = tag.tag.startsWith('<a ') ? tag.href : tag.src;
    if (value?.startsWith('/') && !value.startsWith('//')) localLinks.push([route, value]);
  }
}

const xml = await read('dist/sitemap.xml');
const entries = [...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod><\/url>/g)];
const expectedRoutes = [...contentRoutes].filter((route) => !seo.noindexPaths.includes(route));
assert.equal(entries.length, expectedRoutes.length, 'sitemap must cover all indexable pages');
const locations = new Set(entries.map(([, loc]) => loc));
assert.equal(locations.size, entries.length, 'sitemap must not contain duplicate entries');
for (const route of expectedRoutes) assert.ok(locations.has(new URL(route, seo.site).href), `${route}: missing from sitemap`);
for (const [, loc, date] of entries) {
  assert.equal(new URL(loc).origin, seo.site, 'sitemap origin');
  assert.equal(date, seo.lastModified, 'stable lastmod');
  assert.match(date, /^\d{4}-\d{2}-\d{2}$/);
}
const robots = await read('dist/robots.txt');
assert.ok(robots.includes(`Sitemap: ${seo.site}/sitemap.xml`), 'robots sitemap URL');
assert.ok(!/^Disallow:\s*\/\s*$/m.test(robots), 'robots must allow crawling');

for (const [route, link] of localLinks) {
  const path = new URL(link, seo.site).pathname;
  if (contentRoutes.has(path)) continue;
  await access(new URL(`../dist${decodeURIComponent(path)}`, import.meta.url)).catch(() => assert.fail(`${route}: missing local destination ${link}`));
}
for (const [source, destination] of Object.entries(legacy)) {
  assert.ok(contentRoutes.has(destination), `${source}: redirect target exists`);
  for (const variant of [source.slice(0, -1), source, `${source}index.html`]) {
    const rule = config.redirects.find((rule) => rule.source === variant);
    assert.equal(rule?.destination, new URL(destination, seo.site).href, `${variant}: direct legacy redirect`);
    assert.equal(rule?.statusCode, 301);
  }
}
for (const route of contentRoutes) {
  for (const variant of [route === '/' ? '/index.html' : route.slice(0, -1), `${route}index.html`]) {
    assert.equal(config.redirects.find((rule) => rule.source === variant)?.destination, new URL(route, seo.site).href, `${variant}: URL normalization`);
  }
}
assert.equal(redirectPages, Object.keys(legacy).length);
console.log(`SEO checks passed: ${contentRoutes.size} pages, ${entries.length} sitemap entries, ${redirectPages} redirect fallbacks, ${config.redirects.length} hosting redirects.`);
