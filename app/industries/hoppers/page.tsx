import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustry } from '@/data/industries'
import {
  IndustryHero,
  IndustryProblem,
  IndustryAgitate,
  IndustryMechanism,
  IndustryMedia,
  IndustryOffer,
  IndustryFaq,
} from '@/components/industries'
import { LandingFinalCTA, LandingProof, StickyContact } from '@/components/landing'

const SLUG = 'hoppers'

const industry = getIndustry(SLUG)

export const metadata: Metadata = {
  title: industry?.seoTitle ?? 'Hoppers & Hopper Dryers | ThermoSave',
  description: industry?.seoDescription,
}

export default function HoppersPage() {
  if (!industry) {
    notFound()
  }

  return (
    <div>
      <IndustryHero industry={industry} />
      <IndustryProblem industry={industry} />
      <IndustryAgitate industry={industry} />
      <IndustryMechanism industry={industry} />
      <IndustryMedia industry={industry} />
      <IndustryOffer industry={industry} />
      <LandingProof />
      <IndustryFaq industry={industry} />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
