export type FaqItem = { question: string; answer: string };

export type SubService = {
  title: string;
  slug: string;
  primaryKeyword: string;
  summary: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  overview: string;
  problems: string[];
  process: string[];
  benefits: string[];
  suitable: string[];
  faq: FaqItem[];
  related: string[];
};

export type ServiceCategory = {
  number: string;
  title: string;
  slug: string;
  primaryKeyword: string;
  image: string;
  summary: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  hubIntro: string;
  contentBlocks: string[];
  faq: FaqItem[];
  subServices: SubService[];
};

const marbleImage = 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80';
const groutImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80';
const parquetImage = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80';
const woodImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80';
const vinylImage = 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80';

const faq = (service: string): FaqItem[] => [
  { question: `How do I know if I need ${service}?`, answer: 'Send clear photos, the approximate area and a short note about the issue. Pro Surface Works can advise whether restoration, repair, polishing, grouting or replacement is the better fit.' },
  { question: 'Can I get an initial quote by WhatsApp?', answer: 'Yes. Photos, surface type, property type, location in Singapore and preferred timing help make the first quote more accurate.' },
  { question: 'Is the service suitable for both homes and commercial spaces?', answer: 'Most services can be planned for residential and commercial properties, subject to site access, surface condition and scheduling requirements.' }
];

const makeSub = (item: Omit<SubService, 'faq'> & { faq?: FaqItem[] }): SubService => ({ ...item, faq: item.faq ?? faq(item.title.toLowerCase()) });

const sharedProblems = ['Dull or tired surface appearance', 'Visible wear from daily use', 'Uneven finish or patchy shine', 'Unclear whether repair, polishing or restoration is needed'];
const sharedProcess = ['Review photos and project details', 'Assess the material and site condition', 'Carry out the suitable preparation and service work', 'Inspect the finish and share maintenance guidance'];
const sharedBenefits = ['Cleaner and more professional appearance', 'Treatment matched to the actual surface', 'Useful for homes and commercial properties', 'Clearer quote scope before work begins'];

