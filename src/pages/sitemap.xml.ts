import { corePages, services, servicePath, subServicePath } from '@/data/services';
import seo from '@/data/seo.json';
import type { APIContext } from 'astro';

export function GET({ site }: APIContext) {
  const urls = [
    ...corePages.map((page) => page.href),
    ...services.map((service) => servicePath(service)),
    ...services.flatMap((service) => service.subServices.map((subService) => subServicePath(service, subService)))
  ].filter((url) => !seo.noindexPaths.includes(url));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${new URL(url, site).toString()}</loc><lastmod>${seo.lastModified}</lastmod></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
