import NextLink from 'next/link'
import formatDate from '@/lib/utils/formatDate'
import { Box, Link, Image, Heading, Flex } from '@chakra-ui/react'
export default function PopularPost({ posts }) {
  return (
    <Flex direction="column" gap="2">
      <Heading as="h2" py="3" fontSize={['xl']}>
        Popular Posts
      </Heading>
      {posts.slice(0, 4).map((frontMatter, index) => {
        const { slug, date, title, coverImage } = frontMatter
        return (
          <>
            <Flex key={index} gap="3">
              <Image boxSize="120px" objectFit="cover" src={coverImage} alt={title} />{' '}
              <Flex direction={'column'} justify="center">
                <NextLink href={`/blog/${slug}`}>
                  <Link>
                    <Heading
                      as="h1"
                      textTransform="capitalize"
                      fontSize={{ sm: 'sm', md: 'md', lg: 'lg' }}
                    >
                      {title}
                    </Heading>
                  </Link>
                </NextLink>
                <Box as="time" dateTime={date} fontSize={{ sm: 'xs', md: 'sm', lg: 'md' }}>
                  {formatDate(date)}
                </Box>
              </Flex>
            </Flex>
          </>
        )
      })}
    </Flex>
  )
}
