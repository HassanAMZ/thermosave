'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ClipboardCheck, LineChart, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from './constants'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Find the heat leak',
    body: 'We walk the floor. We check barrel heaters and insulation. We show where heat and rupees escape.',
  },
  {
    icon: ShieldCheck,
    title: 'Fix it with the right parts',
    body: 'We fit mica or ceramic band heaters and removable jackets sized to your machines. Not a one-size catalog dump.',
  },
  {
    icon: LineChart,
    title: 'Check the savings',
    body: 'We confirm savings with your team. We tune coverage so the fix stays solid.',
  },
]

const tools = [
  {
    title: 'Mica Band Heaters',
    benefit: 'Heat barrels and nozzles fast. Tight fit. Less waste.',
    href: '/products/mica-band-heaters',
    image: '/static/products/cutouts/00001.png',
  },
  {
    title: 'Ceramic Band Heaters',
    benefit: 'High heat up to 1600°F. Made in Pakistan. Built for hard-running zones.',
    href: '/products/ceramic-band-heater',
    image: '/static/products/cutouts/00002.png',
  },
  {
    title: 'Thermal Insulation Jackets',
    benefit: 'Jackets you can take off. Keep heat in the barrel, not the hall.',
    href: '/products/thermal-insolations',
    image: '/static/products/00003.jpeg',
  },
]

export function LandingSolution() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.figure
            className="overflow-hidden rounded-sm border border-stone-200 bg-[#0c1014]"
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
              <Image
                src="/static/industries/extrusion-blow-moulding/install.jpg"
                alt="ThermoSave jackets being fitted on plant equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="border-t border-stone-200 bg-[#faf9f7] px-4 py-3 text-sm text-stone-600">
              Fitted on the machine. Removable for maintenance.
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0.4, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
              How ThermoSave works
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              We measure first. Then we fix the loss.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              Jackets and band heaters keep heat in the melt. Your process stays the same. Your bill
              goes down.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
              >
                <Link href="/contact">Get a Free Heat Check</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-sm border-stone-300 px-6 text-base"
              >
                <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-sm border-stone-300 px-6 text-base"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-stone-200 pt-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0.4, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="font-[family-name:var(--font-display)] text-5xl font-semibold text-stone-100">
                0{index + 1}
              </span>
              <div className="relative -mt-8">
                <step.icon className="h-6 w-6 text-[#c45c1a]" strokeWidth={1.5} />
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 border-t border-stone-200 pt-12"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-stone-900">
            The tools we use in that process
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col border border-stone-200 bg-[#faf9f7] p-5 transition-colors hover:border-[#c45c1a]/40"
              >
                <div className="relative mx-auto mb-4 h-28 w-28">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-stone-900">
                    {tool.title}
                  </h4>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-[#c45c1a]" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{tool.benefit}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
