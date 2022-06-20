import NextLink from 'next/link'
import { ProductsSEO } from '@/components/SEO'
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
  chakra,
  Stack,
  Image,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'
const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function ProductsLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {
    slug,
    fileName,
    date,
    title,
    tags,
    coverImage,
    summary,
    productsID,
    details,
    description,
    features,
    unit,
    price,
  } = frontMatter
  const { avatar, name, instagram } = authorDetails[0]
  return (
    <>
      <ProductsSEO
        url={`${siteMetadata.siteUrl}/products/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <Box py="5">
        <Container maxW="container.xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={coverImage}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {title}
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  {price}
                  {unit}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore
                  </Text>
                  <Text fontSize={'lg'}>{summary}</Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      {features.map((feature, index) => {
                        return (
                          <>
                            <ListItem key={index}>{feature}</ListItem>
                          </>
                        )
                      })}
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    {Object.keys(details).map((ObjectKey,index) => (
                      <ListItem key={index}>
                        <Text as={'span'} fontWeight={'bold'}>
                          {ObjectKey} {': '}
                        </Text>
                        {details[ObjectKey]}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Stack>

              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('gray.900', 'gray.50')}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
              >
                Message Now{' '}
              </Button>

              <Stack direction="row" alignItems="center" justifyContent={'center'}>
                <MdLocalShipping />
                <Text>7 - 10 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Box as="article" id="singleProductsProducts" py="2">
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
                            href={`/products/${prev.slug}`}
                            aria-label="Next Products"
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
                          <NextLink passHref href={`/products/${prev.slug}`}>
                            <ChakraLink>
                              <Text py="2">{prev.title}</Text>
                            </ChakraLink>
                          </NextLink>
                        </Flex>
                      )}
                      {next && (
                        <Flex direction="column" align={{ base: 'center', sm: 'end' }} py="2">
                          <NextLink passHref href={`/products/${next.slug}`}>
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
                          <NextLink passHref href={`/products/${next.slug}`}>
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

                <NextLink passHref href="/products">
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
                      <Text py="2">&larr; Back to the productss</Text>
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
