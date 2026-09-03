export type SubService = {
  title: string;
  slug: string;
  summary: string;
};

export type ServiceCategory = {
  number: string;
  title: string;
  slug: string;
  icon: string;
  image: string;
  summary: string;
  description: string;
  subServices: SubService[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/pu\s*\(polyurethane\)/g, 'pu-polyurethane')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const sub = (title: string, summary: string): SubService => ({
  title,
  slug: slugify(title),
  summary
});

export const services: ServiceCategory[] = [
  {
    number: '01',
    title: 'General Floor Polishing & Maintenance',
    slug: 'general-floor-polishing-maintenance',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
    summary: 'Routine floor polishing, buffing, refinishing and protective care for a cleaner, brighter finish.',
    description:
      'Professional polishing and maintenance solutions designed to restore visual clarity, even out tired finishes and protect high-use floors across residential and commercial spaces.',
    subServices: [
      sub('Machine Polishing', 'Mechanical polishing for a more consistent and refined floor appearance.'),
      sub('Buffing & Refresh', 'A light refresh for surfaces that need revived sheen without deeper restoration.'),
      sub('Buffing', 'Controlled buffing to improve surface appearance and remove dullness.'),
      sub('Floor Refinishing', 'Refinishing support for worn floors that need renewed protection and presence.'),
      sub('Finish Assessment', 'A practical review of the existing finish before choosing the right treatment.'),
      sub('Protective Coating', 'Protective finishing layers that help preserve cleaned or restored surfaces.')
    ]
  },
  {
    number: '02',
    title: 'Marble & Stone Care & Polishing',
    slug: 'marble-stone-care-polishing',
    icon: 'Gem',
    image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=80',
    summary: 'Specialized care for marble, stone floors, countertops, bathrooms and repaired stone surfaces.',
    description:
      'Marble and natural stone require careful preparation and finishing. This service focuses on polishing, repair, regrouting and surface clarity for premium stone areas.',
    subServices: [
      sub('Grinding & Polishing', 'Progressive grinding and polishing for worn stone and marble surfaces.'),
      sub('Marble Flooring', 'Marble floor restoration and polishing for homes, offices and commercial spaces.'),
      sub('Kitchen Top Polishing', 'Polishing for marble and stone kitchen tops affected by daily use.'),
      sub('Vanity Top Polishing', 'Refinement for bathroom vanity tops with water marks, dullness or light wear.'),
      sub('Marble Bathroom Polishing', 'Bathroom marble polishing for walls, counters and flooring surfaces.'),
      sub('Stone Repair', 'Targeted stone repair for chips, cracks, gaps and visual imperfections.'),
      sub('Marble Regrouting', 'Regrouting support for marble joints that need a cleaner, more stable finish.')
    ]
  },
  {
    number: '03',
    title: 'Parquet & Wood Finishing, Repair & Restoration',
    slug: 'parquet-wood-finishing-repair-restoration',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80',
    summary: 'Parquet repair, wood restoration, sanding, varnishing, staining and protective finishing.',
    description:
      'A complete parquet and wood service built around careful repair, surface preparation, sanding, varnishing, restoration and protective finishing.',
    subServices: [
      sub('Parquet Repair & Restoration', 'Parquet repair and restoration with attention to existing pattern, tone and surface condition.'),
      sub('Floor Sanding & Varnishing', 'Floor sanding followed by a suitable varnish system.'),
      sub('Staircase Sanding & Varnishing', 'Sanding and varnishing for timber staircases, treads and risers.'),
      sub('Light Sanding', 'Light sanding for surfaces that need controlled preparation before finishing.'),
      sub('Wood Staining', 'Color adjustment and stain application for timber surfaces.'),
      sub('Glossy Varnish Coating', 'A polished gloss finish for timber surfaces where shine is desired.'),
      sub('Matte Varnish Finish', 'A restrained matte finish for timber surfaces with a softer visual profile.'),
      sub('Protective Top-Coat', 'A protective top layer for timber surfaces after preparation or staining.'),
      sub('Timber & Wood Repair', 'Targeted repairs for worn, damaged or unstable timber areas.'),
      sub('Old Varnish Removal & Stripping', 'Removal of old finish layers before new coating or restoration work.'),
      sub('Crack & Gap Filling', 'Filling for visible cracks and gaps before finishing.'),
      sub('Scratches & Dent Removal', 'Reduction of surface scratches and dents where the timber condition allows.')
    ]
  }
];

export const uniqueSubServices = Array.from(
  new Map(services.flatMap((service) => service.subServices.map((item) => [item.slug, item]))).values()
);

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);

export const getSubServiceBySlugs = (serviceSlug: string, subSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  const subService = service?.subServices.find((item) => item.slug === subSlug);
  return service && subService ? { service, subService } : undefined;
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const company = {
  name: 'Pro Surface Works',
  domain: 'prosurfaceworks.com',
  email: 'support@prosurfaceworks.com',
  phone: '+65 8183 6772',
  whatsapp: '6581836772',
  location: 'Singapore'
};
