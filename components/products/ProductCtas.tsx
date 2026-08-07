import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/components/landing/constants'

type ProductCtasProps = {
  tone?: 'light' | 'dark'
  className?: string
}

export function ProductCtas({ tone = 'light', className = '' }: ProductCtasProps) {
  const isDark = tone === 'dark'

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <Button
        asChild
        size="lg"
        className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
      >
        <Link href="/contact">Get a Free Energy Loss Assessment</Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className={
          isDark
            ? 'h-12 rounded-sm border-stone-400/70 bg-transparent px-6 text-base text-stone-100 hover:bg-white/10 hover:text-white'
            : 'h-12 rounded-sm border-stone-300 bg-transparent px-6 text-base text-stone-900 hover:bg-stone-100'
        }
      >
        <a href={`tel:${PHONE_TEL}`}>
          <Phone className="h-4 w-4" />
          Call {PHONE_DISPLAY}
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className={
          isDark
            ? 'h-12 rounded-sm border-stone-400/70 bg-transparent px-6 text-base text-stone-100 hover:bg-white/10 hover:text-white'
            : 'h-12 rounded-sm border-stone-300 bg-transparent px-6 text-base text-stone-900 hover:bg-stone-100'
        }
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </Button>
    </div>
  )
}
