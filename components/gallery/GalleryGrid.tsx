'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IndustryMuxPlayer } from '@/components/industries/MuxPlayer'
import {
  GALLERY_CHIPS,
  filterGalleryTiles,
  type GalleryChip,
  type GalleryTile,
} from '@/data/gallery'

type GalleryGridProps = {
  tiles: GalleryTile[]
}

export function GalleryGrid({ tiles }: GalleryGridProps) {
  const [chip, setChip] = useState<GalleryChip>('all')
  const visible = filterGalleryTiles(tiles, chip)

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
            Video and photos from the floor.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600 md:text-lg">
            Process lines and named plants in one place. Filter if you want. Or just scroll.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
          {GALLERY_CHIPS.map((item) => {
            const active = chip === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setChip(item.id)}
                className={
                  active
                    ? 'rounded-sm bg-[#c45c1a] px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-sm border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-[#c45c1a]/40 hover:text-[#c45c1a]'
                }
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-base text-stone-600">No media in this filter yet.</p>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((tile, index) => (
              <motion.figure
                key={tile.id}
                className="overflow-hidden rounded-sm border border-stone-200 bg-[#faf9f7]"
                initial={{ opacity: 0.4, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(index, 12) * 0.03 }}
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-600">
                  {tile.kind === 'video' ? (
                    <>
                      {tile.href ? (
                        <Link
                          href={tile.href}
                          className="font-medium text-stone-800 transition-colors hover:text-[#c45c1a]"
                        >
                          {tile.title}
                        </Link>
                      ) : (
                        <span className="font-medium text-stone-800">{tile.title}</span>
                      )}
                      <span className="ml-2 text-xs uppercase tracking-[0.14em] text-stone-500">
                        {tile.durationLabel}
                      </span>
                    </>
                  ) : tile.href ? (
                    <Link href={tile.href} className="transition-colors hover:text-[#c45c1a]">
                      {tile.caption}
                    </Link>
                  ) : (
                    tile.caption
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
