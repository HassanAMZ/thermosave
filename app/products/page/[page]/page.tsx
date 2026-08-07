import { redirect } from 'next/navigation'

export function generateStaticParams() {
  return [{ page: '1' }]
}

/** Pagination retired — collection is a single conversion page. */
export default async function ProductsPagePage({ params }: { params: Promise<{ page: string }> }) {
  await params
  redirect('/products')
}
