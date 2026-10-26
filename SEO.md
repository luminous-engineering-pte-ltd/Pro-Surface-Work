# SEO maintenance and deployment

The canonical origin is `https://www.prosurfaceworks.com`, configured in
`src/data/seo.json` and consumed by Astro. Content URLs end in `/`.

`npm run build` regenerates `vercel.json` before building. Commit the generated
configuration because Vercel reads it before running the build command. Legacy
routes are maintained in `src/data/redirects.json`; Astro's HTML redirects remain
as fallbacks for local previews and other static hosts. Vercel serves HTTP 301
redirects using the generated configuration.

The explicit redirects normalize known content paths without a trailing slash,
`index.html` variants, legacy routes, and the non-www hostname. Destinations are
absolute URLs on the canonical origin. Other hosts need equivalent server rules.

## Hosting requirement

The existing production site runs on Vercel. Ensure both production domains are
assigned to this deployment and `www.prosurfaceworks.com` is the primary domain.
An existing dashboard-level domain redirect can take precedence over project
path redirects and add a hop; review that setting after deployment.

Vercel's platform HTTP-to-HTTPS redirect can occur before project rules, so this
repository cannot guarantee one-hop HTTP-to-www redirects or change the
platform's 308 status to 301. If exactly one hop for every HTTP variant is a firm
requirement, configure the upstream edge/domain redirect to return the final
HTTPS www URL directly. Do not disable HTTPS enforcement to achieve a status code.

After deployment, check HTTP/www/non-www, slash variants, `/about/index.html`,
and an old service URL with `curl -I`. Final canonical pages should return 200;
legacy and alternate HTTPS URLs should redirect directly to their final URL.
Check `/robots.txt`, `/sitemap.xml`, and URL Inspection in Search Console before
resubmitting the sitemap. Local Astro preview does not execute `vercel.json`.

## Sitemap and indexing

`lastModified` records the significant metadata and structured-data update on
2026-10-26. It is intentionally fixed, not the build date. Update it only when
making a significant sitewide change; use per-page dates when pages begin
changing independently. Never advance it for an unchanged rebuild.

The blog and projects pages are temporarily `noindex, follow` and excluded from
the sitemap while their guide/case-study content is unfinished. They remain
crawlable so search engines can read `noindex`. When verified content is ready,
remove the relevant path from `noindexPaths` in `src/data/seo.json` to restore
indexing and sitemap inclusion together.

Run `npm run check:seo` after a build to validate metadata, sitemap coverage,
robots rules, structured data, assets, links, and redirect configuration.

Image files, compression, responsive sizes, and loading behavior are unchanged.