export const services: ServiceCategory[] = [
  {
    number: '01',
    title: 'Marble & Stone Care',
    slug: 'marble-stone-care',
    primaryKeyword: 'marble and stone restoration singapore',
    image: marbleImage,
    summary: 'Marble polishing, stone restoration, countertop polishing and refined top care for Singapore homes and commercial spaces.',
    description: 'Marble & Stone Care covers professional polishing and restoration for marble floors, stone surfaces, kitchen tops, vanity tops and basin tops.',
    seoTitle: 'Marble and Stone Restoration Singapore',
    metaDescription: 'Professional marble and stone restoration in Singapore for floors, countertops, vanity tops and basin tops by Pro Surface Works.',
    hubIntro: 'Natural stone responds best to patient assessment and a method matched to the surface. Pro Surface Works restores dull, marked or tired marble and stone surfaces with a controlled process that protects the finish and improves day-to-day presentation.',
    contentBlocks: ['This marble and stone restoration Singapore hub is for customers dealing with dull floors, etched tops, water marks, light scratches and uneven shine.', 'Each project starts with the stone type, current finish and surrounding use. From there, the team recommends polishing, restoration or focused top care.'],
    faq: faq('marble and stone restoration'),
    subServices: [
      makeSub({ title: 'Marble Floor Polishing', slug: 'marble-floor-polishing', primaryKeyword: 'marble floor polishing singapore', summary: 'Restore clarity, shine and a cleaner finish to dull or worn marble floors.', seoTitle: 'Marble Floor Polishing Singapore', metaDescription: 'Marble floor polishing in Singapore for dull, scratched or tired marble floors. Request a professional quote from Pro Surface Works.', intro: 'Marble floor polishing helps bring back a smoother, brighter and more refined finish to marble flooring affected by daily wear.', overview: 'Pro Surface Works assesses the marble condition, traffic level and desired finish before recommending the right polishing sequence for homes, offices and commercial spaces in Singapore.', problems: ['Dull patches from foot traffic', 'Light scratches and scuff marks', 'Uneven shine between rooms', 'Water marks and mild etching'], process: ['Inspect the marble and existing finish', 'Prepare the work area and protect edges', 'Polish with suitable pads or compounds', 'Review the shine and share care guidance'], benefits: ['Cleaner marble appearance', 'Improved light reflection', 'More consistent finish', 'Better presentation for living and reception areas'], suitable: ['Living rooms', 'Bedrooms', 'Hallways', 'Retail and office floors'], related: ['marble-restoration', 'floor-polishing-buffing', 'kitchen-countertop-polishing'] }),
      makeSub({ title: 'Marble Restoration', slug: 'marble-restoration', primaryKeyword: 'marble restoration singapore', summary: 'Restore worn marble surfaces affected by scratches, dullness, stains or uneven finishing.', seoTitle: 'Marble Restoration Singapore', metaDescription: 'Marble restoration in Singapore for dull, worn or damaged marble floors and surfaces. Get professional assessment and quote support.', intro: 'Marble restoration is for marble that needs more than light polishing because wear, etching or surface damage has become obvious.', overview: 'The restoration approach may include deeper preparation, polishing, spot improvement and finishing guidance, depending on the marble and the level of wear.', problems: ['Etched or cloudy marble', 'Visible scratches', 'Patchy finish', 'Aged surfaces after renovation or tenancy use'], process: ['Assess the damage and material', 'Recommend the restoration depth', 'Carry out preparation and polishing', 'Check the finished surface under proper lighting'], benefits: ['Revives older marble', 'Reduces visible wear', 'Improves surface consistency', 'Supports longer-term maintenance'], suitable: ['Marble floors', 'Feature stone areas', 'Apartment units', 'Commercial lobbies and interiors'], related: ['marble-floor-polishing', 'tile-marble-regrouting', 'vanity-basin-top-polishing'] }),
      makeSub({ title: 'Kitchen Countertop Polishing', slug: 'kitchen-countertop-polishing', primaryKeyword: 'kitchen countertop polishing singapore', summary: 'Refresh kitchen counters affected by cooking marks, dullness and regular household use.', seoTitle: 'Kitchen Countertop Polishing Singapore', metaDescription: 'Kitchen countertop polishing in Singapore for dull stone or marble kitchen tops. Restore a cleaner, brighter finish.', intro: 'Kitchen countertop polishing improves the appearance of suitable stone and marble tops that have become dull from daily cooking and cleaning.', overview: 'The service focuses on practical top care for Singapore kitchens, where water, food preparation and cleaning products can affect the surface finish over time.', problems: ['Dull preparation zones', 'Water marks around sinks', 'Light surface scratches', 'Uneven sheen after regular cleaning'], process: ['Review the top material and stains', 'Protect adjoining fittings', 'Polish the suitable surface zones', 'Share maintenance notes for daily kitchen use'], benefits: ['Cleaner kitchen presentation', 'Better shine on suitable tops', 'Focused treatment for high-use areas', 'Useful before handover or sale'], suitable: ['Kitchen islands', 'Countertops', 'Pantry tops', 'Stone preparation surfaces'], related: ['vanity-basin-top-polishing', 'marble-restoration', 'marble-floor-polishing'] }),
      makeSub({ title: 'Vanity & Basin Top Polishing', slug: 'vanity-basin-top-polishing', primaryKeyword: 'vanity and basin top polishing singapore', summary: 'Polishing for suitable vanity and basin tops affected by water marks, soap residue and dullness.', seoTitle: 'Vanity and Basin Top Polishing Singapore', metaDescription: 'Vanity and basin top polishing in Singapore for bathroom stone, marble and suitable top surfaces with dullness or water marks.', intro: 'Vanity and basin top polishing helps bathroom tops look cleaner where water marks and daily use have reduced the finish.', overview: 'Pro Surface Works checks the top material and surrounding fittings before polishing suitable vanity or basin areas with a controlled approach.', problems: ['Water marks near taps', 'Soap residue haze', 'Dull stone tops', 'Light scratches around basin areas'], process: ['Inspect the vanity or basin top', 'Protect taps, fittings and cabinets', 'Polish the suitable surface', 'Check the finish and advise on care'], benefits: ['Improved bathroom presentation', 'Cleaner-looking tops', 'Targeted care around wet areas', 'Useful for homes, condos and serviced apartments'], suitable: ['Bathroom vanity tops', 'Basin tops', 'Powder rooms', 'Ensuite counters'], related: ['kitchen-countertop-polishing', 'marble-restoration', 'marble-floor-polishing'] })
    ]
  },
  {
    number: '02',
    title: 'Grouting Services',
    slug: 'grouting',
    primaryKeyword: 'grouting services singapore',
    image: groutImage,
    summary: 'Tile, marble, gum and epoxy grouting services for cleaner joints and a stronger finished look.',
    description: 'Grouting Services cover regrouting, marble gum grouting and epoxy grouting for tired, stained or failing joints.',
    seoTitle: 'Grouting Services Singapore',
    metaDescription: 'Grouting services in Singapore for tile, marble, gum and epoxy joints. Refresh dirty, cracked or failing grout lines.',
    hubIntro: 'Grout condition affects how clean a floor, bathroom or stone surface feels. This hub covers joint refresh, gum grouting and epoxy grouting for Singapore properties.',
    contentBlocks: ['Grouting services in Singapore are often requested when joints look dark, cracked, uneven or difficult to clean.', 'The right grouting method depends on tile or marble type, joint width, exposure to water and the look the customer wants after restoration.'],
    faq: faq('grouting services'),
    subServices: [
      makeSub({ title: 'Tile & Marble Regrouting', slug: 'tile-marble-regrouting', primaryKeyword: 'tile regrouting singapore', summary: 'Refresh tile and marble joints that look stained, cracked or uneven.', seoTitle: 'Tile Regrouting Singapore', metaDescription: 'Tile regrouting in Singapore for stained, cracked or worn tile and marble joints. Request a professional regrouting quote.', intro: 'Tile and marble regrouting restores tired joints so floors and wet areas look cleaner and better maintained.', overview: 'Pro Surface Works checks joint condition, tile or marble type and water exposure before recommending the right regrouting scope.', problems: ['Dark or stained grout lines', 'Cracked joints', 'Loose or missing grout', 'Uneven finish around tiles or marble'], process: ['Inspect the joints', 'Remove failed grout where needed', 'Apply suitable replacement grout', 'Clean down and review the finish'], benefits: ['Cleaner joint appearance', 'Improved surface presentation', 'Better hygiene in wet areas', 'Useful before rental handover'], suitable: ['Bathrooms', 'Kitchens', 'Tile floors', 'Marble joints'], related: ['marble-gum-grouting', 'epoxy-grouting', 'marble-restoration'] }),
      makeSub({ title: 'Marble Gum Grouting', slug: 'marble-gum-grouting', primaryKeyword: 'marble gum grouting singapore', summary: 'Gum grouting for marble joints where a refined joint finish is needed.', seoTitle: 'Marble Gum Grouting Singapore', metaDescription: 'Marble gum grouting in Singapore for marble floors and stone joints needing a cleaner, more refined finish.', intro: 'Marble gum grouting helps refine visible marble joints so the finished surface feels cleaner and more complete.', overview: 'This service is suited to selected marble floors and stone areas where joint appearance is part of the overall restoration result.', problems: ['Visible gaps between marble pieces', 'Old joint material', 'Uneven joint color', 'Joint lines disrupting the polished look'], process: ['Review joint width and marble tone', 'Prepare the joint lines', 'Apply suitable gum grouting', 'Clean and inspect the finished joints'], benefits: ['Neater marble joint lines', 'More refined surface presentation', 'Supports polishing work', 'Improves visual continuity'], suitable: ['Marble floors', 'Stone feature areas', 'Residential interiors', 'Selected commercial interiors'], related: ['tile-marble-regrouting', 'marble-floor-polishing', 'marble-restoration'] }),
      makeSub({ title: 'Epoxy Grouting', slug: 'epoxy-grouting', primaryKeyword: 'epoxy grouting singapore', summary: 'Durable epoxy grouting for suitable wet areas, kitchens and high-use tile joints.', seoTitle: 'Epoxy Grouting Singapore', metaDescription: 'Epoxy grouting in Singapore for suitable tile joints in wet areas, kitchens and high-use spaces. Request a quote.', intro: 'Epoxy grouting is a durable grouting option for suitable areas where water exposure and cleaning demands are higher.', overview: 'Pro Surface Works assesses the existing surface and joint condition before confirming whether epoxy grout is appropriate for the site.', problems: ['Grout staining in wet areas', 'Joints exposed to frequent cleaning', 'Kitchen or bathroom grout wear', 'High-use tiled surfaces'], process: ['Check tile condition and joint depth', 'Prepare and clean the joints', 'Apply epoxy grout carefully', 'Clean residue and inspect the finish'], benefits: ['Durable grout finish', 'Good option for suitable wet areas', 'Cleaner long-term appearance', 'Professional application and clean-down'], suitable: ['Bathrooms', 'Kitchens', 'Laundry areas', 'Selected commercial tile areas'], related: ['tile-marble-regrouting', 'marble-gum-grouting', 'floor-polishing-buffing'] })
    ]
  },
  {
    number: '03',
    title: 'General Floor Care',
    slug: 'general-floor-care',
    primaryKeyword: 'floor care services singapore',
    image: groutImage,
    summary: 'Floor polishing, buffing, refinishing and restoration for tired residential and commercial floors.',
    description: 'General Floor Care covers polishing, buffing, refinishing and restoration for floors that need renewed presentation.',
    seoTitle: 'Floor Care Services Singapore',
    metaDescription: 'Floor care services in Singapore including floor polishing, buffing, refinishing and restoration by Pro Surface Works.',
    hubIntro: 'General Floor Care is for customers who know their floor looks tired but are unsure whether it needs polishing, buffing or deeper restoration.',
    contentBlocks: ['Floor care services Singapore customers request often begin with dullness, traffic marks, uneven finish or a floor that no longer looks clean after mopping.', 'The service is shaped around the material and current condition, with practical recommendations for homes, offices, shops and managed properties.'],
    faq: faq('floor care services'),
    subServices: [
      makeSub({ title: 'Floor Polishing & Buffing', slug: 'floor-polishing-buffing', primaryKeyword: 'floor polishing singapore', summary: 'Improve floor shine and presentation with professional polishing and buffing.', seoTitle: 'Floor Polishing Singapore', metaDescription: 'Floor polishing in Singapore for dull or tired floors. Professional polishing and buffing for homes and commercial spaces.', intro: 'Floor polishing and buffing helps improve shine, presentation and surface clarity for suitable floor types.', overview: 'The work is matched to the existing surface so the finish looks cleaner without over-treating floors that only need light improvement.', problems: ['Dull floor finish', 'Traffic marks', 'Light scuffs', 'Loss of shine after regular cleaning'], process: ['Identify the floor type', 'Prepare and clean the surface', 'Polish or buff with suitable equipment', 'Inspect the finished result'], benefits: ['Brighter floor appearance', 'Quick improvement for suitable floors', 'Cleaner presentation', 'Useful for homes and business spaces'], suitable: ['Living areas', 'Commercial floors', 'Common areas', 'Retail spaces'], related: ['floor-refinishing-restoration', 'marble-floor-polishing', 'epoxy-grouting'] }),
      makeSub({ title: 'Floor Refinishing & Restoration', slug: 'floor-refinishing-restoration', primaryKeyword: 'floor refinishing singapore', summary: 'Restore tired floors with a deeper refinishing approach where polishing alone is not enough.', seoTitle: 'Floor Refinishing Singapore', metaDescription: 'Floor refinishing in Singapore for worn, tired or uneven floors. Request restoration advice from Pro Surface Works.', intro: 'Floor refinishing and restoration is for surfaces that need deeper work than a light polish or buff.', overview: 'Pro Surface Works reviews the floor material, wear pattern and expected result before recommending the right restoration depth.', problems: ['Deep wear patterns', 'Uneven finish', 'Post-renovation floor tiredness', 'Floors that still look dull after cleaning'], process: ['Assess the surface condition', 'Plan the preparation level', 'Refinish or restore the suitable areas', 'Review the result and maintenance approach'], benefits: ['Improved surface life', 'Better finish consistency', 'Restored floor presentation', 'Practical option before replacement'], suitable: ['Residential floors', 'Commercial areas', 'Older properties', 'Floors after tenancy use'], related: ['floor-polishing-buffing', 'marble-restoration', 'parquet-repair-restoration'] })
    ]
  },
  {
    number: '04',
    title: 'Parquet Flooring',
    slug: 'parquet-flooring',
    primaryKeyword: 'parquet flooring services singapore',
    image: parquetImage,
    summary: 'Parquet installation, polishing, sanding, varnishing, repair, skirting and restoration services.',
    description: 'Parquet Flooring covers installation, polishing, repair, restoration, sanding, varnishing, old varnish removal and skirting work.',
    seoTitle: 'Parquet Flooring Services Singapore',
    metaDescription: 'Parquet flooring services in Singapore including installation, polishing, repair, sanding, varnishing and restoration.',
    hubIntro: 'Parquet floors bring warmth to a space, but they need careful handling when blocks loosen, varnish ages or scratches build up.',
    contentBlocks: ['This parquet flooring services Singapore hub gathers installation, repair, polishing, sanding, varnishing and finishing support in one clear hierarchy.', 'Each parquet project is assessed for timber condition, block stability, old coating condition and the final look the customer wants.'],
    faq: faq('parquet flooring services'),
    subServices: [
      makeSub({ title: 'Parquet Flooring Installation', slug: 'parquet-flooring-installation', primaryKeyword: 'parquet flooring installation singapore', summary: 'Install parquet flooring with attention to layout, surface preparation and finishing needs.', seoTitle: 'Parquet Flooring Installation Singapore', metaDescription: 'Parquet flooring installation in Singapore for homes and selected commercial spaces. Request a quote from Pro Surface Works.', intro: 'Parquet flooring installation creates a warm timber finish when the subfloor, pattern and finishing are planned properly.', overview: 'Pro Surface Works reviews site requirements and expected finish before advising on practical parquet installation support.', problems: sharedProblems, process: sharedProcess, benefits: sharedBenefits, suitable: ['Bedrooms', 'Living rooms', 'Study rooms', 'Selected commercial interiors'], related: ['parquet-floor-polishing', 'skirting-installation-repair', 'parquet-repair-restoration'] }),
      makeSub({ title: 'Parquet Floor Polishing', slug: 'parquet-floor-polishing', primaryKeyword: 'parquet floor polishing singapore', summary: 'Refresh dull parquet floors and improve the finished timber appearance.', seoTitle: 'Parquet Floor Polishing Singapore', metaDescription: 'Parquet floor polishing in Singapore for dull or worn timber floors. Improve shine and presentation with Pro Surface Works.', intro: 'Parquet floor polishing improves the appearance of dull parquet where the surface is suitable for a polish-focused refresh.', overview: 'The team checks varnish condition, scratches and timber stability before recommending polishing or a deeper sanding and varnishing service.', problems: ['Dull parquet finish', 'Light surface scuffs', 'Uneven shine', 'Timber floors that look tired after cleaning'], process: ['Inspect parquet condition', 'Confirm if polishing is suitable', 'Polish the floor with suitable method', 'Review the finish and next maintenance step'], benefits: ['Improved parquet presentation', 'Cleaner-looking timber', 'Lower disruption than deeper restoration where suitable', 'Useful before moving in or handover'], suitable: ['Bedrooms', 'Living areas', 'Condo units', 'Timber floor zones'], related: ['parquet-repair-restoration', 'parquet-floor-sanding-varnishing', 'old-varnish-removal'] }),
      makeSub({ title: 'Parquet Repair & Restoration', slug: 'parquet-repair-restoration', primaryKeyword: 'parquet repair singapore', summary: 'Repair and restore damaged, loose or worn parquet floors.', seoTitle: 'Parquet Repair Singapore', metaDescription: 'Parquet repair in Singapore for loose, scratched or damaged parquet floors. Restore timber flooring with Pro Surface Works.', intro: 'Parquet repair and restoration addresses timber floors with damage, loose pieces, scratches or aged finishing.', overview: 'The service focuses on practical repair before finishing, because unstable parquet needs attention before polishing or varnishing can look right.', problems: ['Loose parquet blocks', 'Scratches and dents', 'Worn varnish', 'Patchy or aged timber appearance'], process: ['Assess loose or damaged areas', 'Plan repair and replacement where needed', 'Prepare the timber surface', 'Restore and finish the floor'], benefits: ['Stabilizes problem areas', 'Improves timber appearance', 'Supports longer floor life', 'Can reduce need for full replacement'], suitable: ['Older parquet floors', 'Condo bedrooms', 'Rental handovers', 'Renovation refresh projects'], related: ['parquet-floor-polishing', 'parquet-floor-sanding-varnishing', 'old-varnish-removal'] }),
      makeSub({ title: 'Parquet Floor Sanding & Varnishing', slug: 'parquet-floor-sanding-varnishing', primaryKeyword: 'parquet floor sanding and varnishing singapore', summary: 'Sand and varnish parquet floors to renew tired timber and apply a fresh finish.', seoTitle: 'Parquet Floor Sanding and Varnishing Singapore', metaDescription: 'Parquet floor sanding and varnishing in Singapore for worn timber floors needing deeper renewal and fresh protective finishing.', intro: 'Parquet floor sanding and varnishing is a deeper renewal service for parquet that needs old finish removal, surface preparation and a fresh coating.', overview: 'The service is suitable when polishing alone cannot correct wear, scratches or aged varnish. Pro Surface Works plans the sanding level and finish based on floor condition.', problems: ['Aged varnish', 'Visible scratches', 'Uneven timber tone', 'Worn high-traffic paths'], process: ['Inspect parquet and varnish condition', 'Sand the surface to the suitable level', 'Apply the selected varnish finish', 'Allow proper drying and final review'], benefits: ['Renews tired parquet', 'Fresh protective finish', 'Choice of suitable sheen', 'Strong improvement for older timber floors'], suitable: ['Parquet bedrooms', 'Living rooms', 'Older timber floors', 'Move-in and renovation projects'], related: ['parquet-floor-polishing', 'parquet-repair-restoration', 'old-varnish-removal'] }),
      makeSub({ title: 'Staircase Sanding & Varnishing', slug: 'staircase-sanding-varnishing', primaryKeyword: 'staircase sanding and varnishing singapore', summary: 'Restore timber staircases with sanding, preparation and varnishing.', seoTitle: 'Staircase Sanding and Varnishing Singapore', metaDescription: 'Staircase sanding and varnishing in Singapore for timber stairs, treads and landings needing renewed finishing.', intro: 'Staircase sanding and varnishing renews timber treads and landings that show wear from frequent foot traffic.', overview: 'Staircases need careful sequencing because edges, corners and access differ from open floors. The work is planned around safety and finish quality.', problems: sharedProblems, process: sharedProcess, benefits: sharedBenefits, suitable: ['Timber staircases', 'Landings', 'Maisonettes', 'Landed homes'], related: ['parquet-floor-sanding-varnishing', 'old-varnish-removal', 'parquet-repair-restoration'] }),
      makeSub({ title: 'Old Varnish Removal', slug: 'old-varnish-removal', primaryKeyword: 'varnish removal singapore', summary: 'Remove aged or unsuitable varnish before refinishing timber or parquet surfaces.', seoTitle: 'Varnish Removal Singapore', metaDescription: 'Varnish removal in Singapore for timber and parquet floors before fresh sanding, staining or varnishing work.', intro: 'Old varnish removal prepares timber or parquet surfaces when aged coating is affecting the final finish.', overview: 'This service is often part of a larger restoration workflow where the old coating must be removed before new finishing can be applied properly.', problems: ['Peeling or aged varnish', 'Patchy coating', 'Wrong sheen from previous work', 'Surface not ready for new finish'], process: ['Assess the existing coating', 'Plan safe removal and preparation', 'Remove old varnish where needed', 'Prepare for refinishing or coating'], benefits: ['Better base for new finish', 'Removes aged coating problems', 'Supports sanding and varnishing', 'Improves final consistency'], suitable: ['Parquet floors', 'Timber stairs', 'Wood surfaces', 'Renovation refresh work'], related: ['parquet-floor-sanding-varnishing', 'parquet-repair-restoration', 'parquet-floor-polishing'] }),
      makeSub({ title: 'Skirting Installation & Repair', slug: 'skirting-installation-repair', primaryKeyword: 'skirting installation singapore', summary: 'Install or repair skirting to complete the floor edge and wall transition.', seoTitle: 'Skirting Installation Singapore', metaDescription: 'Skirting installation in Singapore with repair support for floor edges, wall transitions and parquet finishing projects.', intro: 'Skirting installation and repair completes the transition between flooring and walls for a cleaner finished room.', overview: 'This service supports flooring projects where damaged, missing or mismatched skirting affects the final look.', problems: sharedProblems, process: sharedProcess, benefits: sharedBenefits, suitable: ['Bedrooms', 'Living rooms', 'Hallways', 'Parquet flooring projects'], related: ['parquet-flooring-installation', 'parquet-repair-restoration', 'parquet-floor-sanding-varnishing'] })
    ]
  },
  {
    number: '05',
    title: 'Timber & Wood Repair',
    slug: 'timber-wood-repair',
    primaryKeyword: 'wood restoration singapore',
    image: woodImage,
    summary: 'Standalone timber and wood repair for worn, damaged or tired wood surfaces.',
    description: 'Timber & Wood Repair supports Singapore customers with targeted wood restoration, repair and finishing advice.',
    seoTitle: 'Wood Restoration Singapore',
    metaDescription: 'Wood restoration in Singapore for damaged, worn or tired timber surfaces. Contact Pro Surface Works for wood repair support.',
    hubIntro: 'Timber and wood surfaces can often be improved with focused repair and restoration instead of immediate replacement.',
    contentBlocks: ['Wood restoration Singapore projects vary widely, from visible dents and scratches to tired coating and worn timber surfaces.', 'Pro Surface Works reviews the wood condition, location and desired finish before recommending practical repair or restoration work.'],
    faq: faq('wood restoration'),
    subServices: []
  },
  {
    number: '06',
    title: 'Wood Decking',
    slug: 'wood-decking',
    primaryKeyword: 'wood decking services singapore',
    image: woodImage,
    summary: 'Wood decking service support for installation, repair and restoration planning.',
    description: 'Wood Decking covers deck installation and repair for suitable Singapore outdoor and semi-outdoor areas.',
    seoTitle: 'Wood Decking Services Singapore',
    metaDescription: 'Wood decking services in Singapore including wood deck installation and repair by Pro Surface Works.',
    hubIntro: 'Decking faces sun, rain, moisture and regular foot traffic. This hub covers professional support for wood deck installation and repair.',
    contentBlocks: ['Wood decking services Singapore customers often need help when boards are worn, loose, uneven or ready for a new installation.', 'The work starts with access, exposure, existing deck condition and the result needed for the space.'],
    faq: faq('wood decking services'),
    subServices: [
      makeSub({ title: 'Wood Deck Installation & Repair', slug: 'wood-deck-installation-repair', primaryKeyword: 'wood decking installation singapore', summary: 'Install or repair wood decking for balconies, patios and suitable outdoor spaces.', seoTitle: 'Wood Decking Installation Singapore', metaDescription: 'Wood decking installation in Singapore with repair support for balconies, patios and suitable outdoor or semi-outdoor areas.', intro: 'Wood deck installation and repair helps outdoor or semi-outdoor timber spaces look better and perform more reliably.', overview: 'Pro Surface Works reviews deck condition, site exposure and board stability before recommending installation or repair support.', problems: ['Loose deck boards', 'Worn deck surface', 'Outdoor timber aging', 'Uneven or damaged deck areas'], process: ['Assess the deck or installation area', 'Plan repair or installation scope', 'Carry out board and surface work', 'Review finish and care requirements'], benefits: ['Improved outdoor presentation', 'Repair support before full replacement where suitable', 'Better deck usability', 'Professional planning for exposed areas'], suitable: ['Balconies', 'Patios', 'Outdoor decks', 'Semi-outdoor timber areas'], related: ['timber-wood-repair', 'parquet-repair-restoration', 'old-varnish-removal'] })
    ]
  },
  {
    number: '07',
    title: 'Vinyl Flooring',
    slug: 'vinyl-flooring',
    primaryKeyword: 'vinyl flooring singapore',
    image: vinylImage,
    summary: 'Vinyl flooring service support with a dedicated installation page.',
    description: 'Vinyl Flooring covers practical vinyl floor installation support for Singapore homes and selected commercial spaces.',
    seoTitle: 'Vinyl Flooring Singapore',
    metaDescription: 'Vinyl flooring in Singapore with installation support from Pro Surface Works for homes and selected commercial spaces.',
    hubIntro: 'Vinyl flooring is a practical option for customers who want a clean, resilient floor finish with efficient installation planning.',
    contentBlocks: ['Vinyl flooring Singapore projects need proper site review, floor preparation and installation planning for a tidy result.', 'This hub links directly to the dedicated vinyl flooring installation service.'],
    faq: faq('vinyl flooring'),
    subServices: [
      makeSub({ title: 'Vinyl Flooring Installation', slug: 'vinyl-flooring-installation', primaryKeyword: 'vinyl flooring installation singapore', summary: 'Install vinyl flooring for homes and selected commercial spaces with practical site preparation.', seoTitle: 'Vinyl Flooring Installation Singapore', metaDescription: 'Vinyl flooring installation in Singapore for homes and selected commercial spaces. Request a quote from Pro Surface Works.', intro: 'Vinyl flooring installation provides a practical floor finish for customers seeking a clean, modern and easy-to-maintain surface.', overview: 'The work starts with site condition and floor preparation because vinyl installation depends heavily on the base surface.', problems: ['Old floor replacement', 'Need for easier maintenance', 'Room refresh projects', 'Uneven existing floor concerns'], process: ['Review the room and existing floor', 'Plan preparation requirements', 'Install the vinyl flooring', 'Check edges, joins and finished areas'], benefits: ['Clean modern finish', 'Practical maintenance', 'Efficient room refresh', 'Suitable for many residential areas'], suitable: ['Bedrooms', 'Living rooms', 'Rental units', 'Selected commercial spaces'], related: ['floor-polishing-buffing', 'skirting-installation-repair', 'floor-refinishing-restoration'] })
    ]
  }
];

