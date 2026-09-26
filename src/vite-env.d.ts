/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_PAYMENT_LINK_LANDING?: string
  readonly VITE_STRIPE_PAYMENT_LINK_UI?: string
  readonly VITE_STRIPE_PAYMENT_LINK_OPS?: string
  readonly VITE_BOOKING_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
