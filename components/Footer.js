import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { BsLinkedin, BsPhone, BsWhatsapp } from 'react-icons/bs'
import Image from 'next/image'
import Logo from '@/components/Logo'
import NewsletterForm from '@/components/NewsletterForm'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <>
      <NewsletterForm />

      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
            <Stack spacing={6}>
              <Logo className="hvr-float" />

              <Text fontSize={'sm'}>© 2022 ThermoSave. All rights reserved</Text>
              <Stack direction={'row'} spacing={6}>
                <Link passHref href={`tel:${+923340250893}`}>
                  <IconButton
                    color={useColorModeValue('gray.800', 'gray.300')}
                    aria-label="Phone"
                    size="md"
                    icon={<BsPhone size="28px" />}
                    _hover={{
                      bg: 'red.500',
                      color: useColorModeValue('gray.700', 'white'),
                    }}
                    isRound
                  />
                </Link>
                <Link
                  passHref
                  target="_blank"
                  href="https://www.linkedin.com/in/irfan-nasir-16aa5bb6/"
                >
                  <IconButton
                    color={useColorModeValue('gray.800', 'gray.300')}
                    aria-label="linkedin"
                    size="md"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: 'red.500',
                      color: useColorModeValue('gray.700', 'white'),
                    }}
                    isRound
                  />
                </Link>
                <Link passHref target="_blank" href="https://wa.me/923340250893">
                  <IconButton
                    color={useColorModeValue('gray.800', 'gray.300')}
                    aria-label="WhatsApp"
                    size="md"
                    icon={<BsWhatsapp size="28px" />}
                    _hover={{
                      bg: 'red.500',
                      color: useColorModeValue('gray.700', 'white'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'/contact'}>About us</Link>
              <Link href={'/products'}>Products</Link>
              <Link href={'/contact'}>Contact us</Link>
              <Link href={'/contact'}>Pricing</Link>
              <Link href={'/#testimonial'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'/contact'}>Help Center</Link>
              <Link href={'/contact'}>Terms of Service</Link>
              <Link href={'/contact'}>Legal</Link>
              <Link href={'/contact'}>Privacy Policy</Link>
              <Link href={'/contact'}>Satus</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}
