'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  {
    value: '1.3+',
    label: 'units wasted / hour / machine',
    wide: true,
  },
  {
    value: '~20',
    label: 'units / hour on 5 machines',
    wide: false,
  },
  {
    value: '~30k',
    label: 'PKR / month leaving as heat',
    wide: false,
  },
]

export function LandingAgitate() {
  return (
    <section className="relative overflow-hidden bg-[#161b22] py-20 text-stone-100 md:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#c45c1a]/20 blur-3xl"
        aria-hidden
      />
      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0.4, y: 16 }}
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-sm border border-white/10 bg-white/5 p-5 ${
                    stat.wide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#f0a060] md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-stone-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.figure
            className="order-1 overflow-hidden rounded-sm border border-white/10 lg:order-2"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
              <Image
                src="/static/industries/extrusion-lines/agitate-partial.jpg"
                alt="Partially insulated extrusion barrel next to open heater zones"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="border-t border-white/10 bg-[#0c1014] px-4 py-3 text-sm text-stone-400">
              Insulated vs open zones on the same line
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
