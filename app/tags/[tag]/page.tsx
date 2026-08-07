import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { getAllTags, getProductsByTag } from '@/data/products'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  const tags = getAllTags()
  return Object.keys(tags).map((tag) => ({ tag }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag } = await params
  return {
    title: `${tag} - ${siteMetadata.author}`,
    description: `${tag} tags - ${siteMetadata.author}`,
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const filteredPosts = getProductsByTag(tag)

  if (filteredPosts.length === 0) {
    notFound()
  }

  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
        pathname={undefined as any}
      />
      <ListLayout posts={filteredPosts} title={title} pagination={undefined as any} />
    </>
  )
}
