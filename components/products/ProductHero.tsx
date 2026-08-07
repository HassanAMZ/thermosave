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
    <>
      <section className="relative isolate -mt-16 overflow-hidden bg-[#0c1014] pt-24 pb-16 text-stone-100 md:pt-28 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,92,26,0.22),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />

        <div className="container relative mx-auto max-w-7xl px-4">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0.4, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#f0a060] sm:text-3xl">
              ThermoSave
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {marketing.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-300 md:text-lg">
              {marketing.subhead}
            </p>

            <ProductCtas tone="dark" className="mt-8" />
          </motion.div>

          <motion.div
            className="mt-12 max-w-3xl"
            initial={{ opacity: 0.4, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TrustBar tone="dark" />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f2ee] py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              className="border border-stone-200 bg-white p-3 sm:p-4"
              initial={{ opacity: 0.4, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <ImageCarousel images={images} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0.4, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
                Product
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
                {displayTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
                {marketing.benefit}
              </p>

              {marketing.proofPoints.length > 0 ? (
                <ul className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                  {marketing.proofPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-stone-700 md:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#c45c1a]"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <ProductCtas tone="light" className="mt-8" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
