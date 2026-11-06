// Content of the sub pages and the page titles for search engines. The texts come from the
// previous website (service pages, FAQs, Düren page), so their wording is already approved.
import type { ServiceSlug } from './content'

export type Faq = { q: string; a: string }
export type PagePhoto = { name: string; width: number; alt: string }

export type ServicePageData = {
  slug: ServiceSlug
  name: string
  groupId: string
  h1: string
  intro: string
  photo: PagePhoto
  lead: { title: string; paragraphs: string[]; features: string[] }
  faqs: Faq[]
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'gardinen',
    name: 'Gardinen',
    groupId: 'p-gardinen',
    h1: 'Gardinen nach Maß in Kreuzau & Düren',
    intro:
      'Maßgefertigte Gardinen für Ihr Zuhause in Kreuzau, Düren und Umgebung. Ich berate Sie persönlich, nehme präzise Maß und montiere Ihre neuen Gardinen fachgerecht – alles aus einer Hand.',
    photo: { name: 'gardinen', width: 1800, alt: 'Maßgefertigte Gardinen' },
    lead: {
      title: 'Individuelle Gardinen nach Maß',
      paragraphs: [
        'Gardinen sind mehr als nur Dekoration – sie schaffen Atmosphäre, regulieren das Licht und schützen Ihre Privatsphäre. Bei Wohnambiente Lindstädt erhalten Sie Gardinen, die perfekt zu Ihrem Wohnstil passen.',
        'Ich komme zu Ihnen nach Hause, berate Sie ausführlich zu Stoffen, Farben und Designs und nehme präzise Maß. So erhalten Sie Gardinen, die nicht nur schön aussehen, sondern auch perfekt passen.',
      ],
      features: [
        'Kostenlose Beratung bei Ihnen zu Hause',
        'Große Auswahl an Stoffen und Designs',
        'Präzises Aufmaß vor Ort',
        'Maßanfertigung in höchster Qualität',
        'Professionelle Montage',
        'Langjährige Erfahrung',
      ],
    },
    faqs: [
      {
        q: 'Wie läuft eine Gardinen-Beratung bei Ihnen ab?',
        a: 'Ich komme zu Ihnen nach Hause mit Stoffmustern, Katalogen und Ideen. Gemeinsam schauen wir uns Ihre Räume an, besprechen Ihre Wünsche bezüglich Stil, Lichteinfall und Pflegeleichtigkeit. Ich nehme direkt Maß und erstelle Ihnen ein unverbindliches Angebot.',
      },
      {
        q: 'Welche Stoffe eignen sich für welchen Raum?',
        a: 'Für Wohnzimmer empfehle ich hochwertige Dekorationsstoffe, für Schlafzimmer blickdichte Varianten. In Küche und Bad sollten pflegeleichte, feuchtigkeitsbeständige Stoffe zum Einsatz kommen. Kinderzimmer profitieren von robusten, waschbaren Materialien.',
      },
      {
        q: 'Wie lange dauert es von der Bestellung bis zur Montage?',
        a: 'Die Dauer variiert je nach Umfang und aktueller Auslastung. Meine Auslastung ist derzeit sehr hoch – eine konkrete Zeitspanne kann ich Ihnen nur bei einer individuellen Anfrage nennen. Bei Eilwünschen prüfe ich gerne die Möglichkeiten.',
      },
      {
        q: 'Können Sie auch alte Gardinenschienen nutzen?',
        a: 'Ja, in vielen Fällen können vorhandene Schienen weiterverwendet werden. Ich prüfe bei der Beratung, ob die bestehende Aufhängung für die gewünschte Gardine geeignet ist. Falls nötig, tausche ich die Schiene gleich mit aus.',
      },
    ],
  },
  {
    slug: 'sonnenschutz',
    name: 'Sonnenschutz',
    groupId: 'p-sonnenschutz',
    h1: 'Sonnenschutz nach Maß in Kreuzau & Düren',
    intro:
      'Optimaler Licht- und Wärmeschutz für Ihre Räume. Ich biete hochwertige Sonnenschutzlösungen in der gesamten Region – individuell beraten, maßgefertigt und professionell montiert.',
    photo: { name: 'jalousie', width: 1400, alt: 'Dunkelblaue Jalousien an drei Schlafzimmerfenstern' },
    lead: {
      title: 'Licht und Wärme, wie Sie es möchten',
      paragraphs: [
        'Ob Plissee, Rollo, Jalousie oder Lamellenvorhang – jedes System wird genau für Ihr Fenster gefertigt. Bei der Beratung zeige ich Ihnen Stoffe und Farben und erkläre, welche Lösung zu Ihrem Raum passt.',
        'Für Schlafzimmer gibt es verdunkelnde Varianten; Wabenplissees dämmen zusätzlich und halten im Sommer kühl. Viele Systeme lassen sich mit Klemmträgern auch ganz ohne Bohren befestigen – ideal für Mietwohnungen.',
      ],
      features: [
        'Kostenlose Beratung bei Ihnen zu Hause',
        'Maßanfertigung für alle Fensterformen',
        'Verdunkelnde Stoffe für Schlafzimmer',
        'Montage auch ohne Bohren möglich',
        'Aufmaß und Montage aus einer Hand',
      ],
    },
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen Plissee und Rollo?',
        a: 'Ein Plissee besteht aus gefaltetem Stoff und lässt sich flexibel positionieren – Sie können es von oben, unten oder mittig einstellen. Ein Rollo ist ein glatter Stoff, der aufgerollt wird. Plissees bieten mehr Flexibilität, Rollos haben einen klassischeren Look. Beide gibt es in verschiedenen Lichtdurchlässigkeiten.',
      },
      {
        q: 'Welcher Sonnenschutz ist für Schlafzimmer geeignet?',
        a: 'Für Schlafzimmer empfehle ich verdunkelnde Lösungen wie Verdunkelungsrollos oder Wabenplissees mit Verdunkelungsstoff. Diese blockieren das Licht nahezu vollständig. Wabenplissees haben zusätzlich den Vorteil, dass sie isolieren und im Sommer kühl halten.',
      },
      {
        q: 'Kann Sonnenschutz ohne Bohren montiert werden?',
        a: 'Ja, viele Systeme können mit Klemmträgern am Fensterrahmen befestigt werden – ganz ohne Bohren. Das ist besonders für Mietwohnungen ideal. Ob diese Lösung bei Ihren Fenstern möglich ist, prüfe ich gerne bei einem Beratungstermin.',
      },
      {
        q: 'Wie messe ich mein Fenster für Sonnenschutz richtig?',
        a: 'Das Messen müssen Sie nicht selbst übernehmen. Beim kostenlosen Aufmaß-Termin nehme ich alle Maße präzise auf und berücksichtige dabei auch Griffe, Fensterneigung und andere Details. So passt am Ende alles genau.',
      },
    ],
  },
  {
    slug: 'insektenschutz',
    name: 'Insektenschutz',
    groupId: 'p-insektenschutz',
    h1: 'Insektenschutz nach Maß in Kreuzau & Düren',
    intro:
      'Genießen Sie frische Luft ohne lästige Insekten. Ich biete hochwertige Insektenschutzlösungen für Fenster und Türen in der gesamten Region – passgenau gefertigt und professionell montiert.',
    photo: { name: 'schiebetuer', width: 1400, alt: 'Frau öffnet eine Insektenschutz-Schiebetür an der Terrasse' },
    lead: {
      title: 'Frische Luft ohne Mücken',
      paragraphs: [
        'Welcher Insektenschutz passt, hängt von Ihren Fenstern und Türen ab: Spannrahmen für Fenster, die selten geöffnet werden, Drehrahmen für Fenster mit Dreh-Kipp-Funktion, Pendel- oder Schiebetüren für Terrasse und Balkon.',
        'Auch für Dachfenster und Kellerlichtschächte gibt es passende Lösungen. Ich messe alles bei Ihnen vor Ort aus, lasse es passgenau fertigen und montiere es fachgerecht.',
      ],
      features: [
        'Kostenlose Beratung bei Ihnen zu Hause',
        'Passgenau gefertigt',
        'Für Fenster, Türen und Lichtschächte',
        'Lösungen auch für Dachfenster',
        'Professionelle Montage',
      ],
    },
    faqs: [
      {
        q: 'Welcher Insektenschutz passt am besten zu meinen Fenstern?',
        a: 'Das hängt von Ihren Fenstern und Nutzungsgewohnheiten ab. Spannrahmen eignen sich ideal für Fenster, die selten geöffnet werden. Drehrahmen sind perfekt für Fenster mit Dreh-Kipp-Funktion. Bei Terrassentüren empfehle ich Pendel- oder Schiebetüren. Bei einem kostenlosen Beratungstermin vor Ort finde ich die optimale Lösung für Sie.',
      },
      {
        q: 'Wie lange dauert die Montage von Insektenschutz?',
        a: 'Die Dauer hängt vom Umfang und den Gegebenheiten vor Ort ab. Meine Auslastung ist derzeit sehr hoch – wie lange es in Ihrem Fall dauert, kann ich Ihnen nur bei einer konkreten Anfrage individuell sagen. Gerne besprechen wir das bei der Beratung.',
      },
      {
        q: 'Kann ich Insektenschutz auch bei Dachfenstern anbringen?',
        a: 'Ja, auch für Dachfenster gibt es passende Lösungen. Hier setze ich auf spezielle Spannrahmen oder Rollos, die sich der Schräge anpassen. Ich berate Sie gerne zu den Möglichkeiten für Ihr Dachfenster.',
      },
      {
        q: 'Wie pflege ich meinen Insektenschutz richtig?',
        a: 'Das Gewebe lässt sich einfach mit einem feuchten Tuch oder Staubsauger auf niedriger Stufe reinigen. Die Rahmen wischen Sie am besten mit einem milden Reinigungsmittel ab. Eine gründliche Reinigung empfehle ich 1–2 mal pro Jahr.',
      },
    ],
  },
  {
    slug: 'polsterei',
    name: 'Polsterei',
    groupId: 'p-polsterei',
    h1: 'Polsterei in Kreuzau & Düren',
    intro:
      'Professionelle Polsterarbeiten in der gesamten Region. Ich gebe Ihren Lieblingsstücken neues Leben – durch Neubezug, Reparatur oder Restaurierung.',
    photo: { name: 'flaechenvorhang', width: 1348, alt: 'Wohnzimmer mit Sofa vor hellen Flächenvorhängen' },
    lead: {
      title: 'Ihre Möbel in guten Händen',
      paragraphs: [
        'Mit Erfahrung, Sorgfalt und hochwertigen Materialien verwandle ich abgenutzte Polstermöbel in echte Schmuckstücke – vom Lieblingssofa bis zum antiken Sessel.',
        'Oft ist Neubeziehen nachhaltiger und individueller als ein Neukauf: Gute ältere Möbel haben häufig ein stabiles Holzgestell, das noch Jahrzehnte hält. Bei einem Besichtigungstermin sage ich Ihnen ehrlich, ob es sich lohnt.',
      ],
      features: ['Große Stoffauswahl', 'Hochwertige Materialien', 'Fachgerechte Ausführung', 'Langjährige Erfahrung', 'Faire Preise', 'Persönliche Beratung'],
    },
    faqs: [
      {
        q: 'Lohnt sich das Neubeziehen meines alten Sofas?',
        a: 'Das hängt von der Qualität des Gestells und der Polsterung ab. Hochwertige ältere Möbel haben oft ein sehr stabiles Holzgestell, das jahrzehntelang hält. Bei einem Besichtigungstermin kann ich einschätzen, ob sich die Investition lohnt. Oft ist Neubeziehen nachhaltiger und individueller als Neukauf.',
      },
      {
        q: 'Welche Stoffe eignen sich für Polstermöbel mit Haustieren?',
        a: 'Für Haushalte mit Haustieren empfehle ich strapazierfähige Mikrofaserstoffe oder spezielles Haustier-Gewebe. Diese sind kratzfest, lassen sich leicht reinigen und ziehen keine Haare an. Auch Kunstleder ist eine gute Option.',
      },
      {
        q: 'Wie lange dauert ein Neubezug?',
        a: 'Die Dauer hängt vom Möbelstück, der Stoffauswahl und dem Arbeitsaufwand ab – pauschal kann ich keine genaue Zeitspanne nennen. Meine Auslastung ist aktuell sehr hoch; wie lange es in Ihrem Fall wird, kann ich nur bei einer konkreten Anfrage individuell sagen.',
      },
      {
        q: 'Können auch antike Möbel restauriert werden?',
        a: 'Ja, ich restauriere auch antike Polstermöbel fachgerecht. Dabei achte ich darauf, den Charakter des Stücks zu erhalten und verwende bei Bedarf auch traditionelle Techniken und Materialien. Eine Begutachtung vor Ort gibt Aufschluss über den Aufwand.',
      },
    ],
  },
]

