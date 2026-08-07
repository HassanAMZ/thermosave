'use client'

import MuxPlayer from '@mux/mux-player-react'

type IndustryMuxPlayerProps = {
  playbackId: string
  title: string
  className?: string
}

/** Plant clips are phone-shot portrait (Mux 239:425). */
const PORTRAIT_ASPECT = '239 / 425'

export function IndustryMuxPlayer({ playbackId, title, className = '' }: IndustryMuxPlayerProps) {
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
