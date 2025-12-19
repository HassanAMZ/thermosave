import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

const root = process.cwd()

export async function generateStaticParams() {
  const tags = await getAllTags('products')
  return Object.keys(tags).map((tag) => ({
    tag,
  }))
}

export async function generateMetadata({ params }) {
  const tag = params.tag
  return {
    title: `${tag} - ${siteMetadata.author}`,
    description: `${tag} tags - ${siteMetadata.author}`,
  }
}

export default async function TagPage({ params }) {
  const tag = params.tag
  const allPosts = await getAllFilesFrontMatter('products')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  // Generate RSS
  const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`)
  const rssPath = path.join(root, 'public', 'tags', tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)

  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={filteredPosts} title={title} />
    </>
  )
}
