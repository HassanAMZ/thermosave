import type { Metadata } from 'next'
import { getAllClients } from '@/data/clients'
import { ClientsHero, ClientsGrid } from '@/components/clients'
import { LandingFinalCTA, LandingProof, StickyContact } from '@/components/landing'

export const metadata: Metadata = {
  title: 'Clientele & Case Studies | ThermoSave',
  description:
    'Named plant case studies from ThermoSave installs across Pakistan — plant video, jackets on real machines, free energy-loss assessment.',
}

export default function ClientsPage() {
  const clients = getAllClients()

  return (
    <div>
      <ClientsHero />
      <ClientsGrid clients={clients} />
      <LandingProof />
      <LandingFinalCTA />
      <StickyContact />
    </div>
  )
}
