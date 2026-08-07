'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from './ContactForm'
import {
  CITIES,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/components/landing/constants'

const STEPS = [
  {
    title: 'Share the plant',
    body: 'Call, WhatsApp, or the form. Tell us machines, city, and what heats the melt.',
  },
  {
    title: 'We size the loss',
    body: 'Send photos or hop on a short site call. We show where heat leaves the barrel.',
  },
  {
    title: 'Quote and lead time',
    body: 'Sized jackets or heaters. Typical 7 to 10 day lead. Install help included.',
  },
] as const

const PLANT_STILLS = [
  {
    src: '/static/products/00003-2.jpeg',
    alt: 'Insulation jackets on a plastic plant barrel',
  },
  {
    src: '/static/industries/extrusion-blow-moulding/machine-full.jpg',
    alt: 'Extrusion blow moulding machine with ThermoSave jackets',
  },
  {
    src: '/static/products/00003-5.jpeg',
    alt: 'Jacketed heater bands on plant equipment',
  },
  {
    src: '/static/industries/extrusion-blow-moulding/install.jpg',
    alt: 'Jacket install on a production floor',
  },
] as const

const channelClass =
  'flex items-start gap-3 rounded-sm border border-stone-200/80 bg-white px-4 py-3 transition-colors hover:border-[#c45c1a]/40'

export function ContactBody() {
  return (
    <section className="bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0.4, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">
            Same jackets. Real plants.
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0c1014] sm:text-3xl">
            What you get after the call looks like this.
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {PLANT_STILLS.map((still) => (
              <div
                key={still.src}
                className="relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-200"
              >
                <Image
                  src={still.src}
                  alt={still.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0.4, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0c1014] sm:text-3xl">
              How the assessment works
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-stone-600">
              Three short steps. Plant talk. Clear numbers. No pressure.
            </p>

            <ol className="mt-8 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#c45c1a] font-[family-name:var(--font-display)] text-sm font-semibold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#0c1014]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                Direct lines
              </p>
              <a href={`tel:${PHONE_TEL}`} className={channelClass}>
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#c45c1a]" aria-hidden />
                <span>
                  <span className="block text-sm font-medium text-stone-500">Call</span>
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#0c1014]">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={channelClass}
              >
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" aria-hidden />
                <span>
                  <span className="block text-sm font-medium text-stone-500">WhatsApp</span>
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#0c1014]">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className={channelClass}>
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#c45c1a]" aria-hidden />
                <span>
                  <span className="block text-sm font-medium text-stone-500">Email</span>
                  <span className="break-all font-[family-name:var(--font-display)] text-base font-semibold text-[#0c1014] sm:text-lg">
                    {EMAIL}
                  </span>
                </span>
              </a>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Serving plants across {CITIES.slice(0, 8).join(', ')}, and more.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0.4, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <div className="rounded-sm border border-stone-200/90 bg-white p-6 shadow-none md:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#0c1014]">
                Request an assessment
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                We open WhatsApp (or email) with your plant details ready. Then we take it from
                there.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
