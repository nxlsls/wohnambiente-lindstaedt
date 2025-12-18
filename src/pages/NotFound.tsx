import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <SEOHead
        title="Seite nicht gefunden"
        description="Die gesuchte Seite wurde nicht gefunden. Besuchen Sie unsere Startseite oder kontaktieren Sie uns."
        canonical="/404"
      />

      <section className="section-padding min-h-[60vh] flex items-center">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-heading font-bold text-accent/20">
                404
              </span>
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl mb-4">
              Seite nicht gefunden
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
              Keine Sorge – wir helfen Ihnen gerne weiter!
            </p>

            {/* Helpful Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild>
                <Link to="/">
                  <Home className="h-5 w-5 mr-2" />
                  Zur Startseite
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/kontakt">
                  <Phone className="h-5 w-5 mr-2" />
                  Kontakt
                </Link>
              </Button>
            </div>

            {/* Quick Navigation */}
            <div className="bg-secondary rounded-xl p-8">
              <h2 className="text-xl font-heading mb-4">Vielleicht suchen Sie:</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/insektenschutz"
                  className="p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors text-center"
                >
                  Insektenschutz
                </Link>
                <Link
                  to="/sonnenschutz"
                  className="p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors text-center"
                >
                  Sonnenschutz
                </Link>
                <Link
                  to="/gardinen"
                  className="p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors text-center"
                >
                  Gardinen
                </Link>
                <Link
                  to="/polsterei"
                  className="p-4 bg-background rounded-lg hover:bg-accent/10 transition-colors text-center"
                >
                  Polsterei
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
