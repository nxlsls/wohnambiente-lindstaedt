import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function Impressum() {
  return (
    <Layout>
      <SEOHead
        title="Impressum"
        description="Impressum von Wohnambiente Lindstädt – Angaben gemäß § 5 TMG."
        canonical="/impressum"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1>Impressum</h1>

            <p className="text-lg font-semibold">Raumausstatter Meisterbetrieb</p>

            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Inhaber: Verena Lindstädt</strong><br />
              Hoeschstraße 2<br />
              52372 Kreuzau
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 02422 / 504344<br />
              Fax: 02422 / 504345<br />
              Mobil: 0178 / 5917038<br />
              E-Mail: info@wohnambiente-lindstaedt.de<br />
              Web: www.wohnambiente-lindstaedt.de
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE317580319
            </p>

            <h2>Gerichtsstand</h2>
            <p>Düren</p>

            <h2>Berufsbezeichnung</h2>
            <p>
              Raumausstatterin<br />
              Zuständige Kammer: Handwerkskammer Aachen<br />
              Verliehen in: Deutschland
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
