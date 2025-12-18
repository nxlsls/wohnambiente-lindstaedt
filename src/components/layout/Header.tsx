import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Über mich", href: "/ueber-mich" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Galerie", href: "/galerie" },
  { name: "Partner", href: "/partner" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-wide py-2 flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-sm">
          <a 
            href="tel:02422504344" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Telefon: 02422 504344"
          >
            <Phone className="h-4 w-4" />
            <span>02422 / 504344</span>
          </a>
          <a 
            href="mailto:info@wohnambiente-lindstaedt.de" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="E-Mail an Wohnambiente Lindstädt"
          >
            <Mail className="h-4 w-4" />
            <span>info@wohnambiente-lindstaedt.de</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-wide" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex-shrink-0" aria-label="Zur Startseite">
            <img
              src={logo}
              alt="Wohnambiente Lindstädt - Raumausstattung in Kreuzau"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-lg font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
