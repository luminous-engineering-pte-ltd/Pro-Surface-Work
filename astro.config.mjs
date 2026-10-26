import { defineConfig } from 'astro/config';
import seo from './src/data/seo.json';
import redirects from './src/data/redirects.json';
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
  site: seo.site,
  trailingSlash: 'always',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [addGoogleSiteVerification()],
  redirects
});
