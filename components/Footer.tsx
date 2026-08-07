import type { ReactNode } from 'react'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import Logo from '@/components/Logo'
import {
  EMAIL,
  FOUNDER,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/components/landing/constants'
import { cn } from '@/components/lib/utils'

const navigation = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Clientele', href: '/clients' },
    { name: 'Gallery', href: '/image-gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'Mica Band Heaters', href: '/products/mica-band-heaters' },
    { name: 'Ceramic Band Heaters', href: '/products/ceramic-band-heater' },
    { name: 'Thermal Insulation Jackets', href: '/products/thermal-insolations' },
    { name: 'All Products', href: '/products' },
  ],
  plant: [
    { name: 'Extrusion Blow Moulding', href: '/industries/extrusion-blow-moulding' },
    { name: 'Extrusion Lines', href: '/industries/extrusion-lines' },
    { name: 'Hoppers & Hopper Dryers', href: '/industries/hoppers' },
    { name: 'Get Assessment', href: '/contact' },
    { name: 'Proof & Clients', href: '/clients' },
    { name: 'Buhader Ind LHR', href: '/clients/buhader-ind-lhr' },
    { name: 'Eagry Force Multan', href: '/clients/eagry-force-multan' },
    { name: 'Shaigan Pharma RPI', href: '/clients/shaigan-pharma-rpi' },
    { name: 'Time Star LHR', href: '/clients/time-star-lhr' },
    { name: 'Al-Khair Five Star Foam', href: '/clients/al-khair-five-star-foam-lhr' },
    { name: 'Major Electrical Sargodha', href: '/clients/major-electrical-sargodha' },
    { name: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}` },
  ],
} as const

const socialIconClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-sm border border-dotted border-white/25 text-stone-300 transition-transform hover:-translate-y-0.5 hover:border-[#f0a060]/60 hover:text-[#f0a060]'

function FooterLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

  if (external) {
    return (
      <a
        href={href}
        className={cn(
          'text-sm text-stone-400 transition-colors hover:text-stone-100 md:text-xs',
          className
        )}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        'text-sm text-stone-400 transition-colors hover:text-stone-100 md:text-xs',
        className
      )}
    >
      {children}
    </Link>
  )
}

function NavColumn({ title, items }: { title: string; items: readonly { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.18em] text-[#f0a060]">
        {title}
      </h3>
      <ul role="list" className="flex flex-col space-y-2">
        {items.map((item) => (
          <li key={item.name} className="flow-root">
            <FooterLink href={item.href}>{item.name}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0c1014] text-stone-300">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 px-4 py-10 pb-0 md:flex md:items-start md:justify-start md:gap-8 md:px-6">
        <div className="flex shrink-0 justify-center md:justify-start">
          <Logo />
        </div>
        <div className="max-w-3xl text-center md:text-left">
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[#f0a060]">
            ThermoSave
          </p>
          <p className="mt-2 text-xs leading-relaxed text-stone-400 md:text-sm">
            Industrial heaters and thermal insulation for plastic plants across Pakistan. We help
            factories stop electricity waste thrown away as heat. Measured savings for injection
            molding, blow molding, and extrusion lines. 10+ years · 200+ plants · 20%+ average energy
            saved.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-stone-400 md:text-sm">
            Talk to{' '}
            <a
              href={FOUNDER.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-stone-300 transition-colors hover:text-[#f0a060]"
            >
              {FOUNDER.name}
            </a>
            , {FOUNDER.role}. {FOUNDER.location}.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="border-b border-dotted border-white/15" />
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-3 md:flex md:flex-row md:justify-between">
          <NavColumn title="Company" items={navigation.company} />
          <NavColumn title="Products" items={navigation.products} />
          <NavColumn title="Industries & support" items={navigation.plant} />
        </div>
        <div className="border-b border-dotted border-white/15" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 px-4 pb-8 md:gap-4">
        <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`} className={socialIconClass}>
          <Phone className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <a href={`mailto:${EMAIL}`} aria-label="Email ThermoSave" className={socialIconClass}>
          <Mail className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp ThermoSave"
          className={socialIconClass}
        >
          <BsWhatsapp className="h-4 w-4" />
        </a>
        <a
          href={FOUNDER.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${FOUNDER.name} on LinkedIn`}
          className={socialIconClass}
        >
          <BsLinkedin className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center gap-1 px-4 text-center text-xs text-stone-500">
        <p>
          <span>© {year} </span>
          <Link href="/" className="font-medium text-stone-300 transition-colors hover:text-[#f0a060]">
            ThermoSave
          </Link>
          <span>. All rights reserved.</span>
        </p>
        <p className="text-stone-600">Energy-saving heaters &amp; insulation for plastic manufacturers in Pakistan.</p>
      </div>
    </footer>
  )
}
