import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Lightbox } from "@/components/ui/lightbox";
import { Camera, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";

const galleryCategories = [
  {
    title: "Sonnenschutz",
    href: "/sonnenschutz",
    images: [
      { src: "/plissee-normal.png", alt: "Plissee in modernem Wohnzimmer" },
      { src: "/jalousien.png", alt: "Jalousien im Schlafzimmer" },
      { src: "/rollos.png", alt: "Rollo in der Küche" },
    ],
  },
  {
    title: "Insektenschutz",
    href: "/insektenschutz",
    images: [
      { src: "/insektenschutz-spannrahmen.jpg", alt: "Spannrahmen am Fenster" },
      { src: "/insektenschutz-drehrahmen.jpg", alt: "Drehrahmen an der Terrassentür" },
      { src: "/insektenschutz-pendeltuer.jpg", alt: "Pendeltür im Eingangsbereich" },
    ],
  },
  {
    title: "Gardinen",
    href: "/gardinen",
    images: [
      { src: "/gardinen.png", alt: "Elegante Gardinen im Wohnzimmer" },
      { src: "/gardinen.png", alt: "Vorhänge im Schlafzimmer" },
      { src: "/gardinen.png", alt: "Gardinen mit Raffhalter" },
    ],
  },
  {
    title: "Polsterei",
    href: "/polsterei",
    images: [
      { src: "/placeholder.svg", alt: "Neu bezogenes Sofa" },
      { src: "/placeholder.svg", alt: "Restaurierter Sessel" },
      { src: "/placeholder.svg", alt: "Polsterarbeiten an Stuhl" },
    ],
  },
];

// Flatten all images for lightbox navigation
const allImages = galleryCategories.flatMap((cat) => cat.images);

export default function Galerie() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (categoryIndex: number, imageIndex: number) => {
    // Calculate the global index
    let globalIndex = 0;
    for (let i = 0; i < categoryIndex; i++) {
      globalIndex += galleryCategories[i].images.length;
    }
    globalIndex += imageIndex;

    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Galerie & Referenzen"
        description="Entdecken Sie unsere Arbeiten: Sonnenschutz, Insektenschutz, Gardinen und Polsterei in Kreuzau, Düren und Umgebung. Lassen Sie sich von unseren Referenzprojekten inspirieren."
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
              handwerklicher Präzision umgesetzt. Klicken Sie auf ein Bild für die Großansicht.
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
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Camera className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl">{category.title}</h2>
              </div>
              <Link
                to={category.href}
                className="text-accent hover:underline font-medium"
              >
                Mehr erfahren →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imageIndex) => (
                <button
                  key={imageIndex}
                  onClick={() => openLightbox(categoryIndex, imageIndex)}
                  className="group relative aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  aria-label={`${image.alt} - Klicken für Großansicht`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-12 w-12 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-primary-foreground text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </button>
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
            Lassen Sie sich von unseren Arbeiten inspirieren. Ich freue mich darauf,
            auch Ihr Zuhause in Kreuzau, Düren, Jülich und Umgebung zu verschönern.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Kostenlose Beratung anfragen
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
}
