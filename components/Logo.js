import { image as AuthorImage, author } from '@/data/siteMetadata'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href="/"
      className="rounded-sm px-1 py-2 text-center hover:cursor-pointer sm:px-2"
      aria-label="ThermoSave home"
    >
      <Image
        className="rounded-sm"
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
