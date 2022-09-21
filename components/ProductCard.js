import CustomLink from '@/components/Link'
import { Text, Flex, Box, useColorModeValue, Heading } from '@chakra-ui/react'
import SendAMessage from '@/components/SendAMessage'
import Tag from '@/components/Tag'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Card = ({ slug, coverImage, title, tags, summary }) => {
  return (
    <Flex
      color={useColorModeValue('gray.800', 'white')}
      bgColor={useColorModeValue('white', 'white')}
      className="bg-white flex justify-between flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
    >
      <CustomLink href={`/products/${slug}`}>
        <div className="rounded-t-lg overflow-hidden flex items-center justify-center w-auto">
          <img className="rounded-t-lg bg-white" src={coverImage} alt="" />
        </div>
      </CustomLink>
      <Box
        color={useColorModeValue('gray.800', 'white')}
        bgColor={useColorModeValue('gray.200', 'gray.800')}
      >
        <div className="p-5">
          <CustomLink href={`/products/${slug}`}>
            <Heading
              fontSize="2xl"
              color={useColorModeValue('gray.800', 'white')}
              bgColor={useColorModeValue('gray.200', 'gray.800')}
            >
              {title}
            </Heading>
          </CustomLink>
          <Flex align="center" justify="left" direction={'row'} flexWrap="wrap">
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag} text={tag} icon={<ExternalLinkIcon />} />
            ))}
          </Flex>
          <Text
            noOfLines={2}
            color={useColorModeValue('gray.800', 'white')}
            bgColor={useColorModeValue('gray.200', 'gray.800')}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3"
          >
            {summary}
          </Text>
          <SendAMessage />
        </div>
      </Box>
    </Flex>
  )
}

export default Card
