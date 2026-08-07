/**
 * Conversion copy for published products (Hormozi value + Brunson Hook/Story/Offer).
 * Specs and carousel paths stay in `data/products.ts`.
 * Story splits follow industry pages: photo + short copy, then media dump.
 * Plain English (~5th grade). No em dashes in customer-facing strings.
 */

export type ProductFaq = {
  q: string
  a: string
}

export type ProductPhoto = {
  src: string
  alt: string
  caption: string
}

export type ProductStat = {
  value: string
  label: string
}

export type ProductMarketing = {
  displayTitle: string
  headline: string
  subhead: string
  benefit: string
  seoTitle: string
  seoDescription: string
  problemTitle: string
  /** Keep to ~2 short sentences. Image carries the story. */
  problem: string
  problemImage: ProductPhoto
  agitateTitle: string
  agitate: string
  agitateImage: ProductPhoto
  agitateStats: ProductStat[]
  mechanismTitle: string
  mechanism: string
  mechanismImage: ProductPhoto
  mediaTitle: string
  mediaSubhead: string
  /** Extra gallery stills (not used in story split layouts) */
  gallery: ProductPhoto[]
  offerBullets: string[]
  proofPoints: string[]
  faqs: ProductFaq[]
  chooserLabel: string
  chooserWhen: string
  relatedCta?: string
}

const CUT = '/static/products/cutouts'
const PLANT = {
  bare: '/static/industries/extrusion-blow-moulding/bare-barrel.jpg',
  partial: '/static/industries/extrusion-blow-moulding/barrel-partial.jpg',
  jackets: '/static/industries/extrusion-blow-moulding/head-jackets.jpg',
  install: '/static/industries/extrusion-blow-moulding/install.jpg',
  extPartial: '/static/industries/extrusion-lines/agitate-partial.jpg',
  extJackets: '/static/industries/extrusion-lines/mechanism-jackets.jpg',
  extBarrel: '/static/industries/extrusion-lines/gallery-barrel.jpg',
  hopBare: '/static/industries/hoppers/problem-bare.jpg',
  hopJacket: '/static/industries/hoppers/mechanism-jacket.jpg',
} as const

