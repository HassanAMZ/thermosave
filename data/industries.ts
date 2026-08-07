/**
 * Industry pages — Hook by process (Brunson) + Hormozi value stack.
 * Visual-first for Pakistan plant buyers: photo+copy story splits, then media dump.
 * Product tools stay in `data/products.ts` / `data/productMarketing.ts`.
 */

export type IndustryFaq = {
  q: string
  a: string
}

export type IndustryVideo = {
  /** Mux Playback ID (not Asset ID) — from asset → Playback and Thumbnails */
  playbackId: string
  title: string
  durationLabel: string
}

export type IndustryPhoto = {
  src: string
  alt: string
  caption: string
}

export type IndustryStat = {
  value: string
  label: string
}

export type IndustryRelatedProduct = {
  slug: string
  label: string
  href: string
}

export type Industry = {
  slug: string
  name: string
  shortName: string
  benefit: string
  coverImage: string
  seoTitle: string
  seoDescription: string
  headline: string
  subhead: string
  problemTitle: string
  /** Keep to ~2 short sentences — image carries the story */
  problem: string
  problemImage: IndustryPhoto
  agitateTitle: string
  agitate: string
  agitateImage: IndustryPhoto
  agitateStats: IndustryStat[]
  mechanismTitle: string
  mechanism: string
  mechanismImage: IndustryPhoto
  mediaTitle: string
  mediaSubhead: string
  offerTitle: string
  offerBullets: string[]
  relatedProducts: IndustryRelatedProduct[]
  videos: IndustryVideo[]
  /** Extra gallery stills (not used in story split layouts) */
  gallery: IndustryPhoto[]
  faqs: IndustryFaq[]
}

const EBM_IMG = '/static/industries/extrusion-blow-moulding'
const EXT_IMG = '/static/industries/extrusion-lines'
const HOP_IMG = '/static/industries/hoppers'

