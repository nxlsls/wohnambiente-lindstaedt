import { PRODUCT_GROUPS } from '../content'
import { SERVICE_PAGES } from '../pages-data'
import type { ServicePageData } from '../pages-data'
import { PageHero } from '../components/PageHero'
import { ProductGroupView, Questions, Steps, Visit, useReveal } from '../components/Sections'

function Lead({ page }: { page: ServicePageData }) {
  const scope = useReveal('.lead-reveal')
  return (
    <section ref={scope} className="lead" aria-labelledby="lead-title">
      <div className="lead-reveal">
        <p className="label star-rule">{page.name}</p>
        <h2 id="lead-title" className="lead-title poster">
          {page.lead.title}
        </h2>
        {page.lead.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="lead-text">
            {p}
          </p>
        ))}
      </div>
      <ul className="lead-features lead-reveal">
        {page.lead.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  )
}

function MoreServices({ current }: { current: string }) {
  return (
    <section className="more" aria-labelledby="more-title">
      <h2 id="more-title" className="label star-rule">
        Weitere Leistungen
      </h2>
      <ul className="more-list">
        {SERVICE_PAGES.filter((s) => s.slug !== current).map((s) => (
          <li key={s.slug}>
            <a className="more-link poster" href={`/${s.slug}`}>
              {s.name} <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
        <li>
          <a className="more-link poster" href="/raumausstatter-dueren">
            Raumausstatter Düren <span aria-hidden="true">→</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export function ServicePage({ page }: { page: ServicePageData }) {
  const group = PRODUCT_GROUPS.find((g) => g.id === page.groupId)
  const products = useReveal('.pg')
  return (
    <>
      <PageHero crumb={page.name} title={page.h1} intro={page.intro} photo={page.photo} />
      <Lead page={page} />
      {group && (
        <section id="produkte" ref={products} tabIndex={-1} className="products products--page" aria-label={`${page.name}: Produkte`}>
          <ProductGroupView group={group} detailed />
        </section>
      )}
      <Steps />
      <Questions items={page.faqs} title={`Fragen zu ${page.name === 'Polsterei' ? 'Polsterarbeiten' : page.name}`} />
      <MoreServices current={page.slug} />
      <Visit />
    </>
  )
}
