import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  ABOUT,
  APPOINTMENTS,
  AREA,
  AREA_MORE,
  BRANDS,
  BRANDS_INTRO,
  MILESTONES,
  PRODUCTS_NOTE,
  PRODUCT_GROUPS,
  SHOP,
  SHOWROOM_NOTE,
  STEPS,
} from '../content'
import type { ProductGroup } from '../content'
import { SERVICE_PAGES } from '../pages-data'
import type { Faq } from '../pages-data'
import map from '../map.json'
import { MOTION_OK } from '../lib/motion'
import { Photo } from './Photo'

// Calm fade-up for blocks as they enter the screen (once, never on reduced motion).
export function useReveal<T extends HTMLElement = HTMLElement>(selector: string) {
  const scope = useRef<T>(null)
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        MOTION_OK,
        () => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
            gsap.fromTo(
              el,
              { y: 24, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } },
            )
          })
        },
        scope,
      )
      return () => mm.revert()
    },
    { scope },
  )
  return scope
}

/* ---------- Products ---------- */

type GroupProps = {
  group: ProductGroup
  count?: string
  // On a service page: longer descriptions and feature lists, no link to the page itself.
  detailed?: boolean
}

export function ProductGroupView({ group, count, detailed }: GroupProps) {
  return (
    <section className="pg" aria-labelledby={`${group.id}-title`}>
      {count && (
        <p className="pg-count label" aria-hidden="true">
          {count}
        </p>
      )}
      <h3 id={`${group.id}-title`} className="pg-title poster">
        {group.title}
      </h3>

      {group.kind === 'cards' ? (
        <>
          <ul className="pg-cards">
            {group.items.map((item) => (
              <li key={item.name} className="pg-card">
                <div className="pg-card-photo">
                  <Photo name={item.photo} width={900} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw" alt={item.alt} />
                </div>
                <h4 className="pg-card-name poster">{item.name}</h4>
                <p className="pg-card-text">{detailed && item.details ? item.details : item.text}</p>
                {detailed && item.features && <p className="pg-card-features">{item.features.join(' · ')}</p>}
              </li>
            ))}
          </ul>
          {group.more && <p className="pg-more">{group.more}</p>}
        </>
      ) : (
        <div className={`pg-split${group.photo ? '' : ' pg-split--text'}`}>
          {group.photo && (
            <figure>
              <div className={`pg-split-photo${group.photo.portrait ? ' pg-split-photo--portrait' : ''}`}>
                <Photo name={group.photo.name} width={group.photo.width} sizes="(min-width: 768px) 40vw, 90vw" alt={group.photo.alt} />
              </div>
              {group.photo.caption && <figcaption className="pg-split-caption">{group.photo.caption}</figcaption>}
            </figure>
          )}
          <ul className="pg-list">
            {group.items.map((item) => (
              <li key={item.name}>
                <h4 className="pg-list-name poster">{item.name}</h4>
                <p className="pg-list-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!detailed && (
        <a className="text-link text-link--light label" href={`/${group.slug}`}>
          {group.linkLabel} <span aria-hidden="true">→</span>
        </a>
      )}
    </section>
  )
}

export function Products() {
  const scope = useReveal('.pg')
  return (
    <section id="produkte" ref={scope} tabIndex={-1} className="products" aria-labelledby="produkte-title">
      <div className="section-head">
        <h2 id="produkte-title" className="section-title poster">
          Produkte
        </h2>
        <p className="products-note">{PRODUCTS_NOTE}</p>
      </div>
      {PRODUCT_GROUPS.map((group, gi) => (
        <ProductGroupView key={group.id} group={group} count={`0${gi + 1} / 0${PRODUCT_GROUPS.length}`} />
      ))}
    </section>
  )
}

/* ---------- Brands ---------- */

export function Brands() {
  const scope = useReveal('.brand-list')
  return (
    <section id="marken" ref={scope} tabIndex={-1} className="brands" aria-labelledby="marken-title">
      <div className="section-head">
        <h2 id="marken-title" className="section-title poster">
          Marken
        </h2>
        <p className="brands-intro">{BRANDS_INTRO}</p>
      </div>
      <ul className="brand-list">
        {BRANDS.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
        <li className="brand-more label">und weitere</li>
      </ul>
    </section>
  )
}

/* ---------- Steps ---------- */

export function Steps() {
  const scope = useReveal('.step')
  return (
    <section id="ablauf" ref={scope} tabIndex={-1} className="steps" aria-labelledby="ablauf-title">
      <div className="section-head">
        <h2 id="ablauf-title" className="section-title poster">
          So läuft’s ab
        </h2>
        <p className="steps-intro">
          {APPOINTMENTS}. {SHOWROOM_NOTE}
        </p>
      </div>
      <ol className="step-list">
        {STEPS.map((step, i) => (
          <li key={step.title} className="step">
            <span className="step-no poster" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="step-title poster">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- About ---------- */

export function About() {
  const scope = useReveal('.about-reveal')
  return (
    <section id="ueber-mich" ref={scope} tabIndex={-1} className="about" aria-labelledby="about-title">
      <div className="about-card stripes about-reveal">
        <div className="about-photo">
          <Photo name="verena" width={800} sizes="(min-width: 768px) 34vw, 80vw" alt="Verena Lindstädt, Raumausstattermeisterin" />
        </div>
      </div>
      <div className="about-body about-reveal">
        <p className="label star-rule">Über mich</p>
        <h2 id="about-title" className="about-title poster">
          {SHOP.owner}
        </h2>
        <p className="about-role label">{SHOP.role}</p>
        {ABOUT.map((p) => (
          <p key={p.slice(0, 24)} className="about-text">
            {p}
          </p>
        ))}
        <dl className="milestones">
          {MILESTONES.map((m) => (
            <div key={m.year}>
              <dt className="poster">{m.year}</dt>
              <dd>{m.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------- Questions ---------- */

export function Questions({ items, title = 'Häufige Fragen' }: { items: Faq[]; title?: string }) {
  return (
    <section id="fragen" tabIndex={-1} className="questions" aria-labelledby="fragen-title">
      <h2 id="fragen-title" className="section-title poster">
        {title}
      </h2>
      <dl className="faq">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="poster">{item.q}</dt>
            <dd>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* ---------- Kontakt with the street map ---------- */

function StreetMap() {
  return (
    <div className="visit-map">
      <a className="map" href={SHOP.route} target="_blank" rel="noopener" aria-label="Route zu Wohnambiente Lindstädt in Google Maps planen">
        <span className="map-inner" aria-hidden="true">
          <img src="/map/stadtplan.svg" alt="" width={1000} height={1000} loading="lazy" decoding="async" />
          {map.labels.map((l) => (
            <span
              key={l.text}
              className={`map-label map-label--${l.kind}`}
              style={{ left: `${l.x}%`, top: `${l.y}%`, transform: `translate(-50%, -50%) rotate(${l.angle}deg)` }}
            >
              {l.text}
            </span>
          ))}
          <span className="map-pin">
            <span className="map-pin-tag label">{SHOP.street}</span>
          </span>
        </span>
      </a>
      <div className="map-actions">
        <a className="btn label" href={SHOP.route} target="_blank" rel="noopener">
          Route planen
        </a>
      </div>
      <a className="map-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">
        Karte © OpenStreetMap
      </a>
    </div>
  )
}

export function Visit() {
  return (
    <section id="kontakt" tabIndex={-1} className="visit" aria-labelledby="kontakt-title">
      <StreetMap />
      <div className="visit-body">
        <div>
          <h2 id="kontakt-title" className="visit-title poster">
            Kontakt
          </h2>
          <address className="visit-address">
            {SHOP.fullName}
            <br />
            {SHOP.owner}, {SHOP.role}
            <br />
            {SHOP.street}
            <br />
            {SHOP.city}-{SHOP.district}
          </address>
        </div>

        <div>
          <a className="visit-cta poster" href={SHOP.phoneHref}>
            {SHOP.phoneDisplay} <span className="arrow" aria-hidden="true">→</span>
          </a>
          <ul className="visit-lines">
            <li>
              <span className="label">Mobil</span>
              <a href={SHOP.mobileHref}>{SHOP.mobileDisplay}</a>
            </li>
            <li>
              <span className="label">WhatsApp</span>
              <a href={SHOP.whatsapp} target="_blank" rel="noopener">
                Nachricht schreiben
              </a>
            </li>
            <li>
              <span className="label">E-Mail</span>
              <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
            </li>
            <li>
              <span className="label">Termine</span>
              <span>{APPOINTMENTS}</span>
            </li>
          </ul>
          <p className="visit-note">Die Beratung bei Ihnen zu Hause ist kostenlos und unverbindlich. {SHOWROOM_NOTE}</p>
        </div>

        <div>
          <p className="label star-rule">Ich komme zu Ihnen</p>
          <p className="visit-area">
            {AREA.join(' · ')}
            <br />
            <span>{AREA_MORE}</span>
          </p>
        </div>

        <nav className="site-foot" aria-label="Seiten">
          <p className="foot-links">
            {SERVICE_PAGES.map((s) => (
              <a key={s.slug} href={`/${s.slug}`}>
                {s.name}
              </a>
            ))}
            <a href="/raumausstatter-dueren">Raumausstatter Düren</a>
          </p>
          <p className="foot-links foot-links--legal">
            <a href={SHOP.impressum}>Impressum</a>
            <a href={SHOP.datenschutz}>Datenschutz</a>
          </p>
          <p className="smallprint">
            © {new Date().getFullYear()} {SHOP.fullName} · Raumausstatter-Meisterbetrieb in {SHOP.town}
          </p>
        </nav>
      </div>
    </section>
  )
}
