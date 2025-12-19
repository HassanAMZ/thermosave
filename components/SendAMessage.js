import { FaPhone } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function SendAMessage() {
  return (
    <a href={`tel:${+923340250893}`}>
      <div className="flex justify-center p-4 px-2">
        <Button
          className="rounded-[10px] w-full uppercase hover:translate-y-[2px] hover:shadow-lg"
          size="lg"
        >
          <FaPhone className="mr-2" />
          Call Now - 03340250893
        </Button>
      </div>
    </a>
  )
}
