'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ClipboardCheck, LineChart, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Analyze the Root Cause',
    body: 'We walk the floor, inspect barrel heaters and insulation, and quantify where heat — and rupees — are escaping.',
  },
  {
    icon: ShieldCheck,
    title: 'Resolve the Heat Loss',
    body: 'Fit the right mica or ceramic band heaters and removable thermal jackets sized to your machines — not a one-size catalog dump.',
  },
  {
    icon: LineChart,
    title: 'Monitor & Improve',
    body: 'Confirm savings with your team, tune coverage, and keep performance stable over the long run.',
  },
]

const tools = [
  {
    title: 'Mica Band Heaters',
    benefit: 'Precision heating — less impair, faster heat-up on barrels and nozzles.',
    href: '/products/mica-band-heaters',
    image: '/static/products/00001.png',
  },
  {
    title: 'Ceramic Band Heaters',
    benefit: 'Up to 1600°F, high watt density, Made in Japan construction.',
    href: '/products/ceramic-band-heater',
    image: '/static/products/00002.png',
  },
  {
    title: 'Thermal Insulation Jackets',
    benefit: 'Removable, self-extinguishing jackets — up to 2000°C rated cloth systems.',
    href: '/products/thermal-insolations',
    image: '/static/products/00003.jpeg',
  },
]

export function LandingSolution() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            How ThermoSave works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            A process — not a one-time parts drop.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            We partner with plastic manufacturers the way a plant engineer would: measure first,
            fix the loss, then prove the result.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 18 }}
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
          initial={{ opacity: 0, y: 16 }}
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
