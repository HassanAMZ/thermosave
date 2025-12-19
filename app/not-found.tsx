import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `404 - ${siteMetadata.title}`,
  description: "Sorry, we couldn't find the page you're looking for.",
}

export default function NotFound() {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/" className="mt-8 inline-block text-red-500 hover:text-red-700">
        Return Home
      </Link>
    </div>
  )
}
