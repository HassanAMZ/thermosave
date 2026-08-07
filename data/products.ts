import kebabCase from '@/lib/utils/kebabCase'

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
 */
export const products: Product[] = [
  {
    slug: 'mica-band-heaters',
    title: 'Mica Band Heaters',
    date: '2022-07-01',
    productsID: '00001',
    tags: ['mica band', 'electrical heaters', 'Made in japan', 'Barrel Heaters'],
    draft: false,
    summary:
      'Conventional SS-jacketed mica band heaters available in precise lengths. Non-magnetic steel jacket with non-magnetic Ni20Cr80 winding enables the heaters to take less impair and less heating time.',
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
    features: ['Best In Quality', 'Made in Japan'],
    details: { 'Nozzel Heaters': 'All types', Length: 'Custom Length' },
    applications: [
      'Injection Molding',
      'Blow Molding',
      'Blown Film Moulding',
      'Granaulaters',
      'Ovens',
      'All Types of Extruders',
    ],
  },
  {
    slug: 'ceramic-band-heater',
    title: 'Ceramic Band Heater',
    date: '2022-07-01',
    productsID: '00002',
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in japan', 'Barrel Heaters'],
    draft: false,
    summary:
      'Ceramic band heaters are designed with inner resistance coils spirally wound which are uniformly threaded through interlocking ceramic tiles. The ceramic tiles are encased by a stainless-steel sheath with a layer of insulated between both parts Due to their construction, ceramic band heaters can fully open for easy installation and removal. Ceramic band heaters can operate at temperature up to 1600F and handle watt densities of up to 45w/in2.',
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
      'Best In Quality',
      'Good conductor of heat as compared to metal',
      'Made in Japan',
      'enhanced heat arising',
      'better heat preserver',
      'Repairable',
      'New Spiral Wire is available',
    ],
    details: { Length: 'Custom Length' },
    applications: [
      'Injection Molding',
      'Blow Molding',
      'Blown Film Moulding',
      'Granaulaters',
      'Ovens',
      'All Types of Extruders',
    ],
  },
  {
    slug: 'thermal-insolations',
    title: 'Thermal Insolation Jackets',
    date: '2022-07-01',
    productsID: '00003',
    tags: ['Thermal Insolations', 'electrical insolators', 'Made in japan'],
    draft: false,
    summary:
      'Thermal jackets are removable and built from self-extinguishing high-temperature cloths such as ceramic cloth (up to 1,250°C) and silicon-coated alumina cloth (up to 2,000°C).',
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
      '/static/products/00003-9.jpeg',
    ],
    embedId: 'null',
    price: 40,
    unit: 'Sq - Inch',
    currency: 'PKR',
    features: [
      'An Absolute Burn Protection',
      'A New Pleasant Look for Machine',
      'In case of any shutdown or electricity failure, provides 10m Max heating time for machine',
      '1KW/hour saving on 10KW Load',
      'Upto 40% saving in Energy Costs',
      'Upto 70% Saving in Heat Losses',
      'Helpful for PLC & Hydrolic Oils',
    ],
    details: { Length: 'Custom Length' },
    applications: [
      'Injection Molding',
      'Blow Film Molding',
      'Blown Moulding',
      'Tape Lines',
      'Line Extruders',
      'Granaulaters',
      'Ovens',
      'Pip Lines',
      'Woven Sack Units',
      'Monofilament Units',
    ],
  },
  {
    slug: 'purging-rings',
    title: 'Purging Rings',
    date: '2022-06-01',
    productsID: '00004',
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in japan'],
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
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in japan'],
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
    tags: ['Ceramic Band Heater', 'electrical heaters', 'Made in japan'],
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
    title: 'Removeable Insulators',
    date: '2022-06-01',
    productsID: '00009',
    tags: ['Thermal Insolations', 'electrical insolators', 'Made in japan'],
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
    tags: ['Thermal Insolations', 'electrical insolators', 'Made in japan'],
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
    tags: ['Thermal Insolations', 'electrical insolators', 'Made in japan'],
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

function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

/** Published products for catalog / landing / tags (newest first). */
export function getPublishedProducts(): Product[] {
  return products
    .filter((product) => !product.draft)
    .sort((a, b) => dateSortDesc(a.date, b.date))
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export type ProductNeighbor = Pick<Product, 'slug' | 'title' | 'coverImage'>

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

  const toNeighbor = (product: Product | undefined): ProductNeighbor | null =>
    product
      ? { slug: product.slug, title: product.title, coverImage: product.coverImage }
      : null

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
