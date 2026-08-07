'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { ProductCtas } from './ProductCtas'
import type { Product } from '@/data/products'
import type { ProductMarketing, ProductPhoto } from '@/data/productMarketing'
import type { ProductNeighbor } from '@/data/products'

type ProductStoryProps = {
  marketing: ProductMarketing
}

function StoryImage({ photo, priority = false }: { photo: ProductPhoto; priority?: boolean }) {
  const isCutout = photo.src.includes('/cutouts/')
  return (
    <figure className="overflow-hidden rounded-sm border border-stone-200 bg-[#faf9f7]">
      <div className={`relative w-full ${isCutout ? 'aspect-[4/3] bg-white' : 'aspect-[4/5] sm:aspect-[5/6]'}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          className={isCutout ? 'object-contain p-6' : 'object-cover'}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <figcaption className="border-t border-stone-200 bg-[#faf9f7] px-4 py-3 text-sm text-stone-600">
        {photo.caption}
      </figcaption>
    </figure>
  )
}

export function ProductProblem({ marketing }: ProductStoryProps) {
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
            <StoryImage photo={marketing.problemImage} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Problem</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {marketing.problemTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">{marketing.problem}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function ProductAgitate({ marketing }: ProductStoryProps) {
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
              {marketing.agitateTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-300 md:text-lg">{marketing.agitate}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {marketing.agitateStats.map((stat) => (
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
                  src={marketing.agitateImage.src}
                  alt={marketing.agitateImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-white/10 bg-[#0c1014] px-4 py-3 text-sm text-stone-400">
                {marketing.agitateImage.caption}
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function ProductMechanism({ marketing }: ProductStoryProps) {
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
            <StoryImage photo={marketing.mechanismImage} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">How it works</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {marketing.mechanismTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">{marketing.mechanism}</p>
            <ProductCtas tone="light" className="mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** Product photo dump — after story splits, uniform tile grid (matches IndustryMedia) */
export function ProductMedia({ marketing }: ProductStoryProps) {
  const tiles = marketing.gallery
  if (!tiles.length) return null

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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Product proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            {marketing.mediaTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">{marketing.mediaSubhead}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tiles.map((photo, index) => {
            const isCutout = photo.src.includes('/cutouts/')
            return (
              <motion.figure
                key={photo.src}
                className="overflow-hidden rounded-sm border border-stone-200 bg-[#faf9f7]"
                initial={{ opacity: 0.4, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className={`relative aspect-[4/3] w-full ${isCutout ? 'bg-white' : ''}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={isCutout ? 'object-contain p-6' : 'object-cover'}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-600">
                  {photo.caption}
                </figcaption>
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

type ProductSpecsProps = {
  product: Product
}

export function ProductSpecs({ product }: ProductSpecsProps) {
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Specs</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Features, details, and applications.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <SpecBlock title="Features" items={product.features} />
          <div className="border border-stone-200 bg-[#faf9f7] p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-stone-900">
              Product details
            </h3>
            <ul className="mt-4 space-y-3">
              {Object.entries(product.details).map(([key, value]) => (
                <li key={key} className="text-sm leading-relaxed text-stone-600">
                  <span className="font-semibold text-stone-900">{key}: </span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <SpecBlock title="Applications" items={product.applications} />
        </div>
      </div>
    </section>
  )
}

function SpecBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-stone-200 bg-[#faf9f7] p-6">
      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-stone-900">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-stone-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c45c1a]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProductOffer({ marketing }: ProductStoryProps) {
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
              What you get — stacked for plant managers.
            </h2>
            <ul className="mt-8 space-y-4">
              {marketing.offerBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-relaxed text-stone-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#c45c1a]" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone-500">Typical delivery: 7–10 business days after sizing.</p>
            <ProductCtas tone="light" className="mt-8" />
          </motion.div>

          <motion.div
            className="rounded-sm border border-stone-200 bg-[#faf9f7] p-6 md:p-8"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c45c1a]">Proof points</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
              Why plants believe the outcome
            </p>
            <ul className="mt-6 space-y-3">
              {marketing.proofPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-stone-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c45c1a]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

type ProductRelatedProps = {
  neighbors: ProductNeighbor[]
  relatedCta?: string
}

export function ProductRelated({ neighbors, relatedCta }: ProductRelatedProps) {
  if (!neighbors.length) return null

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
            Value ladder
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Related tools
          </h2>
          {relatedCta ? (
            <p className="mt-4 text-base leading-relaxed text-stone-600">{relatedCta}</p>
          ) : null}
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {neighbors.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0.4, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/products/${item.slug}`}
                className="group flex gap-4 border border-stone-200 bg-[#faf9f7] p-4 transition-colors hover:border-[#c45c1a]/40 sm:p-5"
              >
                {item.coverImage.includes('/cutouts/') ? (
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center bg-white">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="h-auto max-h-20 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-stone-900">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  {item.benefit ? (
                    <p className="mt-1 line-clamp-2 text-sm text-stone-600">{item.benefit}</p>
                  ) : null}
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#c45c1a]">
                    View Details
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-stone-700 hover:text-[#c45c1a]"
          >
            ← All products
          </Link>
        </div>
      </div>
    </section>
  )
}

type ProductFaqProps = {
  faqs: ProductMarketing['faqs']
}

export function ProductFaq({ faqs }: ProductFaqProps) {
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
            Objections we hear from engineers
          </h2>
        </motion.div>

        <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300">
          {faqs.map((item) => (
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
