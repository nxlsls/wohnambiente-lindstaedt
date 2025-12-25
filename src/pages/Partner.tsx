import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Handshake, Award, CheckCircle } from "lucide-react";

const partners = [
  "Höpcke",
  "Kadeco",
  "Erfal",
  "ADO",
  "Zimmer & Rohde",
  "Indes Fuggerhaus",
  "Porschen",
  "Wolff",
  "Heco",
  "Saum & Viebahn",
  "Verdi",
  "DNW",
  "PT",
  "Delius",
  "C&C",
  "Castello del Barro",
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
        description="Wohnambiente Lindstädt arbeitet mit führenden Markenherstellern zusammen: Höpcke, Kadeco, Erfal, ADO, Zimmer & Rohde und mehr. Qualität durch starke Partnerschaften."
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
          <h2 className="text-center mb-4">Meine Markenpartner</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ich arbeite mit namhaften Herstellern zusammen, um Ihnen hochwertige Produkte
            für Gardinen, Sonnenschutz und Raumausstattung zu bieten.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-card rounded-lg p-6 shadow-card border border-border text-center hover:border-accent/50 transition-colors"
              >
                <span className="font-heading text-lg font-medium">{partner}</span>
              </div>
            ))}
            <div className="bg-accent/10 rounded-lg p-6 text-center flex items-center justify-center">
              <span className="font-heading text-lg font-medium text-accent">und weitere...</span>
            </div>
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
            Erleben Sie die Qualität meiner Partnerprodukte.
            Ich berate Sie gerne persönlich – von Heinsberg bis Bonn, von Düsseldorf bis in die Eifel!
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
