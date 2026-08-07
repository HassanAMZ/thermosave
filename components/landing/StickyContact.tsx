'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { FOUNDER, PHONE_TEL, WHATSAPP_URL } from './constants'

export function StickyContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:bottom-6 md:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label={`WhatsApp ${FOUNDER.name}`}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c45c1a] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45c1a]"
        aria-label={`Call ${FOUNDER.name}`}
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  )
}
