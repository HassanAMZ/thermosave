import CustomLink from '@/components/Link'
import { Text, Flex, Box, useColorModeValue, Heading } from '@chakra-ui/react'
import SendAMessage from '@/components/SendAMessage'
import { FaArrowRight } from 'react-icons/fa'
const Card = ({ slug, coverImage, title, tags, summary }) => {
  return (
    <Flex
      color={useColorModeValue('gray.800', 'white')}
      bgColor={useColorModeValue('white', 'white')}
      className="bg-white flex justify-between flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700"
    >
      <CustomLink href={`/blog/${slug}`}>
        <div className="rounded-t-lg overflow-hidden  w-auto h-full bg-white">
          <img className="rounded-t-lg bg-white" src={coverImage} alt="" />
        </div>
      </CustomLink>
      <Box
        color={useColorModeValue('gray.800', 'white')}
        bgColor={useColorModeValue('gray.200', 'gray.800')}
      >
        <div className="p-5">
          <CustomLink href={`/blog/${slug}`}>
            <Heading
              fontSize="2xl"
              color={useColorModeValue('gray.800', 'white')}
              bgColor={useColorModeValue('gray.200', 'gray.800')}
            >
              {title}
            </Heading>
          </CustomLink>
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
