import NextLink from 'next/link'
import Image from 'next/image'
import { ProductsSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ImageCarousel from '@/components/ImageCarousel'
import SendAMessage from '@/components/SendAMessage'
import { MdLocalShipping } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import type { Product, ProductNeighbor } from '@/data/products'
import type { ReactNode } from 'react'

type ProductLayoutProps = {
  product: Product
  prev?: ProductNeighbor | null
  next?: ProductNeighbor | null
  children?: ReactNode
}

export default function ProductLayout({
  product,
  prev = null,
  next = null,
  children,
}: ProductLayoutProps) {
  const {
    slug,
    title,
    applications,
    summary,
    details,
    features,
    carouselImages,
  } = product

  const images = carouselImages.map((url) => ({ src: url, alt: title }))

  return (
    <>
      <ProductsSEO
        url={`${siteMetadata.siteUrl}/products/${slug}`}
        authorDetails={[]}
        title={title}
        summary={summary}
        date={product.date}
        lastmod={undefined}
        coverImage={product.coverImage}
        images={carouselImages}
        pathname={undefined}
      />
      <div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 py-6 sm:py-12 md:gap-10 md:py-18 lg:grid-cols-2 lg:py-24">
            <ImageCarousel images={images} className="" />
            <div className="space-y-6 md:space-y-10">
              <header>
                <h1 className="text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              </header>
              <div className="flex flex-col space-y-4 sm:space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-600" />
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg">{summary}</p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600" />
                <div>
                  <p className="mb-4 text-base font-medium uppercase text-yellow-500 dark:text-yellow-300 lg:text-lg">
                    Features
                  </p>
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <ul className="space-y-2">
                      {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600" />
                <div>
                  <p className="mb-4 text-base font-medium uppercase text-yellow-500 dark:text-yellow-300 lg:text-lg">
                    Product Details
                  </p>
                  <ul className="space-y-2">
                    {Object.entries(details).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-bold">{key}: </span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-600" />
                <div>
                  <p className="mb-4 text-base font-medium uppercase text-yellow-500 dark:text-yellow-300 lg:text-lg">
                    Applications
                  </p>
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <ul className="space-y-2">
                      {applications.map((application) => (
                        <li key={application}>{application}</li>
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
                {children ? <article>{children}</article> : null}

                <div>
                  <div className="py-2">
                    {(next || prev) && (
                      <div className="flex flex-col justify-between sm:flex-row">
                        {prev && (
                          <div className="flex flex-col items-center py-2 sm:items-start">
                            <NextLink
                              href={`/products/${prev.slug}`}
                              aria-label="Previous Product"
                              className="w-full"
                            >
                              <Button className="my-4 w-full rounded-full px-6 uppercase" size="sm">
                                Previous Product
                              </Button>
                            </NextLink>
                            <NextLink href={`/products/${prev.slug}`} className="block">
                              <div className="rounded-[15px] border border-red-300">
                                <div className="grid grid-cols-[150px_1fr] gap-5 sm:grid-cols-[170px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[120px_1fr]">
                                  <Image
                                    src={prev.coverImage}
                                    width={600}
                                    height={450}
                                    alt={prev.title}
                                    style={{ width: '100%', height: 'auto' }}
                                  />
                                  <div className="flex flex-col justify-center">
                                    <h3 className="overflow-hidden px-2 text-sm capitalize">
                                      {prev.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </NextLink>
                          </div>
                        )}
                        {next && (
                          <div className="flex flex-col items-center py-2 sm:items-end">
                            <NextLink href={`/products/${next.slug}`} className="w-full">
                              <Button className="my-4 w-full rounded-full px-6 uppercase" size="sm">
                                Next Product
                              </Button>
                            </NextLink>
                            <NextLink href={`/products/${next.slug}`} className="block">
                              <div className="rounded-[15px] border border-red-300">
                                <div className="grid grid-cols-[150px_1fr] gap-5 sm:grid-cols-[170px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[120px_1fr]">
                                  <Image
                                    src={next.coverImage}
                                    width={600}
                                    height={450}
                                    alt={next.title}
                                    style={{ width: '100%', height: 'auto' }}
                                  />
                                  <div className="flex flex-col justify-center">
                                    <h3 className="overflow-hidden px-2 text-sm capitalize">
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
                    <Button className="my-4 w-full rounded-full px-6 uppercase" size="sm">
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
