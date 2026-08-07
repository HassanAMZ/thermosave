import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import type { Metadata } from 'next'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ThermoSave',
}

async function getData() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return authorDetails
}

export default async function ContactPage() {
  const authorDetails = await getData()
  const { mdxSource, frontMatter } = authorDetails as any

  return (
    <div className="container mx-auto max-w-7xl">
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </div>
  )
}
