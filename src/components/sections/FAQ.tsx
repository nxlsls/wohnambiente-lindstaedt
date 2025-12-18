import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export function FAQ({ items, title = "Häufige Fragen", description }: FAQProps) {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">{title}</h2>
            {description && (
              <p className="text-xl text-muted-foreground">{description}</p>
            )}
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border border-border"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Pre-defined FAQ content for each service
export const insektenschutzFAQs: FAQItem[] = [
  {
    question: "Welcher Insektenschutz passt am besten zu meinen Fenstern?",
    answer: "Das hängt von Ihren Fenstern und Nutzungsgewohnheiten ab. Spannrahmen eignen sich ideal für Fenster, die selten geöffnet werden. Drehrahmen sind perfekt für Fenster mit Dreh-Kipp-Funktion. Bei Terrassentüren empfehle ich Pendel- oder Schiebetüren. Bei einem kostenlosen Beratungstermin vor Ort finde ich die optimale Lösung für Sie.",
  },
  {
    question: "Wie lange dauert die Montage von Insektenschutz?",
    answer: "Die Montage dauert je nach Umfang zwischen 1-3 Stunden pro Fenster oder Tür. Bei mehreren Elementen plane ich einen halben bis ganzen Tag ein. Die genaue Dauer besprechen wir bei der Auftragserteilung.",
  },
  {
    question: "Kann ich Insektenschutz auch bei Dachfenstern anbringen?",
    answer: "Ja, auch für Dachfenster gibt es passende Lösungen. Hier setze ich auf spezielle Spannrahmen oder Rollos, die sich der Schräge anpassen. Ich berate Sie gerne zu den Möglichkeiten für Ihr Dachfenster.",
  },
  {
    question: "Wie pflege ich meinen Insektenschutz richtig?",
    answer: "Das Gewebe lässt sich einfach mit einem feuchten Tuch oder Staubsauger auf niedriger Stufe reinigen. Die Rahmen wischen Sie am besten mit einem milden Reinigungsmittel ab. Eine gründliche Reinigung empfehle ich 1-2 mal pro Jahr.",
  },
];

export const sonnenschutzFAQs: FAQItem[] = [
  {
    question: "Was ist der Unterschied zwischen Plissee und Rollo?",
    answer: "Ein Plissee besteht aus gefaltetem Stoff und lässt sich flexibel positionieren – Sie können es von oben, unten oder mittig einstellen. Ein Rollo ist ein glatter Stoff, der aufgerollt wird. Plissees bieten mehr Flexibilität, Rollos haben einen klassischeren Look. Beide gibt es in verschiedenen Lichtdurchlässigkeiten.",
  },
  {
    question: "Welcher Sonnenschutz ist für Schlafzimmer geeignet?",
    answer: "Für Schlafzimmer empfehle ich verdunkelnde Lösungen wie Verdunkelungsrollos oder Wabenplissees mit Verdunkelungsstoff. Diese blockieren das Licht nahezu vollständig. Wabenplissees haben zusätzlich den Vorteil, dass sie isolieren und im Sommer kühl halten.",
  },
  {
    question: "Kann Sonnenschutz ohne Bohren montiert werden?",
    answer: "Ja, viele Systeme können mit Klemmträgern am Fensterrahmen befestigt werden – ganz ohne Bohren. Das ist besonders für Mietwohnungen ideal. Ob diese Lösung bei Ihren Fenstern möglich ist, prüfe ich gerne bei einem Beratungstermin.",
  },
  {
    question: "Wie messe ich mein Fenster für Sonnenschutz richtig?",
    answer: "Am besten überlasse ich Ihnen das Messen nicht selbst. Beim kostenlosen Aufmaß-Termin nehme ich alle Maße präzise auf und berücksichtige dabei auch Griffe, Fensterneigung und andere Details. So garantiere ich, dass alles perfekt passt.",
  },
];

export const gardinenFAQs: FAQItem[] = [
  {
    question: "Wie läuft eine Gardinen-Beratung bei Ihnen ab?",
    answer: "Ich komme zu Ihnen nach Hause mit Stoffmustern, Kataloges und Ideen. Gemeinsam schauen wir uns Ihre Räume an, besprechen Ihre Wünsche bezüglich Stil, Lichteinfall und Pflegeleichtigkeit. Ich nehme direkt Maß und erstelle Ihnen ein unverbindliches Angebot.",
  },
  {
    question: "Welche Stoffe eignen sich für welchen Raum?",
    answer: "Für Wohnzimmer empfehle ich hochwertige Dekorationsstoffe, für Schlafzimmer blickdichte Varianten. In Küche und Bad sollten pflegeleichte, feuchtigkeitsbeständige Stoffe zum Einsatz kommen. Kinderzimmer profitieren von robusten, waschbaren Materialien.",
  },
  {
    question: "Wie lange dauert es von der Bestellung bis zur Montage?",
    answer: "Die Lieferzeit beträgt in der Regel 3-4 Wochen ab Auftragserteilung. Die Montage selbst dauert je nach Umfang wenige Stunden bis einen Tag. Bei Eilaufträgen prüfe ich gerne, ob eine schnellere Lieferung möglich ist.",
  },
  {
    question: "Können Sie auch alte Gardinenschienen nutzen?",
    answer: "Ja, in vielen Fällen können vorhandene Schienen weiterverwendet werden. Ich prüfe bei der Beratung, ob die bestehende Aufhängung für die gewünschte Gardine geeignet ist. Falls nötig, tausche ich die Schiene gleich mit aus.",
  },
];

export const polstereiFAQs: FAQItem[] = [
  {
    question: "Lohnt sich das Neubeziehen meines alten Sofas?",
    answer: "Das hängt von der Qualität des Gestells und der Polsterung ab. Hochwertige ältere Möbel haben oft ein sehr stabiles Holzgestell, das jahrzehntelang hält. Bei einem Besichtigungstermin kann ich einschätzen, ob sich die Investition lohnt. Oft ist Neubeziehen nachhaltiger und individueller als Neukauf.",
  },
  {
    question: "Welche Stoffe eignen sich für Polstermöbel mit Haustieren?",
    answer: "Für Haushalte mit Haustieren empfehle ich strapazierfähige Mikrofaserstoffe oder spezielles Haustier-Gewebe. Diese sind kratzfest, lassen sich leicht reinigen und ziehen keine Haare an. Auch Kunstleder ist eine gute Option.",
  },
  {
    question: "Wie lange dauert ein Neubezug?",
    answer: "Die reine Arbeitszeit beträgt je nach Möbelstück 1-3 Wochen. Dazu kommt die Stoffbeschaffung, die etwa 2 Wochen dauern kann. Insgesamt sollten Sie mit 3-5 Wochen rechnen. Bei dringenden Fällen prüfe ich, ob es schneller geht.",
  },
  {
    question: "Können auch antike Möbel restauriert werden?",
    answer: "Ja, ich restauriere auch antike Polstermöbel fachgerecht. Dabei achte ich darauf, den Charakter des Stücks zu erhalten und verwende bei Bedarf auch traditionelle Techniken und Materialien. Eine Begutachtung vor Ort gibt Aufschluss über den Aufwand.",
  },
];
