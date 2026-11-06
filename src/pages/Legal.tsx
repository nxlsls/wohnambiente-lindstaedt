import { SHOP } from '../content'

// Legal pages, carried over from the previous website; TMG references updated to the DDG
// (in force since May 2024) and the EU dispute platform link removed (platform closed July 2025).

export function Impressum() {
  return (
    <article id="top" className="legal" aria-labelledby="legal-title">
      <h1 id="legal-title" className="legal-title poster">
        Impressum
      </h1>
      <div className="legal-body">
        <p>Raumausstatter-Meisterbetrieb</p>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {SHOP.fullName}
          <br />
          Inhaberin: {SHOP.owner}
          <br />
          {SHOP.street}
          <br />
          {SHOP.city}
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {SHOP.phoneDisplay}
          <br />
          Fax: {SHOP.faxDisplay}
          <br />
          Mobil: {SHOP.mobileDisplay}
          <br />
          E-Mail: <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          {SHOP.vatId}
        </p>

        <h2>Berufsbezeichnung und Kammer</h2>
        <p>
          Berufsbezeichnung: Raumausstatterin (verliehen in Deutschland)
          <br />
          Zuständige Kammer: Handwerkskammer Aachen
        </p>

        <h2>Gerichtsstand</h2>
        <p>Düren</p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
          für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
          der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Kartendaten: © OpenStreetMap-Mitwirkende (ODbL).
        </p>
      </div>
    </article>
  )
}

export function Datenschutz() {
  return (
    <article id="top" className="legal" aria-labelledby="legal-title">
      <h1 id="legal-title" className="legal-title poster">
        Datenschutz
      </h1>
      <div className="legal-body">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
        <p>
          Diese Website verwendet keine Cookies, kein Tracking und keine Analyse-Werkzeuge. Schriften, Bilder und der Stadtplan
          werden direkt von dieser Website geladen; beim Aufruf werden keine Daten an Google oder andere Dritte übertragen.
        </p>

        <h3>Verantwortlich für die Datenverarbeitung</h3>
        <p>
          {SHOP.fullName}
          <br />
          {SHOP.owner}
          <br />
          {SHOP.street}
          <br />
          {SHOP.city}
          <br />
          E-Mail: <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
        </p>

        <h2>2. Hosting: GitHub Pages</h2>
        <p>
          Wir hosten unsere Website bei GitHub Pages. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107,
          USA (nachfolgend „GitHub“).
        </p>
        <p>
          Wenn Sie unsere Website besuchen, erfasst GitHub Ihre IP-Adresse und weitere technische Informationen (z. B. Browsertyp,
          Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage) in sogenannten Server-Logfiles. Die Verwendung von GitHub Pages
          erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen
          Darstellung unserer Website.
        </p>
        <p>
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission sowie das EU-U.S. Data Privacy
          Framework (DPF) gestützt. Details finden Sie in der Datenschutzerklärung von GitHub:{' '}
          <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" rel="noopener">
            docs.github.com/de/site-policy/privacy-policies/github-privacy-statement
          </a>
          . Wir haben mit GitHub einen Vertrag zur Auftragsverarbeitung (AVV) geschlossen.
        </p>

        <h2>3. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail, Telefon, Fax oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
          personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet
          (Art. 6 Abs. 1 lit. b DSGVO, bei sonstigen Anfragen Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Wenn Sie den Link „WhatsApp“ nutzen, werden Sie zu WhatsApp (Meta Platforms Ireland Ltd.) weitergeleitet; für die
          Verarbeitung dort gilt die Datenschutzerklärung von WhatsApp. Über WhatsApp sollten Sie uns keine sensiblen Daten senden.
        </p>

        <h2>4. Link zu Google Maps</h2>
        <p>
          Der Stadtplan auf dieser Website ist ein Bild, das von unserer eigenen Website geladen wird. Erst wenn Sie auf „Route
          planen“ oder den Stadtplan klicken, öffnet sich Google Maps (Google Ireland Limited) in einem neuen Fenster; ab dann gilt
          die Datenschutzerklärung von Google.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
          <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
          <li>sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
        </ul>

        <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung
          an „https://“ und dem Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h2>7. Stand</h2>
        <p>Diese Datenschutzerklärung hat den Stand November 2026.</p>
      </div>
    </article>
  )
}
