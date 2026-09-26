# APEX Offer Desk

Productized client offers for week-1 cash. Dark premium storefront — three fixed-price packages, Stripe Payment Links (or mailto fallback), Tallinn / remote EU.

**Org:** 3XTRINITY-CORPORATION-AND-SOFTWARE  
**Contact:** tkynnap@gmail.com  
**Location:** Tallinn / remote EU

## Packages

| Package | Price | Delivery |
|---------|------:|----------|
| Landing Sprint | €790 | 5 days |
| Product UI System | €1,490 | 7–10 days |
| Ops Command Desk Lite | €2,490 | 8–10 days |

## Run locally

```bash
cp .env.example .env        # optional — paste Stripe / booking URLs
npm install
npm run dev                 # http://localhost:5173
npm run build               # output → dist/
npm run preview             # preview production build
```

## Stripe Payment Links

No secret keys in this repo. Checkout is Payment Links only.

1. Open [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links).
2. Create one link per package (EUR amounts above). Product name = package name.
3. Copy each link URL.
4. Paste into `.env` (local) or Netlify env vars:

```
VITE_STRIPE_PAYMENT_LINK_LANDING=https://buy.stripe.com/...
VITE_STRIPE_PAYMENT_LINK_UI=https://buy.stripe.com/...
VITE_STRIPE_PAYMENT_LINK_OPS=https://buy.stripe.com/...
VITE_BOOKING_URL=https://calendly.com/your-handle/15min   # optional
```

5. Rebuild / redeploy so Vite inlines the vars.

If a link is empty, **Buy** opens a prefilled `mailto:tkynnap@gmail.com`. **Book call** uses `VITE_BOOKING_URL` or a mailto calendar ask.

## Deploy on Netlify (one-click)

Vercel team billing may be on hold — prefer Netlify.

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
2. Connect GitHub → select `3XTRINITY-CORPORATION-AND-SOFTWARE/APEX-OFFER-DESK`.
3. Build settings (also in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node:** 20
4. Site settings → Environment variables → add the four `VITE_*` keys from `.env.example`.
5. Deploy. Custom domain optional.

GitHub Pages alternative: enable Pages on `main` with GitHub Actions or serve `dist/` from a `gh-pages` branch after `npm run build`.

## Week-1 sales script (summary)

Full plan: [`docs/WEEK1-SALES.md`](docs/WEEK1-SALES.md).

**Who to message (EU / Tallinn):** founders of early SaaS, agencies needing a landing fast, operators who want a lite board without a full ops stack.

**What to say:** one package, fixed price, delivery window, link to this site, ask for a yes/no or 15-min call.

### LinkedIn / Cold DM templates (5)

1. **Landing Sprint:**  
   `Hey {{Name}} — saw {{Company}} shipping {{product}}. I sell a 5-day Landing Sprint (€790): one high-converting page + copy, deploy-ready. Fixed price. Want the brief or a 15-min call? → {{SITE}}`

2. **UI System:**  
   `{{Name}} — if your product UI is inconsistent, I ship a Product UI System in 7–10 days: tokens + 8–12 screens + React kit (€1,490). Tallinn / remote EU. Link: {{SITE}}`

3. **Ops Desk:**  
   `Quick offer: Ops Command Desk Lite — Vite board + status + CTA for a small team. €2,490 / ~10 days. No backend tax. Details: {{SITE}} — interested?`

4. **Warm referral:**  
   `{{Mutual}} suggested I reach out. I run APEX Offer Desk — three fixed packages (landing / UI / ops desk). Which would help {{Company}} this month? {{SITE}}`

5. **Follow-up (day 3):**  
   `Circling back once — still open for a Landing Sprint this week (€790, 5 days). Happy to book 15 min or take a no. {{SITE}}`

Replace `{{SITE}}` with your live Netlify URL once deployed.

## Stack

- Vite + React + TypeScript
- Static SPA — no auth, no DB, no charging backend
- Env-driven Payment Links + mailto / booking CTAs

## License

Private commercial use for 3XTRINITY / Theodor Künnapuu.
