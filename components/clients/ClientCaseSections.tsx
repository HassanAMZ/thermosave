'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ProductCtas } from '@/components/products/ProductCtas'
import { IndustryMuxPlayer } from '@/components/industries/MuxPlayer'
import type { ClientCase } from '@/data/clients'

type ClientProps = {
  client: ClientCase
}

export function ClientCaseHero({ client }: ClientProps) {
  return (
    <section className="relative isolate -mt-16 min-h-[min(100svh,880px)] overflow-hidden bg-[#0c1014] text-stone-100">
      <div className="absolute inset-0 -z-10">
        <Image
          src={client.coverImage}
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
          unoptimized={client.coverImage.includes('image.mux.com')}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c1014] via-[#0c1014]/92 to-[#0c1014]/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(196,92,26,0.3),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />
      </div>

      <div className="container relative mx-auto flex min-h-[min(100svh,880px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-24 md:pb-20 md:pt-28">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a060]"
          initial={{ opacity: 0.4, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Case study · {client.location}
        </motion.p>

        <motion.p
          className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[0.02em] text-[#f0a060] sm:text-4xl md:text-5xl"
          initial={{ opacity: 0.4, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04 }}
        >
          ThermoSave
        </motion.p>

        <motion.p
          className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-stone-200 sm:text-2xl"
          initial={{ opacity: 0.4, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          {client.name}
        </motion.p>

        <motion.h1
          className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          initial={{ opacity: 0.4, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {client.headline}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-stone-200 md:text-lg"
          initial={{ opacity: 0.4, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {client.subhead}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0.4, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <ProductCtas tone="dark" />
        </motion.div>
      </div>
    </section>
  )
}

export function ClientCaseStory({ client }: ClientProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
              Plant story
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {client.storyTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              {client.story}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            {client.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-stone-200 bg-[#faf9f7] px-4 py-5"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#c45c1a] md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-stone-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function ClientCaseMedia({ client }: ClientProps) {
  type MediaTile =
    | { kind: 'video'; playbackId: string; title: string; durationLabel: string }
    | { kind: 'photo'; src: string; alt: string; caption: string }

  const tiles: MediaTile[] = [
    ...client.videos.map((video) => ({
      kind: 'video' as const,
      playbackId: video.playbackId,
      title: video.title,
      durationLabel: video.durationLabel,
    })),
    ...client.gallery.map((photo) => ({
      kind: 'photo' as const,
      src: photo.src,
      alt: photo.alt,
      caption: photo.caption,
    })),
  ]

  if (tiles.length === 0) {
    return null
  }

  return (
    <section className="bg-[#f4f2ee] py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            Plant proof
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            {client.mediaTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
            {client.mediaSubhead}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tiles.map((tile, index) => (
            <motion.figure
              key={tile.kind === 'video' ? tile.playbackId : tile.src}
              className="overflow-hidden rounded-sm border border-stone-200 bg-[#faf9f7]"
              initial={{ opacity: 0.4, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              {tile.kind === 'video' ? (
                <IndustryMuxPlayer
                  playbackId={tile.playbackId}
                  title={tile.title}
                  variant="tile"
                />
              ) : (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              )}
              <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-600">
                {tile.kind === 'video' ? (
                  <>
                    {tile.title}
                    <span className="ml-2 text-xs uppercase tracking-[0.14em] text-stone-500">
                      {tile.durationLabel}
                    </span>
                  </>
                ) : (
                  tile.caption
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ClientCaseOffer({ client }: ClientProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Offer</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            {client.offerTitle}
          </h2>
          <ul className="mt-8 space-y-4">
            {client.offerBullets.map((bullet) => (
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

export function ClientCaseFaq({ client }: ClientProps) {
  return (
    <section className="bg-[#f4f2ee] py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">FAQ</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Questions after seeing {client.shortName}
          </h2>
        </motion.div>

        <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300">
          {client.faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-[family-name:var(--font-display)] text-lg font-semibold text-stone-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="mt-1 text-stone-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-stone-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