export const DUEREN = {
  h1: 'Ihr Raumausstatter für Düren',
  intro:
    'Ich bin Verena Lindstädt, Raumausstattermeisterin aus Kreuzau – direkt vor den Toren Dürens. Ich berate Sie bei Ihnen zu Hause, nehme präzise Maß und montiere Gardinen, Sonnenschutz und Insektenschutz. Auch Ihre Polstermöbel sind bei mir in guten Händen.',
  photo: { name: 'jalousie-holz', width: 1960, alt: 'Heller Wohnraum mit zwei Sesseln und einer Holzjalousie am hohen Fenster' },
  services: [
    { slug: 'gardinen', title: 'Gardinen & Vorhänge', text: 'Maßgefertigte Gardinen, Vorhänge und Dekorationen – mit Stoffberatung bei Ihnen zu Hause, Aufmaß und Montage.' },
    { slug: 'sonnenschutz', title: 'Sonnenschutz', text: 'Plissees, Wabenplissees, Jalousien, Rollos und Lamellenvorhänge – passgenau für Ihre Fenster gefertigt.' },
    { slug: 'insektenschutz', title: 'Insektenschutz', text: 'Spannrahmen, Drehrahmen, Pendel- und Schiebetüren sowie Lichtschachtabdeckungen nach Maß.' },
    { slug: 'polsterei', title: 'Polsterei', text: 'Neubezug, Polsterarbeiten und Restaurierung von Sofas, Sesseln und Stühlen.' },
  ] as { slug: ServiceSlug; title: string; text: string }[],
  localTitle: 'Kurze Wege von Kreuzau nach Düren',
  local: [
    'Mein Fachbetrieb Wohnambiente Lindstädt sitzt in der Hoeschstraße 2 in 52372 Kreuzau. Von hier aus bin ich schnell bei Ihnen in Düren – für eine kostenlose Beratung, das Aufmaß und später die Montage.',
    'Ich bin als Raumausstattermeisterin seit 2001 im Handwerk tätig und betreue Kundinnen und Kunden im gesamten Stadtgebiet, zum Beispiel in:',
  ],
  districts: ['Düren-Innenstadt', 'Birkesdorf', 'Gürzenich', 'Rölsdorf', 'Lendersdorf', 'Niederau', 'Mariaweiler', 'Arnoldsweiler'],
  faqs: [
    {
      q: 'Kommen Sie für die Beratung auch nach Düren?',
      a: 'Ja. Mein Betrieb liegt in Kreuzau, direkt südlich von Düren. Ich komme mit Stoff- und Musterkollektionen zu Ihnen nach Hause, berate Sie vor Ort und nehme direkt Maß – kostenlos und unverbindlich.',
    },
    {
      q: 'Welche Leistungen bieten Sie in Düren an?',
      a: 'Mein komplettes Angebot als Raumausstatterin: Gardinen und Vorhänge, Sonnenschutz wie Plissees, Jalousien und Rollos, Insektenschutz für Fenster und Türen sowie Polsterarbeiten und Neubezug von Möbeln.',
    },
    {
      q: 'Kann ich mir Stoffe und Muster auch bei Ihnen anschauen?',
      a: 'Gerne – nach vorheriger Terminvereinbarung in der Hoeschstraße 2 in Kreuzau. Rufen Sie mich einfach an unter 02422 / 504344.',
    },
  ] as Faq[],
}

