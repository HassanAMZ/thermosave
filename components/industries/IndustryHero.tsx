'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TrustBar } from '@/components/landing/TrustBar'
import { ProductCtas } from '@/components/products/ProductCtas'
import type { Industry } from '@/data/industries'

type IndustryHeroProps = {
  industry: Industry
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  return (
    <section className="relative isolate -mt-16 min-h-[min(100svh,880px)] overflow-hidden bg-[#0c1014] text-stone-100">
      <div className="absolute inset-0 -z-10">
        <Image
          src={industry.coverImage}
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c1014] via-[#0c1014]/92 to-[#0c1014]/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(196,92,26,0.3),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />
      </div>

      <div className="container relative mx-auto flex min-h-[min(100svh,880px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-24 md:pb-20 md:pt-28">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a060]"
          initial={{ opacity: 0.4, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Industry
        </motion.p>

        <motion.p
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[0.02em] text-[#f0a060] sm:text-4xl md:text-5xl"
          initial={{ opacity: 0.4, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04 }}
        >
          ThermoSave
        </motion.p>

        <motion.h1
          className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          initial={{ opacity: 0.4, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {industry.headline}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-stone-200 md:text-lg"
          initial={{ opacity: 0.4, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {industry.subhead}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0.4, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <ProductCtas tone="dark" />
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl"
          initial={{ opacity: 0.4, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <TrustBar tone="dark" />
        </motion.div>
      </div>
    </section>
  )
}
