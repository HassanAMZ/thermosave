import { getPublishedProducts } from '@/data/products'
import { PageSEO } from '@/components/SEO'
import { StickyContact, LandingFinalCTA, LandingProof } from '@/components/landing'
import {
  CollectionHero,
  ProductChooser,
  ProductGrid,
  CollectionFAQ,
} from '@/components/products'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Heaters & Insulation That Stop Barrel Heat Waste',
  description:
    'Mica and ceramic band heaters plus removable thermal insulation jackets for plastic plants in Pakistan. Free energy loss assessment.',
}

export default function ProductsPage() {
  const products = getPublishedProducts()

  return (
    <>
      <PageSEO
        title="Products — Heaters & Insulation That Stop Barrel Heat Waste | ThermoSave"
        description="Mica and ceramic band heaters plus removable thermal insulation jackets for plastic plants in Pakistan. Free energy loss assessment."
        pathname="/products"
      />

      <CollectionHero />
      <ProductChooser products={products} />
      <ProductGrid products={products} />
      <LandingProof />
      <CollectionFAQ />
      <LandingFinalCTA />
      <StickyContact />
    </>
  )
}
