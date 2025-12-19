import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'

export const metadata = {
  title: `Tags - ${siteMetadata.author}`,
  description: 'Things I products about',
}

async function getData() {
  const tags = await getAllTags('products')
  return { tags }
}

export default async function TagsPage() {
  const { tags } = await getData()
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I products about" />
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-left my-4">
          <h2 className="py-3 text-xl">Top Tags</h2>

          <div className="flex flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((tag, index) => {
              return (
                <div key={tag}>
                  <div className="flex justify-center items-center">
                    <Tag text={tag} key={index} icon={` (${tags[tag]})`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
