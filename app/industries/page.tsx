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
    'Thermal insulation and heaters by plastic process — extrusion blow moulding, extrusion lines, and more. Size jackets and bands for your plant in Pakistan.',
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
