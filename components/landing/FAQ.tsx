'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How long does installation / delivery take?',
    a: 'Typical lead time is 7–10 business days for custom-sized heaters and jackets, depending on machine count and dimensions. We confirm timelines when we size your order.',
  },
  {
    q: 'Will this work on our specific machine brand and size?',
    a: 'Yes. We size mica and ceramic band heaters and insulation jackets to your barrel diameter, length, wattage, and voltage — across injection molding, blow molding, and extrusion equipment of most brands.',
  },
  {
    q: "What's the actual ROI — how fast does this pay for itself?",
    a: 'Plants we work with typically see payback from electricity savings within months, not years. Measured examples include ~30k PKR/month on five machines (Paragon) and 200k+ PKR/month across eight machines (Al Khair). We can model your case in a free assessment.',
  },
  {
    q: 'Do you service outside Lahore / Rawalpindi?',
    a: 'Yes. We already support plants across 15 cities in Pakistan, and we are expanding capacity through international collaboration. If your plant is elsewhere, call or WhatsApp — we will tell you honestly how we can cover you.',
  },
]

export function LandingFAQ() {
  return (
    <section id="faq" className="bg-[#f4f2ee] py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]">FAQ</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Questions plant managers ask before they call
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 divide-y divide-stone-300 border-y border-stone-300"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {faqs.map((item) => (
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
