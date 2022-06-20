import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import ImageCarousel from '@/components/ImageCarousel'
import { Container, Grid, GridItem } from '@chakra-ui/react'

const ImageGallery = () => {
  return (
    <>
      <PageSEO
        title={`Image Gallery - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Container maxW="container.xl" p={{ base: '0', sm: 'auto' }}>
        <ImageCarousel />
      </Container>
    </>
  )
}
export default ImageGallery
