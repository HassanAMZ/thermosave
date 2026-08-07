'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ProductCtas } from '@/components/products/ProductCtas'

const OFFER_BULLETS = [
  'Custom removable insulation jackets sized to barrels, die heads, or hoppers',
  'Free energy-loss assessment. Call or WhatsApp. No fake checkout.',
  'Made in Pakistan. Install guidance so jackets come off for maintenance.',
  'Named plant proof on this page. Measured PKR only when we have meter data.',
]

export function GalleryOffer() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Offer</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Same jackets. Same path for your floor.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
            You saw the machines. Next step is a free assessment. We size jackets to your line.
          </p>
          <ul className="mt-8 space-y-4">
            {OFFER_BULLETS.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-base leading-relaxed text-stone-700">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#c45c1a]" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <ProductCtas tone="light" className="mt-10" />
        </motion.div>
      </div>
    </section>
  )
}
