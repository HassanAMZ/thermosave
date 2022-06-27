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
          bg={useColorModeValue('gray.900', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          leftIcon={<FaPhone />}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
        >
          <Center>
            <Text>Call Now</Text>
          </Center>
        </Button>
      </Center>
    </a>
  )
}
