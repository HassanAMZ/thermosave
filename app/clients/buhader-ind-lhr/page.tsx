import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getClient } from '@/data/clients'
import {
  ClientCaseHero,
  ClientCaseStory,
  ClientCaseMedia,
  ClientCaseOffer,
  ClientCaseFaq,
} from '@/components/clients'
import { LandingFinalCTA, LandingProof, StickyContact } from '@/components/landing'

const SLUG = 'buhader-ind-lhr'

const client = getClient(SLUG)

export const metadata: Metadata = {
  title: client?.seoTitle ?? 'Buhader Ind LHR | ThermoSave',
  description: client?.seoDescription,
}

export default function BuhaderIndLhrPage() {
  if (!client) {
    notFound()
  }

  return (
    <div>
      <ClientCaseHero client={client} />
      <ClientCaseStory client={client} />
      <ClientCaseMedia client={client} />
      <ClientCaseOffer client={client} />
      <LandingProof />
      <ClientCaseFaq client={client} />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
