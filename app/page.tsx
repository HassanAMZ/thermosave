import siteMetadata from '@/data/siteMetadata'
import { getPublishedProducts } from '@/data/products'
import {
  LandingAgitate,
  LandingFAQ,
  LandingFinalCTA,
  LandingHero,
  LandingProblem,
  LandingProducts,
  LandingProof,
  LandingSolution,
  StickyContact,
  type LandingProduct,
} from '@/components/landing'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

const PRODUCT_COPY: Record<string, { benefit: string; title?: string }> = {
  'mica-band-heaters': {
    benefit:
      'SS-jacketed mica band heaters with Ni20Cr80 winding — faster heat-up, less impair on barrels and nozzles.',
  },
  'ceramic-band-heater': {
    benefit:
      'Ceramic band heaters up to 1600°F and 45 W/in² — Made in Japan, built for demanding plastic machines.',
  },
  'thermal-insolations': {
    title: 'Thermal Insulation Jackets',
    benefit:
      'Removable, self-extinguishing thermal jackets with high-temp cloth systems rated up to 2000°C.',
  },
}

const PRODUCT_ORDER = ['mica-band-heaters', 'ceramic-band-heater', 'thermal-insolations'] as const

function getLandingProducts(): LandingProduct[] {
  const published = getPublishedProducts()
  const products: LandingProduct[] = []

  for (const slug of PRODUCT_ORDER) {
    const product = published.find((item) => item.slug === slug)
    if (!product) continue
    products.push({
      slug,
      title: PRODUCT_COPY[slug]?.title ?? product.title,
      coverImage: product.coverImage,
      benefit: PRODUCT_COPY[slug]?.benefit ?? product.summary,
    })
  }

  return products
}

export default function Home() {
  const products = getLandingProducts()

  return (
    <div className="landing-page">
      <LandingHero />
      <LandingProblem />
      <LandingAgitate />
      <LandingSolution />
      <LandingProof />
      <LandingProducts products={products} />
      <LandingFAQ />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
