/**
 * Industry pages — Hook by process (Brunson) + Hormozi value stack.
 * Visual-first for Pakistan plant buyers: media before long copy.
 * Product tools stay in `data/products.ts` / `data/productMarketing.ts`.
 */

export type IndustryFaq = {
  q: string
  a: string
}

export type IndustryVideo = {
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

const IMG = '/static/industries/extrusion-blow-moulding'

export const industries: Industry[] = [
  {
    slug: 'extrusion-blow-moulding',
    name: 'Extrusion Blow Moulding',
    shortName: 'Blow moulding',
    benefit:
      'Custom insulation jackets for extruder barrels and die heads — cut radiant heat loss on continuous EBM lines.',
    coverImage: `${IMG}/machine-full.jpg`,
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
      src: `${IMG}/bare-barrel.jpg`,
      alt: 'Extruder barrel and die head before insulation jackets',
      caption: 'Bare heated zones — heat leaving the machine',
    },
    agitateTitle: 'Wasted heat is a PKR line item.',
    agitate:
      'Continuous plasticizing means every open zone burns kWh all day. Jackets cut that loss — payback is usually months.',
    agitateImage: {
      src: `${IMG}/barrel-partial.jpg`,
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
      src: `${IMG}/head-jackets.jpg`,
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
        playbackId: 'auTfUAUZIb6K2DM8jXCwBdWgspDwn8z7wuf004tmN3lY',
        title: 'Jackets on barrel & head',
        durationLabel: '0:57',
      },
      {
        playbackId: 'ZVACQot3E02ybvu4gv47AI4j9TglqQjPNzh6MKxHLvEM',
        title: 'Plant walkthrough',
        durationLabel: '0:35',
      },
      {
        playbackId: 'qVcJahoLES00aG9ghmIowcOpAucVL57HhRbkH00WTUcbM',
        title: 'Close-up install',
        durationLabel: '0:18',
      },
    ],
    gallery: [
      {
        src: `${IMG}/machine-full.jpg`,
        alt: 'Extrusion blow moulding machine with ThermoSave insulation jackets on the barrel',
        caption: 'Full line — jackets on barrel zones',
      },
      {
        src: `${IMG}/install.jpg`,
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
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((item) => item.slug === slug)
}

export function getAllIndustries(): Industry[] {
  return industries
}
