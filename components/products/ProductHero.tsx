'use client'

import { motion } from 'framer-motion'
import ImageCarousel from '@/components/ImageCarousel'
import { TrustBar } from '@/components/landing/TrustBar'
import { ProductCtas } from './ProductCtas'
import type { ProductMarketing } from '@/data/productMarketing'

type ProductHeroProps = {
  displayTitle: string
  marketing: ProductMarketing
  images: { src: string; alt: string }[]
}

export function ProductHero({ displayTitle, marketing, images }: ProductHeroProps) {
  return (
    <section className="bg-[#f4f2ee] pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="border border-stone-200 bg-white p-4 sm:p-6"
            initial={{ opacity: 0.4, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageCarousel images={images} className="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#c45c1a] sm:text-2xl">
              ThermoSave
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              {displayTitle}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              {marketing.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
              {marketing.subhead}
            </p>

            <ProductCtas tone="light" className="mt-8" />

            <div className="mt-10">
              <TrustBar tone="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
