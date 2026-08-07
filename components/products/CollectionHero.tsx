'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TrustBar } from '@/components/landing/TrustBar'
import { PHONE_DISPLAY, PHONE_TEL } from '@/components/landing/constants'

const HERO_IMAGE = '/static/industries/extrusion-blow-moulding/head-jackets.jpg'

export function CollectionHero() {
  return (
    <section className="relative isolate -mt-16 min-h-[min(100svh,820px)] overflow-hidden bg-[#0c1014] text-stone-100">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(196,92,26,0.28),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />
      </div>

      <div className="container relative mx-auto flex min-h-[min(100svh,820px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-24 md:pb-20 md:pt-28">
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
            Tools that stop barrel heat waste.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-300 md:text-lg">
            Mica and ceramic band heaters for precise heat. Removable insulation jackets keep
            kilowatts in the melt instead of your production hall.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
            >
              <Link href="/contact">Get a Free Energy Loss Assessment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-sm border-stone-400/70 bg-transparent px-6 text-base text-stone-100 hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
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
  )
}
