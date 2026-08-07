import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import Statistics from '@/components/Statistics'
import FeaturesNew from '@/components/FeaturesNew'
import ProductCard from '@/components/ProductCard'
import { CommerceHero } from '@/components/ui/commerce-hero'
import type { Metadata } from 'next'

export const POSTS_PER_PAGE = 5

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

async function getData() {
  const tags = await getAllTags('products')
  const posts = await getAllFilesFrontMatter('products')
  const initialDisplayProducts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  const published = posts.filter((product) => product.draft !== true)

  const preferredSlugs = [
    'mica-band-heaters',
    'ceramic-band-heater',
    'thermal-insolations',
    'insulated-heaters',
  ]

  const featuredFromPreferred = preferredSlugs
    .map((slug) => published.find((product) => product.slug === slug))
    .filter(Boolean)

  const featuredCategories = (
    featuredFromPreferred.length >= 4
      ? featuredFromPreferred.slice(0, 4)
      : [
          ...featuredFromPreferred,
          ...published.filter(
            (product) => !featuredFromPreferred.some((item) => item.slug === product.slug)
          ),
        ].slice(0, 4)
  ).map((product) => ({
    title: product.title as string,
    image: product.coverImage as string,
    href: `/products/${product.slug}`,
  }))

  // Keep a full 4-up grid: if fewer than 4 published products, add an All Products card
  if (featuredCategories.length < 4) {
    featuredCategories.push({
      title: 'All Products',
      image: '/static/products/00001.png',
      href: '/products',
    })
  }

  return { initialDisplayProducts, posts, pagination, tags, featuredCategories }
}

export default async function Home() {
  const { initialDisplayProducts, featuredCategories } = await getData()

  return (
    <div>
      <CommerceHero categories={featuredCategories} />

      <div>
        <Features />
      </div>

      <div className="container mx-auto max-w-7xl py-4 md:py-20 xl:py-32">
        <h2 className="pb-8 text-center text-4xl font-bold">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
          {initialDisplayProducts.map((frontMatter, index) => {
            const { slug, title, summary, tags, coverImage } = frontMatter
            return (
              <ProductCard
                slug={slug}
                title={title}
                summary={summary}
                tags={tags}
                coverImage={coverImage}
                key={index}
              />
            )
          })}
        </div>
      </div>

      <div>
        <Statistics />
      </div>

      <div className="container mx-auto max-w-7xl py-4 md:py-20 xl:py-32">
        <FeaturesNew />
      </div>

      <div id="testimonial" className="container mx-auto max-w-7xl py-4 md:py-20 xl:py-32">
        <Testimonial />
      </div>
    </div>
  )
}
