import Link from '@/components/Link'
import { Button } from '@/components/ui/button'
import { cn } from '@/components/lib/utils'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <nav className="flex flex-row justify-between items-center py-6">
      {!prevPage && (
        <Button rel="previous" className="rounded-full px-6 my-4" size="lg" disabled={!prevPage}>
          Previous
        </Button>
      )}
      {prevPage && (
        <Link href={currentPage - 1 === 1 ? `/products/` : `/products/page/${currentPage - 1}`}>
          <Button className="rounded-full px-6 my-4" size="lg" rel="previous">
            Previous
          </Button>
        </Link>
      )}
      <span>
        {currentPage} of {totalPages}
      </span>
      {!nextPage && (
        <Button className="rounded-full px-6 my-4" size="lg" rel="next" disabled={!nextPage}>
          Next
        </Button>
      )}
      {nextPage && (
        <Link href={`/products/page/${currentPage + 1}`}>
          <Button className="rounded-full px-6 my-4" size="lg" rel="next">
            Next
          </Button>
        </Link>
      )}
    </nav>
  )
}
