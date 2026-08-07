import type { Metadata } from 'next'
import { getGalleryTiles } from '@/data/gallery'
import { GalleryHero, GalleryGrid, GalleryOffer } from '@/components/gallery'
import { LandingFinalCTA, LandingProof, StickyContact } from '@/components/landing'

export const metadata: Metadata = {
  title: 'Plant Gallery — Jackets on Real Machines | ThermoSave',
  description:
    'Plant video and photos from ThermoSave installs across Pakistan — extrusion lines, hoppers, named factories. Free energy-loss assessment.',
}

export default function ImageGalleryPage() {
  const tiles = getGalleryTiles()

  return (
    <div>
      <GalleryHero />
      <GalleryGrid tiles={tiles} />
      <GalleryOffer />
      <LandingProof />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
