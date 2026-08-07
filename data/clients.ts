/**
 * Clientele / case studies — named plant proof (Hormozi likelihood lever).
 * Mux Playback IDs (not Asset IDs) from asset → Playback and Thumbnails.
 */

export type ClientVideo = {
  /** Mux Playback ID — not Asset ID */
  playbackId: string
  title: string
  durationLabel: string
}

export type ClientPhoto = {
  src: string
  alt: string
  caption: string
}

export type ClientStat = {
  value: string
  label: string
}

export type ClientFaq = {
  q: string
  a: string
}

export type ClientCase = {
  slug: string
  name: string
  shortName: string
  location: string
  /** One-line benefit for grid cards */
  benefit: string
  /** Local plant still or Mux thumbnail for covers */
  coverImage: string
  seoTitle: string
  seoDescription: string
  headline: string
  subhead: string
  /** Short plant story — ≤2 sentences */
  storyTitle: string
  story: string
  stats: ClientStat[]
  mediaTitle: string
  mediaSubhead: string
  videos: ClientVideo[]
  /** Extra gallery stills — same 4:3 tile grid as videos */
  gallery: ClientPhoto[]
  offerTitle: string
  offerBullets: string[]
  faqs: ClientFaq[]
}

const BUHADER_PLAYBACK = 'bLcNlAcFRAoU83Vm7bkmzUiTWUr6GyyOzoHjjLpoSyA'
const EAGRY_PLAYBACK = '0101j2IZzUa3e7MusvCYxQsrTK2PptM8vfua02qLTSuBMU'
const SHAIGAN_PLAYBACK = 'zEyP4vjITj022ZxZKqiPh901xGUoIMG4HjTLPFkiwvWiQ'
const EAGRY_IMG = '/static/clients/eagry-force-multan'
const SHAIGAN_IMG = '/static/clients/shaigan-pharma-rpi'

