import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <img
              src={logoDark}
              alt="Wohnambiente Lindstädt Logo"
              className="h-20 w-auto mb-6"
            />
            <p className="text-primary-foreground/80 text-base leading-relaxed">
              Verena Lindstädt – Raumausstattermeisterin seit 2001. 
              Persönliche Beratung für Sonnenschutz, Insektenschutz, Gardinen und Polsterei 
              in Kreuzau und Umgebung.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-accent">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Hoeschstraße+2,+52372+Kreuzau" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-accent transition-colors"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Hoeschstraße 2<br />52372 Kreuzau</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:02422504344" 
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>02422 / 504344</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@wohnambiente-lindstaedt.de" 
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>info@wohnambiente-lindstaedt.de</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-accent">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/insektenschutz" className="hover:text-accent transition-colors">
                  Insektenschutz
                </Link>
              </li>
              <li>
                <Link to="/sonnenschutz" className="hover:text-accent transition-colors">
                  Sonnenschutz
                </Link>
              </li>
              <li>
                <Link to="/gardinen" className="hover:text-accent transition-colors">
                  Gardinen
                </Link>
              </li>
              <li>
                <Link to="/polsterei" className="hover:text-accent transition-colors">
                  Polsterei
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-accent transition-colors">
                  Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-heading text-xl mb-6 text-accent">Termine</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-primary-foreground/80">
                  Termine nach Vereinbarung
                </p>
                <p className="text-primary-foreground/80 mt-2">
                  Ich berate Sie gerne persönlich vor Ort.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Wohnambiente Lindstädt. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/impressum" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
