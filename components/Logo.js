import { image as AuthorImage, author } from '@/data/siteMetadata'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <>
      <Link passHref href="/">
        <Box
          px={{ base: '1', sm: '2' }}
          py={2}
          textDecoration="none"
          rounded={'md'}
          textAlign="center"
          _hover={{
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <Image
            rounded={'lg'}
            t={author}
            height={30}
            width={30}
            objectFit={'cover'}
            src={AuthorImage}
            alt={author}
          />
        </Box>
      </Link>
    </>
  )
}

export default Logo
