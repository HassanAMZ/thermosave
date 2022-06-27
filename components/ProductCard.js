import {
  Box,
  Link as ChakraLink,
  useColorModeValue,
  Heading,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import Tag from '@/components/Tag'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import formatDate from '@/lib/utils/formatDate'
import { image as AuthorImage, author } from '@/data/siteMetadata'
import SendAMessage from '@/components/SendAMessage'

export default function ProductCard({
  slug,
  coverImage,
  date,
  title,
  tags,
  price,
  unit,
  currency,
}) {
  return (
    <Flex
      className="hvr-float"
      w="full"
      direction="column"
      boxShadow={'2xl'}
      rounded={'lg'}
      justify={'space-between'}
      align="center"
      bg={useColorModeValue('gray.100', 'gray.900')}
      _hover={{ bg: useColorModeValue('gray.300', 'gray.700') }}
    >
      <NextLink passHref href={`/products/${slug}`}>
        <ChakraLink
          pt="2"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Box
            width={{
              base: '300px',
              sm: '270px',
              md: '400px',
              lg: '320px',
            }}
            bg={useColorModeValue('white', 'white')}
            borderRadius={'15px'}
            overflow="hidden"
          >
            <Image src={coverImage} layout="responsive" width={600} height={450} alt={title} />
          </Box>
        </ChakraLink>
      </NextLink>

      <Stack pt={3} align={'center'}>
        <Heading className="hvr-float" fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {title}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text className="hvr-float" fontWeight={800} fontSize={'xl'}>
            {price}&nbsp; {currency}&nbsp; {unit}
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
            height={30}
            width={30}
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
      <SendAMessage />
    </Flex>
  )
}
