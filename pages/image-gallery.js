import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import ImageCarousel from '@/components/ImageCarousel'
const ImageGallery = () => {
  return (
    <>
      <PageSEO
        title={`Image Gallery - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ImageCarousel />
      <Container maxW="container.xl"></Container>
    </>
  )
}
export default ImageGallery
