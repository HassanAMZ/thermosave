'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/components/lib/utils'

export type CarouselImage = {
  src: string
  alt: string
}

type ImageCarouselProps = {
  images?: CarouselImage[]
  className?: string
}

export default function ImageCarousel({ images = [], className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images.length) return null

  const current = images[currentIndex]!
  const hasMultiple = images.length > 1
  const isCutout = current.src.includes('/cutouts/')

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className={cn('w-full', className)}>
      <div className={cn('relative overflow-hidden', isCutout ? 'bg-white' : 'bg-stone-900')}>
        <div className="relative aspect-[4/3] w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority
            className={isCutout ? 'object-contain p-4 sm:p-6' : 'object-cover'}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm border border-stone-200/80 bg-white/90 text-stone-600 transition-colors hover:border-[#c45c1a]/40 hover:text-[#c45c1a]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm border border-stone-200/80 bg-white/90 text-stone-600 transition-colors hover:border-[#c45c1a]/40 hover:text-[#c45c1a]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div
          className={cn(
            'mt-3 grid gap-px overflow-hidden rounded-sm bg-stone-200/80',
            images.length <= 4
              ? 'grid-cols-2 sm:grid-cols-4'
              : 'grid-cols-3 sm:grid-cols-3 lg:grid-cols-6'
          )}
          role="tablist"
          aria-label="Product images"
        >
          {images.map((image, index) => {
            const selected = index === currentIndex
            const thumbCutout = image.src.includes('/cutouts/')
            return (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`View image ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'relative flex aspect-square items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c45c1a]',
                  thumbCutout ? 'bg-white/90 p-2' : 'bg-stone-900 p-0',
                  selected
                    ? 'bg-white ring-2 ring-inset ring-[#c45c1a]'
                    : thumbCutout
                      ? 'hover:bg-white'
                      : 'hover:opacity-90'
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={96}
                  height={96}
                  className={cn(
                    'h-full w-full',
                    thumbCutout ? 'object-contain' : 'object-cover'
                  )}
                  sizes="96px"
                />
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
