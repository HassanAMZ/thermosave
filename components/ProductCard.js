import {
  Box,
  Link as ChakraLink,
  Center,
  useColorModeValue,
  Heading,
  Flex,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Tag from '@/components/Tag'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import formatDate from '@/lib/utils/formatDate'
import { image as AuthorImage, author } from '@/data/siteMetadata'

export default function ProductCard({ slug, date, title, summary, tags, coverImage, price, unit }) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <NextLink passHref href={`/products/${slug}`}>
          <ChakraLink
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${coverImage})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Flex justify="center" align="center">
                <Image
                  rounded={'lg'}
                  t={title}
                  alt={title}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={coverImage}
                />
              </Flex>
            </Box>
          </ChakraLink>
        </NextLink>

        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {price}
            </Text>
          </Stack>
        </Stack>
        <Flex direction={'row'} flexWrap="wrap">
          {tags.slice(0, 3).map((tag) => (
            <Tag key={tag} text={tag} icon={<ExternalLinkIcon />} />
          ))}
        </Flex>
        <Flex gap="2" py="3" align={'center'}>
          <Box>
            <Image
              rounded={'lg'}
              t={title}
              height={10}
              width={10}
              objectFit={'cover'}
              src={AuthorImage}
              alt={title}
            />
          </Box>

          <Flex direction={['column']} fontSize={['xs', 'sm']} gap="0">
            <Text fontWeight={'extrabold'}>{author}</Text>
            <Box as="time" dateTime={date}>
              {formatDate(date)}
            </Box>
          </Flex>
        </Flex>
        <NextLink passHref href={`/products/${slug}`}>
          <ChakraLink
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button
              rounded={'10'}
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
          </ChakraLink>
        </NextLink>
      </Box>
    </Center>
  )
}
