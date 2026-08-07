'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TrustBar } from '@/components/landing/TrustBar'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/components/landing/constants'

export function ContactHero() {
  return (
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
            Free energy-loss assessment for your plant.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-300 md:text-lg">
            Tell us what you run — barrels, dies, hoppers — and we&apos;ll map where heat leaves as
            wasted kWh. Call, WhatsApp, or send the short form below.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
            >
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="h-4 w-4" />
                Call — {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-sm border-stone-400/70 bg-transparent px-6 text-base text-stone-100 hover:bg-white/10 hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
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
