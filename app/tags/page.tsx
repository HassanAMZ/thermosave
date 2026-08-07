import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/data/products'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Tags - ${siteMetadata.author}`,
  description: 'Things I products about',
}

export default function TagsPage() {
  const tags = getAllTags()
  const sortedTags = Object.keys(tags).sort((a, b) => (tags[b] ?? 0) - (tags[a] ?? 0))

  return (
    <>
      <PageSEO
        title={`Tags - ${siteMetadata.author}`}
        description="Things I products about"
        pathname={undefined as any}
      />
      <div className="container mx-auto max-w-7xl">
        <div className="my-4 flex flex-col justify-left">
          <h2 className="py-3 text-xl">Top Tags</h2>

          <div className="flex flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((tag, index) => {
              return (
                <div key={tag}>
                  <div className="flex items-center justify-center">
                    <Tag text={tag} key={index} icon={` (${tags[tag]})`} size={undefined as any} />
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
