'use client'

import { motion } from 'framer-motion'
import { Flame, Gauge, Wrench } from 'lucide-react'

const pains = [
  {
    icon: Flame,
    title: 'Your machines throw away heat you already paid for.',
    body: 'Bad or missing barrel insulation lets heat escape into the hall. That heat came from electricity you paid for.',
  },
  {
    icon: Wrench,
    title: 'The same heaters keep failing.',
    body: 'Cheap band heaters burn out. Machines stop. Spare parts keep adding up.',
  },
  {
    icon: Gauge,
    title: 'You may not know what this costs.',
    body: 'Most plants never measure heat loss per machine. The leak stays hidden on the bill.',
  },
]

export function LandingProblem() {
  return (
    <section className="relative bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            The problem on your floor
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            If you run plastic processing machines, this will sound familiar.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {pains.map((pain, index) => (
            <motion.div
              key={pain.title}
              className="border-t border-stone-300 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <pain.icon className="h-7 w-7 text-[#c45c1a]" strokeWidth={1.5} />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-stone-900">
                {pain.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-600">{pain.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
