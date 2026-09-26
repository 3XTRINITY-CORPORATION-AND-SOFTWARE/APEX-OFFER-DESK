import { PACKAGES, CONTACT_EMAIL, LOCATION, type OfferPackage } from './packages'
import { buyUrl, bookUrl, isExternal } from './cta'
import './App.css'

function openCta(url: string) {
  if (isExternal(url)) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}

function PackageCard({ pkg }: { pkg: OfferPackage }) {
  const accentClass =
    pkg.accent === 'amber'
      ? 'card-accent-amber'
      : pkg.accent === 'cyan-amber'
        ? 'card-accent-dual'
        : 'card-accent-cyan'

  return (
    <article className={`package-card ${accentClass} ${pkg.featured ? 'featured' : ''}`}>
      {pkg.featured && <span className="badge">Most booked</span>}
      <header>
        <h3>{pkg.name}</h3>
        <p className="tagline">{pkg.tagline}</p>
      </header>
      <div className="price-row">
        <span className="price">€{pkg.priceEur.toLocaleString('en-IE')}</span>
        <span className="days">{pkg.days}</span>
      </div>
      <ul>
        {pkg.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => openCta(buyUrl(pkg))}
      >
        Buy {pkg.name}
      </button>
    </article>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'Pick a package',
    body: 'Fixed scope. Fixed price. No discovery theater.',
  },
  {
    n: '02',
    title: 'Pay or book',
    body: 'Stripe Payment Link when live — or email to lock the slot.',
  },
  {
    n: '03',
    title: 'Kickoff in 24h',
    body: 'Brief, access, and a delivery calendar in Europe/Tallinn time.',
  },
  {
    n: '04',
    title: 'Ship in 5–10 days',
    body: 'Vite build, handoff docs, one revision pass.',
  },
]

const PRINCIPLES = [
  {
    title: 'Contracts before code',
    body: 'Scope is written. Price is fixed. Delivery window is on the calendar.',
  },
  {
    title: 'Vite-native shipping',
    body: 'Fast static builds. Deploy anywhere. No backend tax for week-1 cash.',
  },
  {
    title: 'Board-ops clarity',
    body: 'Status you can see. CTAs that convert. Ops desks that teams actually open.',
  },
  {
    title: 'STEEL physics',
    body: 'Sharp UI, dark premium, one accent. No fluff pages. No fake metrics.',
  },
]

const FAQ = [
  {
    q: 'How do I pay?',
    a: 'When Stripe Payment Links are live, Buy opens checkout. Until then, Buy opens a prefilled email to tkynnap@gmail.com — reply confirms the slot and invoice path.',
  },
  {
    q: 'What is included in a revision pass?',
    a: 'One round of focused changes against the agreed brief — copy tweaks, layout polish, component adjustments. New features are a new package.',
  },
  {
    q: 'Do you work remote EU only?',
    a: 'Based in Tallinn. Remote across EU timezones. Async-first; calls when needed.',
  },
  {
    q: 'Can I customize a package?',
    a: 'Yes for Ops Command Desk Lite and UI System. Landing Sprint stays tight by design. Book a call for custom scope.',
  },
  {
    q: 'Tech stack?',
    a: 'Vite + React + TypeScript. Design tokens. Deploy-ready static output for Netlify / Pages / any CDN.',
  },
]

export default function App() {
  const booking = bookUrl()

  return (
    <div className="page">
      <nav className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark">▲</span>
          APEX Offer Desk
        </a>
        <div className="nav-links">
          <a href="#packages">Packages</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
          <button type="button" className="btn btn-ghost" onClick={() => openCta(booking)}>
            Book call
          </button>
        </div>
      </nav>

      <header className="hero" id="top">
        <p className="eyebrow">Productized offers · Tallinn / remote EU</p>
        <h1>
          Clear packages.
          <br />
          <span className="accent">Fixed price.</span>
          <br />
          5–10 day delivery.
        </h1>
        <p className="lede">
          Three offers you can buy this week — landing that converts, UI systems that ship,
          and a lite ops desk for small teams. No discovery bloat. No backend tax.
        </p>
        <div className="hero-ctas">
          <a href="#packages" className="btn btn-primary">
            See packages
          </a>
          <button type="button" className="btn btn-secondary" onClick={() => openCta(booking)}>
            Book 15-min call
          </button>
        </div>
        <p className="meta">
          Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · {LOCATION}
        </p>
      </header>

      <section className="section" id="packages">
        <div className="section-head">
          <h2>Packages</h2>
          <p>Pick one. Pay or email. Kickoff within 24 hours.</p>
        </div>
        <div className="package-grid">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      <section className="section" id="how">
        <div className="section-head">
          <h2>How it works</h2>
          <p>Four steps from click to handoff.</p>
        </div>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="step-n">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="proof">
        <div className="section-head">
          <h2>Principles</h2>
          <p>STEEL physics applied to client work.</p>
        </div>
        <div className="principles">
          {PRINCIPLES.map((p) => (
            <article key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-head">
          <h2>FAQ</h2>
        </div>
        <dl className="faq">
          {FAQ.map((item) => (
            <div key={item.q} className="faq-item">
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="footer">
        <div>
          <strong>APEX Offer Desk</strong>
          <p>3XTRINITY · Tallinn / remote EU</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <button type="button" className="linkish" onClick={() => openCta(booking)}>
            Book a call
          </button>
          <a href="#packages">Packages</a>
        </div>
        <p className="fineprint">
          Payment Links via Stripe when configured. No card data touches this site.
        </p>
      </footer>
    </div>
  )
}
