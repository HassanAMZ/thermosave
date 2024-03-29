import { Box, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text, icon, size }) => {
  function random(number) {
    return Math.floor(Math.random() * number)
  }
  function getRandomColor() {
    var letters = 'BCDEF'.split('')
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)]
    }
    return color
  }
  return (
    <Box pr="2" py="1">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a>
          <Button
            size="xs"
            className="border border-red-500"
            fontWeight={'bold'}
            px={2}
            py={1}
            color="red.500"
            bgColor="white"
            _hover={{ bg: 'red.500', color: 'white' }}
          >
            <Flex justify={'center'} align={'center'}>
              <Text textTransform={'uppercase'}>{text.split(' ').join('-')}</Text>
            </Flex>
          </Button>
        </a>
      </Link>
    </Box>
  )
}

export default Tag
