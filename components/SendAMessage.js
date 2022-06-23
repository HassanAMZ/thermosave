import { SiMessenger } from 'react-icons/si'
import { Button, Center, Text, useColorModeValue } from '@chakra-ui/react'

export default function SendAMessage() {
  return (
    <Center p={8}>
      <Button
        rounded={'10'}
        w={'full'}
        mt={8}
        size={'lg'}
        py={'7'}
        bg={useColorModeValue('gray.900', 'gray.50')}
        color={useColorModeValue('white', 'gray.900')}
        leftIcon={<SiMessenger />}
        textTransform={'uppercase'}
        _hover={{
          transform: 'translateY(2px)',
          boxShadow: 'lg',
        }}
      >
        <Center>
          <Text>Send to Messenger</Text>
        </Center>
      </Button>
    </Center>
  )
}
