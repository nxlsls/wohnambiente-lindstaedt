import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Award, Heart, Users, Clock, CheckCircle, Shield, BadgeCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const baseUrl = import.meta.env.BASE_URL;

const milestones = [
  { year: "2001", text: "Meisterprüfung als Raumausstatterin" },
  { year: "2005", text: "Gründung von Wohnambiente Lindstädt" },
  { year: "Heute", text: "Über 20 Jahre Erfahrung in der Branche" },
];

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    text: "Jedes Projekt liegt mir am Herzen. Ich liebe es, Räume zu gestalten und meinen Kunden ein schöneres Zuhause zu schaffen.",
  },
  {
    icon: Users,
    title: "Persönliche Betreuung",
    text: "Bei mir gibt es keine anonyme Abfertigung. Ich betreue Sie persönlich – von der ersten Beratung bis zur fertigen Montage.",
  },
  {
    icon: Award,
    title: "Meisterqualität",
    text: "Als Raumausstattermeisterin garantiere ich Ihnen handwerkliche Präzision und fachkundige Beratung auf höchstem Niveau.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    text: "Termine werden eingehalten, Absprachen gelten. Darauf können Sie sich verlassen.",
  },
];

export default function UeberMich() {
  return (
    <Layout>
      <SEOHead
        title="Über mich – Raumausstattermeisterin Verena Lindstädt"
        description="Lernen Sie Verena Lindstädt kennen – Raumausstattermeisterin seit 2001. Persönliche Beratung und meisterliche Qualität für Ihr Zuhause in Kreuzau und Umgebung."
        canonical="/ueber-mich"
      />

      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-lg mb-4 block">
                Raumausstattermeisterin seit 2001
              </span>
              <h1 className="mb-6">
                Verena Lindstädt
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Herzlich willkommen! Ich bin Verena Lindstädt und führe Wohnambiente Lindstädt 
                als Inhaberin und Raumausstattermeisterin. Meine Leidenschaft für schöne Räume 
                und zufriedene Kunden treibt mich jeden Tag an.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seit über 20 Jahren helfe ich Menschen in Kreuzau und Umgebung dabei, 
                ihr Zuhause zu verschönern – mit Insektenschutz, Sonnenschutz, Gardinen 
                und Polsterarbeiten. Persönlich, zuverlässig und in Meisterqualität.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* Photo placeholder */}
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-muted overflow-hidden shadow-elevated">
                  <img
                    src={`${baseUrl}placeholder.svg`}
                    alt="Verena Lindstädt - Raumausstattermeisterin"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-elevated">
                  <p className="font-medium">Seit 2001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Mein Weg zur Raumausstattung</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Schon als Kind faszinierten mich Stoffe, Farben und die Gestaltung von Räumen. 
                Nach meiner Ausbildung zur Raumausstatterin war für mich klar: Das ist meine 
                Berufung. 2001 legte ich die Meisterprüfung ab – ein wichtiger Meilenstein, 
                der mir das Handwerk auf höchstem Niveau ermöglicht.
              </p>
              <p>
                Mit der Gründung von Wohnambiente Lindstädt habe ich mir meinen Traum erfüllt: 
                Ein eigener Betrieb, in dem ich meine Kunden persönlich betreue und meine 
                Leidenschaft für schöne Wohnräume ausleben kann.
              </p>
              <p>
                Was mir besonders wichtig ist: Bei mir sind Sie keine Nummer. Ich nehme mir 
                Zeit für Sie, höre zu und finde gemeinsam mit Ihnen die beste Lösung. 
                Denn am Ende zählt, dass Sie sich in Ihren vier Wänden rundum wohlfühlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="text-center mb-12">Meine Stationen</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24">
                    <span className="font-heading text-2xl text-accent font-semibold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{milestone.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-center mb-4">Dafür stehe ich</h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Diese Werte prägen meine tägliche Arbeit und den Umgang mit meinen Kunden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-xl shadow-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifikationen & Garantie */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="text-center mb-4">Qualität, die überzeugt</h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Als Raumausstattermeisterin stehe ich für höchste Qualitätsstandards und faire Konditionen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meisterbrief */}
            <div className="bg-background p-8 rounded-xl shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3">Meisterbrief</h3>
              <p className="text-muted-foreground">
                Seit 2001 geprüfte Raumausstattermeisterin – Ihr Garant für fachgerechte Ausführung und fundierte Beratung.
              </p>
            </div>

            {/* Garantie */}
            <div className="bg-background p-8 rounded-xl shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3">Gewährleistung</h3>
              <p className="text-muted-foreground">
                Auf alle meine Arbeiten erhalten Sie die gesetzliche Gewährleistung. Ihre Zufriedenheit ist mein Anspruch.
              </p>
            </div>

            {/* Qualitätsprodukte */}
            <div className="bg-background p-8 rounded-xl shadow-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <BadgeCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3">Markenqualität</h3>
              <p className="text-muted-foreground">
                Ich arbeite ausschließlich mit hochwertigen Markenprodukten namhafter Hersteller wie Warema, Neher und MHZ.
              </p>
            </div>
          </div>

          {/* Garantie-Hinweis */}
          <div className="mt-12 bg-accent/10 rounded-xl p-8 text-center max-w-3xl mx-auto">
            <Sparkles className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="text-xl mb-3">Mein Qualitätsversprechen</h3>
            <p className="text-muted-foreground">
              Saubere Arbeit, pünktliche Lieferung und faire Preise – das ist mein Versprechen an Sie.
              Sollte einmal etwas nicht zu Ihrer Zufriedenheit sein, finden wir gemeinsam eine Lösung.
              Dafür stehe ich mit meinem Namen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-6">
            Lernen Sie mich persönlich kennen
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Ich freue mich darauf, Sie kennenzulernen und gemeinsam Ihr Projekt zu besprechen.
            Rufen Sie mich an oder schreiben Sie mir – ich bin gerne für Sie da.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="tel:02422504344">02422 / 504344</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
