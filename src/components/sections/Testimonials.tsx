import { Star, Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Familie Schneider",
    location: "Kreuzau",
    text: "Frau Lindstädt hat unsere komplette Wohnung mit neuen Gardinen und Sonnenschutz ausgestattet. Die Beratung war super persönlich und die Qualität der Arbeit erstklassig. Wir sind rundum zufrieden!",
    rating: 5,
    service: "Gardinen & Sonnenschutz",
  },
  {
    name: "Maria W.",
    location: "Düren",
    text: "Mein altes Sofa von Oma wurde wunderschön neu bezogen. Frau Lindstädt hat sich viel Zeit genommen und mich toll beraten. Das Ergebnis übertrifft alle Erwartungen. Absolute Empfehlung!",
    rating: 5,
    service: "Polsterei",
  },
  {
    name: "Thomas B.",
    location: "Nideggen",
    text: "Endlich können wir im Sommer lüften ohne dass die Insekten ins Haus kommen. Die Spannrahmen passen perfekt und sehen hochwertig aus. Schnelle, saubere Montage. Top Service!",
    rating: 5,
    service: "Insektenschutz",
  },
  {
    name: "Ehepaar Müller",
    location: "Jülich",
    text: "Wir haben Plissees fürs ganze Haus bekommen. Die Beratung vor Ort war sehr hilfreich und Frau Lindstädt hat genau zugehört, was wir uns vorstellen. Alles wurde pünktlich und perfekt montiert.",
    rating: 5,
    service: "Sonnenschutz",
  },
];

export function Testimonials({
  testimonials = defaultTestimonials,
  title = "Das sagen unsere Kunden"
}: TestimonialsProps) {
  return (
    <section className="section-padding bg-brand-warm">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zufriedene Kunden sind meine beste Empfehlung. Hier einige Stimmen von Menschen,
            die mir ihr Zuhause anvertraut haben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-card border border-border relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                {testimonial.service && (
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Auch Sie können uns bewerten:
          </p>
          <a
            href="https://g.page/r/wohnambiente-lindstaedt/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <Star className="h-5 w-5" />
            Bewertung auf Google schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
