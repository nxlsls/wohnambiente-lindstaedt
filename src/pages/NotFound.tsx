import { SERVICE_PAGES } from '../pages-data'

export function NotFound() {
  return (
    <article id="top" className="legal" aria-labelledby="legal-title">
      <h1 id="legal-title" className="legal-title poster">
        Seite nicht gefunden
      </h1>
      <div className="legal-body">
        <p>Diese Seite gibt es leider nicht (mehr). Hier geht es weiter:</p>
        <ul>
          <li>
            <a href="/">Zur Startseite</a>
          </li>
          {SERVICE_PAGES.map((s) => (
            <li key={s.slug}>
              <a href={`/${s.slug}`}>{s.name}</a>
            </li>
          ))}
          <li>
            <a href="/#kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </article>
  )
}
