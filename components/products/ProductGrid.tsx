'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/data/products'
import { getProductMarketing } from '@/data/productMarketing'

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            Products
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Specs live on each page — here&apos;s what matters first.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => {
            const marketing = getProductMarketing(product.slug)
            const title = marketing?.displayTitle ?? product.title
            const benefit = marketing?.benefit ?? product.summary

            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0.4, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col border border-stone-200 bg-[#faf9f7] transition-colors hover:border-[#c45c1a]/40"
                >
                  <div className="relative flex h-48 items-center justify-center bg-white p-6">
                    <Image
                      src={product.coverImage}
                      alt={title}
                      width={180}
                      height={180}
                      className="h-auto max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
                      {title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{benefit}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#c45c1a]">
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
