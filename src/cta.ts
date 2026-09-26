import { CONTACT_EMAIL, type OfferPackage } from './packages'

function env(key: string): string {
  const v = (import.meta.env as Record<string, string | undefined>)[key]
  return typeof v === 'string' ? v.trim() : ''
}

export function buyUrl(pkg: OfferPackage): string {
  const link = env(pkg.envKey)
  if (link) return link
  const subject = encodeURIComponent(`APEX — ${pkg.name} (€${pkg.priceEur})`)
  const body = encodeURIComponent(
    `Hi Theodor,\n\nI want to buy ${pkg.name} (€${pkg.priceEur}, ${pkg.days}).\n\nCompany / project:\nTimeline:\nNotes:\n`,
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export function bookUrl(): string {
  const booking = env('VITE_BOOKING_URL')
  if (booking) return booking
  const subject = encodeURIComponent('APEX — Book a 15-min call')
  const body = encodeURIComponent(
    `Hi Theodor,\n\nI'd like a 15-minute call to pick the right APEX package.\n\nPreferred times (Europe/Tallinn):\n\nProject one-liner:\n`,
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export function isExternal(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}
