'use client'

import { motion } from 'framer-motion'

const collectionFaqs = [
  {
    q: 'Which product should we buy first?',
    a: 'If bands are failing or undersized, start with mica or ceramic sized to your zones. If bands already work but the hall is hot and the meter is high, insulation jackets usually deliver the fastest PKR payback. Many plants run both.',
  },
  {
    q: 'Do you publish fixed prices online?',
    a: 'Bands and jackets are custom-sized to barrel diameter, length, wattage, and voltage. We quote after a short sizing call or WhatsApp. No fake checkout urgency.',
  },
  {
    q: "What's a realistic ROI?",
    a: 'Plants we work with typically see payback from electricity savings within months. Measured examples include ~30k PKR/month on five machines (Paragon) and 200k+ PKR/month across eight machines (Al Khair). A free assessment models your case.',
  },
  {
    q: 'How long is delivery?',
    a: 'Typical lead time is 7-10 business days for custom-sized heaters and jackets, confirmed when we size your order.',
  },
]

export function CollectionFAQ() {
  return (
    <section className="bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">FAQ</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Questions before you call
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 divide-y divide-stone-300 border-y border-stone-300"
          initial={{ opacity: 0.4, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {collectionFaqs.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="cursor-pointer list-none py-5 text-left text-base font-semibold text-stone-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span
                    className="shrink-0 text-stone-400 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-stone-600">{item.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
