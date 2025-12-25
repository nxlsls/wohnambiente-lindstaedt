import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ContactForm } from "@/components/sections/ContactForm";
import { CallbackForm } from "@/components/sections/CallbackForm";
import { Phone, Mail, Clock, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Kontakt() {
  return (
    <Layout>
      <SEOHead
        title="Kontakt – Raumausstattung in Kreuzau"
        description="Kontaktieren Sie Wohnambiente Lindstädt in Kreuzau. Ich berate Sie gerne zu Insektenschutz, Sonnenschutz, Gardinen und Polsterarbeiten."
        canonical="/kontakt"
      />

      {/* Hero */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-primary-foreground mb-6">Kontakt</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Haben Sie Fragen oder wünschen eine persönliche Beratung? Ich freue mich auf Ihre Nachricht 
              und melde mich zeitnah bei Ihnen – Ihre Verena Lindstädt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl mb-6">So erreichen Sie mich</h2>
                <ul className="space-y-6">
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Adresse</p>
                        <p className="text-muted-foreground">
                          Hoeschstraße 2<br />
                          52372 Kreuzau
                        </p>
                        <p className="text-sm text-amber-600 mt-2">
                          Aktuell im Umbau – Termine zum Stoffe & Muster anschauen
                          gerne nach Vereinbarung!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="tel:02422504344"
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-accent/10 text-accent">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg group-hover:text-accent transition-colors">Telefon</p>
                        <p className="text-muted-foreground text-lg font-semibold">02422 / 504344</p>
                        <p className="text-muted-foreground">0178 / 5917038</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/491785917038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-green-500/10 text-green-600">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg group-hover:text-green-600 transition-colors">WhatsApp</p>
                        <p className="text-muted-foreground">Schreiben Sie mir direkt</p>
                        <Button
                          size="sm"
                          className="mt-2 bg-green-600 hover:bg-green-700"
                          asChild
                        >
                          <span>Chat starten</span>
                        </Button>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@wohnambiente-lindstaedt.de"
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-accent/10 text-accent">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg group-hover:text-accent transition-colors">E-Mail</p>
                        <p className="text-muted-foreground">info@wohnambiente-lindstaedt.de</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Termine</p>
                      <p className="text-muted-foreground">nach Vereinbarung</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Callback Form */}
              <CallbackForm />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-2xl mb-6">Schreiben Sie mir</h2>
                <p className="text-muted-foreground mb-8">
                  Füllen Sie das Formular aus und ich melde mich zeitnah bei Ihnen. 
                  Ich freue mich auf Ihre Anfrage!
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.5!2d6.484!3d50.746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf5a8e1c8b6b1d%3A0x0!2sHoeschstra%C3%9Fe%202%2C%2052372%20Kreuzau!5e0!3m2!1sde!2sde!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wohnambiente Lindstädt Standort in Kreuzau"
        />
      </section>
    </Layout>
  );
}
