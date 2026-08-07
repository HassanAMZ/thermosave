import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getPublishedProducts } from '@/data/products'
import ListLayout from '@/layouts/ListLayout'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const POSTS_PER_PAGE = 6

export function generateStaticParams() {
  const totalPosts = getPublishedProducts()
  const totalPages = Math.max(1, Math.ceil(totalPosts.length / POSTS_PER_PAGE))
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default async function ProductsPagePage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const pageNumber = parseInt(page, 10)
  const posts = getPublishedProducts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (Number.isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    notFound()
  }

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages,
  }

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        pathname={undefined as any}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Products"
      />
    </>
  )
}
