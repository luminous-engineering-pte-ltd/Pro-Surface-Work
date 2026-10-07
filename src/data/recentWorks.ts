import { services } from './services';

export type RecentWorkProject = {
  image: string;
  alt: string;
  objectPosition?: string;
  serviceTitle: string;
  label: string;
  title: string;
  text: string;
  featured?: boolean;
};

export const defaultRecentWorks: RecentWorkProject[] = [
  {
    image: services[0].image,
    alt: 'Refined Floor Care Finish by Pro Surface Works',
    serviceTitle: services[0].title,
    label: 'Floor Restoration',
    title: 'Refined Floor Care Finish',
    text: 'A cleaner, more polished floor presentation planned around surface condition, daily use and a consistent final finish.',
    featured: true
  },
  {
    image: services[4].image,
    alt: 'Timber Surface Renewal by Pro Surface Works',
    serviceTitle: services[4].title,
    label: 'Timber Care',
    title: 'Timber Surface Renewal',
    text: 'Focused wood repair and restoration support for worn timber surfaces that need a neater, better-maintained look.'
  },
  {
    image: services[6].image,
    alt: 'Modern Vinyl Installation by Pro Surface Works',
    serviceTitle: services[6].title,
    label: 'Vinyl Flooring',
    title: 'Modern Vinyl Installation',
    text: 'Practical flooring installation with attention to preparation, edges and a clean finished result for everyday spaces.'
  },
  {
    image: services[5].image,
    alt: 'Outdoor Deck Refresh by Pro Surface Works',
    serviceTitle: services[5].title,
    label: 'Wood Decking',
    title: 'Outdoor Deck Refresh',
    text: 'Decking work planned around board condition, outdoor exposure and a cleaner, more usable finished surface.'
  }
];

const generalFloorCareImages = {
  surfaceCleaning: '/images/recent-works/general-floor-care/surface-cleaning-machine-work.jpg',
  refinishingMachine: '/images/recent-works/general-floor-care/floor-refinishing-machine-work.jpg',
  commercialBuffing: '/images/recent-works/general-floor-care/machine-buffing-commercial-floor.jpg',
  livingRoomFinish: '/images/recent-works/general-floor-care/restored-living-room-floor.jpg',
  condoFinish: '/images/recent-works/general-floor-care/bright-finished-condo-floor.jpg',
  balconyRoomFinish: '/images/recent-works/general-floor-care/gloss-finished-balcony-room-floor.jpg',
  hallwayFinish: '/images/recent-works/general-floor-care/polished-hallway-floor.jpg',
  residentialFinish: '/images/recent-works/general-floor-care/polished-residential-floor-1.jpg'
};

const marbleStoneCareImages = {
  vanityBasinRenewal: '/images/recent-works/marble-stone-care/vanity-basin-top-renewal.jpg',
  countertopPreparation: '/images/recent-works/marble-stone-care/stone-countertop-preparation.jpg',
  vanityStainDetail: '/images/recent-works/marble-stone-care/vanity-top-stain-detail.jpg',
  machinePolishing: '/images/recent-works/marble-stone-care/marble-machine-polishing.jpg',
  highGlossFloor: '/images/recent-works/marble-stone-care/high-gloss-marble-floor.jpg',
  hallwayPolishedFinish: '/images/recent-works/marble-stone-care/marble-hallway-polished-finish.jpg',
  livingRoomPolish: '/images/recent-works/marble-stone-care/marble-living-room-polish.jpg',
  stoneFloorFinish: '/images/recent-works/marble-stone-care/stone-floor-refined-finish.jpg',
  dullFloorRestoration: '/images/recent-works/marble-stone-care/dull-marble-floor-restoration.jpg',
  whiteKitchenCountertop: '/images/recent-works/marble-stone-care/white-kitchen-countertop-polish.jpg',
  completedKitchenTop: '/images/recent-works/marble-stone-care/completed-kitchen-top-polish.jpg',
  restoredKitchenCountertop: '/images/recent-works/marble-stone-care/kitchen-countertop-restored-finish.jpg',
  compactVanityTop: '/images/recent-works/marble-stone-care/compact-vanity-top-polish.jpg',
  kitchenSurfaceRefresh: '/images/recent-works/marble-stone-care/kitchen-stone-surface-refresh.jpg',
  olderKitchenCountertop: '/images/recent-works/marble-stone-care/older-kitchen-countertop-restoration.jpg'
};

const groutingImages = {
  bathroomTileFinish: '/images/recent-works/grouting/bathroom-tile-regrouting-finish.jpg',
  jointCleaning: '/images/recent-works/grouting/tile-joint-cleaning-in-progress.jpg',
  completedTileFloor: '/images/recent-works/grouting/completed-tile-regrouting-floor.jpg',
  oldGroutRemoval: '/images/recent-works/grouting/old-grout-removal-preparation.jpg',
  machineCleaning: '/images/recent-works/grouting/floor-joint-machine-cleaning.jpg',
  glossTileFinish: '/images/recent-works/grouting/gloss-tile-grout-finish.jpg',
  porcelainFinish: '/images/recent-works/grouting/porcelain-tile-grouting-finish.jpg',
  epoxyFinalFinish: '/images/recent-works/grouting/epoxy-grout-final-finish.jpg',
  waterproofEpoxyFinish: '/images/recent-works/grouting/waterproof-epoxy-grout-finish.jpg',
  marbleJointFinish: '/images/recent-works/grouting/marble-joint-regrouting-finish.jpg',
  marbleGumRoomFinish: '/images/recent-works/grouting/marble-gum-grout-room-finish.jpg',
  marbleGumMachineWork: '/images/recent-works/grouting/marble-gum-grout-machine-work.jpg',
  tileFloorComplete: '/images/recent-works/grouting/tile-floor-regrouting-complete.jpg',
  homogeneousTileFinish: '/images/recent-works/grouting/homogeneous-tile-regrouting-finish.jpg',
  kitchenTileApplication: '/images/recent-works/grouting/kitchen-tile-regrouting-application.jpg',
  tileTouchUp: '/images/recent-works/grouting/tile-grout-touch-up-work.jpg',
  showerFloorFinish: '/images/recent-works/grouting/shower-floor-regrouting-finish.jpg',
  epoxyRoomFinish: '/images/recent-works/grouting/epoxy-grouting-room-finish.jpg'
};

