import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { Container, Grid, GridItem } from '@chakra-ui/react'

const Projects = () => {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Container maxW="container.xl" p={{ base: '0', sm: 'auto' }}>
 
      </Container>
    </>
  )
}
export default Projects
