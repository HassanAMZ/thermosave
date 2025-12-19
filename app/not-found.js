import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <>
      <PageSEO title={`404 - ${siteMetadata.title}`} />
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/" className="mt-8 inline-block text-red-500 hover:text-red-700">
          Return Home
        </Link>
      </div>
    </>
  )
}
