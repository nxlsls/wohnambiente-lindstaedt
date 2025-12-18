import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Camera } from "lucide-react";

const galleryCategories = [
  {
    title: "Sonnenschutz",
    images: [
      { src: "/placeholder.svg", alt: "Plissee in modernem Wohnzimmer" },
      { src: "/placeholder.svg", alt: "Jalousien im Schlafzimmer" },
      { src: "/placeholder.svg", alt: "Rollo in der Küche" },
    ],
  },
  {
    title: "Insektenschutz",
    images: [
      { src: "/placeholder.svg", alt: "Spannrahmen am Fenster" },
      { src: "/placeholder.svg", alt: "Drehrahmen an der Terrassentür" },
      { src: "/placeholder.svg", alt: "Pendeltür im Eingangsbereich" },
    ],
  },
  {
    title: "Gardinen",
    images: [
      { src: "/placeholder.svg", alt: "Elegante Gardinen im Wohnzimmer" },
      { src: "/placeholder.svg", alt: "Vorhänge im Schlafzimmer" },
      { src: "/placeholder.svg", alt: "Gardinen mit Raffhalter" },
    ],
  },
  {
    title: "Polsterei",
    images: [
      { src: "/placeholder.svg", alt: "Neu bezogenes Sofa" },
      { src: "/placeholder.svg", alt: "Restaurierter Sessel" },
      { src: "/placeholder.svg", alt: "Polsterarbeiten an Stuhl" },
    ],
  },
];

export default function Galerie() {
  return (
    <Layout>
      <SEOHead
        title="Galerie & Referenzen"
        description="Entdecken Sie unsere Arbeiten: Sonnenschutz, Insektenschutz, Gardinen und Polsterei. Lassen Sie sich von unseren Referenzprojekten in Kreuzau und Umgebung inspirieren."
        canonical="/galerie"
      />

      {/* Hero Section */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">Unsere Referenzen</h1>
            <p className="text-xl text-muted-foreground">
              Entdecken Sie eine Auswahl unserer Arbeiten aus den Bereichen Sonnenschutz, 
              Insektenschutz, Gardinen und Polsterei. Jedes Projekt wird mit Sorgfalt und 
              handwerklicher Präzision umgesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`section-padding ${categoryIndex % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="h-6 w-6 text-accent" />
              <h2 className="text-2xl md:text-3xl">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="group relative aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-primary-foreground text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-accent-foreground">
            Ihr Projekt ist das nächste
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Lassen Sie sich von unseren Arbeiten inspirieren. Wir freuen uns darauf, 
            auch Ihr Zuhause in Kreuzau und Umgebung zu verschönern.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Kostenlose Beratung anfragen
          </a>
        </div>
      </section>
    </Layout>
  );
}
