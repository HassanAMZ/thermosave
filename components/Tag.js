import { Button } from '@/components/components/ui/button'
import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text, icon, size }) => {
  return (
    <div className="pr-2 py-1">
      <Link href={`/tags/${kebabCase(text)}`}>
        <Button
          size="sm"
          variant="outline"
          className="border border-red-500 font-bold px-2 py-1 text-red-500 bg-white hover:bg-red-500 hover:text-white"
        >
          <span className="uppercase">{text.split(' ').join('-')}</span>
          {icon && <span className="ml-1">{icon}</span>}
        </Button>
      </Link>
    </div>
  )
}

export default Tag
