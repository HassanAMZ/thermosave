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
const ALKHAIR_PLAYBACK_1 = 'O3TM6avTXvBhuGgroU02Y6qOaLA01tE013xeFz53wxCjs4'
const ALKHAIR_PLAYBACK_2 = 'cvzFaxncAbU7b5x4uRj3Oz00uDNFkLpLTZGYXYmxrrTY'
const MAJOR_PLAYBACK = '8qNAy1VYboZyrjBS9s900pgAN01f01NILbUeqMAmrJfqAA'
const EAGRY_IMG = '/static/clients/eagry-force-multan'
const SHAIGAN_IMG = '/static/clients/shaigan-pharma-rpi'
const TIMESTAR_IMG = '/static/clients/time-star-lhr'
const ALKHAIR_IMG = '/static/clients/al-khair-five-star-foam-lhr'

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
  {
    slug: 'time-star-lhr',
    name: 'Time Star LHR',
    shortName: 'Time Star',
    location: 'Lahore',
    benefit:
      'Barrel jackets on a Lahore plastics line — ThermoSave labels on the machine, heat kept in the melt.',
    coverImage: `${TIMESTAR_IMG}/barrel-jacket.jpg`,
    seoTitle: 'Time Star LHR Case Study | ThermoSave',
    seoDescription:
      'ThermoSave insulation jackets at Time Star, Lahore — plant photos of a real barrel install. Free energy-loss assessment for plastic manufacturers in Pakistan.',
    headline: 'Lahore floor, jackets on the barrel — heat stays in the process.',
    subhead:
      'Time Star LHR runs ThermoSave removable insulation on process equipment. See the plant stills, then size the same jackets for your line.',
    storyTitle: 'Labeled jackets on a real Lahore machine.',
    story:
      'At Time Star in Lahore, ThermoSave quilted jackets wrap the heated barrel so radiant loss drops and the hall stays cooler. Same removable, labeled fit we install across 200+ plants — sized to the machine, off for maintenance.',
    stats: [
      { value: 'Lahore', label: 'Plant location' },
      { value: 'Barrel', label: 'Jacketed process heat' },
      { value: 'Labeled', label: 'ThermoSave plant fit' },
      { value: 'Removable', label: 'Maintenance-friendly' },
    ],
    mediaTitle: 'Plant proof from Time Star LHR',
    mediaSubhead: 'Floor photos — jackets on real equipment, ThermoSave labels visible.',
    videos: [],
    gallery: [
      {
        src: `${TIMESTAR_IMG}/barrel-jacket.jpg`,
        alt: 'ThermoSave insulation jacket on barrel at Time Star Lahore',
        caption: 'Barrel jacket with ThermoSave label — Lahore plant',
      },
      {
        src: `${TIMESTAR_IMG}/plant-floor-1.jpg`,
        alt: 'Plant floor with ThermoSave jacketed barrel at Time Star LHR',
        caption: 'Jacketed barrel on the production floor',
      },
      {
        src: `${TIMESTAR_IMG}/plant-floor-2.jpg`,
        alt: 'ThermoSave insulation install at Time Star Lahore',
        caption: 'Removable quilted jacket on process equipment',
      },
      {
        src: `${TIMESTAR_IMG}/packing-floor.jpg`,
        alt: 'Time Star packing floor with injection machines in Lahore',
        caption: 'Time Star packing line — Lahore plant',
      },
    ],
    offerTitle: 'What we deliver for plants like Time Star',
    offerBullets: [
      'Custom removable insulation jackets sized to barrels, die heads, or hoppers',
      'Free energy-loss assessment — Call / WhatsApp, no fake checkout',
      'Plant-ready labeled fit — jackets come off for maintenance without cutting',
      'Named Lahore proof plus 200+ installs — measured PKR only when we have meter data',
    ],
    faqs: [
      {
        q: 'Do you have video for every plant?',
        a: 'Where clients allow it, we add Mux plant clips. Time Star is photo-led for now — same jackets, same sizing path. Send a clip anytime and we’ll wire it in.',
      },
      {
        q: 'Will jackets block access for maintenance?',
        a: 'No. Removable fit — take jackets off, service the barrel, put them back. Same pattern across our Lahore installs.',
      },
      {
        q: 'How do we get jackets sized for our machine?',
        a: 'Free assessment via Call / WhatsApp. Share machine photos or a short site visit — we size jackets to your barrel and ship typically in 7–10 days.',
      },
    ],
  },
  {
    slug: 'al-khair-five-star-foam-lhr',
    name: 'Al-Khair Five Star Foam LHR',
    shortName: 'Al-Khair',
    location: 'Lahore',
    benefit:
      'Foam extrusion jackets in Lahore — 200k+ PKR / month saved across 8 machines, plant video included.',
    coverImage: `${ALKHAIR_IMG}/extruder-jackets-1.jpg`,
    seoTitle: 'Al-Khair Five Star Foam LHR Case Study | ThermoSave',
    seoDescription:
      'ThermoSave insulation jackets at Al-Khair Five Star Foam, Lahore — 200k+ PKR monthly savings across 8 machines. Plant photos and video of a real extruder install.',
    headline: 'Lahore foam line — jackets on the extruder, 200k+ PKR / month saved.',
    subhead:
      'Al-Khair Five Star Foam runs ThermoSave removable insulation across heated barrels. Measured savings on 8 machines — see the plant stills and clips, then size yours.',
    storyTitle: 'Named foam plant. Metered savings. Real jackets.',
    story:
      'At Al-Khair Five Star Foam in Lahore, ThermoSave quilted jackets wrap the extruder barrel so heat stays in the process. Owner-reported savings: over 200k PKR monthly across 8 machines — three years of working together.',
    stats: [
      { value: '200k+', label: 'PKR / month saved' },
      { value: '8', label: 'Machines jacketed' },
      { value: 'Lahore', label: 'Foam plant' },
      { value: '3 yrs', label: 'Working relationship' },
    ],
    mediaTitle: 'Plant proof from Al-Khair Five Star Foam',
    mediaSubhead: 'Two Mux clips plus floor photos — jackets on a real foam extruder line.',
    videos: [
      {
        playbackId: ALKHAIR_PLAYBACK_1,
        title: 'Al-Khair Five Star Foam LHR — plant install 1',
        durationLabel: '1:11',
      },
      {
        playbackId: ALKHAIR_PLAYBACK_2,
        title: 'Al-Khair Five Star Foam LHR — plant install 2',
        durationLabel: '1:15',
      },
    ],
    gallery: [
      {
        src: `${ALKHAIR_IMG}/extruder-jackets-1.jpg`,
        alt: 'ThermoSave jackets on foam extruder barrel at Al-Khair Lahore',
        caption: 'Full barrel run — ThermoSave jackets on foam extruder',
      },
      {
        src: `${ALKHAIR_IMG}/extruder-jackets-2.jpg`,
        alt: 'Insulated extruder line at Al-Khair Five Star Foam',
        caption: 'Quilted jackets along the extruder barrel',
      },
      {
        src: `${ALKHAIR_IMG}/barrel-detail.jpg`,
        alt: 'Close-up of ThermoSave insulation jackets on Al-Khair extruder',
        caption: 'Labeled ThermoSave sections on heated barrel',
      },
      {
        src: `${ALKHAIR_IMG}/extruder-line.jpg`,
        alt: 'Foam extruder with ThermoSave jackets and hopper at Al-Khair',
        caption: 'Extruder line with hopper — Lahore foam plant',
      },
      {
        src: `${ALKHAIR_IMG}/plant-floor-1.jpg`,
        alt: 'Plant floor at Al-Khair Five Star Foam with jacketed extruder',
        caption: 'Plant floor — jackets on the production line',
      },
      {
        src: `${ALKHAIR_IMG}/plant-floor-2.jpg`,
        alt: 'Al-Khair foam plant with ThermoSave insulated extruder',
        caption: 'Warehouse-scale foam extrusion with insulated barrel',
      },
      {
        src: `${ALKHAIR_IMG}/plant-floor-3.jpg`,
        alt: 'Operator beside ThermoSave jacketed extruder at Al-Khair',
        caption: 'On the floor with the jacketed extruder',
      },
      {
        src: `${ALKHAIR_IMG}/plant-floor-4.jpg`,
        alt: 'Al-Khair Five Star Foam Lahore extruder with ThermoSave jackets',
        caption: 'Long extruder barrel — heat kept in the melt',
      },
      {
        src: `${ALKHAIR_IMG}/plant-floor-5.jpg`,
        alt: 'Foam extrusion equipment with ThermoSave insulation at Al-Khair',
        caption: 'Hopper end of the jacketed foam line',
      },
      {
        src: `${ALKHAIR_IMG}/hopper-line-1.jpg`,
        alt: 'Hopper and jacketed barrel at Al-Khair Five Star Foam',
        caption: 'Hopper + barrel jackets — Multizone process heat',
      },
      {
        src: `${ALKHAIR_IMG}/hopper-line-2.jpg`,
        alt: 'Al-Khair foam line control area with insulated extruder',
        caption: 'Control side of the insulated extruder line',
      },
    ],
    offerTitle: 'What we deliver for plants like Al-Khair',
    offerBullets: [
      'Custom removable insulation jackets sized to extruder barrels and heated zones',
      'Free energy-loss assessment — Call / WhatsApp, no fake checkout',
      'Same removable fit Al-Khair runs — maintenance without cutting jackets',
      'Measured client proof where we have it (200k+ PKR / month on 8 machines here)',
    ],
    faqs: [
      {
        q: 'Are the 200k+ PKR savings real?',
        a: 'Yes — Al-Khair’s owner reported over 200k PKR monthly saved across 8 machines after running ThermoSave jackets for years. We don’t invent figures; we cite measured client proof.',
      },
      {
        q: 'Do foam extruders need different jackets than plastics injection?',
        a: 'Same physics — keep process heat in the barrel. Foam lines are often long continuous barrels; we size removable sections zone by zone so heaters cycle less and the hall stays cooler.',
      },
      {
        q: 'How do we get the same assessment for our foam or plastics line?',
        a: 'Call / WhatsApp for a free energy-loss assessment. Share machine photos or a short site visit — we size jackets and typically ship in 7–10 days.',
      },
    ],
  },
  {
    slug: 'major-electrical-sargodha',
    name: 'Major Electrical Sargodha',
    shortName: 'Major Electrical',
    location: 'Sargodha',
    benefit:
      'Plant-floor install in Sargodha — ThermoSave jackets on heated industrial equipment, video on the floor.',
    coverImage: `https://image.mux.com/${MAJOR_PLAYBACK}/thumbnail.jpg?time=5&width=1280`,
    seoTitle: 'Major Electrical Sargodha Case Study | ThermoSave',
    seoDescription:
      'ThermoSave insulation jackets at Major Electrical, Sargodha — plant video of a real install. Free energy-loss assessment for industrial plants in Pakistan.',
    headline: 'Sargodha floor — jackets on heated equipment, heat stays in the process.',
    subhead:
      'Major Electrical Sargodha runs ThermoSave removable insulation on plant equipment. Watch the 27-second clip, then get the same sizing conversation for your line.',
    storyTitle: 'Named Sargodha plant. Real machine. Short clip.',
    story:
      'At Major Electrical in Sargodha, ThermoSave jackets wrap heated process surfaces so radiant loss drops. Same removable approach we install across Pakistan — sized to the machine, off for maintenance.',
    stats: [
      { value: 'Sargodha', label: 'Plant location' },
      { value: '0:27', label: 'Plant video length' },
      { value: 'Jackets', label: 'Insulation on process heat' },
      { value: 'Assess', label: 'Same path for your floor' },
    ],
    mediaTitle: 'Plant video from Major Electrical Sargodha',
    mediaSubhead: 'Phone-shot floor footage — jackets on real equipment, not a showroom.',
    videos: [
      {
        playbackId: MAJOR_PLAYBACK,
        title: 'Major Electrical Sargodha — plant install',
        durationLabel: '0:27',
      },
    ],
    gallery: [],
    offerTitle: 'What we deliver for plants like Major Electrical',
    offerBullets: [
      'Custom removable insulation jackets sized to heated barrels, vessels, or process sections',
      'Free energy-loss assessment — Call / WhatsApp, no fake checkout',
      'Installs across Pakistan — Sargodha included, not only Lahore',
      'Measured savings language when we have meter data — never invented PKR figures',
    ],
    faqs: [
      {
        q: 'Do you only serve plastics plants in big cities?',
        a: 'No. Major Electrical in Sargodha is one example — we size and ship jackets across Pakistan. Assessment starts on Call / WhatsApp.',
      },
      {
        q: 'Can jackets work outside plastics extrusion?',
        a: 'Same physics anywhere you throw electricity away as surface heat. We size to your equipment — plastics, foam, or other heated industrial process gear.',
      },
      {
        q: 'Any stills for this plant?',
        a: 'This case is video-led for now. Drop plant photos anytime and we’ll add them to the same tile grid.',
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
