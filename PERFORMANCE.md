# Performance workflow

The existing layout, colors, typefaces, hover effects, and scroll behavior are
preserved. The optimization changes how assets are delivered.

## Assets

- `npm run dev` and `npm run build` prepare responsive WebP images and AVIF hero
  backgrounds from the original files. Original photos and branding are retained.
- The homepage has a smaller portrait-phone hero asset. Its full source height
  and original 64% horizontal background position are preserved, so the visible
  composition stays the same. Update the image generator if this CSS position changes.
- Service/category thumbnails are pre-cropped to their existing centered 16:10
  frames. Their mobile 16:9 frames crop the remaining height as before.
- Browsers without AVIF support use the WebP background fallback.
- Inter and Cormorant Garamond use the same WOFF2 font files as the previous
  Google Fonts responses. They are now served locally and preloaded; licenses
  are included in `public/fonts/`.
- Critical CSS is inlined by Astro during production builds. Hero preloads use
  high fetch priority and media conditions so only the matching hero is fetched.
- Versioned fonts and content-hashed generated images have long-lived cache
  headers on Vercel. Local preview does not apply Vercel headers.

`public/optimized/` and `src/data/image-manifest.json` are generated and ignored
by Git. Both are recreated before Astro starts or builds. Run
`npm run images:prepare` when adding/replacing public images during an already
running dev session. Existing derivatives are reused; stale generated files
are removed. Do not store hand-authored files in `public/optimized/`.

Analytics events are queued immediately, but the GTM container downloads after
the page's `load` event, during browser idle time with a one-second idle timeout.
Analytics stays enabled for all visitors and audits. Very short visits that end
before initialization may not be recorded; verify important conversions in
Tag Assistant after deployment. No Lighthouse detection, analytics removal,
content hiding, or scroll-triggered content reveals are used.

## Verification

```sh
npm run build
npm run check:seo
npm run check:performance
npm run preview -- --port 4330
```

Run Lighthouse against the production preview, not `astro dev`. Dev mode serves
development resources and does not represent the deployed build.

In another terminal:

```sh
mkdir -p artifacts/lighthouse
npx lighthouse@13.5.0 http://127.0.0.1:4330/ --output=json --output=html --output-path=artifacts/lighthouse/mobile --chrome-flags="--headless=new"
npx lighthouse@13.5.0 http://127.0.0.1:4330/ --preset=desktop --output=json --output=html --output-path=artifacts/lighthouse/desktop --chrome-flags="--headless=new"
```

Chrome must be installed; set `CHROME_PATH` if Lighthouse cannot find it. Run
mobile and desktop audits sequentially so they do not compete for CPU. Reports
are kept locally in the ignored `artifacts/lighthouse/` directory.

The provided reports started at 75 mobile / 84 desktop for performance. A fresh
local baseline with Lighthouse 13.5.0 measured 68 / 81. See the saved final HTML
reports for the optimized results. Scores vary with machine load, Chrome
version, network conditions, and third-party analytics. Retest the production
domain after deployment; local results are not field Core Web Vitals.

Final production-preview measurements on 2026-10-26:

| Page/device | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Homepage/mobile | 97 | 100 | 100 | 100 | 2.6 s | 0 |
| Homepage/desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 |
| Marble/stone hub/mobile | 99 | 100 | 100 | 100 | 2.1 s | 0 |

The mobile homepage also measured 98 in the preceding pass; the final saved
report is 97. The final mobile transfer total is about 1 MB, compared with about
10 MB in the supplied mobile report. This includes resources discovered during
the audit and is not a measurement of every page's initial transfer size.

Validation covers all 33 generated content pages. Full Lighthouse audits cover
the homepage on mobile and desktop and the marble/stone service hub on mobile;
these are representative templates, not a Lighthouse audit of every page.
