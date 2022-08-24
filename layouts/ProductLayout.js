import NextLink from 'next/link'
import Image from 'next/image'
import { ProductsSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import {
  Box,
  Heading,
  Link as ChakraLink,
  Grid,
  Flex,
  Button,
  Container,
  Text,
  Stack,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import SendAMessage from '@/components/SendAMessage'
import { MdLocalShipping } from 'react-icons/md'

export default function ProductsLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {
    slug,
    title,
    applications,
    summary,
    details,
    features,
    unit,
    price,
    currency,
    caousalImages,
  } = frontMatter
  return (
    <>
      <ProductsSEO
        url={`${siteMetadata.siteUrl}/products/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <Box>
        <Container maxW="container.xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 6, sm: 12, md: 18, lg: 24 }}
          >
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={true}>
              {caousalImages.map((url, index) => (
                <img key={index} src={url} />
              ))}
            </Carousel>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {title}
                </Heading>
                {/* <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  {price}&nbsp; {currency}&nbsp; {unit}
                </Text> */}
              </Box>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
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
                    {Object.keys(details).map((ObjectKey, index) => (
                      <ListItem key={index}>
                        <Text as={'span'} fontWeight={'bold'}>
                          {ObjectKey} {': '}
                        </Text>
                        {details[ObjectKey]}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                  >
                    Applications
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      {applications.map((application, index) => {
                        return (
                          <>
                            <ListItem key={index}>{application}</ListItem>
                          </>
                        )
                      })}
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>
              <SendAMessage />
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

              <Box>
                <Box py="2">
                  {(next || prev) && (
                    <Flex justify="space-between" direction={{ base: 'column', sm: 'row' }}>
                      {prev && (
                        <Flex direction="column" align={{ base: 'center', sm: 'start' }} py="2">
                          <NextLink
                            flex="auto"
                            passHref
                            alignSelf=" stretch"
                            href={`/products/${prev.slug}`}
                            aria-label="Previous Product"
                          >
                            <ChakraLink textDecoration={'none !important'}>
                              <Button
                                colorScheme="red"
                                size="sm"
                                w="100%"
                                textTransform={'uppercase'}
                                variant="solid"
                                rounded={'full'}
                                fontWeight={'normal'}
                                px={6}
                                bg={'red.400'}
                                _hover={{ bg: 'red.500', textDecoration: 'none' }}
                                my="4"
                              >
                                Previous Product
                              </Button>
                            </ChakraLink>
                          </NextLink>
                          <NextLink passHref href={`/products/${prev.slug}`}>
                            <ChakraLink px="2" _hover={{ textDecoration: 'none' }}>
                              <Box borderColor="red.300" borderWidth="thin" borderRadius={'15px'}>
                                <Grid
                                  gap="5"
                                  templateColumns={{
                                    base: '150px 1fr',
                                    sm: '170px 1fr',
                                    md: '140px 1fr',
                                    lg: '120px 1fr',
                                  }}
                                >
                                  <Image
                                    src={prev.coverImage}
                                    layout="responsive"
                                    width={600}
                                    height={450}
                                    alt={prev.title}
                                  />

                                  <Flex direction={'column'} justify="center">
                                    <Heading
                                      as="h3"
                                      px="2"
                                      textTransform="capitalize"
                                      fontSize="sm"
                                      overflow="hidden"
                                    >
                                      {prev.title}
                                    </Heading>
                                  </Flex>
                                </Grid>
                              </Box>
                            </ChakraLink>
                          </NextLink>
                        </Flex>
                      )}
                      {next && (
                        <Flex direction="column" align={{ base: 'center', sm: 'end' }} py="2">
                          <NextLink passHref href={`/products/${next.slug}`}>
                            <ChakraLink>
                              <Button
                                w="100%"
                                colorScheme="red"
                                size="sm"
                                textTransform={'uppercase'}
                                variant="solid"
                                rounded={'full'}
                                fontWeight={'normal'}
                                px={6}
                                bg={'red.400'}
                                _hover={{ bg: 'red.500', textDecoration: 'none' }}
                                my="4"
                              >
                                Next Product
                              </Button>
                            </ChakraLink>
                          </NextLink>
                          <NextLink passHref href={`/products/${next.slug}`}>
                            <ChakraLink _hover={{ textDecoration: 'none' }}>
                              <Box borderColor="red.300" borderWidth="thin" borderRadius={'15px'}>
                                <Grid
                                  gap="5"
                                  templateColumns={{
                                    base: '150px 1fr',
                                    sm: '170px 1fr',
                                    md: '140px 1fr',
                                    lg: '120px 1fr',
                                  }}
                                >
                                  <Image
                                    src={next.coverImage}
                                    layout="responsive"
                                    width={600}
                                    height={450}
                                    alt={next.title}
                                  />

                                  <Flex direction={'column'} justify="center">
                                    <Heading
                                      as="h3"
                                      px="2"
                                      textTransform="capitalize"
                                      fontSize="sm"
                                      overflow="hidden"
                                    >
                                      {next.title}
                                    </Heading>
                                  </Flex>
                                </Grid>
                              </Box>
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
                      colorScheme="red"
                      size="sm"
                      w="100%"
                      textTransform={'uppercase'}
                      variant="solid"
                      rounded={'full'}
                      fontWeight={'normal'}
                      px={6}
                      bg={'red.400'}
                      _hover={{ bg: 'red.500', textDecoration: 'none' }}
                      my="4"
                    >
                      <Text py="2">&larr; Back to the products</Text>
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
