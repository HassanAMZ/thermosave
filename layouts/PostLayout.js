import NextLink from 'next/link'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import {
  Box,
  Heading,
  Link as ChakraLink,
  Grid,
  Flex,
  Button,
  Container,
  Text,
} from '@chakra-ui/react'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, coverImage, blogID } = frontMatter
  const { avatar, name, instagram } = authorDetails[0]
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <Box bgColor={'gray.50'} py="5">
        <Container maxW="container.xl">
          <Grid templateRows="repeat(auto-fill, minmax(350px, 30vh))" placeContent={'center'}>
            <Flex
              align="center"
              justify={'center'}
              direction="column"
              gap="5"
              textTransform={'capitalize'}
              fontWeight="bold"
            >
              <Heading as="h1" py="2" fontSize={['1.75rem', '2.2rem']} align="center">
                {title}
              </Heading>
              {tags && (
                <Flex wrap="wrap" align="center" justify={'center'}>
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </Flex>
              )}
              <Flex
                direction={['column', 'column', 'row', 'row']}
                justify="left"
                fontSize="xs"
                columnGap="2"
                align="center"
              >
                <Flex justify="left" align="center" columnGap="2">
                  <NextLink passHref href="/about">
                    <ChakraLink>
                      <Text textAlign={'center'}>{name}</Text>
                    </ChakraLink>
                  </NextLink>
                  <Box as="span">{` • `}</Box>
                  <Text textAlign={'center'} as="time" dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </Text>
                </Flex>
                <Flex direction="row" columnGap="2" align={'center'} justify="center">
                  <Box as="span" id="time"></Box>
                  <Text>min read</Text>

                  <Box as="span">{` • `}</Box>
                  <GAPageView slug={slug} />
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Box as="article" id="singleBlogPost" py="2">
          <Box>
            <Flex direction="column" py="2">
              <Box as="article">{children}</Box>

              {/* <Comments frontMatter={frontMatter} /> */}

              <Box>
                <Box py="2">
                  {(next || prev) && (
                    <Flex justify="space-between" direction={{ base: 'column', sm: 'row' }}>
                      {prev && (
                        <Flex direction="column" align={{ base: 'center', sm: 'start' }} py="2">
                          <NextLink
                            passHref
                            href={`/blog/${prev.slug}`}
                            aria-label="Next Blog"
                            width={{ base: '100%', sm: 'fit-content' }}
                          >
                            <ChakraLink textDecoration={'none !important'}>
                              <Button
                                colorScheme="teal"
                                size="sm"
                                w="fit-content"
                                textTransform={'uppercase'}
                                variant="solid"
                                rounded={'full'}
                                fontWeight={'normal'}
                                px={6}
                                bg={'teal.400'}
                                _hover={{ bg: 'teal.500' }}
                                my="4"
                              >
                                Previous Article
                              </Button>
                            </ChakraLink>
                          </NextLink>
                          <NextLink passHref href={`/blog/${prev.slug}`}>
                            <ChakraLink>
                              <Text py="2">{prev.title}</Text>
                            </ChakraLink>
                          </NextLink>
                        </Flex>
                      )}
                      {next && (
                        <Flex direction="column" align={{ base: 'center', sm: 'end' }} py="2">
                          <NextLink passHref href={`/blog/${next.slug}`}>
                            <ChakraLink>
                              <Button
                                w="fit-content"
                                colorScheme="teal"
                                size="sm"
                                textTransform={'uppercase'}
                                variant="solid"
                                rounded={'full'}
                                fontWeight={'normal'}
                                px={6}
                                bg={'teal.400'}
                                _hover={{ bg: 'teal.500' }}
                                my="4"
                              >
                                Next Article
                              </Button>
                            </ChakraLink>
                          </NextLink>
                          <NextLink passHref href={`/blog/${next.slug}`}>
                            <ChakraLink>
                              <Text py="2" textAlign={'end'}>
                                {next.title}
                              </Text>
                            </ChakraLink>
                          </NextLink>
                        </Flex>
                      )}
                    </Flex>
                  )}
                </Box>

                <NextLink passHref href="/blog">
                  <ChakraLink>
                    <Button
                      colorScheme="teal"
                      size="sm"
                      w="100%"
                      textTransform={'uppercase'}
                      variant="solid"
                      rounded={'full'}
                      fontWeight={'normal'}
                      px={6}
                      bg={'teal.400'}
                      _hover={{ bg: 'teal.500' }}
                      my="4"
                    >
                      <Text py="2">&larr; Back to the blogs</Text>
                    </Button>
                  </ChakraLink>
                </NextLink>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </>
  )
}
