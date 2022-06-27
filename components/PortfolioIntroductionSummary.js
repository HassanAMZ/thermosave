import {
  Box,
  Grid,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import SendAMessage from '@/components/SendAMessage'
const options = [
  { id: 1, desc: 'Initial Visits' },
  { id: 2, desc: 'Quotes & Estimates' },
  { id: 3, desc: 'Plan Of Action' },
]

const PackageTier = ({ title, options, typePlan, checked = false }) => {
  const colorTextLight = checked ? 'white' : 'red.600'
  const bgColorLight = checked ? 'red.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'red.500'
  const bgColorDark = checked ? 'red.400' : 'gray.300'

  return (
    <Grid py="2" templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={2}>
      <Heading textAlign={{ base: 'center', md: 'left' }} size={'md'}>
        {title}
      </Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem textAlign={{ base: 'center', md: 'left' }} key={desc.id}>
            <ListIcon as={FaCheckCircle} color="red.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading textAlign={{ base: 'center', md: 'left' }} size={'xl'}>
        {typePlan}
      </Heading>
      <SendAMessage />
    </Grid>
  )
}
const PortfolioIntroductionSummary = () => {
  return (
    <Flex
      id="test"
      justify="center"
      align={'center'}
      height={'70vh'}
      spacing={4}
      width={'100%'}
      direction={'column'}
    >
      <Stack
        p={5}
        alignItems={'center'}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <Stack
          width={{
            base: '100%',
            md: '40%',
          }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading size={'lg'}>
            The Right Plan for <Text color="red.400">Your Business</Text>
          </Heading>
        </Stack>
        <Stack
          width={{
            base: '100%',
            md: '60%',
          }}
        >
          <Text textAlign={{ base: 'center', md: 'left' }}>
            Contact Us today to get our consultant visit your work-space and inspect the
            possiblities of our heat-efficient solutions. Helping you save cost and energy
          </Text>
        </Stack>
      </Stack>
      <Divider />
      <PackageTier title={'Inspection'} typePlan="Free" options={options} />
    </Flex>
  )
}

export default PortfolioIntroductionSummary
