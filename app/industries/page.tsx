import type { Metadata } from 'next'
import { getAllIndustries } from '@/data/industries'
import {
  IndustriesHero,
  IndustryGrid,
} from '@/components/industries'
import { LandingFinalCTA, LandingProof, StickyContact } from '@/components/landing'

export const metadata: Metadata = {
  title: 'Industries — Heat Loss by Process | ThermoSave',
  description:
    'Thermal insulation and heaters by plastic process — start with extrusion blow moulding, then size jackets and bands for your line in Pakistan.',
}

export default function IndustriesPage() {
  const industries = getAllIndustries()

  return (
    <div>
      <IndustriesHero />
      <IndustryGrid industries={industries} />
      <LandingProof />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
