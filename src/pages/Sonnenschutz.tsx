import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import { FAQ, sonnenschutzFAQs } from "@/components/sections/FAQ";

const baseUrl = import.meta.env.BASE_URL;

const products = [
  {
    title: "Plissees",
    description: "Flexible Sonnenschutzlösungen, die sich stufenlos einstellen lassen. Perfekt für unterschiedliche Lichtstimmungen.",
    features: ["Stufenlos einstellbar", "Große Farbauswahl", "Für alle Fensterformen", "Pflegeleicht"],
    image: `${baseUrl}plissee-normal.png`,
  },
  {
    title: "Wabenplissees",
    description: "Die Wabenstruktur sorgt für hervorragende Wärmedämmung im Winter und Hitzeschutz im Sommer.",
    features: ["Wärmedämmend", "Energiesparend", "Lärmdämmend", "Modernes Design"],
    image: `${baseUrl}plissee-normal.png`,
  },
  {
    title: "Jalousien",
    description: "Der Klassiker unter den Sonnenschutzlösungen. Jalousien bieten präzise Kontrolle über Licht und Privatsphäre.",
    features: ["Präzise Lichtsteuerung", "Langlebig", "Verschiedene Materialien", "Einfache Bedienung"],
    image: `${baseUrl}jalousien.png`,
  },
  {
    title: "Rollos",
    description: "Schlicht und funktional. Rollos sind ideal für alle, die einen zurückhaltenden Sonnenschutz bevorzugen.",
    features: ["Vielseitig einsetzbar", "Verdunkelung möglich", "Große Stoffauswahl", "Kompakt"],
    image: `${baseUrl}rollos.png`,
  },
  {
    title: "Lamellenvorhänge",
    description: "Perfekt für große Fensterflächen und Schiebetüren. Lamellenvorhänge vereinen Funktionalität mit elegantem Design.",
    features: ["Für große Flächen", "Elegantes Design", "Flexibel", "Blendschutz"],
    image: `${baseUrl}lamellenvorhaenge.png`,
  },
];

export default function Sonnenschutz() {
  return (
    <Layout>
      <SEOHead
        title="Sonnenschutz in Kreuzau – Plissees, Jalousien & Rollos"
        description="Sonnenschutz vom Fachmann in Kreuzau: Plissees, Wabenplissees, Jalousien, Rollos und Lamellenvorhänge. Beratung vor Ort & Maßanfertigung."
        canonical="/sonnenschutz"
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
              <span>Sonnenschutz</span>
            </nav>
            <h1 className="text-primary-foreground mb-6">Sonnenschutz</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Optimaler Licht- und Wärmeschutz für Ihre Räume. Ich biete hochwertige 
              Sonnenschutzlösungen in Kreuzau und Umgebung – individuell beraten, 
              maßgefertigt und professionell montiert.
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
                      src={product.image}
                      alt={`${product.title} Sonnenschutz in Kreuzau`}
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

      {/* FAQ */}
      <FAQ
        items={sonnenschutzFAQs}
        title="Häufige Fragen zum Sonnenschutz"
        description="Hier finden Sie Antworten auf die wichtigsten Fragen rund um Sonnenschutz."
      />

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="mb-4">Sonnenschutz für Ihr Zuhause</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ich berate Sie gerne persönlich und finde die passende Lösung für Ihre Räume
            in Kreuzau, Düren, Jülich und Umgebung.
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
