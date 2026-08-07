import ProductLayout from '@/layouts/ProductLayout'
import { getProduct, getProductNeighbors } from '@/data/products'
import { getProductMarketing } from '@/data/productMarketing'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const SLUG = 'mica-band-heaters'

const product = getProduct(SLUG)
const marketing = getProductMarketing(SLUG)

export const metadata: Metadata = {
  title: marketing?.seoTitle ?? product?.title ?? 'Product',
  description: marketing?.seoDescription ?? product?.summary,
}

export default function ProductPage() {
  if (!product) {
    notFound()
  }

  const { prev, next } = getProductNeighbors(SLUG)

  return <ProductLayout product={product} prev={prev} next={next} />
}
