'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { IndustryMuxPlayer } from '@/components/industries/MuxPlayer'
import { Button } from '@/components/ui/button'

type MediaTile =
  | {
      kind: 'video'
      playbackId: string
      title: string
      durationLabel: string
      href?: string
    }
  | {
      kind: 'photo'
      src: string
      alt: string
      caption: string
      href?: string
    }

/** Curated plant proof for homepage. Full dump lives on /image-gallery */
const tiles: MediaTile[] = [
  {
    kind: 'video',
    playbackId: 'Bx7v1bO4zmFv8027xQfDotu3UR1p02So8ZnYwmexsthKc',
    title: 'Extrusion blow. Jackets on the line.',
    durationLabel: '0:57',
    href: '/industries/extrusion-blow-moulding',
  },
  {
    kind: 'photo',
    src: '/static/clients/al-khair-five-star-foam-lhr/extruder-jackets-1.jpg',
    alt: 'Insulated extruder barrels at Al Khair Five Star Foam, Lahore',
    caption: 'Al Khair Five Star Foam, Lahore',
    href: '/clients/al-khair-five-star-foam-lhr',
  },
  {
    kind: 'photo',
    src: '/static/industries/hoppers/mechanism-jacket.jpg',
    alt: 'Insulation jacket on a hopper dryer',
    caption: 'Hopper dryer jackets',
    href: '/industries/hoppers',
  },
  {
    kind: 'video',
    playbackId: 'tnGetGeoU900XbdKME02WbpmN7sw00GsvTsfwXzzYHb2EM',
    title: 'Extrusion line. Heat kept in.',
    durationLabel: '0:19',
    href: '/industries/extrusion-lines',
  },
  {
    kind: 'photo',
    src: '/static/clients/eagry-force-multan/barrel-jacket.jpg',
    alt: 'Barrel insulation jacket at Eagry Force, Multan',
    caption: 'Eagry Force, Multan',
    href: '/clients/eagry-force-multan',
  },
  {
    kind: 'photo',
    src: '/static/industries/extrusion-blow-moulding/head-jackets.jpg',
    alt: 'Die head insulation jackets on blow moulding machine',
    caption: 'Die head jackets on blow moulding',
    href: '/industries/extrusion-blow-moulding',
  },
]

export function LandingMedia() {
  return (
    <section className="bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
              Plant proof
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              Real machines. Real plants. See the jackets on the floor.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
              Photos and plant video from installs across Pakistan. More in the gallery.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-sm border-stone-300">
            <Link href="/image-gallery">
              Open full gallery
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <>
                  <IndustryMuxPlayer
                    playbackId={tile.playbackId}
                    title={tile.title}
                    variant="tile"
                  />
                  <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-600">
                    {tile.href ? (
                      <Link href={tile.href} className="font-medium text-stone-800 hover:text-[#c45c1a]">
                        {tile.title}
                      </Link>
                    ) : (
                      tile.title
                    )}
                    <span className="ml-2 text-xs uppercase tracking-[0.14em] text-stone-500">
                      {tile.durationLabel}
                    </span>
                  </figcaption>
                </>
              ) : (
                <Link
                  href={tile.href ?? '/image-gallery'}
                  className="block transition-opacity hover:opacity-95"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-600">
                    {tile.caption}
                  </figcaption>
                </Link>
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
