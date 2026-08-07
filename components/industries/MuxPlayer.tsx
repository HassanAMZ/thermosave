'use client'

import MuxPlayer from '@mux/mux-player-react'

type IndustryMuxPlayerProps = {
  playbackId: string
  title: string
  className?: string
}

export function IndustryMuxPlayer({ playbackId, title, className = '' }: IndustryMuxPlayerProps) {
  return (
    <div className={`overflow-hidden rounded-sm border border-stone-200 bg-[#0c1014] ${className}`}>
      <MuxPlayer
        playbackId={playbackId}
        metadata={{ video_title: title }}
        accentColor="#c45c1a"
        primaryColor="#f4f2ee"
        secondaryColor="#0c1014"
        streamType="on-demand"
        className="aspect-video w-full"
        style={{ aspectRatio: '16 / 9', width: '100%' }}
      />
    </div>
  )
}
