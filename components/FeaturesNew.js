import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function FeaturesNew() {
  return (
    <Link passHref href="/contact">
      <SimpleGrid alignItems={'center'} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Our Story
          </Text>
          <Heading>An Energy Saving Company</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Thermosave is dedicated to come up with solutions to all the heat losses issues in the
            industries by 2030
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
          >
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Analyzing the Root Cause of Heat Loss'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Resolving the Heat Lose Causes'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Monitor & Improve'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'lg'}
            alt={'feature image'}
            src={'/static/images/features-new.png'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Link>
  )
}
