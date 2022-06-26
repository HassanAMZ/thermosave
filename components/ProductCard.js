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
import SendAMessage from '@/components/SendAMessage'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function ProductCard({
  slug,
  coverImage,
  additionalImage1,
  additionalImage2,
  date,
  title,
  summary,
  tags,
  price,
  unit,
}) {
  return (
    <Flex
      m={2}
      className="hvr-float"
      w="full"
      direction="column"
      bg={useColorModeValue('gray.100', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      justify={'space-between'}
      align="center"
    >
      <NextLink passHref href={`/products/${slug}`}>
        <ChakraLink
          pt="2"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Carousel>
            <div>
              <Image
                className="hvr-float"
                rounded={'lg'}
                t={title}
                alt={title}
                height={250}
                width={250}
                objectFit={'cover'}
                src={coverImage}
              />
            </div>
          </Carousel>
        </ChakraLink>
      </NextLink>

      <Stack pt={10} align={'center'}>
        <Text className="hvr-float" color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          Brand
        </Text>
        <Heading className="hvr-float" fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {title}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text className="hvr-float" fontWeight={800} fontSize={'xl'}>
            {price}
          </Text>
        </Stack>
      </Stack>
      <Flex className="hvr-float" align="center" justify="center" direction={'row'} flexWrap="wrap">
        {tags.slice(0, 3).map((tag) => (
          <Tag key={tag} text={tag} icon={<ExternalLinkIcon />} />
        ))}
      </Flex>
      <Flex gap="2" py="3" align={'center'}>
        <Box>
          <Image
            className="hvr-float"
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
          className="hvr-float"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <SendAMessage />
        </ChakraLink>
      </NextLink>
    </Flex>
  )
}
