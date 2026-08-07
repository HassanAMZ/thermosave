/**
 * Site gallery — Hormozi likelihood dump (not product taxonomy).
 * Soft filters only: All · Video · Plants · Process.
 * Aggregates Mux + stills from industries + clients (+ depot extras).
 */

import { getAllClients } from '@/data/clients'
import { getAllIndustries } from '@/data/industries'

export type GalleryChip = 'all' | 'video' | 'plants' | 'process'

/** Where the tile came from — maps to Plants / Process chips */
export type GallerySource = 'plants' | 'process'

export type GalleryVideoTile = {
  kind: 'video'
  id: string
  playbackId: string
  title: string
  durationLabel: string
  source: GallerySource
  href?: string
}

export type GalleryPhotoTile = {
  kind: 'photo'
  id: string
  src: string
  alt: string
  caption: string
  source: GallerySource
  href?: string
}

export type GalleryTile = GalleryVideoTile | GalleryPhotoTile

export const GALLERY_CHIPS: { id: GalleryChip; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'video', label: 'Video' },
  { id: 'plants', label: 'Plants' },
  { id: 'process', label: 'Process' },
]

/**
 * Depot extras not yet wired to a client case page.
 * Skip playback IDs that 404 on stream.mux.com.
 */
const galleryExtras: GalleryVideoTile[] = [
  {
    kind: 'video',
    id: 'extra-al-khair-foam-lhr-2',
    playbackId: 'cvzFaxncAbU7b5x4uRj3Oz00uDNFkLpLTZGYXYmxrrTY',
    title: 'Al Khair Five Star Foam LHR. Plant clip',
    durationLabel: '1:15',
    source: 'plants',
  },
]

function tileKey(tile: GalleryTile): string {
  return tile.kind === 'video' ? `v:${tile.playbackId}` : `p:${tile.src}`
}

/** Photos first (instant plant proof), then videos — stable within each group */
function sortTiles(tiles: GalleryTile[]): GalleryTile[] {
  return [...tiles].sort((a, b) => {
    if (a.kind === b.kind) return 0
    return a.kind === 'photo' ? -1 : 1
  })
}

export function getGalleryTiles(): GalleryTile[] {
  const seen = new Set<string>()
  const tiles: GalleryTile[] = []

  const push = (tile: GalleryTile) => {
    const key = tileKey(tile)
    if (seen.has(key)) return
    seen.add(key)
    tiles.push(tile)
  }

  for (const industry of getAllIndustries()) {
    const href = `/industries/${industry.slug}`
    for (const video of industry.videos) {
      push({
        kind: 'video',
        id: `industry-${industry.slug}-${video.playbackId}`,
        playbackId: video.playbackId,
        title: video.title,
        durationLabel: video.durationLabel,
        source: 'process',
        href,
      })
    }
    for (const photo of industry.gallery) {
      push({
        kind: 'photo',
        id: `industry-${industry.slug}-${photo.src}`,
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption,
        source: 'process',
        href,
      })
    }
  }

  for (const client of getAllClients()) {
    const href = `/clients/${client.slug}`
    for (const video of client.videos) {
      push({
        kind: 'video',
        id: `client-${client.slug}-${video.playbackId}`,
        playbackId: video.playbackId,
        title: video.title,
        durationLabel: video.durationLabel,
        source: 'plants',
        href,
      })
    }
    for (const photo of client.gallery) {
      push({
        kind: 'photo',
        id: `client-${client.slug}-${photo.src}`,
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption,
        source: 'plants',
        href,
      })
    }
  }

  for (const extra of galleryExtras) {
    push(extra)
  }

  return sortTiles(tiles)
}

export function filterGalleryTiles(tiles: GalleryTile[], chip: GalleryChip): GalleryTile[] {
  if (chip === 'all') return tiles
  if (chip === 'video') return tiles.filter((t) => t.kind === 'video')
  return tiles.filter((t) => t.source === chip)
}
