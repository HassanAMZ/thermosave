import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { notFound } from 'next/navigation'

const DEFAULT_LAYOUT = 'ProductLayout'

export async function generateStaticParams() {
  const posts = getFiles('products')
  return posts.map((p) => {
    const slug = formatSlug(p)
    // Handle nested slugs (e.g., "category/product")
    return {
      slug: slug.split('/'),
    }
  })
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug ? resolvedParams.slug.join('/') : ''

  try {
    const post = await getFileBySlug('products', slug)
    const { frontMatter } = post

    if (frontMatter.draft) {
      return {
        title: 'Under Construction',
      }
    }

    return {
      title: frontMatter.title,
      description: frontMatter.summary || frontMatter.description,
    }
  } catch (error) {
    return {
      title: 'Product Not Found',
    }
  }
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug ? resolvedParams.slug.join('/') : ''

  try {
    const allPosts = await getAllFilesFrontMatter('products')
    const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slug)
    const prev = allPosts[postIndex + 1] || null
    const next = allPosts[postIndex - 1] || null
    const post = await getFileBySlug('products', slug)
    const authorList = post.frontMatter.authors || ['default']
    const authorPromise = authorList.map(async (author) => {
      const authorResults = await getFileBySlug('authors', [author])
      return authorResults.frontMatter
    })
    const authorDetails = await Promise.all(authorPromise)

    // Generate RSS
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)

    const { mdxSource, toc, frontMatter } = post

    if (frontMatter.draft) {
      return (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )
    }

    return (
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        toc={toc}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        authorDetails={authorDetails}
        prev={prev}
        next={next}
      />
    )
  } catch (error) {
    console.error('Product page error:', error)
    notFound()
  }
}
