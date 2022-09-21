import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Container, Image } from '@chakra-ui/react'
import ImageCarousel from '@/components/ImageCarousel'
import Link from '@/components/Link'

const ImageGallery = () => {
  return (
    <>
      <PageSEO
        title={`Image Gallery - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="flex h-[80vh] flex-col items-center justify-center md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-24 md:border-r-2 md:px-6">
            Image Gallery
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Page Under Construction.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-red hover:bg-red-700 dark:hover:bg-red-500">
              Back to homepage.
            </button>
          </Link>
        </div>
      </div>
      {/* <ImageCarousel /> */}
    </>
  )
}
export default ImageGallery
