'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL } from './constants'
import { TrustBar } from './TrustBar'

export function LandingHero() {
  return (
    <section className="relative isolate -mt-16 min-h-[min(100svh,920px)] overflow-hidden bg-[#0c1014] text-stone-100">
      {/* Full-bleed visual plane — extends under sticky nav */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/static/products/00001.png"
          aria-hidden
        >
          <source src="/static/videos/00001.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c1014] via-[#0c1014]/90 to-[#0c1014]/60"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(196,92,26,0.28),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />
      </div>

      <div className="container relative mx-auto flex min-h-[min(100svh,920px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-24 md:pb-20 md:pt-28">
        <motion.p
          className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[0.02em] text-[#f0a060] sm:text-4xl md:text-5xl"
          initial={{ opacity: 0.35, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          ThermoSave
        </motion.p>

        <motion.h1
          className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          initial={{ opacity: 0.35, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
        >
          Cut your plant&apos;s electricity bill by 20%+. Keep the same output.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-stone-200 md:text-lg"
          initial={{ opacity: 0.35, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
        >
          Heaters and insulation jackets that keep heat in your machines. For injection, blow
          molding, and extrusion plants in Pakistan.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0.35, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
          >
            <Link href="/contact">Get a Free Heat Check</Link>
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
        </motion.div>

        <motion.div
          className="mt-12 max-w-4xl"
          initial={{ opacity: 0.35, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
        >
          <TrustBar tone="dark" />
        </motion.div>
      </div>
    </section>
  )
}
