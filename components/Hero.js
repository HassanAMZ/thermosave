'use client'
import Video from '@/components/Video'
import Link from 'next/link'
import { useEffect } from 'react'
import { Button } from '@/components/components/ui/button'

export default function Hero() {
  useEffect(() => {
    var i = 0
    var txt = 'Investment!' /* The text */
    var speed = 50 /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
      if (i < txt.length) {
        const element = document.getElementById('typing_text')
        if (element) {
          element.innerHTML += txt.charAt(i)
        }
        i++
        setTimeout(typeWriter, speed)
      }
    }
    typeWriter()
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 py-20 md:py-28">
      <div className="flex-1 space-y-5 md:space-y-10">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[110%]">
          Saving is the Best <span id="typing_text" className="text-red-400"></span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-md md:text-lg">
          A new name but a familiar face with the experience of ten years of serving to polymer
          industry now in your region with professionals and capable team which observe keenly think
          wisely, and deliver perfectly.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a href={`tel:${+923340250893}`}>
            <Button className="w-full sm:w-auto rounded-full px-6" size="lg">
              Call Now
            </Button>
          </a>
          <Link href="/products">
            <Button variant="outline" className="rounded-full px-6" size="lg">
              Check Our Products
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative w-full">
        <Blob className="w-[150%] h-[150%] absolute -top-[20%] left-0 -z-10 text-red-50 dark:text-red-400" />
        <div className="relative rounded-2xl shadow-2xl w-full overflow-hidden">
          <Video videoSource="/static/videos/00001.mp4" />
        </div>
      </div>
    </div>
  )
}

export const Blob = ({ className }) => {
  return (
    <svg
      width="100%"
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </svg>
  )
}
