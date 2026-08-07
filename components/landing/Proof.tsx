'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CITIES } from './constants'

const callouts = [
  {
    stat: '200k+',
    unit: 'PKR / month',
    detail: 'Saved across 8 machines',
    client: 'Al Khair Five Star Forms, Lahore',
    quote:
      'Easy to work with. We have been working for about 3 years now. Helping us save over 200k PKR monthly on 8 machines.',
    role: 'Owner',
    avatar: '/static/previousClients/AlKhair.jpg',
  },
  {
    stat: '1.3',
    unit: 'units / hour',
    detail: '~30k PKR / month on 5 machines',
    client: 'Paragon Plastic Industries, Rawalpindi',
    quote:
      'Our engineering team confirmed 1.3 units saved per hour on an injection molding machine. About 20 units/hour across 5 machines, with ~30k PKR monthly savings.',
    role: 'General Manager',
    avatar: '/static/previousClients/ParagonPlastics.png',
  },
  {
    stat: 'Quality',
    unit: '+ savings',
    detail: 'Gujrat plant partnership',
    client: 'Gondal Precast, Gujrat',
    quote:
      'Exceptional product quality and outstanding savings. Strong working experience with Nasir and the ThermoSave team.',
    role: 'Manager',
    avatar: '/static/previousClients/GondalPrecast.png',
  },
]

export function LandingProof() {
  return (
    <section id="proof" className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            200+ factories. Measured savings. Names you can call.
          </h2>
          <p className="mt-4 text-base text-stone-600">
            <Link href="/clients" className="font-semibold text-[#c45c1a] hover:underline">
              Browse clientele &amp; case studies
            </Link>
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-8 border-y border-stone-300/80 py-8">
          {callouts.map((item) => (
            <div key={item.client} className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.client}
                width={48}
                height={48}
                className="rounded-sm object-cover"
              />
              <span className="text-sm font-medium text-stone-700">{item.client.split(',')[0]}</span>
            </div>
          ))}
          <p className="text-sm text-stone-500">+ 200 more plants across Pakistan</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {callouts.map((item, index) => (
            <motion.article
              key={item.client}
              className="flex flex-col border border-stone-200 bg-white p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[#c45c1a]">
                {item.stat}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-stone-500">
                {item.unit}
              </p>
              <p className="mt-1 text-sm text-stone-600">{item.detail}</p>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-stone-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-stone-900">
                {item.client === 'Al Khair Five Star Forms, Lahore' ? (
                  <Link
                    href="/clients/al-khair-five-star-foam-lhr"
                    className="hover:text-[#c45c1a] hover:underline"
                  >
                    {item.client}
                  </Link>
                ) : (
                  item.client
                )}
                <span className="font-normal text-stone-500">, {item.role}</span>
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-stone-900">
            Serving 15 cities across Pakistan
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <li
                key={city}
                className="border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700"
              >
                {city}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
