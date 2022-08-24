import NextLink from 'next/link'
import formatDate from '@/lib/utils/formatDate'
import { Box, Link as ChakraLink, Heading, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '@/components/Logo'
import { author } from '@/data/siteMetadata'
export default function PopularProducts({ posts, layout }) {
  return (
    <Flex direction="column" gap="5">
      <Grid templateColumns={{ base: '1fr', sm: layout }} gap="2">
        {posts.slice(0, 5).map((frontMatter, index) => {
          const { slug, date, title, coverImage } = frontMatter
          return (
            <Box
              borderColor="red.300"
              borderWidth="thin"
              borderRadius={'15px'}
              key={index}
              _hover={{ bg: 'red.300' }}
            >
              <NextLink href={`/products/${slug}`} passHref>
                <ChakraLink
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <Grid
                    className="hvr-grow"
                    gap="5"
                    templateColumns={{
                      base: '150px 1fr',
                      sm: '170px 1fr',
                      md: '140px 1fr',
                      lg: '120px 1fr',
                    }}
                  >
                    <Box borderRadius={'15px'} bg="white" overflow="hidden">
                      <Image
                        src={coverImage}
                        layout="responsive"
                        width={600}
                        height={450}
                        alt={title}
                      />
                    </Box>
                    <Flex direction={'column'} justify="center" align="left">
                      <Heading
                        as="h1"
                        textTransform="capitalize"
                        fontSize={{ sm: 'xm', md: 'sm', lg: 'md' }}
                      >
                        {title}
                      </Heading>
                      <Flex gap="2" align={'center'}>
                        <Logo />
                        <Flex direction={['column']} fontSize={['xs', 'sm']} gap="0">
                          <Text fontWeight={'extrabold'}>{author}</Text>
                          <Box as="time" dateTime={date}>
                            {formatDate(date)}
                          </Box>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                </ChakraLink>
              </NextLink>
            </Box>
          )
        })}
      </Grid>
    </Flex>
  )
}
