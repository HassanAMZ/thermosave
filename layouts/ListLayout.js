import { Box, Heading, Container, Grid, Link as ChakraLink, Button, Flex } from '@chakra-ui/react'
import AllProducts from '@/components/AllProducts'
import PopularProducts from '@/components/PopularProducts'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const randomGenerator = () => {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0
  }

  return (
    <Container maxW="container.xl">
      <Grid
        templateColumns={{ sm: '1fr', md: '3fr 2fr', lg: 'minmax(220px, 2fr) 1fr' }}
        gap={5}
        m="0"
        py={[5, 6]}
      >
        <AllProducts
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          randomGenerator={randomGenerator}
        />
        <PopularProducts posts={posts} initialDisplayPosts={'4'} />
      </Grid>
    </Container>
  )
}
