import AuthorLayout from '@/layouts/AuthorLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ThermoSave',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl">
      <AuthorLayout frontMatter={{ name: 'Thermosave' }} />
    </div>
  )
}
