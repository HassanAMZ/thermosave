import { PageSEO } from '@/components/SEO'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import Link from 'next/link'
export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <Box py="4">
        <PortfolioIntroductionSummary />
      </Box>
    </>
  )
}
