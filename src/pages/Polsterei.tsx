import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import { FAQ, polstereiFAQs } from "@/components/sections/FAQ";

const services = [
  {
    title: "Neubezug von Möbeln",
    description: "Ihr Lieblingssofa hat schon bessere Tage gesehen? Wir geben ihm mit einem neuen Bezug neues Leben. Wählen Sie aus einer großen Auswahl hochwertiger Stoffe.",
  },
  {
    title: "Polsterarbeiten",
    description: "Vom Austausch der Polsterung bis zur Reparatur von Rahmen und Federn – wir kümmern uns um alle Aspekte Ihrer Polstermöbel.",
  },
  {
    title: "Restaurierung",
    description: "Antike Möbel verdienen besondere Aufmerksamkeit. Wir restaurieren Ihre wertvollen Stücke fachgerecht und mit Liebe zum Detail.",
  },
];

const features = [
  "Große Stoffauswahl",
  "Hochwertige Materialien",
  "Fachgerechte Ausführung",
  "Langjährige Erfahrung",
  "Faire Preise",
  "Persönliche Beratung",
];

export default function Polsterei() {
  return (
    <Layout>
      <SEOHead
        title="Polsterei in Kreuzau – Neubezug & Polsterarbeiten"
        description="Professionelle Polsterarbeiten in Kreuzau: Neubezug von Möbeln, Reparaturen und Restaurierung. Geben Sie Ihren Lieblingsstücken neues Leben."
        canonical="/polsterei"
      />

      {/* Hero */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <nav className="text-primary-foreground/70 mb-4 text-sm">
              <Link to="/" className="hover:text-accent">Startseite</Link>
              <span className="mx-2">/</span>
              <Link to="/leistungen" className="hover:text-accent">Leistungen</Link>
              <span className="mx-2">/</span>
              <span>Polsterei</span>
            </nav>
            <h1 className="text-primary-foreground mb-6">Polsterei</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Professionelle Polsterarbeiten in Kreuzau und Umgebung. Ich gebe Ihren 
              Lieblingsstücken neues Leben – durch Neubezug, Reparatur oder Restaurierung.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article 
                key={service.title}
                className="bg-card rounded-xl overflow-hidden shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/10] bg-muted">
                  <img 
                    src="/placeholder.svg" 
                    alt={`${service.title} - Polsterei Kreuzau`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <img
                src="/placeholder.svg"
                alt="Polsterarbeiten Sofa Neubezug in Kreuzau"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Warum zu mir?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ihre Möbel sind bei mir in guten Händen. Mit Erfahrung, Sorgfalt und 
                hochwertigen Materialien verwandle ich abgenutzte Polstermöbel in 
                echte Schmuckstücke.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={polstereiFAQs}
        title="Häufige Fragen zur Polsterei"
        description="Hier finden Sie Antworten auf die wichtigsten Fragen rund um Polsterarbeiten."
      />

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="mb-4">Möbel aufpolstern lassen?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Kontaktieren Sie mich für ein unverbindliches Angebot.
            Ich berate Sie gerne in Kreuzau, Düren, Jülich und Umgebung!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Angebot anfragen
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
