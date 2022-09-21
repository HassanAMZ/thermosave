import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Container, Image } from '@chakra-ui/react'
import ImageCarousel from '@/components/ImageCarousel'

const ImageGallery = () => {
  return (
    <>
      <PageSEO
        title={`Image Gallery - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      Under Construction
      {/* <ImageCarousel /> */}
    </>
  )
}
export default ImageGallery
