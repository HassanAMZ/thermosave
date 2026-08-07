'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { ProductCtas } from '@/components/products/ProductCtas'
import { IndustryMuxPlayer } from './MuxPlayer'
import type { Industry, IndustryPhoto } from '@/data/industries'

type IndustryProps = {
  industry: Industry
}

function StoryImage({ photo, priority = false }: { photo: IndustryPhoto; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-sm border border-stone-200 bg-[#0c1014]">
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <figcaption className="border-t border-stone-200 bg-[#faf9f7] px-4 py-3 text-sm text-stone-600">
        {photo.caption}
      </figcaption>
    </figure>
  )
}

/** Plant video + gallery dump — after story splits, one uniform tile grid */
export function IndustryMedia({ industry }: IndustryProps) {
  type MediaTile =
    | { kind: 'video'; playbackId: string; title: string; durationLabel: string }
    | { kind: 'photo'; src: string; alt: string; caption: string }

  const tiles: MediaTile[] = [
    ...industry.videos.map((video) => ({
      kind: 'video' as const,
      playbackId: video.playbackId,
      title: video.title,
      durationLabel: video.durationLabel,
    })),
    ...industry.gallery.map((photo) => ({
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
            {industry.mediaTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
            {industry.mediaSubhead}
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

export function IndustryProblem({ industry }: IndustryProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <StoryImage photo={industry.problemImage} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
              Problem
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {industry.problemTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              {industry.problem}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function IndustryAgitate({ industry }: IndustryProps) {
  return (
    <section className="bg-[#161b22] py-16 text-stone-100 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a060]">
              Cost of inaction
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              {industry.agitateTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-300 md:text-lg">
              {industry.agitate}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {industry.agitateStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-sm border border-white/10 bg-[#0c1014]/60 px-4 py-4"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#f0a060] md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <figure className="overflow-hidden rounded-sm border border-white/10">
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
                <Image
                  src={industry.agitateImage.src}
                  alt={industry.agitateImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-white/10 bg-[#0c1014] px-4 py-3 text-sm text-stone-400">
                {industry.agitateImage.caption}
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function IndustryMechanism({ industry }: IndustryProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <StoryImage photo={industry.mechanismImage} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
              How it works
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {industry.mechanismTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              {industry.mechanism}
            </p>
            <ProductCtas tone="light" className="mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function IndustryOffer({ industry }: IndustryProps) {
  return (
    <section className="bg-[#f4f2ee] py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Offer</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {industry.offerTitle}
            </h2>
            <ul className="mt-8 space-y-4">
              {industry.offerBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-relaxed text-stone-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#c45c1a]" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <ProductCtas tone="light" className="mt-10" />
          </motion.div>

          <motion.div
            className="rounded-sm border border-stone-200 bg-[#faf9f7] p-6 md:p-8"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c45c1a]">
              Related tools
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
              Products that fit this process
            </p>
            <ul className="mt-6 space-y-3">
              {industry.relatedProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.href}
                    className="group flex items-center justify-between gap-3 rounded-sm border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:border-[#c45c1a]/40 hover:text-[#c45c1a]"
                  >
                    {product.label}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-[#c45c1a]" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function IndustryFaq({ industry }: IndustryProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">FAQ</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Questions from {industry.shortName.toLowerCase()} plants
          </h2>
        </motion.div>

        <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300">
          {industry.faqs.map((item) => (
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
