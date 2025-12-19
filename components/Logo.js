import { image as AuthorImage, author } from '@/data/siteMetadata'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href="/"
      className="px-1 sm:px-2 py-2 text-decoration-none rounded-md text-center hover:text-decoration-none hover:cursor-pointer"
    >
      <Image
        className="rounded-lg"
        height={30}
        width={30}
        style={{ objectFit: 'cover' }}
        src={AuthorImage}
        alt={author}
      />
    </Link>
  )
}

export default Logo
