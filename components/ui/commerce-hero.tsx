'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export type CommerceCategory = {
  title: string
  image: string
  href: string
}

type CommerceHeroProps = {
  categories: CommerceCategory[]
}

export function CommerceHero({ categories }: CommerceHeroProps) {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-2 container">
      <div className="relative mt-6 rounded-2xl bg-accent/50">
        <motion.section
          className="w-full px-4 py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                Energy-saving products
              </span>
              <br />
              <span className="text-foreground">built for the plastic industry.</span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              ThermoSave delivers solutions that cut heat loss and operating cost — so plastic
              manufacturers use less energy without sacrificing performance.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            >
              <Button asChild size="lg">
                <Link href="/products">
                  View all products
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Request a quote</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative min-h-[250px] w-full overflow-hidden rounded-3xl bg-muted/50 p-4 backdrop-blur-sm transition-all duration-500 sm:min-h-[300px] sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
          >
            <Link href={category.href} className="absolute inset-0 z-20">
              <h2 className="relative z-10 my-2 text-center text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/90 sm:my-4 sm:text-3xl md:text-4xl lg:text-[clamp(1.5rem,4vw,2.5rem)]">
                {category.title}
              </h2>
              <div className="absolute inset-0 flex items-center justify-center p-4 pt-16">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={200}
                  height={200}
                  className="h-auto w-full max-w-[min(40vw,200px)] object-contain opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 sm:max-w-[min(30vw,180px)] md:max-w-[min(25vw,160px)] lg:max-w-[min(20vw,140px)]"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-10 flex h-16 w-16 items-center justify-center rounded-tl-xl border-l border-t border-border/50 bg-background/95 backdrop-blur-sm md:h-20 md:w-20">
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground md:bottom-3 md:right-3 md:h-12 md:w-12">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
