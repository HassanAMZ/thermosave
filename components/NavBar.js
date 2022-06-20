
import {
  Box,
  Flex,
  Container,

  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure, IconButton,
  useColorModeValue,
  Stack,
  useColorMode,
  Center, HStack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'

let NavLinks = headerNavLinks.map((link, index) => (
  <Link key={index} href={link.href}>
    <a>
      <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',

        }}

      >
        {link.title}
      </Box>
    </a>
  </Link >
))

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box
              px={{ base: '1', sm: '2' }}
              py={2}
              textDecoration="none"


              rounded={'md'}
              border="1px"
              textAlign="center"
              _hover={{
                textDecoration: 'none',

                border: '1px',
              }}
            >
              <Link href="/">
                <a>thermosave</a>
              </Link>
            </Box>
          </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NavLinks}
          </HStack>

          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>{isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack>{NavLinks}</Stack>
          </Box>
        ) : null}
      </Container >
    </Box>
  );
}