import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import { FAQ, gardinenFAQs } from "@/components/sections/FAQ";

const features = [
  "Persönliche Beratung bei Ihnen zu Hause",
  "Große Auswahl an Stoffen und Designs",
  "Präzises Aufmaß vor Ort",
  "Maßanfertigung in höchster Qualität",
  "Professionelle Montage",
  "Langjährige Erfahrung",
];

export default function Gardinen() {
  return (
    <Layout>
      <SEOHead
        title="Gardinen in Kreuzau – Maßanfertigung & Beratung"
        description="Maßgefertigte Gardinen in Kreuzau: Persönliche Beratung, präzises Aufmaß und professionelle Montage. Individuelle Lösungen für Ihr Zuhause."
        canonical="/gardinen"
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
              <span>Gardinen</span>
            </nav>
            <h1 className="text-primary-foreground mb-6">Gardinen</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Maßgefertigte Gardinen für Ihr Zuhause in Kreuzau. Ich berate Sie persönlich, 
              nehme präzise Maß und montiere Ihre neuen Gardinen fachgerecht – 
              alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Individuelle Gardinen nach Maß</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gardinen sind mehr als nur Dekoration – sie schaffen Atmosphäre, regulieren 
                das Licht und schützen Ihre Privatsphäre. Bei Wohnambiente Lindstädt erhalten 
                Sie Gardinen, die perfekt zu Ihrem Wohnstil passen.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Ich komme zu Ihnen nach Hause, berate Sie ausführlich zu Stoffen, Farben 
                und Designs und nehme präzise Maß. So erhalten Sie Gardinen, die nicht nur 
                schön aussehen, sondern auch perfekt passen.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <img
                src="/placeholder.svg"
                alt="Maßgefertigte Gardinen in Kreuzau"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="text-center mb-12">So einfach geht's</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Kontakt", text: "Sie rufen mich an oder schreiben mir eine Nachricht." },
              { step: "2", title: "Beratung", text: "Ich komme zu Ihnen und berate Sie vor Ort." },
              { step: "3", title: "Aufmaß", text: "Ich nehme präzise Maß an Ihren Fenstern." },
              { step: "4", title: "Montage", text: "Ich fertige und montiere Ihre Gardinen." },
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
        items={gardinenFAQs}
        title="Häufige Fragen zu Gardinen"
        description="Hier finden Sie Antworten auf die wichtigsten Fragen rund um Gardinen."
      />

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="mb-4">Neue Gardinen für Ihr Zuhause?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Vereinbaren Sie einen Beratungstermin. Ich freue mich darauf,
            Ihre Wohnräume in Kreuzau, Düren, Jülich und Umgebung zu verschönern!
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