export type PageMeta = { title: string; description: string; noindex?: boolean }

// Titles stay below ~60 characters before the " | Wohnambiente Lindstädt" suffix where possible.
export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Raumausstatter in Kreuzau bei Düren',
    description:
      'Raumausstattermeisterin Verena Lindstädt in Kreuzau bei Düren: Gardinen, Sonnenschutz, Insektenschutz und Polsterei nach Maß. Kostenlose Beratung bei Ihnen zu Hause – Tel. 02422 504344.',
  },
  '/gardinen': {
    title: 'Gardinen nach Maß in Kreuzau & Düren',
    description:
      'Gardinen und Vorhänge nach Maß in Kreuzau & Düren: kostenlose Stoffberatung bei Ihnen zu Hause, Aufmaß und Montage vom Raumausstatter-Meisterbetrieb. Tel. 02422 504344.',
  },
  '/sonnenschutz': {
    title: 'Sonnenschutz in Kreuzau & Düren – Plissees & Rollos',
    description:
      'Sonnenschutz nach Maß in Kreuzau & Düren: Plissees, Wabenplissees, Jalousien, Rollos und Lamellenvorhänge. Kostenlose Beratung vor Ort, Aufmaß und Montage vom Meisterbetrieb.',
  },
  '/insektenschutz': {
    title: 'Insektenschutz nach Maß in Kreuzau & Düren',
    description:
      'Insektenschutz in Kreuzau & Düren: Spannrahmen, Drehrahmen, Pendeltüren, Schiebetüren und Lichtschachtabdeckungen nach Maß – kostenlose Beratung vor Ort und Montage vom Meisterbetrieb.',
  },
  '/polsterei': {
    title: 'Polsterei in Kreuzau & Düren – Möbel neu beziehen',
    description:
      'Polsterei in Kreuzau & Düren: Sofa, Sessel und Stühle neu beziehen, Polsterarbeiten und Restaurierung vom Raumausstatter-Meisterbetrieb. Tel. 02422 504344.',
  },
  '/raumausstatter-dueren': {
    title: 'Raumausstatter für Düren – Gardinen & Sonnenschutz',
    description:
      'Raumausstattermeisterin aus Kreuzau für Düren und Umgebung: Gardinen, Plissees, Insektenschutz und Polsterei nach Maß. Kostenlose Beratung bei Ihnen zu Hause – Tel. 02422 504344.',
  },
  '/impressum': { title: 'Impressum', description: 'Impressum von Wohnambiente Lindstädt, Raumausstatter-Meisterbetrieb in Kreuzau.' },
  '/datenschutz': { title: 'Datenschutzerklärung', description: 'Datenschutzerklärung von Wohnambiente Lindstädt – Informationen zum Umgang mit Ihren Daten.' },
  '/404': { title: 'Seite nicht gefunden', description: 'Die gesuchte Seite wurde nicht gefunden.', noindex: true },
}

export const ROUTES = Object.keys(PAGE_META).filter((p) => p !== '/404')

// Old addresses of the previous website that now live as sections of the start page.
export const REDIRECTS: Record<string, string> = {
  '/leistungen': '/#leistungen',
  '/ueber-mich': '/#ueber-mich',
  '/kontakt': '/#kontakt',
  '/partner': '/#marken',
  '/galerie': '/',
}

export function routeFor(pathname: string): string {
  let p = pathname.replace(/\.html$/, '').replace(/\/index$/, '/')
  if (p.length > 1) p = p.replace(/\/+$/, '')
  return ROUTES.includes(p) ? p : '/404'
}
