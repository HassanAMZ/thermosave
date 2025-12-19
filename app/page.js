import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import Statistics from '@/components/Statistics'
import FeaturesNew from '@/components/FeaturesNew'
import ProductCard from '@/components/ProductCard'
import Hero from '@/components/Hero'

export const POSTS_PER_PAGE = 5
const MAX_DISPLAY = 5

export const metadata = {
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

  return { initialDisplayProducts, posts, pagination, tags }
}

export default async function Home() {
  const { initialDisplayProducts, posts, pagination, tags } = await getData()

  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="container mx-auto max-w-7xl">
        <Hero />
      </div>

      <div>
        <Features />
      </div>

      <div className="container mx-auto max-w-7xl py-4 md:py-20 xl:py-32">
        <h2 className="pb-8 text-center text-4xl font-bold">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-0">
          {initialDisplayProducts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags, coverImage, price, unit } = frontMatter
            return (
              <ProductCard
                slug={slug}
                date={date}
                title={title}
                summary={summary}
                tags={tags}
                coverImage={coverImage}
                price={price}
                unit={unit}
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
