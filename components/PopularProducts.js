import NextLink from 'next/link'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import Logo from '@/components/Logo'
import { author } from '@/data/siteMetadata'

export default function PopularProducts({ posts, layout }) {
  return (
    <div className="flex flex-col gap-5">
      <div className={`grid grid-cols-1 ${layout === '1fr 1fr' ? 'sm:grid-cols-2' : ''} gap-2`}>
        {posts.slice(0, 5).map((frontMatter, index) => {
          const { slug, date, title, coverImage } = frontMatter
          return (
            <div
              className="border border-red-300 rounded-[15px] hover:bg-red-300 transition-colors"
              key={index}
            >
              <NextLink href={`/products/${slug}`} className="block">
                <div className="hvr-grow grid gap-5 grid-cols-[150px_1fr] sm:grid-cols-[170px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[120px_1fr]">
                  <div className="rounded-[15px] bg-white overflow-hidden">
                    <Image
                      src={coverImage}
                      width={600}
                      height={450}
                      alt={title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <h1 className="capitalize text-sm md:text-md lg:text-lg font-semibold">
                      {title}
                    </h1>
                    <div className="flex gap-2 items-center">
                      <Logo />
                      <div className="flex flex-col text-xs sm:text-sm gap-0">
                        <p className="font-extrabold">{author}</p>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </NextLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}
