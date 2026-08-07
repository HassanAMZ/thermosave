/**
 * Conversion copy for published products (Hormozi value + Brunson Hook/Story/Offer).
 * Specs and images stay in `data/products.ts`.
 */

export type ProductFaq = {
  q: string
  a: string
}

export type ProductMarketing = {
  displayTitle: string
  headline: string
  subhead: string
  benefit: string
  seoTitle: string
  seoDescription: string
  problem: string
  agitate: string
  mechanism: string
  offerBullets: string[]
  proofPoints: string[]
  faqs: ProductFaq[]
  chooserLabel: string
  chooserWhen: string
  relatedCta?: string
}

export const productMarketing: Record<string, ProductMarketing> = {
  'mica-band-heaters': {
    displayTitle: 'Mica Band Heaters',
    headline: 'Tight, custom mica bands that heat barrels and nozzles fast.',
    subhead:
      'SS-jacketed mica with Ni20Cr80 winding — precise lengths, fast heat-up, built for barrels and nozzles that need a thin, reliable band.',
    benefit:
      'SS-jacketed mica band heaters with Ni20Cr80 winding — faster heat-up, less impair on barrels and nozzles.',
    seoTitle: 'Mica Band Heaters — Custom Barrel & Nozzle Heat | ThermoSave',
    seoDescription:
      'Made in Japan mica band heaters sized to your barrel and nozzle. Fast heat-up, custom lengths. Free energy loss assessment for plastic plants in Pakistan.',
    problem:
      'When a band runs loose, burns out early, or takes too long to reach set point, you lose cycles — and you still pay for every kilowatt that never reached the melt.',
    agitate:
      'Mica is the workhorse for standard temperatures and tight clearances. The trap is treating “heater only” as the whole energy story: open bands still throw heat into the hall. Size the band right first — then stop the leak with insulation where it pays.',
    mechanism:
      'Non-magnetic stainless sheath with Ni20Cr80 winding transfers heat by conduction into the barrel. We cut precise lengths and nozzle heaters to your OD, width, wattage, and voltage so the fit stays tight and response stays fast.',
    offerBullets: [
      'Custom length and nozzle heaters for your machine',
      'Made in Japan mica construction',
      'Sized to barrel diameter, wattage, and voltage',
      'Typical lead time 7–10 business days',
      'Free energy loss assessment — Call or WhatsApp',
    ],
    proofPoints: [
      '200+ plastic plants across Pakistan',
      'Custom sizing across injection, blow, and extrusion',
      'Clear upgrade path to ceramic bands + insulation jackets for kWh savings',
    ],
    faqs: [
      {
        q: 'When should I choose mica over ceramic?',
        a: 'Mica fits standard process temperatures, thin profiles, custom cutouts, and nozzle heaters where fast conduction and a tight clamp matter most. For higher temps or built-in insulation toward the barrel, look at ceramic bands — and add jackets when you want the largest cut in heat loss to the room.',
      },
      {
        q: 'Can you match our existing machine brands and zones?',
        a: 'Yes. We size to barrel diameter, length, wattage, and voltage across injection molding, blow molding, and extrusion equipment of most brands.',
      },
      {
        q: 'How fast can we get replacements?',
        a: 'Typical lead time is 7–10 business days for custom-sized heaters, confirmed when we size your order.',
      },
      {
        q: 'How do we cut electricity after we replace bands?',
        a: 'New mica bands fix heat delivery. Removable insulation jackets cut radiant loss into the hall — often the larger PKR line item. We model both in a free assessment.',
      },
    ],
    chooserLabel: 'Fast heat-up & custom nozzles',
    chooserWhen: 'Choose mica when you need thin, precise bands and nozzle heaters that respond quickly.',
    relatedCta: 'Pair with insulation jackets to keep heat in the melt — not the hall.',
  },

  'ceramic-band-heater': {
    displayTitle: 'Ceramic Band Heaters',
    headline: 'High-temp barrel heat with less waste to the room.',
    subhead:
      'Interlocking ceramic tiles and a stainless sheath — up to 1600°F and 45 W/in², Made in Japan, opens fully for install, repairable in the field.',
    benefit:
      'Ceramic band heaters up to 1600°F and 45 W/in² — Made in Japan, built for demanding plastic machines.',
    seoTitle: 'Ceramic Band Heaters — High-Temp Efficient Barrel Heat | ThermoSave',
    seoDescription:
      'Ceramic band heaters up to 1600°F and 45 W/in². Made in Japan, open for install, repairable. For injection, blow, and extrusion plants in Pakistan.',
    problem:
      'High-temperature resins and hard-running zones burn through thin uninsulated bands. Heat that should stay in the melt ends up raising hall temperature and electric bills.',
    agitate:
      'Industry-typical ceramic bands with fiber insulation often cut power draw versus bare mica-style bands by directing more energy inward. On a multi-machine line running two shifts, that difference shows up every month on the meter — before you even add removable jackets.',
    mechanism:
      'Resistance coils thread through interlocking steatite ceramic tiles inside a stainless sheath, with insulation between tiles and shell. Heat moves by conduction and radiation, so the band can open fully for install and still drive high watt density into the barrel.',
    offerBullets: [
      'Up to 1600°F operating class, up to 45 W/in²',
      'Made in Japan — repairable; replacement spiral wire available',
      'Fully opens for installation and removal',
      'Custom length sized to your zones',
      'Free assessment + Call / WhatsApp support',
    ],
    proofPoints: [
      'Built for injection, blow, blown film, granulators, and extruders',
      'Better heat retention toward the process than thin uninsulated bands',
      '200+ clients; heaters and materials Made in Japan',
    ],
    faqs: [
      {
        q: 'What temperatures and watt densities can ceramic handle?',
        a: 'Our ceramic bands are specified up to 1600°F and watt densities up to 45 W/in² — suited to demanding plastic machines and higher-temp resins. We confirm ratings against your zone setpoints when we size the order.',
      },
      {
        q: 'Are they repairable on site?',
        a: 'Yes. Construction is repairable and replacement spiral wire is available, which cuts downtime versus throwing away a whole band after a single failure.',
      },
      {
        q: 'Will ceramic alone stop heat loss into the hall?',
        a: 'Ceramic construction already directs more heat inward than thin uninsulated mica. Removable insulation jackets add another layer of savings on radiant loss — many plants run both. We can size the stack in an assessment.',
      },
      {
        q: 'How long to delivery?',
        a: 'Typical lead time is 7–10 business days for custom-sized bands, depending on machine count and dimensions.',
      },
    ],
    chooserLabel: 'High temp + built-in efficiency',
    chooserWhen: 'Choose ceramic for higher temps, high watt density, and bands that open fully for install.',
    relatedCta: 'Add thermal insulation jackets for the largest cut in radiant heat loss.',
  },

  'thermal-insolations': {
    displayTitle: 'Thermal Insulation Jackets',
    headline: 'Keep the heat in the melt — not in your production hall.',
    subhead:
      'Removable, self-extinguishing jackets rated for high-temp cloth systems. Up to ~40% energy savings and ~70% less heat loss on the heated zone — we model your PKR in a free assessment.',
    benefit:
      'Removable, self-extinguishing thermal jackets with high-temp cloth systems rated up to 2000°C.',
    seoTitle: 'Thermal Insulation Jackets — Cut Barrel Heat Loss | ThermoSave',
    seoDescription:
      'Removable thermal insulation jackets for plastic barrels. Up to 40% energy savings and 70% less heat loss. Free assessment for plants across Pakistan.',
    problem:
      'Uninsulated heater bands radiate a large share of their energy into the room. You pay to heat the melt — then you pay again to live with a hotter hall and shorter heater life.',
    agitate:
      'On a 10 kW load, plants using our jackets see on the order of 1 kW per hour saved when heat stays on the barrel. Catalog results reach up to ~40% energy cost savings and ~70% reduction in heat losses on the insulated zone. Measured client examples include ~30k PKR/month on five machines (Paragon) and 200k+ PKR/month across eight machines (Al Khair). Payback is usually measured in months, not years.',
    mechanism:
      'Jackets are removable and built from self-extinguishing high-temperature cloths — ceramic cloth systems up to 1,250°C and silicon-coated alumina cloth systems up to 2,000°C. They wrap the heated zone so radiant and convective loss drops, surface touch risk falls, and bands cycle less aggressively to hold setpoint.',
    offerBullets: [
      'Custom-fit removable jackets for your barrel zones',
      'High-temp cloth systems up to 1,250°C / 2,000°C class',
      'Burn protection for operators; cooler ambient near the machine',
      'Helps protect nearby PLC and hydraulic oil from excess heat',
      'Free energy loss assessment — Call or WhatsApp',
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
        a: 'Yes. They are designed to be removable so maintenance teams can access bands and thermocouples without destroying the insulation package.',
      },
      {
        q: 'Will this work on our machine brand and size?',
        a: 'Yes. We size jackets to your barrel diameter, zone lengths, and layout — across injection molding, blow molding, film, tape lines, woven sack, monofilament, and extrusion equipment.',
      },
      {
        q: 'Do you only cover Lahore / Rawalpindi?',
        a: 'No. We already support plants across 15 cities in Pakistan. Call or WhatsApp and we will tell you honestly how we can cover you.',
      },
    ],
    chooserLabel: 'Biggest kWh cut',
    chooserWhen: 'Choose jackets when open bands are heating the hall and you want measured PKR savings.',
    relatedCta: 'Run jackets over mica or ceramic bands — heat the melt, not the floor.',
  },
}

export function getProductMarketing(slug: string): ProductMarketing | undefined {
  return productMarketing[slug]
}
