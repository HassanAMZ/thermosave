import { getPublishedProducts } from '@/data/products'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import type { Metadata } from 'next'

export const POSTS_PER_PAGE = 6

export const metadata: Metadata = {
  title: `Products - ${siteMetadata.author}`,
  description: siteMetadata.description,
}

export default function ProductsPage() {
  const posts = getPublishedProducts()
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <PageSEO
        title={`Products - ${siteMetadata.author}`}
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
