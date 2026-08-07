'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ClientCase } from '@/data/clients'

type ClientsGridProps = {
  clients: ClientCase[]
}

export function ClientsGrid({ clients }: ClientsGridProps) {
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
            Case studies
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Open a plant. See the jackets. Call us for yours.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
            Each case is a real ThermoSave install. Plant photos and video first, short engineer
            copy, then assessment / Call / WhatsApp.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <motion.div
              key={client.slug}
              initial={{ opacity: 0.4, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Link
                href={`/clients/${client.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-stone-200 bg-[#faf9f7] transition-colors hover:border-[#c45c1a]/40"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c1014]">
                  <Image
                    src={client.coverImage}
                    alt={`${client.name} plant`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={client.coverImage.includes('image.mux.com')}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {client.location}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
                    {client.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {client.benefit}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#c45c1a]">
                    View case study
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
