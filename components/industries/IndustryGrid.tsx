'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Industry } from '@/data/industries'

type IndustryGridProps = {
  industries: Industry[]
}

export function IndustryGrid({ industries }: IndustryGridProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            Industries
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Choose the process that matches your floor.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
            Process pages hook the story; product pages sell the tool. Start here if you think in
            machines — not catalog SKUs.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0.4, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-stone-200 bg-[#faf9f7] transition-colors hover:border-[#c45c1a]/40"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c1014]">
                  <Image
                    src={industry.coverImage}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {industry.benefit}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#c45c1a]">
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