export const productMarketing: Record<string, ProductMarketing> = {
  'mica-band-heaters': {
    displayTitle: 'Mica Band Heaters',
    headline: 'Tight, custom mica bands that heat barrels and nozzles fast.',
    subhead:
      'SS-jacketed mica with Ni20Cr80 winding. Precise lengths, fast heat-up. Built for barrels and nozzles that need a thin, reliable band.',
    benefit:
      'Heat barrels and nozzles fast. Tight SS-jacketed mica bands built for plastic machines.',
    seoTitle: 'Mica Band Heaters | Custom Barrel & Nozzle Heat | ThermoSave',
    seoDescription:
      'Made in Pakistan mica band heaters sized to your barrel and nozzle. Fast heat-up, custom lengths. Free energy loss assessment for plastic plants in Pakistan.',
    problemTitle: 'Loose or slow bands cost cycles.',
    problem:
      'When a band runs loose, burns out early, or takes too long to reach set point, you lose cycles. You still pay for kilowatts that never reached the melt.',
    problemImage: {
      src: PLANT.bare,
      alt: 'Open heater bands on an extruder barrel',
      caption: 'Open bands. Heat leaving the machine.',
    },
    agitateTitle: 'Fit first. Then stop the leak.',
    agitate:
      'Mica is the workhorse for standard temps and tight clearances. Size the band right. Then add jackets where radiant loss still shows up on the meter.',
    agitateImage: {
      src: PLANT.partial,
      alt: 'Insulated zones next to open heater bands',
      caption: 'Insulated vs open zones on the same barrel',
    },
    agitateStats: [
      { value: 'Custom', label: 'Lengths & nozzle heaters' },
      { value: '7-10', label: 'Day typical lead time' },
      { value: 'Pakistan', label: 'Made & sized here' },
      { value: 'Fast', label: 'Heat-up response' },
    ],
    mechanismTitle: 'Heat into the barrel, not the hall.',
    mechanism:
      'Non-magnetic stainless sheath with Ni20Cr80 winding transfers heat by conduction. We cut OD, width, wattage, and voltage so the clamp stays tight.',
    mechanismImage: {
      src: `${CUT}/00001.png`,
      alt: 'Mica band heater cutout with stainless sheath and clamp',
      caption: 'SS-jacketed mica band. Product view.',
    },
    mediaTitle: 'Mica band views',
    mediaSubhead:
      'Angles, clamps, cutouts, and nozzle styles. Click any tile on the hero to enlarge.',
    gallery: [
      {
        src: `${CUT}/00001-1.png`,
        alt: 'Mica band heater side angle',
        caption: 'Clamp and lead exit',
      },
      {
        src: `${CUT}/00001-2.png`,
        alt: 'Mica band with sensor cutouts',
        caption: 'Holes and cutouts for sensors',
      },
      {
        src: `${CUT}/00001-3.png`,
        alt: 'Mica band heater terminal studs',
        caption: 'Terminal stud construction',
      },
      {
        src: `${CUT}/00001-4.png`,
        alt: 'Mica band heater open clamp',
        caption: 'Open clamp for install',
      },
      {
        src: PLANT.extBarrel,
        alt: 'Heated barrel zones on an extrusion line',
        caption: 'Where bands sit on the line',
      },
    ],
    offerBullets: [
      'Custom length and nozzle heaters for your machine',
      'Made in Pakistan mica construction',
      'Sized to barrel diameter, wattage, and voltage',
      'Typical lead time 7-10 business days',
      'Free energy loss assessment. Call or WhatsApp.',
    ],
    proofPoints: [
      '200+ plastic plants across Pakistan',
      'Custom sizing across injection, blow, and extrusion',
      'Clear upgrade path to ceramic bands + insulation jackets for kWh savings',
    ],
    faqs: [
      {
        q: 'When should I choose mica over ceramic?',
        a: 'Choose mica for standard temps, thin profiles, custom cutouts, and nozzle heaters. For higher temps, look at ceramic. Add jackets when you want the biggest cut in heat loss to the room.',
      },
      {
        q: 'Can you match our existing machine brands and zones?',
        a: 'Yes. We size to barrel diameter, length, wattage, and voltage across injection molding, blow molding, and extrusion equipment of most brands.',
      },
      {
        q: 'How fast can we get replacements?',
        a: 'Typical lead time is 7-10 business days for custom-sized heaters. We confirm when we size your order.',
      },
      {
        q: 'How do we cut electricity after we replace bands?',
        a: 'New mica bands fix heat delivery. Removable insulation jackets cut radiant loss into the hall. That is often the larger PKR line item. We model both in a free assessment.',
      },
    ],
    chooserLabel: 'Fast heat-up & custom nozzles',
    chooserWhen:
      'Choose mica when you need thin, precise bands and nozzle heaters that respond quickly.',
    relatedCta: 'Pair with insulation jackets to keep heat in the melt, not the hall.',
  },

  'ceramic-band-heater': {
    displayTitle: 'Ceramic Band Heaters',
    headline: 'High-temp barrel heat with less waste to the room.',
    subhead:
      'Interlocking ceramic tiles and a stainless sheath. Up to 1600°F and 45 W/in². Made in Pakistan. Opens fully for install. Repairable in the field.',
    benefit:
      'High heat up to 1600°F and 45 W/in². Made in Pakistan. Built for hard-running plastic machines.',
    seoTitle: 'Ceramic Band Heaters | High-Temp Barrel Heat | ThermoSave',
    seoDescription:
      'Ceramic band heaters up to 1600°F and 45 W/in². Made in Pakistan, open for install, repairable. For injection, blow, and extrusion plants in Pakistan.',
    problemTitle: 'High-temp zones eat thin bands.',
    problem:
      'Hard-running zones burn through thin uninsulated bands. Heat that should stay in the melt raises hall temperature and electric bills.',
    problemImage: {
      src: PLANT.hopBare,
      alt: 'Bare heated equipment before insulation',
      caption: 'Bare heated surfaces. Loss you can feel.',
    },
    agitateTitle: 'Direct heat inward. Then add jackets.',
    agitate:
      'Ceramic with fiber insulation typically cuts power draw versus bare mica-style bands. More energy goes into the barrel. On a multi-machine line, that shows up every month.',
    agitateImage: {
      src: PLANT.extPartial,
      alt: 'Partially insulated extrusion barrel',
      caption: 'Open vs insulated zones on extrusion',
    },
    agitateStats: [
      { value: '1600°F', label: 'Operating class' },
      { value: '45', label: 'W/in² watt density' },
      { value: 'Full open', label: 'For install & remove' },
      { value: 'Repairable', label: 'Replacement spiral wire' },
    ],
    mechanismTitle: 'Tiles inside a stainless sheath.',
    mechanism:
      'Resistance coils thread through interlocking steatite ceramic tiles. Heat moves by conduction and radiation. The band opens fully and still drives high watt density.',
    mechanismImage: {
      src: `${CUT}/00002.png`,
      alt: 'Ceramic band heater showing interlocking tiles',
      caption: 'Ceramic tiles inside stainless sheath',
    },
    mediaTitle: 'Ceramic band views',
    mediaSubhead:
      'Tile interiors, clamps, and leads. Transparent cutouts with no third-party branding.',
    gallery: [
      {
        src: `${CUT}/00002-1.png`,
        alt: 'Ceramic band heater with armored lead',
        caption: 'Armored lead exit',
      },
      {
        src: `${CUT}/00002-2.png`,
        alt: 'Ceramic band heater clamp spring',
        caption: 'Spring clamp detail',
      },
      {
        src: `${CUT}/00002-3.png`,
        alt: 'Ceramic band heater open ring',
        caption: 'Opens fully for install',
      },
      {
        src: PLANT.extJackets,
        alt: 'Insulated extrusion barrel zones',
        caption: 'Ceramic zones under jackets on the line',
      },
    ],
    offerBullets: [
      'Up to 1600°F operating class, up to 45 W/in²',
      'Made in Pakistan. Repairable. Replacement spiral wire available.',
      'Fully opens for installation and removal',
      'Custom length sized to your zones',
      'Free assessment. Call or WhatsApp support.',
    ],
    proofPoints: [
      'Built for injection, blow, blown film, granulators, and extruders',
      'Better heat retention toward the process than thin uninsulated bands',
      '200+ clients. Heaters and materials made in Pakistan.',
    ],
    faqs: [
      {
        q: 'What temperatures and watt densities can ceramic handle?',
        a: 'Our ceramic bands are specified up to 1600°F and up to 45 W/in². That suits hard-running plastic machines and higher-temp resins. We confirm ratings against your zone setpoints when we size the order.',
      },
      {
        q: 'Are they repairable on site?',
        a: 'Yes. Construction is repairable and replacement spiral wire is available. That cuts downtime versus throwing away a whole band after a single failure.',
      },
      {
        q: 'Will ceramic alone stop heat loss into the hall?',
        a: 'Ceramic already directs more heat inward than thin uninsulated mica. Removable insulation jackets add more savings on radiant loss. Many plants run both. We can size the stack in an assessment.',
      },
      {
        q: 'How long to delivery?',
        a: 'Typical lead time is 7-10 business days for custom-sized bands. It depends on machine count and dimensions.',
      },
    ],
    chooserLabel: 'High temp + built-in efficiency',
    chooserWhen:
      'Choose ceramic for higher temps, high watt density, and bands that open fully for install.',
    relatedCta: 'Add thermal insulation jackets for the largest cut in radiant heat loss.',
  },

  'thermal-insolations': {
    displayTitle: 'Thermal Insulation Jackets',
    headline: 'Keep the heat in the melt, not in your production hall.',
    subhead:
      'Removable, self-extinguishing jackets for high-temp cloth systems. Up to ~40% energy savings and ~70% less heat loss on the heated zone. We model your PKR in a free assessment.',
    benefit:
      'Removable jackets that keep heat in the barrel, not the hall. High-temp cloth systems.',
    seoTitle: 'Thermal Insulation Jackets | Cut Barrel Heat Loss | ThermoSave',
    seoDescription:
      'Removable thermal insulation jackets for plastic barrels. Up to 40% energy savings and 70% less heat loss. Free assessment for plants across Pakistan.',
    problemTitle: 'Open bands heat the hall.',
    problem:
      'Uninsulated heater bands radiate a large share of energy into the room. You pay to heat the melt. Then you live with a hotter hall.',
    problemImage: {
      src: PLANT.bare,
      alt: 'Bare extruder barrel and die head',
      caption: 'Bare heated zones before jackets',
    },
    agitateTitle: 'Wasted heat is a PKR line item.',
    agitate:
      'On a 10 kW load, jackets often save about 1 kW/hour when heat stays on the barrel. Measured plants see ~30k to 200k+ PKR/month. Payback is often in months.',
    agitateImage: {
      src: PLANT.partial,
      alt: 'Partially jacketed barrel zones',
      caption: 'Jacketed vs open bands on the same machine',
    },
    agitateStats: [
      { value: '~40%', label: 'Energy cost cut (zone)' },
      { value: '~70%', label: 'Less heat loss' },
      { value: '~1 kW/h', label: 'Example on 10 kW load' },
      { value: 'Months', label: 'Typical payback' },
    ],
    mechanismTitle: 'Removable high-temp cloth systems.',
    mechanism:
      'Self-extinguishing cloths wrap the zone. Ceramic systems go up to 1,250°C. Silicon-coated alumina goes up to 2,000°C. Radiant loss drops and bands cycle less.',
    mechanismImage: {
      src: PLANT.jackets,
      alt: 'Insulation jackets on extruder die head',
      caption: 'Custom jackets on barrel and head',
    },
    mediaTitle: 'Jackets on real machines',
    mediaSubhead:
      'Plant installs. Jackets on barrels and heads the way operators see them on the floor.',
    gallery: [
      {
        src: '/static/products/00003.jpeg',
        alt: 'Thermal insulation jacket on barrel in plant',
        caption: 'Jacket on barrel. Plant view.',
      },
      {
        src: '/static/products/00003-4.jpeg',
        alt: 'Grey thermal jacket segments on machine',
        caption: 'Segmented removable jacket',
      },
      {
        src: '/static/products/00003-7.jpeg',
        alt: 'Thermal jacket install detail',
        caption: 'Straps and zone coverage',
      },
      {
        src: PLANT.install,
        alt: 'ThermoSave jacket installation',
        caption: 'Install on the line',
      },
      {
        src: PLANT.hopJacket,
        alt: 'Jacket on hopper dryer equipment',
        caption: 'Jackets beyond the barrel',
      },
      {
        src: '/static/products/00003-2.jpeg',
        alt: 'Insulated barrel zones in plant',
        caption: 'Multi-zone coverage',
      },
    ],
    offerBullets: [
      'Custom-fit removable jackets for your barrel zones',
      'High-temp cloth systems up to 1,250°C / 2,000°C class',
      'Burn protection for operators. Cooler ambient near the machine.',
      'Helps protect nearby PLC and hydraulic oil from excess heat',
      'Free energy loss assessment. Call or WhatsApp.',
    ],
    proofPoints: [
      'Up to ~40% saving in energy costs on the heated zone',
      'Up to ~70% saving in heat losses',
      '~1 kW/hour saving example on a 10 kW load',
      'Named plant results: Paragon (~30k PKR/mo), Al Khair (200k+ PKR/mo)',
    ],
    faqs: [
      {
        q: "What's the actual ROI on jackets?",
        a: 'Plants we work with typically see payback from electricity savings within months. Measured examples include ~30k PKR/month on five machines (Paragon) and 200k+ PKR/month across eight machines (Al Khair). We model your case in a free assessment.',
      },
      {
        q: 'Can jackets come off for maintenance?',
        a: 'Yes. They come off so maintenance can reach bands and thermocouples without destroying the insulation package.',
      },
      {
        q: 'Will this work on our machine brand and size?',
        a: 'Yes. We size jackets to your barrel diameter, zone lengths, and layout. That covers injection molding, blow molding, film, tape lines, woven sack, monofilament, and extrusion equipment.',
      },
      {
        q: 'Do you only cover Lahore / Rawalpindi?',
        a: 'No. We already support plants across 15 cities in Pakistan. Call or WhatsApp and we will tell you honestly how we can cover you.',
      },
    ],
    chooserLabel: 'Biggest kWh cut',
    chooserWhen:
      'Choose jackets when open bands are heating the hall and you want measured PKR savings.',
    relatedCta: 'Run jackets over mica or ceramic bands. Heat the melt, not the floor.',
  },
}

export function getProductMarketing(slug: string): ProductMarketing | undefined {
  return productMarketing[slug]
}
