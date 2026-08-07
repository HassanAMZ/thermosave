'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const pains = [
  {
    title: 'Heat you already paid for leaves the machine.',
    body: 'Bad or missing barrel insulation dumps heat into the hall.',
  },
  {
    title: 'The same heaters keep failing.',
    body: 'Cheap bands burn out. Machines stop. Spares pile up.',
  },
  {
    title: 'You may not know what this costs.',
    body: 'Most plants never measure heat loss per machine.',
  },
]

export function LandingProblem() {
  return (
    <section className="relative bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.figure
            className="overflow-hidden rounded-sm border border-stone-200 bg-[#0c1014]"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
              <Image
                src="/static/industries/extrusion-blow-moulding/bare-barrel.jpg"
                alt="Open heater bands on an extruder barrel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="border-t border-stone-200 bg-[#faf9f7] px-4 py-3 text-sm text-stone-600">
              Open bands. Heat leaving the machine.
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
              The problem on your floor
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              If you run plastic machines, this will sound familiar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              Heat escapes from barrels and dies into the hall. You still pay for that electricity.
              Output does not go up.
            </p>

            <ul className="mt-8 space-y-5 border-t border-stone-300 pt-8">
              {pains.map((pain) => (
                <li key={pain.title}>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-stone-900">
                    {pain.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-stone-600">{pain.body}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
