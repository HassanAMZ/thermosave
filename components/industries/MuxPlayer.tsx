'use client'

import type { CSSProperties } from 'react'
import MuxPlayer from '@mux/mux-player-react'

type IndustryMuxPlayerProps = {
  playbackId: string
  title: string
  className?: string
  /** `tile` matches gallery photo aspect; `portrait` is full phone-shot ratio */
  variant?: 'tile' | 'portrait'
}

/** Plant clips are phone-shot portrait (Mux 239:425). */
const PORTRAIT_ASPECT = '239 / 425'

export function IndustryMuxPlayer({
  playbackId,
  title,
  className = '',
  variant = 'portrait',
}: IndustryMuxPlayerProps) {
  if (variant === 'tile') {
    const tileStyle = {
      width: '100%',
      height: '100%',
      '--media-object-fit': 'cover',
      '--media-object-position': 'center',
    } as CSSProperties

    return (
      <div className={`relative aspect-[4/3] w-full overflow-hidden bg-[#0c1014] ${className}`}>
        <MuxPlayer
          playbackId={playbackId}
          metadata={{ video_title: title }}
          accentColor="#c45c1a"
          primaryColor="#f4f2ee"
          secondaryColor="#0c1014"
          streamType="on-demand"
          className="absolute inset-0 h-full w-full"
          style={tileStyle}
        />
      </div>
    )
  }

  return (
    <div
      className={`mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-stone-200 bg-[#0c1014] sm:max-w-md ${className}`}
    >
      <MuxPlayer
        playbackId={playbackId}
        metadata={{ video_title: title }}
        accentColor="#c45c1a"
        primaryColor="#f4f2ee"
        secondaryColor="#0c1014"
        streamType="on-demand"
        className="w-full"
        style={{ aspectRatio: PORTRAIT_ASPECT, width: '100%', height: 'auto' }}
      />
    </div>
  )
}
