import siteMetadata from '@/data/siteMetadata'
import { getPublishedProducts, PUBLISHED_PRODUCT_ORDER } from '@/data/products'
import { getProductMarketing } from '@/data/productMarketing'
import {
  LandingAgitate,
  LandingFAQ,
  LandingFinalCTA,
  LandingHero,
  LandingMedia,
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

function getLandingProducts(): LandingProduct[] {
  const published = getPublishedProducts()
  const products: LandingProduct[] = []

  for (const slug of PUBLISHED_PRODUCT_ORDER) {
    const product = published.find((item) => item.slug === slug)
    if (!product) continue
    const marketing = getProductMarketing(slug)
    products.push({
      slug,
      title: marketing?.displayTitle ?? product.title,
      coverImage: product.coverImage,
      benefit: marketing?.benefit ?? product.summary,
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
      <LandingMedia />
      <LandingProof />
      <LandingProducts products={products} />
      <LandingFAQ />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