const parquetFlooringImages = {
  staircaseClose: '/images/recent-works/parquet-flooring/varnished-timber-staircase-close.jpg',
  modernStaircase: '/images/recent-works/parquet-flooring/modern-timber-staircase-installation.jpg',
  staircaseTreadInstall: '/images/recent-works/parquet-flooring/staircase-tread-installation.jpg',
  staircaseGloss: '/images/recent-works/parquet-flooring/gloss-staircase-varnish-finish.jpg',
  finishedWithStaircase: '/images/recent-works/parquet-flooring/finished-wood-floor-with-staircase.jpg',
  damagedBoardRemoval: '/images/recent-works/parquet-flooring/damaged-parquet-board-removal.jpg',
  repairHandwork: '/images/recent-works/parquet-flooring/parquet-repair-handwork.jpg',
  boardInstallProgress: '/images/recent-works/parquet-flooring/parquet-board-installation-progress.jpg',
  installationLayout: '/images/recent-works/parquet-flooring/parquet-flooring-installation-layout.jpg',
  sandingMachine: '/images/recent-works/parquet-flooring/parquet-floor-sanding-machine.jpg',
  damagedRepairRemoval: '/images/recent-works/parquet-flooring/damaged-parquet-repair-removal.jpg',
  edgeSandingRepair: '/images/recent-works/parquet-flooring/parquet-edge-sanding-repair.jpg',
  looseReplacementPrep: '/images/recent-works/parquet-flooring/loose-parquet-replacement-prep.jpg',
  oldVarnishSanding: '/images/recent-works/parquet-flooring/old-varnish-sanding-progress.jpg',
  repairRestorationCollage: '/images/recent-works/parquet-flooring/parquet-repair-restoration-collage.jpg',
  sandingVarnishingProgress: '/images/recent-works/parquet-flooring/wood-floor-sanding-varnishing-progress.jpg',
  glossyParquetFinish: '/images/recent-works/parquet-flooring/glossy-parquet-floor-finish.jpg',
  newVarnishApplication: '/images/recent-works/parquet-flooring/new-varnish-application.jpg',
  glossyHallwayFinish: '/images/recent-works/parquet-flooring/glossy-wood-hallway-finish.jpg',
  varnishApplication: '/images/recent-works/parquet-flooring/timber-floor-varnish-application.jpg',
  balconyWoodPolish: '/images/recent-works/parquet-flooring/balcony-room-wood-floor-polish.jpg',
  bedroomFinish: '/images/recent-works/parquet-flooring/finished-parquet-bedroom-floor.jpg',
  completedRoomPolish: '/images/recent-works/parquet-flooring/completed-parquet-room-polish.jpg',
  underStairsFinish: '/images/recent-works/parquet-flooring/polished-wood-floor-under-stairs.jpg',
  corridorFinish: '/images/recent-works/parquet-flooring/glossy-wood-corridor-finish.jpg',
  thresholdFinish: '/images/recent-works/parquet-flooring/wood-floor-threshold-finish.jpg',
  darkWoodPolish: '/images/recent-works/parquet-flooring/dark-wood-floor-polishing-finish.jpg',
  windowRoomPolish: '/images/recent-works/parquet-flooring/window-room-parquet-polish.jpg',
  bedroomParquetPolish: '/images/recent-works/parquet-flooring/finished-bedroom-parquet-polish.jpg'
};

const timberWoodRepairImages = {
  darkBalconyDeck: '/images/recent-works/timber-wood-repair/dark-balcony-timber-deck-finish.jpg',
  deckSanding: '/images/recent-works/timber-wood-repair/timber-deck-sanding-in-progress.jpg',
  finishedBalconyDeck: '/images/recent-works/timber-wood-repair/finished-balcony-timber-deck.jpg',
  balconyDeckAndFloor: '/images/recent-works/timber-wood-repair/timber-balcony-deck-and-floor-finish.jpg',
  repairBeforeAfter: '/images/recent-works/timber-wood-repair/balcony-deck-repair-before-after.jpg',
  glossCoatedDeck: '/images/recent-works/timber-wood-repair/gloss-coated-small-timber-deck.jpg',
  protectiveCoating: '/images/recent-works/timber-wood-repair/outdoor-timber-deck-protective-coating.jpg'
};

const woodDeckingImages = {
  restoredBalconyDeck: '/images/recent-works/wood-decking/restored-balcony-wood-deck-finish.jpg',
  weatheredDeckBefore: '/images/recent-works/wood-decking/weathered-wood-deck-before-restoration.jpg',
  beforeAfterRestoration: '/images/recent-works/wood-decking/wood-deck-before-after-restoration.jpg',
  gardenProtectiveCoating: '/images/recent-works/wood-decking/garden-wood-deck-protective-coating.jpg',
  coveredPatioFinish: '/images/recent-works/wood-decking/covered-patio-wood-deck-finish.jpg'
};

const vinylFlooringImages = {
  lightOakInstall: '/images/recent-works/vinyl-flooring/light-oak-vinyl-installation-progress.jpg',
  brownPlankInstall: '/images/recent-works/vinyl-flooring/brown-vinyl-plank-installation.jpg',
  herringboneInstall: '/images/recent-works/vinyl-flooring/herringbone-vinyl-floor-installation.jpg',
  replacementProgress: '/images/recent-works/vinyl-flooring/room-vinyl-floor-replacement-progress.jpg',
  greyRoomInstall: '/images/recent-works/vinyl-flooring/grey-vinyl-room-installation.jpg'
};

