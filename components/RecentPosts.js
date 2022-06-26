import Link from 'next/link'
import { Box, Heading, Divider, Flex, UnorderedList, ListItem, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState } from 'react'
export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredProductsPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProductsPosts

  return (
    <>
      <Box py={['5', '6']}>
        <Heading as="h2" py="3" fontSize={['xl']}>
          {title}
        </Heading>
      </Box>
      <UnorderedList listStyleType="none" ml="0">
        {!filteredProductsPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter, index) => {
          const { slug, date, title, summary, tags } = frontMatter

          let orderNumber = 0
          if (index === 0) {
            orderNumber = (
              <Button
                size={['x-small', 'sm']}
                colorScheme="red"
                textTransform={'uppercase'}
                variant="solid"
                px="2"
                py="1"
                key={index}
                fontWeight={'normal'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}
                border="1px"
                borderColor={'gray.500'}
              >
                New
              </Button>
            )
          } else {
            orderNumber = (
              <Button
                size={['x-small', 'sm']}
                textTransform={'uppercase'}
                variant="solid"
                px="2"
                py="1"
                key={index}
                fontWeight={'normal'}
                _hover={{ bg: 'red.500', color: 'white' }}
                border="1px"
                borderColor={'gray.500'}
              >
                &nbsp; 0{index} &nbsp;
              </Button>
            )
          }

          return (
            <Box key={index}>
              <ListItem
                key={index}
                py="2"
                _hover={{
                  color: 'red.500',
                  transform: 'scale(1.01)',
                }}
              >
                {/* <Box>
                  <dt className="sr-only">Published on</dt>
                  <dd className=" flex flex-row justify-between xl:flex-col text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <GAPageView slug={slug} />
                  </dd>
                </Box> */}

                <Link href={`/products/${slug}`}>
                  <a>
                    <Flex
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      gap="2"
                    >
                      <Flex
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="3"
                      >
                        <Box> {orderNumber}</Box>
                        <Heading
                          as="h2"
                          fontSize={['sm', 'md', 'xl']}
                          textTransform="capitalize"
                          noOfLines={'1'}
                        >
                          {title}
                        </Heading>
                      </Flex>
                      <ExternalLinkIcon />
                    </Flex>
                  </a>
                </Link>

                {/* <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div> */}
                {/* <div className="prose text-sm text-gray-500 max-w-none dark:text-gray-400">
                    {summary}
                  </div> */}
              </ListItem>
              <Divider />
            </Box>
          )
        })}
      </UnorderedList>
    </>
  )
}
