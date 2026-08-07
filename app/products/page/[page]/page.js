import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'

export const POSTS_PER_PAGE = 6

export async function generateStaticParams() {
  const totalPosts = await getAllFilesFrontMatter('products')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export async function generateMetadata({ params }) {
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
  }
}

export default async function ProductsPagePage({ params }) {
  const { page } = await params
  const pageNumber = parseInt(page)
  const posts = await getAllFilesFrontMatter('products')
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Products"
      />
    </>
  )
}
