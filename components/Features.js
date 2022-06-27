import { ReactNode } from 'react'
import {
  Stack,
  useColorModeValue,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'

export default function Features() {
  return (
    <Box bg={useColorModeValue('gray.800', 'white')} position={'relative'}>
      <Container maxW="container.xl" zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={useColorModeValue('gray.300', 'gray.800')}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 40 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={useColorModeValue('gray.50', 'gray.800')}
              >
                Our Company
              </Text>
              <Heading
                color={useColorModeValue('gray.200', 'gray.800')}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                21st Century Technology
              </Heading>
              <Text fontSize={'xl'} color={useColorModeValue('gray.300', 'gray.800')}>
                Thermosave brings the solutions of all heat losses by bringing the removatble
                thermal jackets based on self extengutior thermal cloths, and cutting edge electric
                heaters line-up for advance needs.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'}>{stat.content}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={useColorModeValue('gray.100', 'grey.600')}>
    {children}
  </Text>
)

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Years Of Excellence</StatsText> in polymer industry, saving cost and energy every
        day.
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Service</StatsText> provided to the clients throughout the year.
      </>
    ),
  },
  {
    title: '20%+',
    content: (
      <>
        <StatsText>Energy Saving</StatsText>recorded in high energy consuming machines
      </>
    ),
  },
  {
    title: '100+',
    content: (
      <>
        <StatsText>Satisfied Clients</StatsText> thorughout Pakistan with collaboration extending
        soon to China.
      </>
    ),
  },
]
