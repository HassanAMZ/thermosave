import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'
import {
  Box,
  Grid,
  Heading,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  Container,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function ListLayout({
  posts,
  initialDisplayPosts = [],
  pagination,
  randomGenerator,
}) {
  const [searchValue, setSearchValue] = useState('')

  const filteredProductsPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProductsPosts

  return (
    <>
      <Container maxW="container.xl" m="0" p="0">
        <Heading as="h2" py="3" fontSize={['xl']}>
          All Products
        </Heading>
        <Box py={['5', '6']}>
          <InputGroup size="md">
            <Input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search Products"
              placeholder="Search Products"
              borderColor={'teal'}
              bgColor="white"
              color="teal"
              fontWeight={'bold'}
            />
            <InputRightElement width="2rem">
              <SearchIcon color="teal" />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={3} m="0">
          {!filteredProductsPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter, index) => {
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
        </Grid>
        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </Container>
    </>
  )
}
