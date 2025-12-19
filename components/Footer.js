import Link from 'next/link'
import { BsLinkedin, BsPhone, BsWhatsapp } from 'react-icons/bs'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/components/lib/utils'

const ListHeader = ({ children, className }) => {
  return <h3 className={cn('font-medium text-lg mb-2', className)}>{children}</h3>
}

export default function Footer() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
        <div className="container mx-auto max-w-6xl py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <Logo className="hvr-float" />

              <p className="text-sm">© 2022 ThermoSave. All rights reserved</p>
              <div className="flex flex-row space-x-6">
                <Link href={`tel:${+923340250893}`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-red-500 hover:text-white"
                    aria-label="Phone"
                  >
                    <BsPhone size="20px" />
                  </Button>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/irfan-nasir-16aa5bb6/">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-red-500 hover:text-white"
                    aria-label="linkedin"
                  >
                    <BsLinkedin size="20px" />
                  </Button>
                </Link>
                <Link target="_blank" href="https://wa.me/923340250893">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-red-500 hover:text-white"
                    aria-label="WhatsApp"
                  >
                    <BsWhatsapp size="20px" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <ListHeader>Company</ListHeader>
              <div className="flex flex-col space-y-2">
                <Link href={'/contact'} className="hover:text-red-500">
                  About us
                </Link>
                <Link href={'/products'} className="hover:text-red-500">
                  Products
                </Link>
                <Link href={'/contact'} className="hover:text-red-500">
                  Contact us
                </Link>
                <Link href={'/contact'} className="hover:text-red-500">
                  Pricing
                </Link>
                <Link href={'/#testimonial'} className="hover:text-red-500">
                  Testimonials
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <ListHeader>Support</ListHeader>
              <div className="flex flex-col space-y-2">
                <Link href={'/contact'} className="hover:text-red-500">
                  Help Center
                </Link>
                <Link href={'/contact'} className="hover:text-red-500">
                  Terms of Service
                </Link>
                <Link href={'/contact'} className="hover:text-red-500">
                  Legal
                </Link>
                <Link href={'/contact'} className="hover:text-red-500">
                  Privacy Policy
                </Link>
                <Link href={'/contact'} className="hover:text-red-500">
                  Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
