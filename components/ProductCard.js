import { Link as ChakraLink, Box, Heading, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Tag from '@/components/Tag'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import SendAMessage from '@/components/SendAMessage'
export default function ProductCard({ slug, coverImage, title, tags, summary }) {
  return (
    <Box
      color={useColorModeValue('gray.100', 'white')}
      bgColor={useColorModeValue('gray.800', 'gray.800')}
      className="rounded-lg"
    >
      <NextLink passHref href={`/products/${slug}`}>
        <ChakraLink
          pt="2"
          bgColor={useColorModeValue('white', 'gray.800')}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <img className="rounded-t-lg bg-white" src={coverImage} alt="" />
        </ChakraLink>
      </NextLink>
      <div className="p-5 ">
        <NextLink passHref href={`/products/${slug}`}>
          <ChakraLink
            pt="2"
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Heading
              as={'h3'}
              fontSize="2xl"
              color={useColorModeValue('white', 'white')}
              className="mb-2 text-center font-bold tracking-tight"
            >
              {title}
            </Heading>
            <Text noOfLines={2} className="mb-3 text-center font-normal">
              {summary}
            </Text>
          </ChakraLink>
        </NextLink>
        <Flex align="center" justify="center" direction={'row'} flexWrap="wrap">
          {tags.slice(0, 3).map((tag) => (
            <Tag key={tag} text={tag} icon={<ExternalLinkIcon />} />
          ))}
        </Flex>
      </div>
      <SendAMessage />
    </Box>
  )
}
