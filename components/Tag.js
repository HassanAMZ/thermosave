import { Box, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text, icon, size }) => {
  function random(number) {
    return Math.floor(Math.random() * number)
  }
  function randomColor() {
    return 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',0.2)'
  }
  return (
    <Box pr="2" py="1" className="hvr-float">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a>
          <Button
            size="xx-small"
            fontWeight={'normal'}
            px={3}
            py={1}
            bgColor={randomColor()}
            _hover={{ bg: 'teal.500', color: 'white' }}
            borderWidth="1px"
          >
            <Flex justify={'center'} className="hvr-icon-up" align={'center'} fontSize={'xx-small'}>
              <Text textTransform={'uppercase'} mr="2">
                {text.split(' ').join('-')}
              </Text>
              <Box className="hvr-icon">{icon}</Box>
            </Flex>
          </Button>
        </a>
      </Link>
    </Box>
  )
}

export default Tag
