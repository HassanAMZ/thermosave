import ProductLayout from '@/layouts/ProductLayout'
import { getProduct, getProductNeighbors } from '@/data/products'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const SLUG = 'wool-heaters'

const product = getProduct(SLUG)

export const metadata: Metadata = {
  title: product?.title ?? 'Product',
  description: product?.summary,
}

export default function ProductPage() {
  if (!product) {
    notFound()
  }

  const { prev, next } = getProductNeighbors(SLUG)

  return <ProductLayout product={product} prev={prev} next={next} />
}
