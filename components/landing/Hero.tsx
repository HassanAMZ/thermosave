'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL } from './constants'
import { TrustBar } from './TrustBar'

export function LandingHero() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-[#0c1014] pt-24 pb-16 text-stone-100 md:pt-28 md:pb-20">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/static/products/00001.png"
        >
          <source src="/static/videos/00001.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1014] via-[#0c1014]/90 to-[#0c1014]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,92,26,0.22),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0.35, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#f0a060] sm:text-3xl">
            ThermoSave
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Cut your plant&apos;s electricity bill by 20%+. Keep the same output.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-200 md:text-lg">
            Heaters and insulation jackets that keep heat in your machines. For injection, blow
            molding, and extrusion plants in Pakistan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          </div>
        </motion.div>

        <motion.div
          className="mt-12 max-w-3xl"
          initial={{ opacity: 0.35, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
        >
          <TrustBar tone="dark" />
        </motion.div>
      </div>
    </section>
  )
}