export const recentWorksByService: Record<string, RecentWorkProject[]> = {
  'timber-wood-repair': [
    {
      image: timberWoodRepairImages.repairBeforeAfter,
      alt: 'Balcony timber deck repair before and after restoration work',
      objectPosition: 'center 54%',
      serviceTitle: 'Timber & Wood Repair',
      label: 'Wood Repair',
      title: 'Timber Deck Repair & Restoration',
      text: 'Damaged timber boards are assessed, repaired and refinished so the wood surface looks clean and usable again.',
      featured: true
    },
    {
      image: timberWoodRepairImages.deckSanding,
      alt: 'Timber deck sanding in progress before refinishing',
      objectPosition: 'center 54%',
      serviceTitle: 'Timber & Wood Repair',
      label: 'Surface Sanding',
      title: 'Wood Surface Sanding',
      text: 'Sanding removes worn surface layers and prepares timber for staining, coating or a renewed protective finish.'
    },
    {
      image: timberWoodRepairImages.protectiveCoating,
      alt: 'Outdoor timber deck receiving a glossy protective coating',
      objectPosition: 'center 58%',
      serviceTitle: 'Timber & Wood Repair',
      label: 'Protective Coat',
      title: 'Final Protective Coating',
      text: 'A fresh coating helps protect restored timber and brings back a richer, more even wood tone.'
    },
    {
      image: timberWoodRepairImages.darkBalconyDeck,
      alt: 'Dark restored balcony timber deck with a clean finished surface',
      objectPosition: 'center 62%',
      serviceTitle: 'Timber & Wood Repair',
      label: 'Restored Finish',
      title: 'Restored Timber Finish',
      text: 'The finished timber surface is checked for consistent color, clean board lines and a professional final appearance.'
    }
  ],
  'wood-decking': [
    {
      image: woodDeckingImages.beforeAfterRestoration,
      alt: 'Wood deck before and after restoration with renewed outdoor timber boards',
      objectPosition: 'center 54%',
      serviceTitle: 'Wood Decking',
      label: 'Deck Restoration',
      title: 'Weathered Deck Restoration',
      text: 'A worn outdoor deck is cleaned, prepared and refinished to restore a richer timber appearance.',
      featured: true
    },
    {
      image: woodDeckingImages.restoredBalconyDeck,
      alt: 'Restored balcony wood deck with warm finished boards',
      objectPosition: 'center 60%',
      serviceTitle: 'Wood Decking',
      label: 'Balcony Deck',
      title: 'Restored Balcony Wood Deck',
      text: 'Balcony decking is refreshed with an even finish, clean board lines and a more polished outdoor look.'
    },
    {
      image: woodDeckingImages.gardenProtectiveCoating,
      alt: 'Garden wood deck with a fresh protective coating',
      objectPosition: 'center 58%',
      serviceTitle: 'Wood Decking',
      label: 'Protective Coating',
      title: 'Outdoor Wood Protective Coating',
      text: 'Protective coating helps renewed deck boards stand up better to daily use, sun exposure and outdoor moisture.'
    },
    {
      image: woodDeckingImages.coveredPatioFinish,
      alt: 'Covered patio wood deck after finishing work',
      objectPosition: 'center 58%',
      serviceTitle: 'Wood Decking',
      label: 'Final Finish',
      title: 'Finished Patio Deck Surface',
      text: 'The completed deck is checked for consistent tone, smooth presentation and a neat final finish.'
    }
  ],
  'wood-deck-installation-repair': [
    {
      image: woodDeckingImages.weatheredDeckBefore,
      alt: 'Weathered wood deck before installation and repair work',
      objectPosition: 'center 56%',
      serviceTitle: 'Wood Deck Installation & Repair',
      label: 'Deck Repair',
      title: 'Existing Deck Repair Assessment',
      text: 'Weathered or worn boards are reviewed before repair, replacement and refinishing work begins.',
      featured: true
    },
    {
      image: woodDeckingImages.beforeAfterRestoration,
      alt: 'Wood deck before and after repair and restoration work',
      objectPosition: 'center 54%',
      serviceTitle: 'Wood Deck Installation & Repair',
      label: 'Repair Result',
      title: 'Deck Repair & Refinishing',
      text: 'Repair and refinishing work brings the deck back to a cleaner, more usable outdoor surface.'
    },
    {
      image: woodDeckingImages.restoredBalconyDeck,
      alt: 'Balcony wood deck with restored boards and finished coating',
      objectPosition: 'center 60%',
      serviceTitle: 'Wood Deck Installation & Repair',
      label: 'Board Finish',
      title: 'Deck Board Finishing',
      text: 'Finished deck boards are aligned visually and coated for a warmer, more consistent timber result.'
    },
    {
      image: woodDeckingImages.gardenProtectiveCoating,
      alt: 'Outdoor timber deck after protective coating application',
      objectPosition: 'center 58%',
      serviceTitle: 'Wood Deck Installation & Repair',
      label: 'Final Coat',
      title: 'Final Protective Deck Coating',
      text: 'The final coating stage protects the repaired deck and gives the outdoor timber a renewed sheen.'
    }
  ],
  'vinyl-flooring': [
    {
      image: vinylFlooringImages.lightOakInstall,
      alt: 'Light oak vinyl flooring installation in progress by Pro Surface Works',
      objectPosition: 'center 54%',
      serviceTitle: 'Vinyl Flooring',
      label: 'Vinyl Installation',
      title: 'Vinyl Flooring Installation',
      text: 'Vinyl planks are laid with careful alignment so the room gains a clean, practical new floor finish.',
      featured: true
    },
    {
      image: vinylFlooringImages.herringboneInstall,
      alt: 'Herringbone vinyl floor installation with brown plank pattern',
      objectPosition: 'center 56%',
      serviceTitle: 'Vinyl Flooring',
      label: 'Pattern Layout',
      title: 'Herringbone Vinyl Floor Layout',
      text: 'Patterned vinyl flooring is installed in stages to keep plank direction, joints and room lines consistent.'
    },
    {
      image: vinylFlooringImages.replacementProgress,
      alt: 'Room vinyl floor replacement work in progress near balcony doors',
      objectPosition: 'center 58%',
      serviceTitle: 'Vinyl Flooring',
      label: 'Replacement',
      title: 'Room Vinyl Floor Replacement',
      text: 'Existing flooring is replaced with vinyl planks after preparation, fitting and edge checks around the room.'
    },
    {
      image: vinylFlooringImages.greyRoomInstall,
      alt: 'Grey vinyl room installation with planks and tools on site',
      objectPosition: 'center 58%',
      serviceTitle: 'Vinyl Flooring',
      label: 'Completed Area',
      title: 'Grey Vinyl Room Upgrade',
      text: 'A completed room upgrade gives the space a brighter, easy-to-maintain vinyl surface with neat finishing details.'
    }
  ],
  'vinyl-flooring-installation': [
    {
      image: vinylFlooringImages.lightOakInstall,
      alt: 'Technicians installing light oak vinyl flooring across a tiled room',
      objectPosition: 'center 54%',
      serviceTitle: 'Vinyl Flooring Installation',
      label: 'Installation',
      title: 'Light Oak Vinyl Installation',
      text: 'Vinyl planks are measured, cut and fitted carefully across the room for a smooth installation result.',
      featured: true
    },
    {
      image: vinylFlooringImages.brownPlankInstall,
      alt: 'Brown vinyl plank installation with subfloor preparation visible',
      objectPosition: 'center 55%',
      serviceTitle: 'Vinyl Flooring Installation',
      label: 'Plank Fitting',
      title: 'Vinyl Plank Installation',
      text: 'Individual planks are locked and aligned over the prepared surface so joints sit cleanly across the floor.'
    },
    {
      image: vinylFlooringImages.herringboneInstall,
      alt: 'Herringbone vinyl planks being installed in a room',
      objectPosition: 'center 56%',
      serviceTitle: 'Vinyl Flooring Installation',
      label: 'Layout Work',
      title: 'Patterned Vinyl Layout',
      text: 'Pattern layout is checked as the installation progresses to keep the finished floor balanced and tidy.'
    },
    {
      image: vinylFlooringImages.greyRoomInstall,
      alt: 'Grey vinyl flooring installation nearing completion in a small room',
      objectPosition: 'center 58%',
      serviceTitle: 'Vinyl Flooring Installation',
      label: 'Edge Finish',
      title: 'Edge & Room Finishing',
      text: 'Final fitting focuses on wall edges, room corners and a clean finished surface ready for daily use.'
    }
  ],
  'parquet-flooring': [
    {
      image: parquetFlooringImages.sandingMachine,
      alt: 'Parquet floor sanding machine preparing a timber floor by Pro Surface Works',
      objectPosition: 'center 56%',
      serviceTitle: 'Parquet Flooring',
      label: 'Floor Sanding',
      title: 'Parquet Floor Sanding',
      text: 'Machine sanding prepares worn parquet for a smoother surface and a cleaner finishing stage.',
      featured: true
    },
    {
      image: parquetFlooringImages.glossyParquetFinish,
      alt: 'Glossy parquet floor after polishing and varnishing',
      objectPosition: 'center 62%',
      serviceTitle: 'Parquet Flooring',
      label: 'Gloss Finish',
      title: 'Glossy Wood Floor Finish',
      text: 'Completed parquet polishing and varnishing restores warmth, reflection and a more refined timber presentation.'
    },
    {
      image: parquetFlooringImages.repairRestorationCollage,
      alt: 'Parquet repair and restoration stages from damaged floor to finished timber',
      serviceTitle: 'Parquet Flooring',
      label: 'Repair Work',
      title: 'Existing Parquet Restoration',
      text: 'Damaged boards are repaired, prepared and finished so the floor can look complete and usable again.'
    },
    {
      image: parquetFlooringImages.staircaseClose,
      alt: 'Varnished timber staircase with a restored glossy finish',
      objectPosition: 'center 56%',
      serviceTitle: 'Parquet Flooring',
      label: 'Staircase Finish',
      title: 'Timber Staircase Renewal',
      text: 'Wooden stair treads are refreshed with sanding and finishing work for a cleaner, richer timber look.'
    }
  ],
  'parquet-flooring-installation': [
    {
      image: parquetFlooringImages.installationLayout,
      alt: 'Parquet flooring installation layout with timber planks prepared on site',
      objectPosition: 'center 58%',
      serviceTitle: 'Parquet Flooring Installation',
      label: 'Installation',
      title: 'Parquet Flooring Installation',
      text: 'Timber boards are planned and installed with attention to layout, spacing and the final room finish.',
      featured: true
    },
    {
      image: parquetFlooringImages.boardInstallProgress,
      alt: 'Parquet boards being installed across a residential floor',
      objectPosition: 'center 60%',
      serviceTitle: 'Parquet Flooring Installation',
      label: 'Board Laying',
      title: 'New Timber Board Layout',
      text: 'Installation work aligns timber boards neatly so the finished floor has a consistent direction and pattern.'
    },
    {
      image: parquetFlooringImages.modernStaircase,
      alt: 'Modern timber staircase installation with clean wood treads',
      serviceTitle: 'Parquet Flooring Installation',
      label: 'Stair Treads',
      title: 'Timber Stair Tread Installation',
      text: 'Timber treads are fitted and finished to match the home interior and create a clean staircase profile.'
    },
    {
      image: parquetFlooringImages.finishedWithStaircase,
      alt: 'Finished wood flooring next to a staircase after installation',
      serviceTitle: 'Parquet Flooring Installation',
      label: 'Completed Floor',
      title: 'Installed Wood Floor Finish',
      text: 'The completed installation is reviewed for a neat transition, clean edges and a warm timber appearance.'
    }
  ],
  'parquet-floor-polishing': [
    {
      image: parquetFlooringImages.glossyParquetFinish,
      alt: 'Parquet floor after polishing with a glossy reflective finish',
      objectPosition: 'center 62%',
      serviceTitle: 'Parquet Floor Polishing',
      label: 'Polishing',
      title: 'Parquet Floor Polishing',
      text: 'Polishing improves tired parquet by restoring shine, color depth and a cleaner finished surface.',
      featured: true
    },
    {
      image: parquetFlooringImages.balconyWoodPolish,
      alt: 'Wood floor polished near balcony doors with a glossy finish',
      objectPosition: 'center 60%',
      serviceTitle: 'Parquet Floor Polishing',
      label: 'Room Finish',
      title: 'Bright Room Wood Finish',
      text: 'A polished timber floor adds clearer reflection and a refreshed look to bedroom or living spaces.'
    },
    {
      image: parquetFlooringImages.completedRoomPolish,
      alt: 'Completed parquet room polish with reflective wood flooring',
      objectPosition: 'center 58%',
      serviceTitle: 'Parquet Floor Polishing',
      label: 'Completed Polish',
      title: 'Completed Parquet Room Polish',
      text: 'The finished parquet is checked for even shine, clean edges and a consistent polished presentation.'
    },
    {
      image: parquetFlooringImages.darkWoodPolish,
      alt: 'Dark wood parquet floor with restored polished shine',
      objectPosition: 'center 60%',
      serviceTitle: 'Parquet Floor Polishing',
      label: 'Deep Tone Finish',
      title: 'Dark Wood Shine Restoration',
      text: 'Darker timber floors are polished to improve depth, clarity and the overall finished appearance.'
    }
  ],
  'parquet-repair-restoration': [
    {
      image: parquetFlooringImages.damagedBoardRemoval,
      alt: 'Damaged parquet boards removed before repair and replacement',
      serviceTitle: 'Parquet Repair & Restoration',
      label: 'Board Repair',
      title: 'Damaged Parquet Repair',
      text: 'Damaged or loose parquet sections are opened, assessed and prepared for replacement or restoration.',
      featured: true
    },
    {
      image: parquetFlooringImages.repairHandwork,
      alt: 'Technician carrying out detailed parquet repair by hand',
      objectPosition: 'center 48%',
      serviceTitle: 'Parquet Repair & Restoration',
      label: 'Hand Repair',
      title: 'Loose Parquet Replacement',
      text: 'Loose or broken pieces are carefully removed and replaced so the floor can be stabilized before finishing.'
    },
    {
      image: parquetFlooringImages.damagedRepairRemoval,
      alt: 'Damaged parquet area with old pieces removed for restoration',
      objectPosition: 'center 55%',
      serviceTitle: 'Parquet Repair & Restoration',
      label: 'Restoration Prep',
      title: 'Scratch & Stain Removal Prep',
      text: 'Problem areas are cleared and prepared before sanding, patching and final restoration work begins.'
    },
    {
      image: parquetFlooringImages.looseReplacementPrep,
      alt: 'Loose parquet replacement preparation around a damaged floor area',
      objectPosition: 'center 58%',
      serviceTitle: 'Parquet Repair & Restoration',
      label: 'Replacement',
      title: 'Parquet Replacement Preparation',
      text: 'Replacement preparation helps new timber pieces sit cleaner with the surrounding parquet surface.'
    }
  ],
  'parquet-floor-sanding-varnishing': [
    {
      image: parquetFlooringImages.sandingMachine,
      alt: 'Floor sanding machine used on parquet before varnishing',
      objectPosition: 'center 56%',
      serviceTitle: 'Parquet Floor Sanding & Varnishing',
      label: 'Sanding',
      title: 'Floor Sanding',
      text: 'Machine sanding removes tired surface layers and prepares the timber for a smoother varnish finish.',
      featured: true
    },
    {
      image: parquetFlooringImages.sandingVarnishingProgress,
      alt: 'Wood floor sanding and varnishing progress with a visible finish transition',
      objectPosition: 'center 52%',
      serviceTitle: 'Parquet Floor Sanding & Varnishing',
      label: 'Progress',
      title: 'Sanding & Varnishing Progress',
      text: 'The floor is worked in stages so the renewed timber tone and finish can be applied consistently.'
    },
    {
      image: parquetFlooringImages.newVarnishApplication,
      alt: 'New varnish being applied to a timber floor',
      objectPosition: 'center 58%',
      serviceTitle: 'Parquet Floor Sanding & Varnishing',
      label: 'Varnish',
      title: 'New Varnish Application',
      text: 'Fresh varnish is applied across the prepared timber to protect the surface and restore a polished look.'
    },
    {
      image: parquetFlooringImages.varnishApplication,
      alt: 'Timber floor varnish application near a staircase landing',
      serviceTitle: 'Parquet Floor Sanding & Varnishing',
      label: 'Final Coat',
      title: 'Final Sanding & Finishing',
      text: 'Final finishing checks the sheen, edge detail and coating consistency across the renewed timber floor.'
    }
  ],
  'staircase-sanding-varnishing': [
    {
      image: parquetFlooringImages.staircaseClose,
      alt: 'Timber staircase after sanding and varnishing with a glossy finish',
      objectPosition: 'center 56%',
      serviceTitle: 'Staircase Sanding & Varnishing',
      label: 'Staircase',
      title: 'Staircase Sanding & Varnishing',
      text: 'Timber stair treads are sanded and varnished to refresh worn surfaces and restore a richer finish.',
      featured: true
    },
    {
      image: parquetFlooringImages.modernStaircase,
      alt: 'Modern timber staircase with finished wood treads and railing',
      serviceTitle: 'Staircase Sanding & Varnishing',
      label: 'Modern Finish',
      title: 'Clean Timber Stair Finish',
      text: 'Staircase finishing improves the timber tone and creates a cleaner transition through the home.'
    },
    {
      image: parquetFlooringImages.staircaseTreadInstall,
      alt: 'Timber stair treads with a clean installed finish',
      objectPosition: 'center 54%',
      serviceTitle: 'Staircase Sanding & Varnishing',
      label: 'Tread Finish',
      title: 'Stair Tread Renewal',
      text: 'Individual treads are refinished with attention to edges, risers and the visible walking surface.'
    },
    {
      image: parquetFlooringImages.staircaseGloss,
      alt: 'Glossy staircase varnish finish on timber steps',
      objectPosition: 'center 56%',
      serviceTitle: 'Staircase Sanding & Varnishing',
      label: 'Gloss Varnish',
      title: 'Gloss Staircase Varnish',
      text: 'The completed staircase is reviewed for smoothness, shine and a consistent varnished appearance.'
    }
  ],
  'old-varnish-removal': [
    {
      image: parquetFlooringImages.oldVarnishSanding,
      alt: 'Old parquet varnish being removed during sanding preparation',
      objectPosition: 'center 54%',
      serviceTitle: 'Old Varnish Removal',
      label: 'Varnish Removal',
      title: 'Old Varnish Removal',
      text: 'Aged varnish is removed to create a cleaner base before renewed sanding, staining or coating work.',
      featured: true
    },
    {
      image: parquetFlooringImages.edgeSandingRepair,
      alt: 'Edge sanding and old varnish removal near a wall line',
      objectPosition: 'center 58%',
      serviceTitle: 'Old Varnish Removal',
      label: 'Edge Work',
      title: 'Edge Sanding & Preparation',
      text: 'Edges and tight areas are prepared carefully so the new finish can look consistent across the full floor.'
    },
    {
      image: parquetFlooringImages.damagedBoardRemoval,
      alt: 'Parquet floor opened for old coating removal and repair preparation',
      serviceTitle: 'Old Varnish Removal',
      label: 'Surface Prep',
      title: 'Worn Coating Removal',
      text: 'Problem sections are cleared of old material before the floor is restored and refinished.'
    },
    {
      image: parquetFlooringImages.sandingVarnishingProgress,
      alt: 'Wood floor showing sanding progress before new varnish',
      objectPosition: 'center 52%',
      serviceTitle: 'Old Varnish Removal',
      label: 'Ready to Refinish',
      title: 'Prepared for New Varnish',
      text: 'After removal, the timber is prepared for a new protective finish and more even color.'
    }
  ],
  'skirting-installation-repair': [
    {
      image: parquetFlooringImages.thresholdFinish,
      alt: 'Wood floor threshold and skirting edge finished neatly',
      serviceTitle: 'Skirting Installation & Repair',
      label: 'Edge Finish',
      title: 'Skirting Edge Finishing',
      text: 'Floor edges and transitions are finished neatly so the room perimeter looks complete and aligned.',
      featured: true
    },
    {
      image: parquetFlooringImages.underStairsFinish,
      alt: 'Polished timber floor with skirting and stair edge details',
      objectPosition: 'center 58%',
      serviceTitle: 'Skirting Installation & Repair',
      label: 'Perimeter Detail',
      title: 'Skirting Repair Around Stairs',
      text: 'Skirting and nearby timber edges are repaired or finished to support a cleaner room boundary.'
    },
    {
      image: parquetFlooringImages.corridorFinish,
      alt: 'Glossy wood corridor floor with clean skirting lines',
      objectPosition: 'center 58%',
      serviceTitle: 'Skirting Installation & Repair',
      label: 'Corridor Edge',
      title: 'Clean Corridor Skirting Finish',
      text: 'Corridor skirting and adjacent floor edges are checked for a tidy transition and polished final look.'
    },
    {
      image: parquetFlooringImages.bedroomParquetPolish,
      alt: 'Finished bedroom parquet floor with skirting around the room edge',
      serviceTitle: 'Skirting Installation & Repair',
      label: 'Room Perimeter',
      title: 'Room Skirting Completion',
      text: 'Final skirting details help complete the floor-to-wall transition after parquet work.'
    }
  ],
  'grouting': [
    {
      image: groutingImages.kitchenTileApplication,
      alt: 'Tile grout application in progress by Pro Surface Works',
      objectPosition: 'center 54%',
      serviceTitle: 'Grouting Services',
      label: 'Grout Application',
      title: 'Tile Regrouting Work',
      text: 'Old or uneven grout lines are refreshed with careful application for a cleaner, more consistent tiled surface.',
      featured: true
    },
    {
      image: groutingImages.bathroomTileFinish,
      alt: 'Bathroom tile floor with refreshed grout lines',
      objectPosition: 'center 58%',
      serviceTitle: 'Grouting Services',
      label: 'Bathroom Grouting',
      title: 'Bathroom Regrouting Finish',
      text: 'Bathroom joints are cleaned, filled and finished to improve the look of wet-area tile lines.'
    },
    {
      image: groutingImages.marbleGumMachineWork,
      alt: 'Machine work for marble gum grouting and stone joint finishing',
      objectPosition: 'center 55%',
      serviceTitle: 'Grouting Services',
      label: 'Marble Gum',
      title: 'Marble Gum Joint Repair',
      text: 'Marble joint work supports a more refined stone finish where visible gaps or old joint material need attention.'
    },
    {
      image: groutingImages.epoxyFinalFinish,
      alt: 'Finished tiled floor with clean epoxy grout lines',
      objectPosition: 'center 62%',
      serviceTitle: 'Grouting Services',
      label: 'Epoxy Finish',
      title: 'Final Grout Cleaning & Finishing',
      text: 'Completed grout work is cleaned down and reviewed for neat joints, consistent color and a tidy final presentation.'
    }
  ],
  'tile-marble-regrouting': [
    {
      image: groutingImages.kitchenTileApplication,
      alt: 'Tile and marble regrouting application across floor joints',
      objectPosition: 'center 54%',
      serviceTitle: 'Tile & Marble Regrouting',
      label: 'Joint Regrouting',
      title: 'Tile & Marble Regrouting',
      text: 'Failed grout is replaced with cleaner, brighter joint lines that improve the full tile or marble surface.',
      featured: true
    },
    {
      image: groutingImages.jointCleaning,
      alt: 'Technician cleaning and preparing floor tile joints for regrouting',
      objectPosition: 'center 42%',
      serviceTitle: 'Tile & Marble Regrouting',
      label: 'Joint Cleaning',
      title: 'Grout Joint Cleaning',
      text: 'Joint cleaning prepares the floor before new grout is applied so the finish sits cleaner and more evenly.'
    },
    {
      image: groutingImages.completedTileFloor,
      alt: 'Completed tile regrouting floor with bright clean joints',
      objectPosition: 'center 60%',
      serviceTitle: 'Tile & Marble Regrouting',
      label: 'Completed Floor',
      title: 'Completed Tile Regrouting',
      text: 'The completed floor shows cleaner grout lines and a more uniform tiled appearance across the room.'
    },
    {
      image: groutingImages.showerFloorFinish,
      alt: 'Shower floor regrouting with neat grout lines around the drain',
      objectPosition: 'center 54%',
      serviceTitle: 'Tile & Marble Regrouting',
      label: 'Wet Area',
      title: 'Shower Floor Regrouting',
      text: 'Wet-area joints are finished carefully around slopes, corners and drain details for a neater shower floor.'
    }
  ],
  'marble-gum-grouting': [
    {
      image: groutingImages.marbleGumMachineWork,
      alt: 'Machine process for marble gum grouting and stone floor joints',
      objectPosition: 'center 55%',
      serviceTitle: 'Marble Gum Grouting',
      label: 'Gum Grouting',
      title: 'Marble Gum Joint Repair',
      text: 'Marble gum grouting refines visible stone joints so the finished marble surface looks cleaner and more continuous.',
      featured: true
    },
    {
      image: groutingImages.marbleJointFinish,
      alt: 'Marble floor with restored and refined joint lines',
      serviceTitle: 'Marble Gum Grouting',
      label: 'Marble Joints',
      title: 'Marble Joint Regrouting',
      text: 'Stone joint lines are improved to reduce visible gaps and support a more polished marble presentation.'
    },
    {
      image: groutingImages.marbleGumRoomFinish,
      alt: 'Room with marble gum grouting finish and reflective stone surface',
      objectPosition: 'center 62%',
      serviceTitle: 'Marble Gum Grouting',
      label: 'Room Finish',
      title: 'Refined Marble Joint Finish',
      text: 'Finished marble gum work helps the floor read as one cleaner surface with more balanced joint detail.'
    },
    {
      image: groutingImages.machineCleaning,
      alt: 'Machine cleaning over stone floor joints before grouting finish',
      objectPosition: 'center 44%',
      serviceTitle: 'Marble Gum Grouting',
      label: 'Preparation',
      title: 'Surface Preparation & Cleaning',
      text: 'Preparation and cleaning help remove residue before marble gum finishing is checked and completed.'
    }
  ],
  'epoxy-grouting': [
    {
      image: groutingImages.epoxyFinalFinish,
      alt: 'Finished epoxy grouting floor with clean reflective tile surface',
      objectPosition: 'center 62%',
      serviceTitle: 'Epoxy Grouting',
      label: 'Epoxy Finish',
      title: 'Epoxy Grouting Application',
      text: 'Epoxy grout is applied and finished for suitable high-use tile areas that need a cleaner, durable joint finish.',
      featured: true
    },
    {
      image: groutingImages.waterproofEpoxyFinish,
      alt: 'Waterproof epoxy grout finish across a bright tiled room',
      objectPosition: 'center 60%',
      serviceTitle: 'Epoxy Grouting',
      label: 'Waterproof Grout',
      title: 'Waterproof Grout Application',
      text: 'Suitable wet or high-use areas receive epoxy grout for a more resilient and easier-to-maintain joint finish.'
    },
    {
      image: groutingImages.epoxyRoomFinish,
      alt: 'Room completed with epoxy grouting and clean tile joints',
      objectPosition: 'center 64%',
      serviceTitle: 'Epoxy Grouting',
      label: 'Room Finish',
      title: 'Epoxy Grouting Room Finish',
      text: 'The completed floor is reviewed for neat joints, consistent finish and a clean look across the full room.'
    },
    {
      image: groutingImages.porcelainFinish,
      alt: 'Porcelain tile floor with clean grout finish',
      objectPosition: 'center 62%',
      serviceTitle: 'Epoxy Grouting',
      label: 'Porcelain Tile',
      title: 'Porcelain Tile Grouting',
      text: 'Porcelain tile joints are finished with care so the surface looks bright, tidy and ready for daily use.'
    }
  ],
  'marble-stone-care': [
    {
      image: marbleStoneCareImages.machinePolishing,
      alt: 'Marble polishing machine working across a stone floor by Pro Surface Works',
      objectPosition: 'center 56%',
      serviceTitle: 'Marble & Stone Care',
      label: 'Surface Polishing',
      title: 'Marble Surface Polishing',
      text: 'Machine polishing refines the stone surface and helps restore a cleaner, brighter finish across worn marble areas.',
      featured: true
    },
    {
      image: marbleStoneCareImages.highGlossFloor,
      alt: 'High-gloss marble floor finish after polishing by Pro Surface Works',
      objectPosition: 'center 62%',
      serviceTitle: 'Marble & Stone Care',
      label: 'Gloss Finish',
      title: 'High-Gloss Marble Finish',
      text: 'A completed marble floor with improved reflection, clearer stone tone and a more consistent polished presentation.'
    },
    {
      image: marbleStoneCareImages.restoredKitchenCountertop,
      alt: 'Kitchen stone countertop restored with a clean polished finish',
      objectPosition: 'center 56%',
      serviceTitle: 'Marble & Stone Care',
      label: 'Countertop Care',
      title: 'Stone Countertop Polishing',
      text: 'Kitchen stone surfaces are polished and checked for a smooth, clean finish around daily-use preparation zones.'
    },
    {
      image: marbleStoneCareImages.vanityBasinRenewal,
      alt: 'Vanity and basin top after stone surface renewal work',
      serviceTitle: 'Marble & Stone Care',
      label: 'Top Restoration',
      title: 'Vanity & Basin Top Renewal',
      text: 'Bathroom tops receive focused polishing support to improve dullness, water marks and overall surface presentation.'
    }
  ],
  'marble-floor-polishing': [
    {
      image: marbleStoneCareImages.machinePolishing,
      alt: 'Marble floor polishing machine restoring a stone floor surface',
      objectPosition: 'center 56%',
      serviceTitle: 'Marble Floor Polishing',
      label: 'Machine Polishing',
      title: 'Marble Floor Polishing',
      text: 'A controlled polishing process improves marble clarity and restores a brighter finish across tired floor areas.',
      featured: true
    },
    {
      image: marbleStoneCareImages.hallwayPolishedFinish,
      alt: 'Polished marble hallway with a clean reflective finish',
      serviceTitle: 'Marble Floor Polishing',
      label: 'Hallway Finish',
      title: 'Refined Hallway Shine',
      text: 'Finished hallway marble shows a more even sheen, improved reflection and cleaner day-to-day presentation.'
    },
    {
      image: marbleStoneCareImages.livingRoomPolish,
      alt: 'Living room marble floor after polishing and surface care',
      objectPosition: 'center 62%',
      serviceTitle: 'Marble Floor Polishing',
      label: 'Living Area',
      title: 'Living Room Marble Finish',
      text: 'Polishing helps restore light reflection and a smoother visual finish across larger residential marble floor zones.'
    },
    {
      image: marbleStoneCareImages.highGlossFloor,
      alt: 'High-gloss marble floor with restored reflection',
      objectPosition: 'center 62%',
      serviceTitle: 'Marble Floor Polishing',
      label: 'Final Shine',
      title: 'High-Gloss Marble Finish',
      text: 'Final checks focus on consistent shine, clean edges and a polished surface ready for regular home use.'
    }
  ],
  'marble-restoration': [
    {
      image: marbleStoneCareImages.dullFloorRestoration,
      alt: 'Dull marble floor before restoration and polishing work',
      serviceTitle: 'Marble Restoration',
      label: 'Dull Surface',
      title: 'Dull Surface Restoration',
      text: 'Worn marble is assessed and restored to improve cloudy patches, uneven shine and visible surface tiredness.',
      featured: true
    },
    {
      image: marbleStoneCareImages.machinePolishing,
      alt: 'Marble restoration machine process for stone floor refinement',
      objectPosition: 'center 56%',
      serviceTitle: 'Marble Restoration',
      label: 'Grinding & Polishing',
      title: 'Surface Grinding & Polishing',
      text: 'Machine work supports deeper restoration where the existing finish needs more than a light polish.'
    },
    {
      image: marbleStoneCareImages.stoneFloorFinish,
      alt: 'Restored stone floor with a refined polished finish',
      serviceTitle: 'Marble Restoration',
      label: 'Refined Surface',
      title: 'Stone Surface Restoration',
      text: 'The restored floor presents a cleaner stone tone, improved clarity and a more balanced surface finish.'
    },
    {
      image: marbleStoneCareImages.hallwayPolishedFinish,
      alt: 'Completed marble restoration with a polished hallway finish',
      serviceTitle: 'Marble Restoration',
      label: 'Protected Finish',
      title: 'Final Surface Protection',
      text: 'Completed restoration is reviewed for shine consistency and a finish suitable for ongoing maintenance.'
    }
  ],
  'kitchen-countertop-polishing': [
    {
      image: marbleStoneCareImages.whiteKitchenCountertop,
      alt: 'White kitchen countertop after polishing by Pro Surface Works',
      objectPosition: 'center 58%',
      serviceTitle: 'Kitchen Countertop Polishing',
      label: 'Countertop Polish',
      title: 'Kitchen Countertop Polishing',
      text: 'Kitchen stone tops are polished for a cleaner, brighter surface around cooking, washing and preparation areas.',
      featured: true
    },
    {
      image: marbleStoneCareImages.completedKitchenTop,
      alt: 'Completed kitchen countertop polish with sink and hob area',
      objectPosition: 'center 58%',
      serviceTitle: 'Kitchen Countertop Polishing',
      label: 'Completed Top',
      title: 'Completed Countertop Finish',
      text: 'The finished countertop is checked for a neat sheen, clean edges and a smooth daily-use surface.'
    },
    {
      image: marbleStoneCareImages.restoredKitchenCountertop,
      alt: 'Restored kitchen countertop with a broad polished stone surface',
      objectPosition: 'center 56%',
      serviceTitle: 'Kitchen Countertop Polishing',
      label: 'Stone Refinement',
      title: 'Stone Surface Refinement',
      text: 'Focused polishing improves dull countertop areas and restores a more professional kitchen presentation.'
    },
    {
      image: marbleStoneCareImages.kitchenSurfaceRefresh,
      alt: 'Kitchen stone countertop refreshed across a full kitchen layout',
      serviceTitle: 'Kitchen Countertop Polishing',
      label: 'Surface Refresh',
      title: 'Full Kitchen Surface Refresh',
      text: 'Larger kitchen tops are refreshed to improve consistency across worktops, corners and surrounding counter areas.'
    }
  ],
  'vanity-basin-top-polishing': [
    {
      image: marbleStoneCareImages.vanityBasinRenewal,
      alt: 'Vanity and basin top polished for a cleaner bathroom finish',
      serviceTitle: 'Vanity & Basin Top Polishing',
      label: 'Vanity Top',
      title: 'Vanity Top Restoration',
      text: 'Bathroom vanity tops are polished to improve dullness, water marks and the overall finish around the basin area.',
      featured: true
    },
    {
      image: marbleStoneCareImages.vanityStainDetail,
      alt: 'Close-up of vanity top stains and marks before polishing',
      objectPosition: 'center 42%',
      serviceTitle: 'Vanity & Basin Top Polishing',
      label: 'Detail Care',
      title: 'Water Mark & Stain Attention',
      text: 'Close-up assessment helps target water marks, residue and dull patches before the polishing stage.'
    },
    {
      image: marbleStoneCareImages.compactVanityTop,
      alt: 'Compact basin top polished around a sink and tap',
      objectPosition: 'center 48%',
      serviceTitle: 'Vanity & Basin Top Polishing',
      label: 'Basin Top',
      title: 'Compact Basin Top Polish',
      text: 'Smaller basin tops receive careful polishing around edges, taps and wet-use areas for a cleaner finish.'
    },
    {
      image: marbleStoneCareImages.countertopPreparation,
      alt: 'Long vanity or stone top prepared for polishing work',
      objectPosition: 'center 54%',
      serviceTitle: 'Vanity & Basin Top Polishing',
      label: 'Preparation',
      title: 'Top Surface Preparation',
      text: 'Preparation work helps create an even base before polishing suitable vanity, basin or stone top surfaces.'
    }
  ],
  'general-floor-care': [
    {
      image: generalFloorCareImages.surfaceCleaning,
      alt: 'Machine cleaning for a General Floor Care project by Pro Surface Works',
      objectPosition: 'center 54%',
      serviceTitle: 'General Floor Care',
      label: 'Surface Preparation',
      title: 'Surface Cleaning & Preparation',
      text: 'Machine cleaning prepares the floor evenly so polishing, buffing or refinishing work can produce a cleaner final result.',
      featured: true
    },
    {
      image: generalFloorCareImages.commercialBuffing,
      alt: 'Commercial floor buffing in progress by Pro Surface Works',
      objectPosition: 'center 56%',
      serviceTitle: 'General Floor Care',
      label: 'Machine Buffing',
      title: 'Controlled Machine Buffing',
      text: 'A suitable machine process helps lift dullness and improve the presentation of high-use floor areas.'
    },
    {
      image: generalFloorCareImages.livingRoomFinish,
      alt: 'Restored living room floor with a reflective finish by Pro Surface Works',
      serviceTitle: 'General Floor Care',
      label: 'Restored Finish',
      title: 'Consistent Floor Shine',
      text: 'Final finishing improves light reflection and gives the floor a cleaner, more consistent look across the room.'
    },
    {
      image: generalFloorCareImages.condoFinish,
      alt: 'Bright finished condo floor after General Floor Care service',
      serviceTitle: 'General Floor Care',
      label: 'Completed Floor',
      title: 'Bright Residential Finish',
      text: 'A neat completed floor finish suitable for residential spaces that need renewed clarity and daily-use presentation.'
    }
  ],
  'floor-polishing-buffing': [
    {
      image: generalFloorCareImages.commercialBuffing,
      alt: 'Floor polishing and buffing machine work by Pro Surface Works',
      objectPosition: 'center 56%',
      serviceTitle: 'Floor Polishing & Buffing',
      label: 'Machine Buffing',
      title: 'Floor Polishing & Buffing',
      text: 'Professional buffing helps restore shine and a smoother-looking surface on suitable residential and commercial floors.',
      featured: true
    },
    {
      image: generalFloorCareImages.refinishingMachine,
      alt: 'Floor polishing machine working across a prepared floor surface',
      objectPosition: 'center 58%',
      serviceTitle: 'Floor Polishing & Buffing',
      label: 'Surface Preparation',
      title: 'Surface Cleaning & Preparation',
      text: 'Careful preparation removes surface residue and readies the floor before polishing or machine buffing begins.'
    },
    {
      image: generalFloorCareImages.hallwayFinish,
      alt: 'Polished hallway floor with a restored reflective finish',
      objectPosition: 'center 58%',
      serviceTitle: 'Floor Polishing & Buffing',
      label: 'Shine Restoration',
      title: 'Floor Shine Restoration',
      text: 'Buffing and finishing improve floor reflection and help tired hallway areas look cleaner and brighter.'
    },
    {
      image: generalFloorCareImages.balconyRoomFinish,
      alt: 'Completed polished floor finish in a bright room',
      serviceTitle: 'Floor Polishing & Buffing',
      label: 'Final Finish',
      title: 'Final Finish / Completed Floor',
      text: 'The completed floor is checked for an even sheen, clean edges and a polished look suitable for everyday use.'
    }
  ],
  'floor-refinishing-restoration': [
    {
      image: generalFloorCareImages.refinishingMachine,
      alt: 'Floor refinishing machine work during restoration by Pro Surface Works',
      objectPosition: 'center 58%',
      serviceTitle: 'Floor Refinishing & Restoration',
      label: 'Refinishing Work',
      title: 'Machine Refinishing Process',
      text: 'A deeper machine process supports floors that need more than a light polish to regain a clean, even presentation.',
      featured: true
    },
    {
      image: generalFloorCareImages.surfaceCleaning,
      alt: 'Surface cleaning machine preparing a floor for restoration',
      objectPosition: 'center 54%',
      serviceTitle: 'Floor Refinishing & Restoration',
      label: 'Preparation',
      title: 'Surface Cleaning & Preparation',
      text: 'Cleaning and preparation help remove residue so the refinishing stage can address dullness and uneven finish more effectively.'
    },
    {
      image: generalFloorCareImages.livingRoomFinish,
      alt: 'Restored floor finish after refinishing work',
      serviceTitle: 'Floor Refinishing & Restoration',
      label: 'Restored Surface',
      title: 'Restored Floor Clarity',
      text: 'The refinished surface shows improved clarity, better reflection and a more consistent finish across the room.'
    },
    {
      image: generalFloorCareImages.residentialFinish,
      alt: 'Completed residential floor after refinishing and restoration',
      objectPosition: 'center 64%',
      serviceTitle: 'Floor Refinishing & Restoration',
      label: 'Completed Floor',
      title: 'Completed Restoration Finish',
      text: 'Final checks focus on a clean completed look, balanced shine and a floor finish ready for regular use.'
    }
  ]
};

export function recentWorksForPage(slug?: string): RecentWorkProject[] {
  return slug && recentWorksByService[slug] ? recentWorksByService[slug] : defaultRecentWorks;
}
