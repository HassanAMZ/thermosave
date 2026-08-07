import kebabCase from '@/lib/utils/kebabCase'
import { getProductMarketing } from '@/data/productMarketing'

export type Product = {
  slug: string
  title: string
  date: string
  productsID: string
  tags: string[]
  draft: boolean
  summary: string
  coverImage: string
  carouselImages: string[]
  embedId: string
  price: number
  unit: string
  currency: string
  features: string[]
  details: Record<string, string>
  applications: string[]
}

/**
 * Product catalog — source of truth for listing pages.
 * Each published product also needs a dedicated page at
 * `app/products/<slug>/page.tsx`. Keep those in sync manually.
 * Conversion copy for published items lives in `data/productMarketing.ts`.
 */
export const products: Product[] = [
  {
    slug: 'mica-band-heaters',
    title: 'Mica Band Heaters',
    date: '2022-07-01',
    productsID: '00001',
    tags: ['mica band', 'electrical heaters', 'Made in Japan', 'Barrel Heaters'],
    draft: false,
    summary:
      'SS-jacketed mica band heaters with Ni20Cr80 winding — faster heat-up, less impair on barrels and nozzles. Custom lengths and nozzle heaters.',
    coverImage: '/static/products/00001.png',
    carouselImages: [
      '/static/products/00001.png',
      '/static/products/00001-1.jpg',
      '/static/products/00001-2.jpg',
      '/static/products/00001-3.jpg',
      '/static/products/00001-4.jpg',
      '/static/products/00001-5.jpg',
    ],
    embedId: 'null',
    price: 35,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Made in Japan', 'Fast heat-up', 'Custom lengths', 'Nozzle heaters available'],
    details: { 'Nozzle Heaters': 'All types', Length: 'Custom length', Construction: 'SS jacket, Ni20Cr80 winding' },
    applications: [
      'Injection Molding',
      'Blow Molding',
      'Blown Film',
      'Granulators',
      'Ovens',
      'All Types of Extruders',
    ],
  },
  {
    slug: 'ceramic-band-heater',
    title: 'Ceramic Band Heaters',
    date: '2022-07-01',
    productsID: '00002',
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in Japan', 'Barrel Heaters'],
    draft: false,
    summary:
      'Ceramic band heaters up to 1600°F and 45 W/in² — interlocking tiles, stainless sheath, opens fully for install. Made in Japan, repairable.',
    coverImage: '/static/products/00002.png',
    carouselImages: [
      '/static/products/00002.png',
      '/static/products/00002-1.png',
      '/static/products/00002-2.png',
      '/static/products/00002-3.png',
    ],
    embedId: 'null',
    price: 40,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: [
      'Made in Japan',
      'Up to 1600°F / 45 W/in²',
      'Opens fully for install',
      'Better heat retention toward the barrel',
      'Repairable — replacement spiral wire available',
    ],
    details: {
      Length: 'Custom length',
      'Max temperature': 'Up to 1600°F',
      'Watt density': 'Up to 45 W/in²',
    },
    applications: [
      'Injection Molding',
      'Blow Molding',
      'Blown Film',
      'Granulators',
      'Ovens',
      'All Types of Extruders',
    ],
  },
  {
    slug: 'thermal-insolations',
    title: 'Thermal Insulation Jackets',
    date: '2022-07-01',
    productsID: '00003',
    tags: ['Thermal Insulation', 'electrical insulators', 'Made in Japan'],
    draft: false,
    summary:
      'Removable thermal insulation jackets — self-extinguishing high-temp cloth systems. Up to ~40% energy savings and ~70% less heat loss on the heated zone.',
    coverImage: '/static/products/00003.jpeg',
    carouselImages: [
      '/static/products/00003.jpeg',
      '/static/products/00003-1.jpeg',
      '/static/products/00003-2.jpeg',
      '/static/products/00003-3.jpeg',
      '/static/products/00003-4.jpeg',
      '/static/products/00003-5.jpeg',
      '/static/products/00003-6.jpeg',
      '/static/products/00003-7.jpeg',
      '/static/products/00003-8.jpeg',
    ],
    embedId: 'null',
    price: 40,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: [
      'Operator burn protection',
      'Up to ~40% energy cost savings on the heated zone',
      'Up to ~70% reduction in heat losses',
      '~1 kW/hour saving example on a 10 kW load',
      'Helps protect PLC and hydraulic oils from excess ambient heat',
      'Holds heat longer during short power interruptions',
    ],
    details: {
      Length: 'Custom length',
      'Ceramic cloth': 'Up to 1,250°C',
      'Silicon-coated alumina cloth': 'Up to 2,000°C',
    },
    applications: [
      'Injection Molding',
      'Blow Molding',
      'Blown Film',
      'Tape Lines',
      'Line Extruders',
      'Granulators',
      'Ovens',
      'Pipe Lines',
      'Woven Sack Units',
      'Monofilament Units',
    ],
  },
  {
    slug: 'purging-rings',
    title: 'Purging Rings',
    date: '2022-06-01',
    productsID: '00004',
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in Japan'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
  {
    slug: 'insulated-heaters',
    title: 'Insulated Heater',
    date: '2022-06-01',
    productsID: '00005',
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in Japan'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
  {
    slug: 'workshop-for-fabrication',
    title: 'Workshop for Fabrication',
    date: '2022-06-01',
    productsID: '00006',
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in Japan'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
  {
    slug: 'wool-heaters',
    title: 'Wool Heaters',
    date: '2022-06-01',
    productsID: '00008',
    tags: ['mica band', 'electrical heaters', 'Barrel Heaters'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
  {
    slug: 'removeable-insulators',
    title: 'Removable Insulators',
    date: '2022-06-01',
    productsID: '00009',
    tags: ['Thermal Insulation', 'electrical insulators', 'Made in Japan'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
  {
    slug: 'cladding',
    title: 'Cladding',
    date: '2022-06-01',
    productsID: '00010',
    tags: ['Thermal Insulation', 'electrical insulators', 'Made in Japan'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
  {
    slug: 'waste-heat-recovery-system',
    title: 'Waste Heat Recovery System',
    date: '2022-06-01',
    productsID: '00011',
    tags: ['Thermal Insulation', 'electrical insulators', 'Made in Japan'],
    draft: true,
    summary: 'Coming soon.',
    coverImage: '/static/products/coming_soon.png',
    carouselImages: ['/static/products/coming_soon.png'],
    embedId: 'null',
    price: 0,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Coming Soon': 'Coming Soon' },
    applications: ['coming soon'],
  },
]

/** Preferred display order for published catalog (value ladder). */
export const PUBLISHED_PRODUCT_ORDER = [
  'mica-band-heaters',
  'ceramic-band-heater',
  'thermal-insolations',
] as const

function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

/** Published products for catalog / landing / tags (ladder order, then newest). */
export function getPublishedProducts(): Product[] {
  const published = products.filter((product) => !product.draft)
  const orderIndex = new Map(
    PUBLISHED_PRODUCT_ORDER.map((slug, index) => [slug, index] as const)
  )

  return published.sort((a, b) => {
    const ai = orderIndex.get(a.slug as (typeof PUBLISHED_PRODUCT_ORDER)[number])
    const bi = orderIndex.get(b.slug as (typeof PUBLISHED_PRODUCT_ORDER)[number])
    if (ai !== undefined && bi !== undefined) return ai - bi
    if (ai !== undefined) return -1
    if (bi !== undefined) return 1
    return dateSortDesc(a.date, b.date)
  })
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getDisplayTitle(product: Product): string {
  return getProductMarketing(product.slug)?.displayTitle ?? product.title
}

export type ProductNeighbor = {
  slug: string
  title: string
  coverImage: string
  benefit?: string
}

/** Prev/next among published products only (catalog order). */
export function getProductNeighbors(slug: string): {
  prev: ProductNeighbor | null
  next: ProductNeighbor | null
} {
  const published = getPublishedProducts()
  const index = published.findIndex((product) => product.slug === slug)
  if (index === -1) {
    return { prev: null, next: null }
  }

  const toNeighbor = (product: Product | undefined): ProductNeighbor | null => {
    if (!product) return null
    const marketing = getProductMarketing(product.slug)
    return {
      slug: product.slug,
      title: marketing?.displayTitle ?? product.title,
      coverImage: product.coverImage,
      benefit: marketing?.benefit,
    }
  }

  return {
    prev: toNeighbor(published[index + 1]),
    next: toNeighbor(published[index - 1]),
  }
}

export function getAllTags(): Record<string, number> {
  const tagCount: Record<string, number> = {}

  for (const product of getPublishedProducts()) {
    for (const tag of product.tags) {
      const key = kebabCase(tag)
      tagCount[key] = (tagCount[key] ?? 0) + 1
    }
  }

  return tagCount
}

export function getProductsByTag(tagSlug: string): Product[] {
  return getPublishedProducts().filter((product) =>
    product.tags.some((tag) => kebabCase(tag) === tagSlug)
  )
}
