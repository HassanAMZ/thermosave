'use client'

import { motion } from 'framer-motion'

export function LandingAgitate() {
  return (
    <section className="relative overflow-hidden bg-[#161b22] py-20 text-stone-100 md:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#c45c1a]/20 blur-3xl"
        aria-hidden
      />
      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a060]">
              What this actually costs
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              One worn machine. Five machines. Two shifts. Real PKR.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-300 md:text-lg">
              One injection machine with bad insulation can waste{' '}
              <strong className="font-semibold text-white">1.3+ units per hour</strong>. On 5
              machines, 2 shifts, that is about{' '}
              <strong className="font-semibold text-white">30,000 PKR a month</strong>. Gone. Every
              month you wait costs more. No drama. Just the meter.
            </p>
            <p className="mt-4 text-sm text-stone-400">
              Numbers from a plant test at Paragon Plastic Industries, Rawalpindi.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-sm border border-white/10 bg-white/5 p-6 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-stone-400">Before fix</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#f0a060]">
                1.3+
              </p>
              <p className="mt-1 text-sm text-stone-300">units wasted / hour / machine</p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-stone-400">5 machines</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                ~20
              </p>
              <p className="mt-1 text-sm text-stone-300">units / hour plant-wide</p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-stone-400">Monthly loss</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                ~30k
              </p>
              <p className="mt-1 text-sm text-stone-300">PKR leaving as heat</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
