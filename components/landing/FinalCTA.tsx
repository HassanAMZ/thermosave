'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from './constants'
import { TrustBar } from './TrustBar'

export function LandingFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0c1014] py-20 text-stone-100 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,92,26,0.18),transparent_60%)]"
        aria-hidden
      />
      <div className="container relative mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#f0a060] sm:text-3xl">
            ThermoSave
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            Stop paying for electricity that turns into wasted heat.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-300">
            Book a free heat check. No hard sell. We show what your plant loses and how to fix it.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white hover:bg-[#a84c14]"
          >
            <Link href="/contact">Get a Free Heat Check</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-sm border-stone-500/60 bg-transparent px-6 text-stone-100 hover:bg-white/10 hover:text-white"
          >
            <a href={`tel:${PHONE_TEL}`}>
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-sm border-stone-500/60 bg-transparent px-6 text-stone-100 hover:bg-white/10 hover:text-white"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <TrustBar tone="dark" />
        </motion.div>
      </div>
    </section>
  )
}
