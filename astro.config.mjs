import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const googleSiteVerificationMeta = '<meta name="google-site-verification" content="5pdvZTQLGPZbjaQ1FirtmW729GufOktephexgE2kNYU" />';
const googleSiteVerificationPattern = /<meta\s+name=["']google-site-verification["'][^>]*>\s*/gi;

const ensureGoogleSiteVerification = (html) => {
  const withoutVerification = html.replace(googleSiteVerificationPattern, '');

  if (/<head\b[^>]*>/i.test(withoutVerification)) {
    return withoutVerification.replace(/<head\b[^>]*>/i, (headTag) => `${headTag}\n    ${googleSiteVerificationMeta}`);
  }

  if (/<html\b[^>]*>/i.test(withoutVerification)) {
    return withoutVerification.replace(/<html\b[^>]*>/i, (htmlTag) => `${htmlTag}<head>${googleSiteVerificationMeta}</head>`);
  }

  const doctypeMatch = withoutVerification.match(/^<!doctype html>/i);
  const doctype = doctypeMatch?.[0] ?? '';
  const bodyIndex = withoutVerification.search(/<body\b/i);

  if (bodyIndex === -1) {
    return `${doctype}<html><head>${googleSiteVerificationMeta}</head>${withoutVerification.slice(doctype.length)}</html>`;
  }

  const headContent = withoutVerification.slice(doctype.length, bodyIndex);
  const bodyContent = withoutVerification.slice(bodyIndex);
  return `${doctype}<html><head>${googleSiteVerificationMeta}${headContent}</head>${bodyContent}</html>`;
};

const addGoogleSiteVerification = () => ({
  name: 'add-google-site-verification',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const distDir = fileURLToPath(dir);
      const updateHtmlFiles = async (directory) => {
        const entries = await readdir(directory, { withFileTypes: true });

        await Promise.all(entries.map(async (entry) => {
          const filePath = join(directory, entry.name);

          if (entry.isDirectory()) {
            await updateHtmlFiles(filePath);
            return;
          }

          if (!entry.isFile() || !entry.name.endsWith('.html')) return;

          const html = await readFile(filePath, 'utf8');
          const updatedHtml = ensureGoogleSiteVerification(html);

          if (updatedHtml !== html) {
            await writeFile(filePath, updatedHtml);
          }
        }));
      };

      await updateHtmlFiles(distDir);
    }
  }
});

export default defineConfig({
  site: 'https://prosurfaceworks.com',
  output: 'static',
  integrations: [addGoogleSiteVerification()],
  redirects: {
    '/services/floor-marble-stone-restoration-polishing/': '/services/marble-stone-care/',
    '/services/floor-marble-stone-restoration-polishing/floor-grinding-polishing/': '/services/general-floor-care/floor-polishing-buffing/',
    '/services/floor-marble-stone-restoration-polishing/machine-grinding-polishing/': '/services/general-floor-care/floor-polishing-buffing/',
    '/services/floor-marble-stone-restoration-polishing/buffing-polishing/': '/services/general-floor-care/floor-polishing-buffing/',
    '/services/floor-marble-stone-restoration-polishing/floor-refinishing-restoration/': '/services/general-floor-care/floor-refinishing-restoration/',
    '/services/floor-marble-stone-restoration-polishing/marble-floor-polishing/': '/services/marble-stone-care/marble-floor-polishing/',
    '/services/floor-marble-stone-restoration-polishing/marble-bathroom-polishing/': '/services/marble-stone-care/vanity-basin-top-polishing/',
    '/services/floor-marble-stone-restoration-polishing/kitchen-top-polishing/': '/services/marble-stone-care/kitchen-countertop-polishing/',
    '/services/floor-marble-stone-restoration-polishing/vanity-top-polishing/': '/services/marble-stone-care/vanity-basin-top-polishing/',
    '/services/floor-marble-stone-restoration-polishing/basin-top-polishing/': '/services/marble-stone-care/vanity-basin-top-polishing/',
    '/services/floor-marble-stone-restoration-polishing/marble-regrouting/': '/services/grouting/tile-marble-regrouting/',
    '/services/floor-marble-stone-restoration-polishing/tile-regrouting/': '/services/grouting/tile-marble-regrouting/',
    '/services/floor-marble-stone-restoration-polishing/homogeneous-tile-gum-grouting/': '/services/grouting/marble-gum-grouting/',
    '/services/floor-marble-stone-restoration-polishing/porcelain-tile-grouting/': '/services/grouting/epoxy-grouting/',
    '/services/parquet-wood-finishing-repair-restoration/': '/services/parquet-flooring/',
    '/services/parquet-wood-finishing-repair-restoration/parquet-repair-restoration/': '/services/parquet-flooring/parquet-repair-restoration/',
    '/services/parquet-wood-finishing-repair-restoration/floor-sanding-varnishing/': '/services/parquet-flooring/parquet-floor-sanding-varnishing/',
    '/services/parquet-wood-finishing-repair-restoration/staircase-sanding-varnishing/': '/services/parquet-flooring/staircase-sanding-varnishing/',
    '/services/parquet-wood-finishing-repair-restoration/timber-wood-repair/': '/services/timber-wood-repair/',
    '/services/parquet-wood-finishing-repair-restoration/old-varnish-removal-stripping/': '/services/parquet-flooring/old-varnish-removal/',
    '/services/parquet-floor/': '/services/parquet-flooring/parquet-floor-sanding-varnishing/'
  }
});
