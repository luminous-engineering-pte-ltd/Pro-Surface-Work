import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prosurfaceworks.com',
  output: 'static',
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
