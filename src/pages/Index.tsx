import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ArrowRight, Phone, Shield, Sun, Sofa, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const baseUrl = import.meta.env.BASE_URL;

const services = [
  {
    title: "Insektenschutz",
    description: "Spannrahmen, Drehrahmen, Pendeltüren und Schiebetüren – passgenau für Ihre Fenster und Türen.",
    href: "/insektenschutz",
    image: `${baseUrl}insektenschutz-servicecard.png`,
    imageAlt: "Insektenschutz Fliegengitter am Fenster",
  },
  {
    title: "Sonnenschutz",
    description: "Plissees, Jalousien, Rollos und Lamellenvorhänge für optimalen Licht- und Wärmeschutz.",
    href: "/sonnenschutz",
    image: `${baseUrl}sonnenschutz-servicecard.png`,
    imageAlt: "Sonnenschutz Plissee im Wohnzimmer",
  },
  {
    title: "Gardinen",
    description: "Maßgefertigte Gardinen mit persönlicher Beratung, Aufmaß und professioneller Montage.",
    href: "/gardinen",
    image: `${baseUrl}gardinen-servicecard.png`,
    imageAlt: "Elegante Gardinen im Wohnraum",
  },
  {
    title: "Polsterei",
    description: "Professionelle Polsterarbeiten und Neubezug – wir geben Ihren Möbeln neues Leben.",
    href: "/polsterei",
    image: `${baseUrl}placeholder.svg`,
    imageAlt: "Polsterarbeiten Sofa neu beziehen",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Meisterqualität",
    description: "Raumausstattermeisterin Verena Lindstädt – seit 2001.",
  },
  {
    icon: Sun,
    title: "Persönliche Beratung",
    description: "Ich komme zu Ihnen nach Hause für eine individuelle Beratung.",
  },
  {
    icon: Sofa,
    title: "Maßanfertigung",
    description: "Individuelle Lösungen, perfekt auf Ihre Räume abgestimmt.",
  },
  {
    icon: Sparkles,
    title: "Alles aus einer Hand",
    description: "Von der Beratung bis zur Montage – ich kümmere mich um alles.",
  },
];

export default function Index() {
  return (
    <Layout>
      <SEOHead
        title="Raumausstattung in Kreuzau"
        description="Wohnambiente Lindstädt – Ihr Fachbetrieb für Insektenschutz, Sonnenschutz, Gardinen und Polsterarbeiten in Kreuzau und Umgebung. Persönliche Beratung & Maßanfertigung."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Wohnambiente mit eleganten Gardinen und Sonnenschutz in Kreuzau"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-primary-foreground mb-6 animate-fade-up">
              Wohnambiente<br />Lindstädt
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Ich bin Verena Lindstädt – Raumausstattermeisterin seit 2001. 
              Insektenschutz, Sonnenschutz, Gardinen und Polsterarbeiten – 
              persönlich und in Meisterqualität.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" asChild>
                <Link to="/kontakt">
                  Kostenlose Beratung
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="tel:02422504344">
                  <Phone className="h-5 w-5" />
                  02422 / 504344
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="text-center p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Meine Leistungen</h2>
            <p className="text-xl text-muted-foreground">
              Von Insektenschutz bis Polsterei – ich biete Ihnen individuelle Lösungen 
              für ein schöneres Zuhause in Kreuzau und Umgebung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-4">
            Persönliche Beratung vor Ort
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Ich komme zu Ihnen – für eine unverbindliche Beratung und
            präzises Aufmaß direkt bei Ihnen zu Hause in Kreuzau und Umgebung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/kontakt">
                Termin vereinbaren
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local SEO Text */}
      <section className="section-padding bg-brand-warm">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Raumausstattung in Kreuzau – Ihr Partner für Wohnqualität</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                <strong>Wohnambiente Lindstädt</strong> – das bin ich, Verena Lindstädt,
                Raumausstattermeisterin seit 2001. Mein Betrieb in Kreuzau steht für
                persönliche Beratung und handwerkliche Qualität bei Insektenschutz,
                Sonnenschutz, Gardinen und Polsterarbeiten.
              </p>
              <p>
                Ob Sie Schutz vor lästigen Insekten suchen, optimalen Sonnenschutz für Ihre Räume
                wünschen oder Ihre Möbel neu beziehen lassen möchten – ich berate Sie persönlich
                und finde gemeinsam mit Ihnen die beste Lösung für Ihr Zuhause.
              </p>
              <p>
                Als Raumausstatterin bin ich für Kunden aus <strong>Kreuzau</strong>, <strong>Düren</strong>, <strong>Jülich</strong>, <strong>Nideggen</strong>, <strong>Heimbach</strong>, <strong>Vettweiß</strong>, <strong>Langerwehe</strong> und der gesamten Region tätig.
                Gerne komme ich auch zu Ihnen nach Hause für eine unverbindliche Beratung vor Ort.
              </p>
              <p>
                Besuchen Sie mich in der Hoeschstraße 2 in 52372 Kreuzau oder rufen Sie an
                unter <a href="tel:02422504344" className="text-accent hover:underline">02422 / 504344</a>.
                Ich freue mich auf Ihre Anfrage!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
