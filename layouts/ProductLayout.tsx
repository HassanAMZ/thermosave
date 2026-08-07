import { ProductsSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { StickyContact, LandingFinalCTA, LandingProof } from '@/components/landing'
import {
  ProductHero,
  ProductProblem,
  ProductAgitate,
  ProductMechanism,
  ProductMedia,
  ProductSpecs,
  ProductOffer,
  ProductRelated,
  ProductFaq,
} from '@/components/products'
import { getProductMarketing } from '@/data/productMarketing'
import { getPublishedProducts, type Product, type ProductNeighbor } from '@/data/products'
import type { ReactNode } from 'react'

type ProductLayoutProps = {
  product: Product
  prev?: ProductNeighbor | null
  next?: ProductNeighbor | null
  children?: ReactNode
}

export default function ProductLayout({ product, children }: ProductLayoutProps) {
  const marketing = getProductMarketing(product.slug)
  const displayTitle = marketing?.displayTitle ?? product.title
  const summary = marketing?.subhead ?? product.summary
  const images = product.carouselImages.map((url) => ({ src: url, alt: displayTitle }))

  const neighbors: ProductNeighbor[] = getPublishedProducts()
    .filter((item) => item.slug !== product.slug)
    .map((item) => {
      const itemMarketing = getProductMarketing(item.slug)
      return {
        slug: item.slug,
        title: itemMarketing?.displayTitle ?? item.title,
        coverImage: item.coverImage,
        benefit: itemMarketing?.benefit,
      }
    })

  return (
    <>
      <ProductsSEO
        url={`${siteMetadata.siteUrl}/products/${product.slug}`}
        authorDetails={[]}
        title={marketing?.seoTitle ?? displayTitle}
        summary={marketing?.seoDescription ?? summary}
        date={product.date}
        lastmod={undefined}
        coverImage={product.coverImage}
        images={product.carouselImages}
        pathname={undefined}
      />

      {marketing ? (
        <>
          <ProductHero displayTitle={displayTitle} marketing={marketing} images={images} />
          <ProductProblem marketing={marketing} />
          <ProductAgitate marketing={marketing} />
          <ProductMechanism marketing={marketing} />
          <ProductMedia marketing={marketing} />
          <ProductSpecs product={product} />
          <ProductOffer marketing={marketing} />
          <LandingProof />
          <ProductRelated neighbors={neighbors} relatedCta={marketing.relatedCta} />
          <ProductFaq faqs={marketing.faqs} />
          {children ? (
            <div className="container mx-auto max-w-3xl px-4 py-10">{children}</div>
          ) : null}
          <LandingFinalCTA />
          <StickyContact />
        </>
      ) : (
        <FallbackProduct product={product} displayTitle={displayTitle} images={images} />
      )}
    </>
  )
}

/** Draft / unpublished products without marketing copy. */
function FallbackProduct({
  product,
  displayTitle,
  images,
}: {
  product: Product
  displayTitle: string
  images: { src: string; alt: string }[]
}) {
  return (
    <div className="bg-[#f4f2ee] pt-24 pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
          Coming soon
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-stone-900 md:text-4xl">
          {displayTitle}
        </h1>
        <p className="mt-4 text-base text-stone-600">{product.summary}</p>
        {images[0] ? (
          <img
            src={images[0].src}
            alt={displayTitle}
            className="mt-8 w-full max-w-md border border-stone-200 bg-white p-4"
          />
        ) : null}
      </div>
      <StickyContact />
    </div>
  )
}
