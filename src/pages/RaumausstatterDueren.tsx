import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import { FAQ, type FAQItem } from "@/components/sections/FAQ";

const services = [
  {
    title: "Gardinen & Vorhänge",
    href: "/gardinen",
    text: "Maßgefertigte Gardinen, Vorhänge und Dekorationen – mit Stoffberatung bei Ihnen zu Hause, Aufmaß und Montage.",
  },
  {
    title: "Sonnenschutz",
    href: "/sonnenschutz",
    text: "Plissees, Wabenplissees, Jalousien, Rollos und Lamellenvorhänge – passgenau für Ihre Fenster gefertigt.",
  },
  {
    title: "Insektenschutz",
    href: "/insektenschutz",
    text: "Spannrahmen, Drehrahmen, Pendel- und Schiebetüren sowie Lichtschachtabdeckungen nach Maß.",
  },
  {
    title: "Polsterei",
    href: "/polsterei",
    text: "Neubezug, Polsterarbeiten und Restaurierung von Sofas, Sesseln und Stühlen.",
  },
];

const districts = [
  "Düren-Innenstadt",
  "Birkesdorf",
  "Gürzenich",
  "Rölsdorf",
  "Lendersdorf",
  "Niederau",
  "Mariaweiler",
  "Arnoldsweiler",
];

const duerenFAQs: FAQItem[] = [
  {
    question: "Kommen Sie für die Beratung auch nach Düren?",
    answer:
      "Ja. Mein Betrieb liegt in Kreuzau, direkt südlich von Düren. Ich komme mit Stoff- und Musterkollektionen zu Ihnen nach Hause, berate Sie vor Ort und nehme direkt Maß.",
  },
  {
    question: "Welche Leistungen bieten Sie in Düren an?",
    answer:
      "Mein komplettes Angebot als Raumausstatterin: Gardinen und Vorhänge, Sonnenschutz wie Plissees, Jalousien und Rollos, Insektenschutz für Fenster und Türen sowie Polsterarbeiten und Neubezug von Möbeln.",
  },
  {
    question: "Kann ich mir Stoffe und Muster auch bei Ihnen anschauen?",
    answer:
      "Gerne – nach vorheriger Terminvereinbarung in der Hoeschstraße 2 in Kreuzau. Rufen Sie mich einfach an unter 02422 / 504344 oder schreiben Sie mir über das Kontaktformular.",
  },
];

export default function RaumausstatterDueren() {
  return (
    <Layout>
      <SEOHead
        title="Raumausstatter für Düren – Gardinen &amp; Sonnenschutz"
        description="Raumausstattermeisterin aus Kreuzau für Düren und Umgebung: Gardinen, Plissees, Insektenschutz und Polsterei nach Maß. Beratung bei Ihnen zu Hause – Tel. 02422 504344."
        canonical="/raumausstatter-dueren"
        keywords="Raumausstatter Düren, Gardinen Düren, Plissee Düren, Insektenschutz Düren, Polsterei Düren"
      />

      {/* Hero */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <nav className="text-primary-foreground/70 mb-4 text-sm">
              <Link to="/" className="hover:text-accent">Startseite</Link>
              <span className="mx-2">/</span>
              <span>Raumausstatter Düren</span>
            </nav>
            <h1 className="text-primary-foreground mb-6">Ihr Raumausstatter für Düren</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ich bin Verena Lindstädt, Raumausstattermeisterin aus Kreuzau – direkt vor den
              Toren Dürens. Ich berate Sie bei Ihnen zu Hause, nehme präzise Maß und montiere
              Gardinen, Sonnenschutz und Insektenschutz. Auch Ihre Polstermöbel sind bei mir
              in guten Händen.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Raumausstattung in Düren – meine Leistungen</h2>
            <p className="text-xl text-muted-foreground">
              Alles aus einer Hand: von der persönlichen Beratung über die Maßanfertigung
              bis zur fachgerechten Montage bei Ihnen in Düren.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.href}
                className="bg-card rounded-xl p-8 shadow-card border border-border"
              >
                <h3 className="text-2xl mb-3 text-primary">{service.title} in Düren</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.text}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Mehr zu {service.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="section-padding bg-brand-warm">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Kurze Wege von Kreuzau nach Düren</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Mein Fachbetrieb <strong>Wohnambiente Lindstädt</strong> sitzt in der
                Hoeschstraße 2 in 52372 Kreuzau. Von hier aus bin ich schnell bei Ihnen in
                Düren – für eine unverbindliche Beratung, das Aufmaß und später die Montage.
              </p>
              <p>
                Ich bin als Raumausstattermeisterin seit 2001 im Handwerk tätig und betreue
                Kundinnen und Kunden im gesamten Stadtgebiet, zum Beispiel in:
              </p>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {districts.map((district) => (
                <li key={district} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{district}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-center mb-12">So einfach geht's</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Kontakt", text: "Sie rufen mich an oder schreiben mir eine Nachricht." },
              { step: "2", title: "Beratung", text: "Ich komme zu Ihnen nach Düren und berate Sie vor Ort." },
              { step: "3", title: "Aufmaß", text: "Ich nehme präzise Maß an Ihren Fenstern und Türen." },
              { step: "4", title: "Montage", text: "Ich fertige alles nach Maß und montiere es fachgerecht." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={duerenFAQs}
        title="Häufige Fragen aus Düren"
        description="Antworten auf die wichtigsten Fragen rund um Raumausstattung in Düren."
      />

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="mb-4">Beratungstermin in Düren vereinbaren</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Rufen Sie mich an oder schreiben Sie mir – ich melde mich zeitnah bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Termin vereinbaren
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:02422504344">
                <Phone className="h-5 w-5" />
                02422 / 504344
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
