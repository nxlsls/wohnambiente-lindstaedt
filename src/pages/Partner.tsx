import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Handshake, Award, CheckCircle } from "lucide-react";

const partners = [
  {
    name: "Warema",
    description: "Führender Hersteller für Sonnenschutzsysteme in Europa. Hochwertige Jalousien, Rollos und Markisen.",
    category: "Sonnenschutz",
    logo: "/placeholder.svg",
  },
  {
    name: "Neher",
    description: "Innovativer Insektenschutz Made in Germany. Spannrahmen, Drehrahmen und Schiebetüren in Premium-Qualität.",
    category: "Insektenschutz",
    logo: "/placeholder.svg",
  },
  {
    name: "MHZ",
    description: "Spezialist für textile Fensterdekoration. Plissees, Wabenplissees und Rollos in vielfältigen Designs.",
    category: "Sonnenschutz",
    logo: "/placeholder.svg",
  },
  {
    name: "Jab Anstoetz",
    description: "Exklusive Stoffe und Gardinen für höchste Ansprüche. Tradition und Innovation seit 1946.",
    category: "Gardinen",
    logo: "/placeholder.svg",
  },
  {
    name: "Création Baumann",
    description: "Schweizer Qualität für hochwertige Vorhangstoffe und textile Raumlösungen.",
    category: "Gardinen",
    logo: "/placeholder.svg",
  },
  {
    name: "Gütegemeinschaft Polstermöbel",
    description: "Zertifizierte Qualität bei Polsterarbeiten nach RAL-Gütezeichen.",
    category: "Polsterei",
    logo: "/placeholder.svg",
  },
];

const benefits = [
  "Originalprodukte direkt vom Hersteller",
  "Volle Herstellergarantie auf alle Produkte",
  "Regelmäßige Schulungen und Zertifizierungen",
  "Zugang zu neuesten Produktentwicklungen",
  "Schnelle Lieferzeiten durch direkte Partnerschaften",
  "Ersatzteilversorgung auch nach Jahren",
];

export default function Partner() {
  return (
    <Layout>
      <SEOHead
        title="Partner & Lieferanten"
        description="Wohnambiente Lindstädt arbeitet mit führenden Markenherstellern zusammen: Warema, Neher, MHZ, Jab Anstoetz und mehr. Qualität durch starke Partnerschaften."
        canonical="/partner"
      />

      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="h-10 w-10 text-accent" />
              <span className="text-accent font-medium text-lg">Starke Partnerschaften</span>
            </div>
            <h1 className="mb-6">Meine Partner & Lieferanten</h1>
            <p className="text-xl text-muted-foreground">
              Qualität beginnt bei der Auswahl der richtigen Partner. Ich arbeite ausschließlich 
              mit führenden Markenherstellern zusammen, um Ihnen beste Produkte und langjährige 
              Garantie zu bieten.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-center mb-12">Meine Markenpartner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {partner.category}
                  </span>
                </div>
                <div className="h-24 flex items-center justify-center bg-muted rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-accent" />
                <span className="text-accent font-medium">Ihre Vorteile</span>
              </div>
              <h2 className="text-primary-foreground mb-6">
                Was meine Partnerschaften für Sie bedeuten
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Durch meine langjährigen Partnerschaften mit renommierten Herstellern 
                profitieren Sie von geprüfter Qualität, fairen Preisen und umfassendem 
                Service – von der Beratung bis zur Montage.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="mb-6">Überzeugen Sie sich von der Qualität</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Besuchen Sie mich in Kreuzau und erleben Sie die Qualität meiner Partnerprodukte. 
            Ich berate Sie gerne persönlich.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Beratungstermin vereinbaren
          </a>
        </div>
      </section>
    </Layout>
  );
}