export const servicePath = (service: ServiceCategory) => `/services/${service.slug}/`;
export const subServicePath = (service: ServiceCategory, subService: SubService) => `${servicePath(service)}${subService.slug}/`;
export const uniqueSubServices = services.flatMap((service) => service.subServices.map((item) => ({ ...item, parentSlug: service.slug })));
export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const getSubServiceBySlugs = (serviceSlug: string, subSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  const subService = service?.subServices.find((item) => item.slug === subSlug);
  return service && subService ? { service, subService } : undefined;
};
export const findSubServiceBySlug = (slug: string) => {
  for (const service of services) {
    const subService = service.subServices.find((item) => item.slug === slug);
    if (subService) return { service, subService };
  }
  return undefined;
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/service-areas/', label: 'Service Areas' },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' }
];

export const corePages = [
  { href: '/', title: 'Floor and Marble Restoration Singapore', description: 'Pro Surface Works provides floor and marble restoration in Singapore, including marble polishing, parquet repair, grouting, wood decking and vinyl flooring services.' },
  { href: '/services/', title: 'Floor and Surface Restoration Services Singapore', description: 'Explore Pro Surface Works floor and surface restoration services in Singapore, including marble, grouting, parquet, timber, decking and vinyl flooring.' },
  { href: '/projects/', title: 'Floor Restoration Before and After Singapore', description: 'View Pro Surface Works project examples and before-and-after restoration work for floors, marble, parquet, timber and grouting in Singapore.' },
  { href: '/service-areas/', title: 'Floor Polishing Services Singapore Islandwide', description: 'Pro Surface Works provides floor polishing and restoration services islandwide across Singapore for homes and commercial spaces.' },
  { href: '/about/', title: 'Pro Surface Works Singapore', description: 'Learn about Pro Surface Works Singapore, a floor, marble, parquet, grouting, timber and surface restoration specialist.' },
  { href: '/blog/', title: 'Flooring, Marble and Surface Care Blog', description: 'Helpful guides on flooring, marble, parquet, grouting, wood-care, maintenance and restoration topics for Singapore properties.' },
  { href: '/faq/', title: 'Floor and Surface Restoration FAQ', description: 'Answers to common customer questions about floor polishing, marble restoration, parquet repair, grouting and quote requests in Singapore.' },
  { href: '/contact/', title: 'Floor Polishing Quote Singapore', description: 'Request a floor polishing quote in Singapore from Pro Surface Works for marble, parquet, grouting, timber, decking and vinyl flooring services.' }
];

export const company = {
  name: 'Pro Surface Works',
  domain: 'prosurfaceworks.com',
  email: 'support@prosurfaceworks.com',
  phone: '+65 8597 9456',
  whatsapp: '6585979456',
  location: 'Singapore'
};