export const industries: Industry[] = [
  {
    slug: 'extrusion-blow-moulding',
    name: 'Extrusion Blow Moulding',
    shortName: 'Blow moulding',
    benefit:
      'Custom insulation jackets for extruder barrels and die heads — cut radiant heat loss on continuous EBM lines.',
    coverImage: `${EBM_IMG}/machine-full.jpg`,
    seoTitle: 'Extrusion Blow Moulding Insulation Jackets | ThermoSave',
    seoDescription:
      'Thermal insulation jackets for extrusion blow moulding barrels and die heads. Cut heat loss, cooler halls, safer surfaces. Free assessment in Pakistan.',
    headline: 'Stop heating the hall on your extrusion blow moulding line.',
    subhead:
      'Custom-fit ThermoSave jackets wrap the extruder barrel and head so process heat stays in the melt — not on your operators and your electricity bill.',
    problemTitle: 'Open bands throw heat all shift.',
    problem:
      'EBM barrels and die heads stay hot for hours. Uninsulated bands radiate into the hall — you pay for heat that never reaches the melt.',
    problemImage: {
      src: `${EBM_IMG}/bare-barrel.jpg`,
      alt: 'Extruder barrel and die head before insulation jackets',
      caption: 'Bare heated zones — heat leaving the machine',
    },
    agitateTitle: 'Wasted heat is a PKR line item.',
    agitate:
      'Continuous plasticizing means every open zone burns kWh all day. Jackets cut that loss — payback is usually months.',
    agitateImage: {
      src: `${EBM_IMG}/barrel-partial.jpg`,
      alt: 'Insulated barrel zones next to exposed heater bands on an extruder',
      caption: 'Insulated vs open bands on the same barrel',
    },
    agitateStats: [
      { value: '20–40%', label: 'Typical cut in zone heating energy' },
      { value: '~70%', label: 'Less heat loss on insulated zone' },
      { value: '30k+', label: 'PKR / month — Paragon (5 machines)' },
      { value: '200k+', label: 'PKR / month — Al Khair (8 machines)' },
    ],
    mechanismTitle: 'Jackets on barrel + head.',
    mechanism:
      'Custom removable jackets sized to your diameters and die head. Straps come off for maintenance. Heat stays in the melt; the hall runs cooler.',
    mechanismImage: {
      src: `${EBM_IMG}/head-jackets.jpg`,
      alt: 'ThermoSave jackets wrapped around extruder barrel and die head',
      caption: 'Barrel and die-head coverage on an EBM line',
    },
    mediaTitle: 'See it on a real EBM line.',
    mediaSubhead: 'Plant video and photos — ThermoSave jackets in Pakistan, not stock.',
    offerTitle: 'What you get for an EBM assessment',
    offerBullets: [
      'Free energy-loss assessment for barrel + die-head zones',
      'Custom-fit removable jackets for continuous plasticizing heat',
      'Safer touch surfaces and cooler ambient near the machine',
      'Optional mica or ceramic bands when zones need replacement',
      'Typical lead time 7–10 business days — Call or WhatsApp',
    ],
    relatedProducts: [
      {
        slug: 'thermal-insolations',
        label: 'Thermal Insulation Jackets',
        href: '/products/thermal-insolations',
      },
      {
        slug: 'ceramic-band-heater',
        label: 'Ceramic Band Heaters',
        href: '/products/ceramic-band-heater',
      },
      {
        slug: 'mica-band-heaters',
        label: 'Mica Band Heaters',
        href: '/products/mica-band-heaters',
      },
    ],
    videos: [
      {
        playbackId: 'Bx7v1bO4zmFv8027xQfDotu3UR1p02So8ZnYwmexsthKc',
        title: 'Jackets on barrel & head',
        durationLabel: '0:57',
      },
      {
        playbackId: 'mqjZFDe00nfCZm6U6cw3MHe4jo5U3dbN9MKese7HY7VE',
        title: 'Plant walkthrough',
        durationLabel: '0:35',
      },
      {
        playbackId: '5gbbIXuOyToOm7D2XTbtzrICbjqXlQbcfqQEXAP5EHs',
        title: 'Close-up install',
        durationLabel: '0:18',
      },
    ],
    gallery: [
      {
        src: `${EBM_IMG}/machine-full.jpg`,
        alt: 'Extrusion blow moulding machine with ThermoSave insulation jackets on the barrel',
        caption: 'Full line — jackets on barrel zones',
      },
      {
        src: `${EBM_IMG}/install.jpg`,
        alt: 'Technician fitting ThermoSave thermal jackets on blow moulding equipment',
        caption: 'Install on an active EBM line',
      },
    ],
    faqs: [
      {
        q: 'Where do jackets go on an extrusion blow moulding machine?',
        a: 'Along heated extruder barrel zones and around the die / head. We size to your diameters and clearances after a short assessment.',
      },
      {
        q: 'Will jackets interfere with maintenance?',
        a: 'No. Removable straps and buckles — pull jackets for bands and sensors without destroying the insulation.',
      },
      {
        q: 'Do we need new heater bands first?',
        a: 'Not always. Jackets work over existing bands. We can size mica or ceramic replacements at the same time if zones are failing.',
      },
      {
        q: 'How fast is payback on EBM?',
        a: 'Usually months from electricity savings. We estimate from your zone kW, hours, and tariff in the free assessment.',
      },
      {
        q: 'Can you cover our plant outside Lahore / Rawalpindi?',
        a: 'Yes — we support plants across 15 cities in Pakistan. Call or WhatsApp and we will tell you how we can cover you.',
      },
    ],
  },
  {
    slug: 'extrusion-lines',
    name: 'Extrusion Lines',
    shortName: 'Extrusion',
    benefit:
      'Custom insulation jackets for continuous extruder barrels — cut radiant heat loss on pipe, profile, film, and compounding lines.',
    coverImage: `${EXT_IMG}/machine-full.jpg`,
    seoTitle: 'Extrusion Line Insulation Jackets | ThermoSave',
    seoDescription:
      'Thermal insulation jackets for plastic extrusion barrels. Cut heat loss on continuous lines, cooler halls, safer surfaces. Free assessment in Pakistan.',
    headline: 'Keep melt heat in the barrel — not in the hall.',
    subhead:
      'ThermoSave jackets wrap heated extrusion zones so continuous plasticizing energy stays in the melt, not on your operators and your bill.',
    problemTitle: 'Long barrels radiate all shift.',
    problem:
      'Extrusion barrels run hot zone after zone for hours. Uninsulated heater bands dump that heat into the plant — you pay for kWh that never reaches the melt.',
    problemImage: {
      src: `${EXT_IMG}/problem-line.jpg`,
      alt: 'Industrial extruder barrel with heater zones and pressure gauges on a plant floor',
      caption: 'Continuous barrel heat — every open zone counts',
    },
    agitateTitle: 'Open zones are a PKR leak.',
    agitate:
      'A long line means more surface area radiating all day. Cover the zones and the savings stack — payback is usually months.',
    agitateImage: {
      src: `${EXT_IMG}/agitate-partial.jpg`,
      alt: 'Extruder barrel with ThermoSave jackets next to an exposed metal heater section',
      caption: 'Jackets on — exposed metal still leaks heat',
    },
    agitateStats: [
      { value: '20–40%', label: 'Typical cut in zone heating energy' },
      { value: '~70%', label: 'Less heat loss on insulated zone' },
      { value: '30k+', label: 'PKR / month — Paragon (5 machines)' },
      { value: '200k+', label: 'PKR / month — Al Khair (8 machines)' },
    ],
    mechanismTitle: 'Segmented jackets, full barrel.',
    mechanism:
      'Custom removable jackets sized to each zone diameter and length. Straps come off for bands and thermocouples. Heat stays in the melt; the hall runs cooler.',
    mechanismImage: {
      src: `${EXT_IMG}/mechanism-jackets.jpg`,
      alt: 'ThermoSave insulation jackets wrapped around an extruder barrel with feed chutes',
      caption: 'Zone-by-zone coverage on a live extrusion line',
    },
    mediaTitle: 'See it on a real extrusion line.',
    mediaSubhead: 'Plant video and photos — ThermoSave jackets in Pakistan, not stock.',
    offerTitle: 'What you get for an extrusion assessment',
    offerBullets: [
      'Free energy-loss assessment for barrel heating zones',
      'Custom-fit removable jackets for continuous extrusion heat',
      'Safer touch surfaces and cooler ambient near the line',
      'Optional mica or ceramic bands when zones need replacement',
      'Typical lead time 7–10 business days — Call or WhatsApp',
    ],
    relatedProducts: [
      {
        slug: 'thermal-insolations',
        label: 'Thermal Insulation Jackets',
        href: '/products/thermal-insolations',
      },
      {
        slug: 'ceramic-band-heater',
        label: 'Ceramic Band Heaters',
        href: '/products/ceramic-band-heater',
      },
      {
        slug: 'mica-band-heaters',
        label: 'Mica Band Heaters',
        href: '/products/mica-band-heaters',
      },
    ],
    videos: [
      {
        playbackId: 'tnGetGeoU900XbdKME02WbpmN7sw00GsvTsfwXzzYHb2EM',
        title: 'Extrusion line jackets',
        durationLabel: '0:19',
      },
    ],
    gallery: [
      {
        src: `${EXT_IMG}/gallery-barrel.jpg`,
        alt: 'Long extruder barrel wrapped in quilted ThermoSave insulation jackets',
        caption: 'Full barrel run — jackets along heating zones',
      },
      {
        src: `${EXT_IMG}/gallery-feed.jpg`,
        alt: 'Extruder barrel with ThermoSave jackets and feed chute with recycled material',
        caption: 'Feed section — jackets stay on during production',
      },
      {
        src: `${EXT_IMG}/gallery-hopper.jpg`,
        alt: 'Extrusion line with hopper, ThermoSave jackets, and plant floor view',
        caption: 'Hopper to die — continuous line coverage',
      },
      {
        src: `${EXT_IMG}/gallery-gauges.jpg`,
        alt: 'Extruder with insulation jackets, pressure gauges, and orange control cabinet',
        caption: 'Plant floor — jackets beside controls and gauges',
      },
    ],
    faqs: [
      {
        q: 'Where do jackets go on an extrusion line?',
        a: 'Along heated barrel zones from feed to die. We size each segment to your diameters, lengths, and clearances after a short assessment.',
      },
      {
        q: 'Will jackets interfere with sensors or maintenance?',
        a: 'No. Removable straps and buckles — pull jackets for bands, thermocouples, and heaters without destroying the insulation.',
      },
      {
        q: 'Pipe, profile, film, compounding — can you cover our line type?',
        a: 'Yes. Same barrel-heat problem across continuous extrusion. We size to your machine, not a one-size jacket.',
      },
      {
        q: 'Do we need new heater bands first?',
        a: 'Not always. Jackets work over existing bands. We can size mica or ceramic replacements at the same time if zones are failing.',
      },
      {
        q: 'How fast is payback on extrusion?',
        a: 'Usually months from electricity savings. We estimate from your zone kW, hours, and tariff in the free assessment.',
      },
      {
        q: 'Can you cover our plant outside Lahore / Rawalpindi?',
        a: 'Yes — we support plants across 15 cities in Pakistan. Call or WhatsApp and we will tell you how we can cover you.',
      },
    ],
  },
  {
    slug: 'hoppers',
    name: 'Hoppers & Hopper Dryers',
    shortName: 'Hoppers',
    benefit:
      'Custom insulation jackets for hopper dryers and material hoppers — cut wall heat loss so drying energy stays in the resin bed.',
    coverImage: `${HOP_IMG}/machine-full.jpg`,
    seoTitle: 'Hopper Dryer Insulation Jackets | ThermoSave',
    seoDescription:
      'Thermal insulation jackets for plastic hopper dryers and material hoppers. Cut heat loss, cooler halls, safer surfaces. Free assessment in Pakistan.',
    headline: 'Stop heating the hall with your hopper dryer.',
    subhead:
      'ThermoSave jackets wrap hot hopper walls so drying heat stays in the resin — not on your operators and your electricity bill.',
    problemTitle: 'Thin hopper walls dump heat all shift.',
    problem:
      'Hopper dryers hold resin at elevated temperature for hours. Uninsulated single-wall hoppers radiate that heat into the plant — you pay for kWh that never dries the pellets.',
    problemImage: {
      src: `${HOP_IMG}/problem-bare.jpg`,
      alt: 'Hopper dryer shell on a plant floor before full insulation coverage',
      caption: 'Hot hopper shell — heat leaving the dryer',
    },
    agitateTitle: 'Wall loss is a PKR line item.',
    agitate:
      'Industry data puts wall heat loss roughly 20–30% on open hoppers; jackets and insulated shells cut that loss about 30–40%. Safer skins, cooler ambient, more even bed temperature.',
    agitateImage: {
      src: `${HOP_IMG}/agitate-heat.jpg`,
      alt: 'Hopper body with ThermoSave jackets reducing radiant heat into the hall',
      caption: 'Jackets on — heat stays in the resin bed',
    },
    agitateStats: [
      { value: '30–40%', label: 'Less heat loss vs uninsulated hopper walls' },
      { value: '~35%', label: 'Typical drying-energy cut with jackets' },
      { value: '−10°C+', label: 'Lower surface temp with a cover (OEM tests)' },
      { value: 'Months', label: 'Usual payback from electricity savings' },
    ],
    mechanismTitle: 'Jackets sized to your hopper.',
    mechanism:
      'Custom removable jackets wrap the cone and shell — leave ports, filters, and sight glasses clear. Straps come off for maintenance. Heat stays in the bed; the hall runs cooler.',
    mechanismImage: {
      src: `${HOP_IMG}/mechanism-jacket.jpg`,
      alt: 'ThermoSave thermal jackets wrapped around a hopper dryer body',
      caption: 'Custom jackets on a hopper dryer — straps for maintenance',
    },
    mediaTitle: 'See it on a real hopper dryer.',
    mediaSubhead: 'Plant video and photos — ThermoSave jackets in Pakistan, not stock.',
    offerTitle: 'What you get for a hopper assessment',
    offerBullets: [
      'Free energy-loss assessment for hopper dryer / material hopper shells',
      'Custom-fit removable jackets sized to cone, body, and clearances',
      'Safer touch surfaces and cooler ambient near the dryer',
      'Works with hot-air and desiccant hopper dryers already on your floor',
      'Typical lead time 7–10 business days — Call or WhatsApp',
    ],
    relatedProducts: [
      {
        slug: 'thermal-insolations',
        label: 'Thermal Insulation Jackets',
        href: '/products/thermal-insolations',
      },
      {
        slug: 'ceramic-band-heater',
        label: 'Ceramic Band Heaters',
        href: '/products/ceramic-band-heater',
      },
      {
        slug: 'mica-band-heaters',
        label: 'Mica Band Heaters',
        href: '/products/mica-band-heaters',
      },
    ],
    videos: [
      {
        playbackId: 'ex00F1RNjqPQi3uztYhYu201YV4XabILc5UWHrSSIBF3o',
        title: 'Hopper dryer on the plant floor',
        durationLabel: '0:23',
      },
    ],
    gallery: [
      {
        src: `${HOP_IMG}/gallery-dryer.jpg`,
        alt: 'Plastic hopper dryer in a Pakistan plastics plant',
        caption: 'Hopper dryer — shell heat is the target',
      },
      {
        src: `${HOP_IMG}/gallery-plant-hopper.jpg`,
        alt: 'Material hopper feeding an insulated processing barrel with ThermoSave jackets',
        caption: 'Material hopper above a jacketed process line',
      },
      {
        src: `${HOP_IMG}/gallery-line-hopper.jpg`,
        alt: 'Extrusion line hopper with ThermoSave insulation jackets on the barrel',
        caption: 'Hopper + barrel jackets on a live line',
      },
    ],
    faqs: [
      {
        q: 'Where do jackets go on a hopper dryer?',
        a: 'Around the heated hopper body and cone — wherever the outer shell runs hot. We leave room for ports, filters, heaters, and sight glasses after a short assessment.',
      },
      {
        q: 'Hot-air vs desiccant dryer — does it matter?',
        a: 'Same wall-loss problem on both. Jackets cut radiant loss from the shell; they do not replace desiccant or process settings.',
      },
      {
        q: 'Will jackets interfere with loading or maintenance?',
        a: 'No. Removable straps and buckles — pull jackets for filters, heaters, and sensors without destroying the insulation.',
      },
      {
        q: 'Our hopper is already “double-wall.” Still worth jackets?',
        a: 'Often yes if the outer skin is still hot to the touch or the hall around the dryer is uncomfortable. We check surface temps on assessment.',
      },
      {
        q: 'How fast is payback on hopper dryers?',
        a: 'Usually months from electricity savings — dryers often run many hours a day. We estimate from heater kW, hours, and tariff in the free assessment.',
      },
      {
        q: 'Can you cover our plant outside Lahore / Rawalpindi?',
        a: 'Yes — we support plants across 15 cities in Pakistan. Call or WhatsApp and we will tell you how we can cover you.',
      },
    ],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((item) => item.slug === slug)
}

export function getAllIndustries(): Industry[] {
  return industries
}
