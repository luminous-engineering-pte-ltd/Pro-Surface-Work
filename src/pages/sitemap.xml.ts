import { corePages, services, servicePath, subServicePath } from '@/data/services';

export function GET() {
  const site = 'https://prosurfaceworks.com';
  const urls = [
    ...corePages.map((page) => page.href),
    ...services.map((service) => servicePath(service)),
    ...services.flatMap((service) => service.subServices.map((subService) => subServicePath(service, subService)))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${new URL(url, site).toString()}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
