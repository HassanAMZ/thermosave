import { FaPhone } from 'react-icons/fa'
import { Button, Center, Text, useColorModeValue } from '@chakra-ui/react'

export default function SendAMessage() {
  return (
    <a href={`tel:${+923340250893}`}>
      <Center p={4}>
        <Button
          rounded={'10'}
          w={'full'}
          size={'lg'}
          bg={useColorModeValue('red.400', 'red.700')}
          color={useColorModeValue('white', 'white')}
          leftIcon={<FaPhone />}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
            bg: useColorModeValue('red.300', 'red.900'),
          }}
        >
          <Text>Call Now - 03340250893</Text>
        </Button>
      </Center>
    </a>
  )
}
