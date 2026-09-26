export type PackageId = 'landing' | 'ui' | 'ops'

export interface OfferPackage {
  id: PackageId
  name: string
  priceEur: number
  days: string
  tagline: string
  bullets: string[]
  envKey: string
  accent: 'cyan' | 'amber' | 'cyan-amber'
  featured?: boolean
}

export const PACKAGES: OfferPackage[] = [
  {
    id: 'landing',
    name: 'Landing Sprint',
    priceEur: 790,
    days: '5 days',
    tagline: 'One high-converting landing + copy that sells.',
    bullets: [
      'Single-page landing, mobile-first',
      'Headline, offer, proof, CTA copy',
      'Deploy-ready Vite build',
      '1 revision pass included',
    ],
    envKey: 'VITE_STRIPE_PAYMENT_LINK_LANDING',
    accent: 'cyan',
  },
  {
    id: 'ui',
    name: 'Product UI System',
    priceEur: 1490,
    days: '7–10 days',
    tagline: 'Design tokens + 8–12 screens + component kit.',
    bullets: [
      'Token set (color, type, spacing)',
      '8–12 key product screens',
      'Reusable React component kit',
      'Dark premium aesthetic, STEEL-adjacent',
    ],
    envKey: 'VITE_STRIPE_PAYMENT_LINK_UI',
    accent: 'amber',
    featured: true,
  },
  {
    id: 'ops',
    name: 'Ops Command Desk Lite',
    priceEur: 2490,
    days: '8–10 days',
    tagline: 'Vite ops dashboard: board + status + CTA for a small team.',
    bullets: [
      'Kanban-style board + status strip',
      'Primary CTA / intake panel',
      'Local-first Vite app, no backend required',
      'Handoff docs for your team',
    ],
    envKey: 'VITE_STRIPE_PAYMENT_LINK_OPS',
    accent: 'cyan-amber',
  },
]

export const CONTACT_EMAIL = 'tkynnap@gmail.com'
export const LOCATION = 'Tallinn / remote EU'
