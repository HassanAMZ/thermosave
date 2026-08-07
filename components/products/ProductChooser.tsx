'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/data/products'
import { getProductMarketing } from '@/data/productMarketing'

type ProductChooserProps = {
  products: Product[]
}

export function ProductChooser({ products }: ProductChooserProps) {
  return (
    <section className="bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            Which tool first?
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Match the plant problem to the right offer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
            Start with the heat source you need. Then stop the leak. Most plants that care about
            PKR end on insulation jackets over the bands.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => {
            const marketing = getProductMarketing(product.slug)
            if (!marketing) return null
            const isCutout = product.coverImage.includes('/cutouts/')

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
                  className="group flex h-full flex-col overflow-hidden border border-stone-200 bg-[#faf9f7] transition-colors hover:border-[#c45c1a]/40"
                >
                  {isCutout ? (
                    <div className="relative flex h-44 items-center justify-center bg-white p-5">
                      <Image
                        src={product.coverImage}
                        alt={marketing.displayTitle}
                        width={160}
                        height={160}
                        className="h-auto max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="relative h-44 overflow-hidden bg-stone-900">
                      <Image
                        src={product.coverImage}
                        alt={marketing.displayTitle}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45c1a]">
                      {marketing.chooserLabel}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
                      {marketing.displayTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                      {marketing.chooserWhen}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#c45c1a]">
                      View product
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
