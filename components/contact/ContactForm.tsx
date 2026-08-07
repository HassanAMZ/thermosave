'use client'

import * as React from 'react'
import { MessageCircle, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { EMAIL, WHATSAPP_URL } from '@/components/landing/constants'

const PROCESSES = [
  'Injection molding',
  'Extrusion blow moulding',
  'Extrusion / film',
  'Hopper / dryer',
  'Other / mixed',
] as const

type FormState = {
  name: string
  plant: string
  city: string
  phone: string
  process: string
  notes: string
}

const initial: FormState = {
  name: '',
  plant: '',
  city: '',
  phone: '',
  process: '',
  notes: '',
}

function buildMessage(data: FormState) {
  const lines = [
    'ThermoSave — energy-loss assessment request',
    '',
    `Name: ${data.name.trim()}`,
    `Plant / company: ${data.plant.trim()}`,
    data.city.trim() ? `City: ${data.city.trim()}` : null,
    `Phone: ${data.phone.trim()}`,
    data.process ? `Process: ${data.process}` : null,
    data.notes.trim() ? `Notes: ${data.notes.trim()}` : null,
  ].filter(Boolean)

  return lines.join('\n')
}

export function ContactForm() {
  const [data, setData] = React.useState<FormState>(initial)
  const [submitting, setSubmitting] = React.useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    if (!data.name.trim()) return 'Add your name.'
    if (!data.plant.trim()) return 'Add your plant or company name.'
    if (!data.phone.trim()) return 'Add a phone number we can reach.'
    return null
  }

  function onWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    const error = validate()
    if (error) {
      toast.error(error)
      return
    }

    setSubmitting(true)
    const text = encodeURIComponent(buildMessage(data))
    const url = `${WHATSAPP_URL}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
    toast.success('Opening WhatsApp with your assessment details.')
    setSubmitting(false)
  }

  function onEmail() {
    const error = validate()
    if (error) {
      toast.error(error)
      return
    }

    const subject = encodeURIComponent('ThermoSave — energy-loss assessment')
    const body = encodeURIComponent(buildMessage(data))
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const fieldClass =
    'h-11 rounded-sm border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:ring-[#c45c1a]'

  return (
    <form onSubmit={onWhatsApp} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-stone-700">
            Your name
          </Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            className={fieldClass}
            placeholder="e.g. Ahmed Khan"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-plant" className="text-stone-700">
            Plant / company
          </Label>
          <Input
            id="contact-plant"
            name="plant"
            autoComplete="organization"
            required
            value={data.plant}
            onChange={(e) => update('plant', e.target.value)}
            className={fieldClass}
            placeholder="e.g. Al Khair Plastics"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-city" className="text-stone-700">
            City
          </Label>
          <Input
            id="contact-city"
            name="city"
            autoComplete="address-level2"
            value={data.city}
            onChange={(e) => update('city', e.target.value)}
            className={fieldClass}
            placeholder="e.g. Lahore"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="text-stone-700">
            Phone / WhatsApp
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={fieldClass}
            placeholder="03XX XXXXXXX"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-process" className="text-stone-700">
          Main process
        </Label>
        <select
          id="contact-process"
          name="process"
          value={data.process}
          onChange={(e) => update('process', e.target.value)}
          className={`${fieldClass} flex w-full px-3 text-sm`}
        >
          <option value="">Select if known</option>
          {PROCESSES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-notes" className="text-stone-700">
          Machines / notes
        </Label>
        <Textarea
          id="contact-notes"
          name="notes"
          rows={4}
          value={data.notes}
          onChange={(e) => update('notes', e.target.value)}
          className="min-h-[100px] rounded-sm border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:ring-[#c45c1a]"
          placeholder="Machine count, barrel sizes, heaters vs jackets — whatever helps."
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
        >
          <MessageCircle className="h-4 w-4" />
          Send via WhatsApp
        </Button>
        <Button
          type="button"
          size="lg"
          variant="outline"
          onClick={onEmail}
          className="h-12 rounded-sm border-stone-300 bg-transparent px-6 text-stone-800 hover:bg-stone-100 hover:text-stone-900"
        >
          <Mail className="h-4 w-4" />
          Email instead
        </Button>
      </div>

      <p className="text-sm leading-relaxed text-stone-500">
        WhatsApp is the fastest path for plant buyers in Pakistan. We reply with sizing questions —
        no gated brochure, no fake checkout.
      </p>
    </form>
  )
}
