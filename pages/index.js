import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import Statistics from '@/components/Statistics'
import FeaturesNew from '@/components/FeaturesNew'
import { Flex, Box, Heading, Button, Container, Link as ChakraLink } from '@chakra-ui/react'
import Hero from '@/components/Hero'
export const POSTS_PER_PAGE = 5
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const tags = await getAllTags('products')
  const posts = await getAllFilesFrontMatter('products')
  const initialDisplayProducts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayProducts, posts, pagination, tags } }
}

export default function Home({ posts, initialDisplayProducts, pagination, tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <Box>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <Container maxW="container.xl">
        <Hero />
      </Container>

      <Container maxW="container.xl">
        <FeaturesNew />
      </Container>

      <Container maxW="container.xl">
        <Testimonial />
      </Container>

      <Container maxW="container.xl">
        <Statistics />
      </Container>

      {/* <Container maxW="container.xl">
        <Features />
      </Container> */}
    </Box>
  )
}
