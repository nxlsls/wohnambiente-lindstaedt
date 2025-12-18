import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function Datenschutz() {
  return (
    <Layout>
      <SEOHead
        title="Datenschutzerklärung"
        description="Datenschutzerklärung von Wohnambiente Lindstädt – Informationen zum Umgang mit Ihren Daten."
        canonical="/datenschutz"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1>Datenschutzerklärung</h1>

            <h2>1. Datenschutz auf einen Blick</h2>
            
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
              Wohnambiente Lindstädt<br />
              Verena Lindstädt<br />
              Hoeschstraße 2<br />
              52372 Kreuzau<br />
              E-Mail: info@wohnambiente-lindstaedt.de
            </p>

            <h2>2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p>
              Die Server des Hosters befinden sich in Deutschland. Die Datenverarbeitung erfolgt 
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Ihre Rechte</h3>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
              <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            </ul>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
              Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Fax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Fax kontaktieren, wird Ihre Anfrage inklusive 
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2>5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der
              Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
            </p>

            <h2>6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
