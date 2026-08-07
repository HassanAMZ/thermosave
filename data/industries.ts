/**
 * Industry pages — Hook by process (Brunson) + Hormozi value stack.
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
  problem: string
  agitateTitle: string
  agitate: string
  mechanismTitle: string
  mechanism: string
  mediaTitle: string
  mediaSubhead: string
  offerTitle: string
  offerBullets: string[]
  relatedProducts: IndustryRelatedProduct[]
  videos: IndustryVideo[]
  photos: IndustryPhoto[]
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
    problemTitle: 'Open bands on a continuous extruder throw heat all shift.',
    problem:
      'Extrusion blow moulding runs barrel and die-head zones hot for hours. Uninsulated mica or ceramic bands radiate a large share of that energy into the room. Controllers compensate by cycling heaters harder. You still pay for every kilowatt that never reached the parison — and the hall stays hotter than it needs to be.',
    agitateTitle: 'On EBM, wasted heat is a line item — not a side effect.',
    agitate:
      'Unlike short injection cycles, EBM barrels and heads often hold setpoint continuously. Industry jackets on plasticizing systems commonly cut zone heating energy on the order of 20–40%, with large drops in radiant loss from the barrel surface. Catalog results for ThermoSave jackets reach up to ~40% energy cost savings and ~70% less heat loss on the insulated zone; measured plant examples elsewhere include ~30k PKR/month on five machines and 200k+ PKR/month across eight. Cooler surfaces also reduce burn risk and heat load on nearby controls and hydraulics. Payback is usually months, not years — we model your zones in a free assessment.',
    mechanismTitle: 'Jackets on barrel + head — heat stays where the melt is.',
    mechanism:
      'We size removable, high-temperature cloth jackets to your barrel diameters, zone lengths, and die-head geometry. Straps and buckles let maintenance pull jackets for band or thermocouple work without destroying the insulation package. Heat stays toward the melt; bands cycle less aggressively to hold setpoint; ambient near the machine drops. Pair with correctly sized mica or ceramic bands when zones need replacement — jackets deliver the largest cut in radiant loss either way.',
    mediaTitle: 'On real extrusion blow moulding machines.',
    mediaSubhead:
      'Plant video and install photos from ThermoSave jackets on EBM barrels and heads — not stock.',
    offerTitle: 'What you get for an EBM line assessment',
    offerBullets: [
      'Free energy-loss assessment sized to your extruder barrel and die-head zones',
      'Custom-fit removable jackets — high-temp cloth systems built for continuous plasticizing heat',
      'Burn protection and cooler ambient near the machine',
      'Optional pairing with mica or ceramic band heaters when zones need replacement',
      'Typical custom lead time 7–10 business days — Call or WhatsApp to start',
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
        title: 'Extrusion blow moulding — jackets on barrel & head',
        durationLabel: '0:57',
      },
      {
        playbackId: 'ZVACQot3E02ybvu4gv47AI4j9TglqQjPNzh6MKxHLvEM',
        title: 'Extrusion blow moulding — plant walkthrough',
        durationLabel: '0:35',
      },
      {
        playbackId: 'qVcJahoLES00aG9ghmIowcOpAucVL57HhRbkH00WTUcbM',
        title: 'Extrusion blow moulding — close-up install',
        durationLabel: '0:18',
      },
    ],
    photos: [
      {
        src: `${IMG}/machine-full.jpg`,
        alt: 'Extrusion blow moulding machine with ThermoSave insulation jackets on the barrel',
        caption: 'Full line — jackets on the extruder barrel zones',
      },
      {
        src: `${IMG}/head-jackets.jpg`,
        alt: 'ThermoSave jackets wrapped around extruder barrel and die head',
        caption: 'Barrel and die-head coverage',
      },
      {
        src: `${IMG}/barrel-partial.jpg`,
        alt: 'Insulated barrel zones next to exposed heater bands on an extruder',
        caption: 'Insulated vs open heater bands on the same barrel',
      },
      {
        src: `${IMG}/install.jpg`,
        alt: 'Technician fitting ThermoSave thermal jackets on blow moulding equipment',
        caption: 'Install on an active EBM line',
      },
      {
        src: `${IMG}/bare-barrel.jpg`,
        alt: 'Extruder barrel and die head before insulation jackets',
        caption: 'Bare heated zones — where jackets go',
      },
    ],
    faqs: [
      {
        q: 'Where do jackets go on an extrusion blow moulding machine?',
        a: 'Typically along heated extruder barrel zones and around the die / head assembly where surface temperatures are high and radiant loss is continuous. We size to your diameters, zone lengths, and clearances after a short assessment.',
      },
      {
        q: 'Will jackets interfere with maintenance or thermocouples?',
        a: 'No. Jackets are removable with straps and buckles so your team can access bands and sensors without cutting insulation away. Lead wires are routed as part of the fit.',
      },
      {
        q: 'Do we need new heater bands first?',
        a: 'Not always. Jackets cut radiant loss over existing bands. If zones are failing or undersized, we can size mica or ceramic replacements at the same time — many plants run both.',
      },
      {
        q: 'How fast is payback on EBM?',
        a: 'Continuous plasticizing heat means wasted kWh adds up every shift. Plants we work with typically see payback from electricity savings within months. We estimate your case from zone kW, hours, and tariff in the free assessment.',
      },
      {
        q: 'Can you cover our plant outside Lahore / Rawalpindi?',
        a: 'Yes. We already support plastic plants across 15 cities in Pakistan. Call or WhatsApp and we will tell you honestly how we can cover you.',
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
