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
    title: 'Wood & Timber Solutions & Finishing',
    slug: 'wood-timber-solutions-finishing',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80',
    summary: 'Timber sanding, varnishing, staining, top-coats and finishing for floors, stairs and handrails.',
    description:
      'A complete timber finishing service for wooden floors and details, built around preparation, color control, surface protection and a refined final feel.',
    subServices: [
      sub('Sanding & Varnishing', 'Surface sanding followed by a suitable varnish finish for timber floors.'),
      sub('Light Sanding', 'Light sanding for surfaces that need controlled preparation before finishing.'),
      sub('Wood Floor Finishing', 'Professional finishing to improve timber floor appearance and durability.'),
      sub('Wood Staining', 'Color adjustment and stain application for timber surfaces.'),
      sub('Protective Top-Coat', 'A protective top layer for timber surfaces after preparation or staining.'),
      sub('Treads & Risers', 'Finishing and restoration support for timber stair treads and risers.'),
      sub('Handrails', 'Sanding, staining and finishing for timber handrails.')
    ]
  },
  {
    number: '04',
    title: 'Wood & Parquet Varnishing & Finishing',
    slug: 'wood-parquet-varnishing-finishing',
    icon: 'Brush',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80',
    summary: 'Glossy, matte, PU and melamine finishes for timber surfaces needing a professional final layer.',
    description:
      'Varnishing and finishing services that help timber surfaces look complete, feel smooth and hold up better against daily use.',
    subServices: [
      sub('Glossy Varnish Coating', 'A polished gloss finish for timber surfaces where shine is desired.'),
      sub('Matte Varnish Finish', 'A restrained matte finish for timber surfaces with a softer visual profile.'),
      sub('PU (Polyurethane) Varnish', 'Polyurethane varnish application for practical timber protection.'),
      sub('Melamine Polish & Finish', 'Melamine polishing and finishing for selected wood surfaces.'),
      sub('Protective Top-Coat', 'A protective top layer for timber surfaces after preparation or staining.')
    ]
  },
  {
    number: '05',
    title: 'Wood Staining & Coloring',
    slug: 'wood-staining-coloring',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    summary: 'Wood staining, natural tinting, antique finishes and color matching for timber details.',
    description:
      'Wood staining and color services for projects where tone, consistency and final character matter as much as protection.',
    subServices: [
      sub('Wood Staining', 'Color adjustment and stain application for timber surfaces.'),
      sub('Natural Wood Tinting', 'Subtle tinting that keeps timber grain visible and natural.'),
      sub('Antique / Vintage Finish', 'Aged and character-rich finishes for selected wood surfaces.'),
      sub('Color Matching & Touch-up', 'Practical matching and touch-up work for existing timber tones.')
    ]
  },
  {
    number: '06',
    title: 'Surface Preparation & Sanding',
    slug: 'surface-preparation-sanding',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    summary: 'Sanding, smoothing, leveling and old varnish removal before a new finish is applied.',
    description:
      'Preparation is the foundation of a premium finish. This service addresses unevenness, old coating residue and surface readiness before restoration or finishing.',
    subServices: [
      sub('Floor Sanding & Varnishing', 'Floor sanding followed by a suitable varnish system.'),
      sub('Light Sanding & Buffing', 'Controlled sanding and buffing for lighter surface preparation needs.'),
      sub('Surface Leveling & Smoothing', 'Surface preparation to reduce unevenness and improve finish quality.'),
      sub('Old Varnish Removal & Stripping', 'Removal of old finish layers before new coating or restoration work.')
    ]
  },
  {
    number: '07',
    title: 'Parquet & Wood Repair & Restoration',
    slug: 'parquet-wood-repair-restoration',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    summary: 'Repair and restoration for timber floors, parquet, gaps, scratches and dents.',
    description:
      'Timber repair and restoration services for surfaces that need practical correction before refinishing, polishing or protective coating.',
    subServices: [
      sub('Timber & Wood Repair', 'Targeted repairs for worn, damaged or unstable timber areas.'),
      sub('Parquet Restoration', 'Parquet surface restoration with attention to existing pattern and tone.'),
      sub('Crack & Gap Filling', 'Filling for visible cracks and gaps before finishing.'),
      sub('Scratches & Dent Removal', 'Reduction of surface scratches and dents where the timber condition allows.')
    ]
  },
  {
    number: '08',
    title: 'Tile & Grout Services',
    slug: 'tile-grout-services',
    icon: 'Grid3X3',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    summary: 'Tile repair, restoration, regrouting, chemical wash, leveling and tile coating.',
    description:
      'Tile and grout services for floors, bathrooms and practical surfaces where cleanliness, alignment and joint condition shape the final impression.',
    subServices: [
      sub('Tile Repair', 'Repair support for cracked, loose or damaged tile areas.'),
      sub('Tile Restoration', 'Restoration work to improve the appearance of tired tiled surfaces.'),
      sub('Regrouting', 'Renewal of grout lines for cleaner, more consistent joints.'),
      sub('Marble Regrouting', 'Regrouting support for marble joints that need a cleaner, more stable finish.'),
      sub('Leveling', 'Surface leveling support for selected tile and floor conditions.'),
      sub('Chemical Wash', 'Chemical wash service for tile and grout surfaces requiring deeper cleaning.'),
      sub('Tile Coating', 'Protective coating options for suitable tiled surfaces.')
    ]
  },
  {
    number: '09',
    title: 'General Floor Maintenance & Repair',
    slug: 'general-floor-maintenance-repair',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
    summary: 'Repair, finish assessment and protective coating for floors that need practical maintenance.',
    description:
      'A focused maintenance and repair service for surfaces that need inspection, protection or targeted correction without unnecessary treatment.',
    subServices: [
      sub('Floor Repair', 'Practical repair support for damaged or worn floor areas.'),
      sub('Finish Assessment', 'A practical review of the existing finish before choosing the right treatment.'),
      sub('Protective Coating', 'Protective finishing layers that help preserve cleaned or restored surfaces.')
    ]
  },
  {
    number: '10',
    title: 'Outdoor Decking',
    slug: 'outdoor-decking',
    icon: 'PanelTop',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    summary: 'Outdoor decking care and WPC decking installation for exterior living areas.',
    description:
      'Outdoor decking solutions for Singapore properties, including practical decking service and WPC installation for exterior surfaces.',
    subServices: [
      sub('Outdoor Decking', 'Outdoor decking service for exterior floor areas.'),
      sub('WPC Decking Installation', 'Wood-plastic composite decking installation for suitable outdoor spaces.')
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
