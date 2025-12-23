import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid, Sun, Home, Sofa } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;

const leistungen = [
  {
    title: "Insektenschutz",
    description: "Hochwertige Insektenschutzlösungen für Fenster und Türen. Spannrahmen, Drehrahmen, Pendeltüren, Schiebetüren und Lichtschachtabdeckungen.",
    href: "/insektenschutz",
    icon: Grid,
    image: "/insektenschutz-servicecard.png",
    items: ["Spannrahmen", "Drehrahmen", "Pendeltüren", "Schiebetüren", "Lichtschachtabdeckungen"],
  },
  {
    title: "Sonnenschutz",
    description: "Optimaler Licht- und Wärmeschutz für Ihre Räume. Plissees, Wabenplissees, Jalousien, Rollos und Lamellenvorhänge.",
    href: "/sonnenschutz",
    icon: Sun,
    image: "/sonnenschutz-servicecard.png",
    items: ["Plissees", "Wabenplissees", "Jalousien", "Rollos", "Lamellenvorhänge"],
  },
  {
    title: "Gardinen",
    description: "Maßgefertigte Gardinen mit persönlicher Beratung, präzisem Aufmaß und professioneller Montage.",
    href: "/gardinen",
    icon: Home,
    image: "/gardinen-servicecard.png",
    items: ["Maßanfertigung", "Beratung vor Ort", "Aufmaß", "Montage"],
  },
  {
    title: "Polsterei",
    description: "Professionelle Polsterarbeiten und Neubezug von Möbeln. Ich gebe Ihren Lieblingsstücken neues Leben.",
    href: "/polsterei",
    icon: Sofa,
    image: `${baseUrl}placeholder.svg`,
    items: ["Polsterarbeiten", "Neubezug von Möbeln", "Reparaturen"],
  },
];

export default function Leistungen() {
  return (
    <Layout>
      <SEOHead
        title="Leistungen - Insektenschutz, Sonnenschutz, Gardinen & Polsterei"
        description="Unsere Leistungen: Insektenschutz, Sonnenschutz, Gardinen und Polsterarbeiten in Kreuzau. Beratung, Maßanfertigung und Montage aus einer Hand."
        canonical="/leistungen"
      />

      {/* Hero */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-primary-foreground mb-6">Meine Leistungen</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Von Insektenschutz über Sonnenschutz bis hin zu Gardinen und Polsterarbeiten – 
              ich biete Ihnen hochwertige Lösungen für ein schöneres und komfortableres Zuhause.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leistungen.map((leistung, index) => (
              <article 
                key={leistung.title}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                  <img 
                    src={leistung.image} 
                    alt={`${leistung.title} - Beispielbild`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <leistung.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl mb-2">{leistung.title}</h2>
                      <p className="text-muted-foreground">{leistung.description}</p>
                    </div>
                  </div>
                  
                  <ul className="mb-6 space-y-2">
                    {leistung.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild>
                    <Link to={leistung.href}>
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="mb-4">Interesse geweckt?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Kontaktieren Sie mich für eine persönliche Beratung. Ich freue mich auf Ihre Anfrage!
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
