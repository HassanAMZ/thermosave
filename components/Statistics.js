import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'

function StatsCard(props) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.500', 'gray.800')}
      rounded={'lg'}
    >
      <StatLabel
        fontWeight={'medium'}
        isTruncated
        color={useColorModeValue('gray.300', 'gray.800')}
      >
        {title}
      </StatLabel>
      <StatNumber
        fontSize={'2xl'}
        fontWeight={'medium'}
        color={useColorModeValue('gray.300', 'gray.800')}
      >
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function Statistics() {
  return (
    <Box bg={useColorModeValue('gray.800', 'white')}>
      <Container maxW="container.xl">
        <Box
          mx={'auto'}
          py={{ base: '10', sm: '20' }}
          px={{ base: 2, sm: 12, md: 17 }}
          color={useColorModeValue('gray.300', 'gray.800')}
        >
          <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
            What is our company doing?
          </chakra.h1>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
            color={useColorModeValue('gray.300', 'gray.800')}
          >
            <StatsCard title={'We serve'} stat={'50,000 people'} />
            <StatsCard title={'In'} stat={'30 different countries'} />
            <StatsCard title={'Who speak'} stat={'100 different languages'} />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
