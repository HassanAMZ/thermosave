import Link from 'next/link'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import Image from 'next/image'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <div className="flex flex-row items-center">
      <div className={`w-8 h-8 flex items-center justify-center rounded-full ${iconBg}`}>
        {icon}
      </div>
      <p className="font-semibold ml-3">{text}</p>
    </div>
  )
}

export default function FeaturesNew() {
  return (
    <Link href="/contact" className="block">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="uppercase text-blue-400 font-semibold text-sm bg-blue-50 dark:bg-blue-900 p-2 self-start rounded-md">
            Our Story
          </p>
          <h2 className="capitalize text-2xl md:text-3xl font-bold">
            Our 3 Step process for working
          </h2>

          <div className="hidden md:block space-y-4">
            <div className="space-y-4">
              <div className="border-b border-gray-100 dark:border-gray-700"></div>
              <Feature
                icon={<IoAnalyticsSharp className="text-yellow-500 w-5 h-5" />}
                iconBg="bg-yellow-100 dark:bg-yellow-900"
                text={'Analyzing the Root Cause of Heat Loss'}
              />
              <div className="border-b border-gray-100 dark:border-gray-700"></div>
              <Feature
                icon={<IoLogoBitcoin className="text-green-500 w-5 h-5" />}
                iconBg="bg-green-100 dark:bg-green-900"
                text={'Resolving the Heat Lose Causes'}
              />
              <div className="border-b border-gray-100 dark:border-gray-700"></div>
              <Feature
                icon={<IoSearchSharp className="text-red-500 w-5 h-5" />}
                iconBg="bg-red-100 dark:bg-red-900"
                text={'Monitor & Improve'}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            className="rounded-lg"
            alt={'feature image'}
            src={'/static/images/features-new.png'}
            width={1080}
            height={1080}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="block md:hidden space-y-4">
          <div className="space-y-4">
            <div className="border-b border-gray-100 dark:border-gray-700"></div>
            <Feature
              icon={<IoAnalyticsSharp className="text-yellow-500 w-5 h-5" />}
              iconBg="bg-yellow-100 dark:bg-yellow-900"
              text={'Analyzing the Root Cause of Heat Loss'}
            />
            <div className="border-b border-gray-100 dark:border-gray-700"></div>
            <Feature
              icon={<IoLogoBitcoin className="text-green-500 w-5 h-5" />}
              iconBg="bg-green-100 dark:bg-green-900"
              text={'Resolving the Heat Lose Causes'}
            />
            <div className="border-b border-gray-100 dark:border-gray-700"></div>
            <Feature
              icon={<IoSearchSharp className="text-red-500 w-5 h-5" />}
              iconBg="bg-red-100 dark:bg-red-900"
              text={'Monitor & Improve'}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
