import CustomLink from '@/components/Link'
import SendAMessage from '@/components/SendAMessage'
import Tag from '@/components/Tag'
import { ExternalLink } from 'lucide-react'

const Card = ({ slug, coverImage, title, tags, summary }) => {
  return (
    <div className="bg-white dark:bg-white flex justify-between flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700 text-gray-800 dark:text-white">
      <CustomLink href={`/products/${slug}`}>
        <div className="rounded-t-lg overflow-hidden flex items-center justify-center w-auto">
          <img className="rounded-t-lg bg-white" src={coverImage} alt="" />
        </div>
      </CustomLink>
      <div className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="p-5">
          <CustomLink href={`/products/${slug}`}>
            <h2 className="text-2xl text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800">
              {title}
            </h2>
          </CustomLink>
          <div className="flex items-center justify-left flex-row flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} icon={<ExternalLink className="w-3 h-3" />} />
            ))}
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {summary}
          </p>
          <SendAMessage />
        </div>
      </div>
    </div>
  )
}

export default Card