export const clients: ClientCase[] = [
  {
    slug: 'buhader-ind-lhr',
    name: 'Buhader Ind LHR',
    shortName: 'Buhader',
    location: 'Lahore',
    benefit:
      'Plant-floor install on a Lahore plastics line — jackets that keep process heat in the machine, not the hall.',
    coverImage: `https://image.mux.com/${BUHADER_PLAYBACK}/thumbnail.jpg?time=1&width=1280`,
    seoTitle: 'Buhader Ind LHR Case Study | ThermoSave',
    seoDescription:
      'ThermoSave insulation jackets at Buhader Ind, Lahore — plant video of a real install. Free energy-loss assessment for plastic manufacturers in Pakistan.',
    headline: 'Jackets on a Lahore plastics floor — heat stays in the melt.',
    subhead:
      'Buhader Ind LHR runs with ThermoSave insulation on plant equipment. Watch the install, then get the same sizing conversation for your line.',
    storyTitle: 'Named plant. Real machine. No stock footage.',
    story:
      'Buhader Ind in Lahore fitted ThermoSave removable insulation jackets on process equipment so radiant heat stays in the melt instead of cooking the hall. Same approach we use across 200+ plants — sized to the machine, removable for maintenance.',
    stats: [
      { value: 'Lahore', label: 'Plant location' },
      { value: 'Jackets', label: 'Insulation on process heat' },
      { value: 'Removable', label: 'Maintenance-friendly fit' },
      { value: 'Assess', label: 'Same path for your floor' },
    ],
    mediaTitle: 'Plant video from Buhader Ind LHR',
    mediaSubhead: 'Phone-shot floor footage — jackets on real equipment, not a showroom.',
    videos: [
      {
        playbackId: BUHADER_PLAYBACK,
        title: 'Buhader Ind LHR — plant install',
        durationLabel: 'Plant clip',
      },
    ],
    gallery: [],
    offerTitle: 'What we deliver for plants like Buhader',
    offerBullets: [
      'Custom removable insulation jackets sized to your barrels, die heads, or hoppers',
      'Free energy-loss assessment — Call / WhatsApp, no fake checkout',
      'Made-in-Japan materials; install guidance so jackets come off for maintenance',
      'Measured savings language when we have meter data — never invented PKR figures',
    ],
    faqs: [
      {
        q: 'Can we visit or call another plant that runs ThermoSave?',
        a: 'We share named references and plant media where clients allow it. Start with a free assessment — we’ll match you to similar machines and cities.',
      },
      {
        q: 'Do jackets change process settings?',
        a: 'No. Jackets keep heat in the melt so heaters cycle less. Output and recipes stay yours; surface temps and hall heat drop.',
      },
      {
        q: 'How fast from assessment to install?',
        a: 'Typical lead time is about 7–10 days after sizing. Removable fit — maintenance teams can take jackets off without cutting.',
      },
    ],
  },
  {
    slug: 'eagry-force-multan',
    name: 'Eagry Force Multan',
    shortName: 'Eagry Force',
    location: 'Multan',
    benefit:
      'Barrel jackets on a Multan plastics line — ThermoSave labels on the machine, heat kept in the melt.',
    coverImage: `${EAGRY_IMG}/barrel-jacket.jpg`,
    seoTitle: 'Eagry Force Multan Case Study | ThermoSave',
    seoDescription:
      'ThermoSave insulation jackets at Eagry Force, Multan — plant photos and video of a real barrel install. Free energy-loss assessment for plastic plants in Pakistan.',
    headline: 'Multan plant, jackets on the barrel — heat stays in the process.',
    subhead:
      'Eagry Force Multan runs ThermoSave removable insulation on process equipment. See the plant stills and clip, then size the same jackets for your line.',
    storyTitle: 'Jackets on the machine — not a brochure render.',
    story:
      'At Eagry Force in Multan, ThermoSave quilted jackets wrap the heated barrel so radiant loss drops and the hall stays cooler. Labels on the fit, straps for maintenance — the same removable approach we install across Pakistan.',
    stats: [
      { value: 'Multan', label: 'Plant location' },
      { value: 'Barrel', label: 'Jacketed process heat' },
      { value: 'Labeled', label: 'ThermoSave plant fit' },
      { value: 'Removable', label: 'Straps for maintenance' },
    ],
    mediaTitle: 'Plant proof from Eagry Force Multan',
    mediaSubhead: 'Floor photos plus Mux clip — jackets on real equipment.',
    videos: [
      {
        playbackId: EAGRY_PLAYBACK,
        title: 'Eagry Force Multan — plant install',
        durationLabel: 'Plant clip',
      },
    ],
    gallery: [
      {
        src: `${EAGRY_IMG}/barrel-jacket.jpg`,
        alt: 'ThermoSave insulation jacket on barrel at Eagry Force Multan',
        caption: 'Barrel jacket with ThermoSave label — Multan plant',
      },
      {
        src: `${EAGRY_IMG}/plant-floor-1.jpg`,
        alt: 'Plant floor with ThermoSave jacketed barrel at Eagry Force',
        caption: 'Jacketed barrel on the production floor',
      },
      {
        src: `${EAGRY_IMG}/plant-floor-2.jpg`,
        alt: 'ThermoSave insulation install at Eagry Force Multan',
        caption: 'Removable quilted jacket on process equipment',
      },
      {
        src: `${EAGRY_IMG}/plant-floor-3.jpg`,
        alt: 'ThermoSave energy-saving insulation jacket at Multan plastics plant',
        caption: 'Plant install — heat kept in the melt',
      },
    ],
    offerTitle: 'What we deliver for plants like Eagry Force',
    offerBullets: [
      'Custom removable insulation jackets sized to barrels, die heads, or hoppers',
      'Free energy-loss assessment — Call / WhatsApp, no fake checkout',
      'Plant-ready fit with straps — jackets come off for maintenance without cutting',
      'Named Multan proof plus 200+ installs — measured PKR only when we have meter data',
    ],
    faqs: [
      {
        q: 'Is Multan far for install or service?',
        a: 'We already run installs across Pakistan — Multan included. Assessment starts on Call / WhatsApp; jackets ship sized to your machine.',
      },
      {
        q: 'Will jackets block access for maintenance?',
        a: 'No. Removable straps and labeled sections — take jackets off, service the barrel, put them back. Same pattern as Eagry Force.',
      },
      {
        q: 'Do you invent savings numbers for the case study?',
        a: 'No. We show plant media and factual install details. PKR or kWh claims only when the plant has measured data we can cite.',
      },
    ],
  },
  {
    slug: 'shaigan-pharma-rpi',
    name: 'Shaigan Pharma RPI',
    shortName: 'Shaigan Pharma',
    location: 'Pakistan',
    benefit:
      'ThermoSave jackets on pharma / RPI process equipment — labeled barrel fit, plant video included.',
    coverImage: `${SHAIGAN_IMG}/plant-floor-1.jpg`,
    seoTitle: 'Shaigan Pharma RPI Case Study | ThermoSave',
    seoDescription:
      'ThermoSave insulation jackets at Shaigan Pharma RPI — plant photos and video of a real install. Free energy-loss assessment for process plants in Pakistan.',
    headline: 'Pharma process heat — jackets on the line, not lost to the hall.',
    subhead:
      'Shaigan Pharma RPI runs ThermoSave removable insulation on heated process equipment. See the plant stills and 1:07 clip, then get the same sizing for your floor.',
    storyTitle: 'Named pharma plant. Jackets on the machine.',
    story:
      'At Shaigan Pharma RPI, ThermoSave quilted jackets wrap heated barrel sections so process heat stays in the melt instead of cooking the room. Removable, labeled, maintenance-friendly — same install pattern as our plastics plants.',
    stats: [
      { value: 'Pharma', label: 'Process plant type' },
      { value: 'RPI', label: 'Named line / site' },
      { value: '1:07', label: 'Plant video length' },
      { value: 'Jackets', label: 'Barrel insulation fit' },
    ],
    mediaTitle: 'Plant proof from Shaigan Pharma RPI',
    mediaSubhead: 'Floor photos plus Mux clip — ThermoSave labels on real equipment.',
    videos: [
      {
        playbackId: SHAIGAN_PLAYBACK,
        title: 'Shaigan Pharma RPI — plant install',
        durationLabel: '1:07',
      },
    ],
    gallery: [
      {
        src: `${SHAIGAN_IMG}/plant-floor-1.jpg`,
        alt: 'ThermoSave insulation jackets on process equipment at Shaigan Pharma RPI',
        caption: 'Jacketed barrel on blue frame — Shaigan Pharma RPI',
      },
      {
        src: `${SHAIGAN_IMG}/plant-floor-2.jpg`,
        alt: 'Plant floor with ThermoSave jackets at Shaigan Pharma',
        caption: 'Labeled ThermoSave jackets on heated sections',
      },
      {
        src: `${SHAIGAN_IMG}/plant-floor-3.jpg`,
        alt: 'ThermoSave energy-saving insulation at Shaigan Pharma RPI plant',
        caption: 'Hopper line with removable barrel jackets',
      },
    ],
    offerTitle: 'What we deliver for plants like Shaigan Pharma',
    offerBullets: [
      'Custom removable insulation jackets sized to barrels and heated process sections',
      'Free energy-loss assessment — Call / WhatsApp, no fake checkout',
      'Labeled, strap-fit jackets that come off for maintenance without cutting',
      'Named plant proof (pharma + plastics) — measured PKR only when we have meter data',
    ],
    faqs: [
      {
        q: 'Do you only work with plastics plants?',
        a: 'Most of our installs are plastics — injection, extrusion, blow moulding, hoppers. Shaigan Pharma RPI shows the same jacket approach on heated process equipment in a pharma / RPI setting.',
      },
      {
        q: 'Can jackets meet plant hygiene / access needs?',
        a: 'Jackets are removable with straps — take them off for cleaning or service, put them back. We size to your machine so covers don’t block required access points.',
      },
      {
        q: 'How do we start for a pharma or specialty line?',
        a: 'Same path as plastics: free assessment, photos or a short site call, then sized jackets. Call / WhatsApp — no gated brochure.',
      },
    ],
  },
]

export function getClient(slug: string): ClientCase | undefined {
  return clients.find((c) => c.slug === slug)
}

export function getAllClients(): ClientCase[] {
  return clients
}
