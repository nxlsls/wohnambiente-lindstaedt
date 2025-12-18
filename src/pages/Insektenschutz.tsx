import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";

const products = [
  {
    title: "Spannrahmen",
    description: "Der Klassiker für Fenster. Spannrahmen lassen sich einfach einsetzen und herausnehmen – ideal für die regelmäßige Reinigung.",
    features: ["Einfache Montage", "Hohe Stabilität", "Passgenau gefertigt", "Leichte Reinigung"],
  },
  {
    title: "Drehrahmen",
    description: "Perfekt für Fenster, die regelmäßig geöffnet werden. Der Drehrahmen lässt sich zur Seite schwenken.",
    features: ["Schwenkbar", "Selbstschließend", "Robust", "Langlebig"],
  },
  {
    title: "Pendeltüren",
    description: "Die ideale Lösung für Balkontüren und Terrassentüren. Pendeltüren schließen automatisch und ermöglichen freies Durchgehen.",
    features: ["Automatisches Schließen", "Beidseitig begehbar", "Magnetverschluss", "Barrierefrei"],
  },
  {
    title: "Schiebetüren",
    description: "Platzsparend und elegant. Schiebetüren gleiten sanft zur Seite und sind ideal für große Öffnungen.",
    features: ["Platzsparend", "Elegantes Design", "Leichtgängig", "Große Durchgänge"],
  },
  {
    title: "Lichtschachtabdeckungen",
    description: "Schützen Sie Ihre Kellerfenster und Lichtschächte zuverlässig vor Insekten und Schmutz.",
    features: ["Wetterfest", "Stabil", "Einfache Montage", "Dauerhafter Schutz"],
  },
];

export default function Insektenschutz() {
  return (
    <Layout>
      <SEOHead
        title="Insektenschutz in Kreuzau – Spannrahmen, Drehrahmen & mehr"
        description="Insektenschutz vom Fachmann in Kreuzau: Spannrahmen, Drehrahmen, Pendeltüren, Schiebetüren und Lichtschachtabdeckungen. Beratung & Maßanfertigung."
        canonical="/insektenschutz"
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
              <span>Insektenschutz</span>
            </nav>
            <h1 className="text-primary-foreground mb-6">Insektenschutz</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Genießen Sie frische Luft ohne lästige Insekten. Ich biete hochwertige 
              Insektenschutzlösungen für Fenster und Türen in Kreuzau und Umgebung – 
              passgenau gefertigt und professionell montiert.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12">
            {products.map((product, index) => (
              <article 
                key={product.title}
                className="grid md:grid-cols-2 gap-8 items-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                    <img
                      src="/placeholder.svg"
                      alt={`${product.title} Insektenschutz in Kreuzau`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl mb-4">{product.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="mb-4">Insektenschutz für Ihr Zuhause</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ich berate Sie gerne persönlich und finde die passende Lösung für Ihre Fenster und Türen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Beratung anfragen
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
