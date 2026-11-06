import { DUEREN } from '../pages-data'
import { PageHero } from '../components/PageHero'
import { Questions, Steps, Visit, useReveal } from '../components/Sections'

export function Dueren() {
  const scope = useReveal('.dueren-reveal')
  return (
    <>
      <PageHero crumb="Raumausstatter Düren" title={DUEREN.h1} intro={DUEREN.intro} photo={DUEREN.photo} nameFirst />
      <section ref={scope} className="lead lead--wide" aria-labelledby="dueren-services">
        <div className="dueren-reveal">
          <p className="label star-rule">Raumausstattung in Düren</p>
          <h2 id="dueren-services" className="lead-title poster">
            Meine Leistungen für Düren
          </h2>
        </div>
        <ul className="dueren-services dueren-reveal">
          {DUEREN.services.map((s) => (
            <li key={s.slug}>
              <h3 className="poster">{s.title} in Düren</h3>
              <p>{s.text}</p>
              <a className="text-link label" href={`/${s.slug}`}>
                Mehr zu {s.title.replace(' & Vorhänge', '')} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="lead lead--alt" aria-labelledby="dueren-local">
        <div>
          <h2 id="dueren-local" className="lead-title poster">
            {DUEREN.localTitle}
          </h2>
          {DUEREN.local.map((p) => (
            <p key={p.slice(0, 24)} className="lead-text">
              {p}
            </p>
          ))}
        </div>
        <ul className="lead-features">
          {DUEREN.districts.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>
      <Steps />
      <Questions items={DUEREN.faqs} title="Fragen aus Düren" />
      <Visit />
    </>
  )
}
