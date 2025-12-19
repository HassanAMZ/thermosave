import NextLink from 'next/link'
import Image from 'next/image'
import { ProductsSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ImageCarousel from '@/components/ImageCarousel'
import SendAMessage from '@/components/SendAMessage'
import { MdLocalShipping } from 'react-icons/md'
import { Button } from '@/components/ui/button'

export default function ProductsLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {
    slug,
    title,
    applications,
    summary,
    details,
    features,
    unit,
    price,
    currency,
    caousalImages,
  } = frontMatter

  const carouselImages = caousalImages?.map((url) => ({ src: url, alt: title })) || []

  return (
    <>
      <ProductsSEO
        url={`${siteMetadata.siteUrl}/products/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 py-6 sm:py-12 md:py-18 lg:py-24">
            <ImageCarousel images={carouselImages} />
            <div className="space-y-6 md:space-y-10">
              <header>
                <h1 className="leading-tight font-semibold text-2xl sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              </header>
              <div className="space-y-4 sm:space-y-6 flex flex-col">
                <div className="border-b border-gray-200 dark:border-gray-600"></div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg">{summary}</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600"></div>
                <div>
                  <p className="text-base lg:text-lg text-yellow-500 dark:text-yellow-300 font-medium uppercase mb-4">
                    Features
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ul className="space-y-2">
                      {features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600"></div>
                <div>
                  <p className="text-base lg:text-lg text-yellow-500 dark:text-yellow-300 font-medium uppercase mb-4">
                    Product Details
                  </p>
                  <ul className="space-y-2">
                    {details &&
                      Object.keys(details).map((ObjectKey, index) => (
                        <li key={index}>
                          <span className="font-bold">{ObjectKey}: </span>
                          {details[ObjectKey]}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600"></div>
                <div>
                  <p className="text-base lg:text-lg text-yellow-500 dark:text-yellow-300 font-medium uppercase mb-4">
                    Applications
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ul className="space-y-2">
                      {applications?.map((application, index) => (
                        <li key={index}>{application}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <SendAMessage />
              <div className="flex flex-row items-center justify-center">
                <MdLocalShipping />
                <p className="ml-2">7 - 10 business days delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl">
          <article id="singleProductsProducts" className="py-2">
            <div>
              <div className="flex flex-col py-2">
                <article>{children}</article>

                <div>
                  <div className="py-2">
                    {(next || prev) && (
                      <div className="flex justify-between flex-col sm:flex-row">
                        {prev && (
                          <div className="flex flex-col items-center sm:items-start py-2">
                            <NextLink
                              href={`/products/${prev.slug}`}
                              aria-label="Previous Product"
                              className="w-full"
                            >
                              <Button className="w-full uppercase rounded-full px-6 my-4" size="sm">
                                Previous Product
                              </Button>
                            </NextLink>
                            <NextLink href={`/products/${prev.slug}`} className="block">
                              <div className="border border-red-300 rounded-[15px]">
                                <div className="grid gap-5 grid-cols-[150px_1fr] sm:grid-cols-[170px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[120px_1fr]">
                                  <Image
                                    src={prev.coverImage}
                                    width={600}
                                    height={450}
                                    alt={prev.title}
                                    style={{ width: '100%', height: 'auto' }}
                                  />
                                  <div className="flex flex-col justify-center">
                                    <h3 className="px-2 capitalize text-sm overflow-hidden">
                                      {prev.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </NextLink>
                          </div>
                        )}
                        {next && (
                          <div className="flex flex-col items-center sm:items-end py-2">
                            <NextLink href={`/products/${next.slug}`} className="w-full">
                              <Button className="w-full uppercase rounded-full px-6 my-4" size="sm">
                                Next Product
                              </Button>
                            </NextLink>
                            <NextLink href={`/products/${next.slug}`} className="block">
                              <div className="border border-red-300 rounded-[15px]">
                                <div className="grid gap-5 grid-cols-[150px_1fr] sm:grid-cols-[170px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[120px_1fr]">
                                  <Image
                                    src={next.coverImage}
                                    width={600}
                                    height={450}
                                    alt={next.title}
                                    style={{ width: '100%', height: 'auto' }}
                                  />
                                  <div className="flex flex-col justify-center">
                                    <h3 className="px-2 capitalize text-sm overflow-hidden">
                                      {next.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </NextLink>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <NextLink href="/products" className="block">
                    <Button className="w-full uppercase rounded-full px-6 my-4" size="sm">
                      <span className="py-2">&larr; Back to the products</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
