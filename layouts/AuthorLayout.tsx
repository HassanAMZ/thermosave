import { PageSEO } from '@/components/SEO'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'

type AuthorLayoutProps = {
  frontMatter: {
    name: string
  }
}

export default function AuthorLayout({ frontMatter }: AuthorLayoutProps) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} pathname={undefined} />
      <div className="py-4">
        <PortfolioIntroductionSummary />
      </div>
    </>
  )
}
