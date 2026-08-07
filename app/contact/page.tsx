import type { Metadata } from 'next'
import { ContactHero, ContactBody } from '@/components/contact'
import { LandingProof, StickyContact } from '@/components/landing'

export const metadata: Metadata = {
  title: 'Contact — Free Energy Loss Assessment',
  description:
    'Book a free ThermoSave energy-loss assessment for your plastic plant in Pakistan. Call, WhatsApp, or send plant details — heaters and insulation jackets sized to your machines.',
}

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactBody />
      <LandingProof />
      <StickyContact />
    </div>
  )
}
