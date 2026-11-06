// All texts and data of the site in one place. Facts are taken from the previous website,
// the business card and the flyer.

export const SITE_URL = 'https://www.wohnambiente-lindstaedt.de'

export const SHOP = {
  fullName: 'Wohnambiente Lindstädt',
  owner: 'Verena Lindstädt',
  role: 'Raumausstattermeisterin',
  street: 'Hoeschstraße 2',
  postalCode: '52372',
  town: 'Kreuzau',
  city: '52372 Kreuzau',
  district: 'Untermaubach',
  phoneDisplay: '02422 504344',
  phoneHref: 'tel:+492422504344',
  phoneIntl: '+49 2422 504344',
  faxDisplay: '02422 504345',
  faxIntl: '+49 2422 504345',
  mobileDisplay: '0178 5917038',
  mobileHref: 'tel:+491785917038',
  whatsapp: 'https://wa.me/491785917038',
  email: 'info@wohnambiente-lindstaedt.de',
  vatId: 'DE317580319',
  facebook: 'https://www.facebook.com/wohnambientelindstaedtvl/',
  // The Google Business Profile, by its permanent customer id (CID).
  googleMaps: 'https://maps.google.com/?cid=4183947278988717720',
  // Hoeschstraße 2, Kreuzau-Untermaubach (OpenStreetMap)
  geo: { lat: 50.7298483, lon: 6.4595241 },
  route: 'https://www.google.com/maps/dir/?api=1&destination=Hoeschstra%C3%9Fe+2%2C+52372+Kreuzau',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
}

export const APPOINTMENTS = 'Termine nach Vereinbarung'

export const NAV = [
  { id: 'leistungen', label: 'Leistungen', top: true },
  { id: 'produkte', label: 'Produkte', top: true },
  { id: 'ablauf', label: 'Ablauf', top: false },
  { id: 'ueber-mich', label: 'Über mich', top: true },
  { id: 'fragen', label: 'Fragen', top: false },
  { id: 'kontakt', label: 'Kontakt', top: true },
]

export const HERO_PHOTO = {
  name: 'jalousie-holz',
  width: 1960,
  alt: 'Heller Wohnraum mit zwei Sesseln und einer Holzjalousie am hohen Fenster',
}

export const HERO_EYEBROW = 'Raumausstattermeisterin für Kreuzau & Düren'
export const HERO_LINES = ['Wohnambiente', 'Lindstädt']

export const HERO_INTRO =
  'Gardinen, Sonnenschutz, Insektenschutz und Polsterei nach Maß – persönlich beraten, genau gemessen, sauber montiert. Ich komme zu Ihnen nach Hause.'

export const HERO_POINTS = ['Beratung kostenlos und unverbindlich', 'Meisterin seit 2001', 'Aufmaß und Montage aus einer Hand']

export const SERVICES_WORDS = ['Gardinen', 'Sonnenschutz', 'Insektenschutz', 'Polsterei']

export const SERVICES_TEXT =
  'Alles aus einer Hand: Ich komme mit Stoffen und Mustern zu Ihnen nach Hause, nehme selbst Maß, lasse alles passgenau fertigen und montiere es bei Ihnen. Seit 2001 als Meisterin im Handwerk, seit 2018 mit eigenem Betrieb in Kreuzau.'

export type ServiceSlug = 'gardinen' | 'sonnenschutz' | 'insektenschutz' | 'polsterei'

type Chapter = {
  word: string
  slug: ServiceSlug
  photo: string
  // Width of the largest photo file (see scripts/build-photos.mjs), used for the srcset.
  photoWidth: number
  alt: string
  photoSide: 'left' | 'right'
  text: string
  // Word size so long words still fit: desktop and phone, in vw.
  size: number
  sizePhone: number
}

export const CHAPTERS: Chapter[] = [
  {
    word: 'Gardinen',
    slug: 'gardinen',
    photo: 'gardinen',
    photoWidth: 1800,
    alt: 'Maßgefertigte Gardinen',
    photoSide: 'right',
    text: 'Vorhänge, Flächenvorhänge, Raffrollos und Dekorationen nach Maß. Ich bringe Stoffmuster mit, berate Sie zu Licht, Stil und Pflege und hänge alles fachgerecht auf.',
    size: 15,
    sizePhone: 19,
  },
  {
    word: 'Sonnenschutz',
    slug: 'sonnenschutz',
    photo: 'jalousie',
    photoWidth: 1400,
    alt: 'Dunkelblaue Jalousien an drei Schlafzimmerfenstern',
    photoSide: 'left',
    text: 'Plissees, Wabenplissees, Rollos, Jalousien und Lamellenvorhänge – passgenau für jedes Fenster. Viele Systeme lassen sich mit Klemmträgern ganz ohne Bohren befestigen.',
    size: 11,
    sizePhone: 13,
  },
  {
    word: 'Insektenschutz',
    slug: 'insektenschutz',
    photo: 'schiebetuer',
    photoWidth: 1400,
    alt: 'Frau öffnet eine Insektenschutz-Schiebetür an der Terrasse',
    photoSide: 'right',
    text: 'Spannrahmen, Drehrahmen, Pendel- und Schiebetüren sowie Lichtschachtabdeckungen. Frische Luft ohne Mücken – maßgefertigt für Ihre Fenster und Türen.',
    size: 9.5,
    sizePhone: 11.5,
  },
  {
    word: 'Polsterei',
    slug: 'polsterei',
    photo: 'flaechenvorhang',
    photoWidth: 1348,
    alt: 'Wohnzimmer mit Sofa vor hellen Flächenvorhängen',
    photoSide: 'left',
    text: 'Neubezug, Polsterarbeiten und Restaurierung. Gute alte Möbel haben oft ein Gestell, das noch Jahrzehnte hält – mit neuem Bezug werden sie wieder zum Lieblingsstück.',
    size: 14,
    sizePhone: 17,
  },
]

export type ProductCard = { name: string; photo: string; alt: string; text: string; details?: string; features?: string[] }
export type ProductLine = { name: string; text: string }
export type SplitPhoto = { name: string; width: number; alt: string; portrait?: boolean; caption?: string }
type GroupBase = { id: string; title: string; slug: ServiceSlug; linkLabel: string }
export type ProductGroup =
  | (GroupBase & { kind: 'cards'; items: ProductCard[]; more?: string })
  | (GroupBase & { kind: 'list'; items: ProductLine[]; photo?: SplitPhoto })

export const PRODUCTS_NOTE =
  'Alles wird nach Maß gefertigt. Den Preis nenne ich Ihnen nach dem Aufmaß bei Ihnen zu Hause – kostenlos und unverbindlich.'

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: 'p-sonnenschutz',
    title: 'Sonnen- und Sichtschutz',
    slug: 'sonnenschutz',
    linkLabel: 'Mehr zu Sonnenschutz',
    kind: 'cards',
    items: [
      {
        name: 'Plissees',
        photo: 'plissee',
        alt: 'Plissee am Fenster',
        text: 'Gefalteter Stoff, frei verschiebbar – von oben, von unten oder in der Mitte.',
        details: 'Flexible Sonnenschutzlösungen, die sich stufenlos einstellen lassen. Perfekt für unterschiedliche Lichtstimmungen.',
        features: ['Stufenlos einstellbar', 'Große Farbauswahl', 'Für alle Fensterformen', 'Pflegeleicht'],
      },
      {
        name: 'Wabenplissees',
        photo: 'wabenplissee',
        alt: 'Freihängendes Wabenplissee am Fenster',
        text: 'Doppelter Stoff mit Waben: dämmt, verdunkelt auf Wunsch und hält im Sommer kühl.',
        details: 'Die Wabenstruktur sorgt für hervorragende Wärmedämmung im Winter und Hitzeschutz im Sommer.',
        features: ['Wärmedämmend', 'Energiesparend', 'Lärmdämmend', 'Modernes Design'],
      },
      {
        name: 'Rollos',
        photo: 'rollo',
        alt: 'Klassisches Rollo am Fenster',
        text: 'Glatter Stoff zum Aufrollen, von lichtdurchlässig bis verdunkelnd.',
        details: 'Schlicht und funktional. Rollos sind ideal für alle, die einen zurückhaltenden Sonnenschutz bevorzugen.',
        features: ['Vielseitig einsetzbar', 'Verdunkelung möglich', 'Große Stoffauswahl', 'Kompakt'],
      },
      { name: 'Doppelrollos', photo: 'doppelrollo', alt: 'Vario-Rollo (Doppelrollo) am Fenster', text: 'Zwei Stofflagen mit Streifen – stufenlos von hell bis blickdicht.' },
      {
        name: 'Jalousien',
        photo: 'holzjalousie',
        alt: 'Holzjalousien an zwei Fenstern in einem Wohnzimmer',
        text: 'Lamellen aus Aluminium oder Holz, das Licht lässt sich genau lenken.',
        details: 'Der Klassiker unter den Sonnenschutzlösungen. Jalousien bieten präzise Kontrolle über Licht und Privatsphäre.',
        features: ['Präzise Lichtsteuerung', 'Langlebig', 'Verschiedene Materialien', 'Einfache Bedienung'],
      },
      {
        name: 'Lamellenvorhänge',
        photo: 'lamellenvorhang',
        alt: 'Helle senkrechte Lamellenvorhänge vor einer Fensterfront',
        text: 'Senkrechte Stoffbahnen für große Fensterflächen und Büros.',
        details: 'Perfekt für große Fensterflächen und Schiebetüren. Lamellenvorhänge vereinen Funktionalität mit elegantem Design.',
        features: ['Für große Flächen', 'Elegantes Design', 'Flexibel', 'Blendschutz'],
      },
    ],
    more: 'Für Schlafzimmer gibt es alle Varianten auch verdunkelnd.',
  },
  {
    id: 'p-insektenschutz',
    title: 'Insektenschutz',
    slug: 'insektenschutz',
    linkLabel: 'Mehr zu Insektenschutz',
    kind: 'cards',
    items: [
      {
        name: 'Spannrahmen',
        photo: 'spannrahmen',
        alt: 'Insektenschutz-Spannrahmen wird in ein Fenster eingesetzt',
        text: 'Für Fenster, die selten geöffnet werden.',
        details: 'Das klassische Fliegengitter für Fenster. Spannrahmen lassen sich einfach einsetzen und herausnehmen – ideal für die regelmäßige Reinigung.',
        features: ['Einfache Montage', 'Hohe Stabilität', 'Passgenau gefertigt', 'Leichte Reinigung'],
      },
      {
        name: 'Drehrahmen',
        photo: 'drehrahmen',
        alt: 'Geöffneter Insektenschutz-Drehrahmen an einem Küchenfenster',
        text: 'Für Dreh-Kipp-Fenster: öffnet wie ein zweiter Fensterflügel.',
        details: 'Perfekt für Fenster, die regelmäßig geöffnet werden. Der Drehrahmen lässt sich zur Seite schwenken.',
        features: ['Schwenkbar', 'Selbstschließend', 'Robust', 'Langlebig'],
      },
      {
        name: 'Pendeltüren',
        photo: 'pendeltuer',
        alt: 'Insektenschutz-Pendeltür an einer Terrassentür',
        text: 'Für Terrassen- und Balkontüren, schwingt in beide Richtungen.',
        details: 'Die ideale Lösung für Balkontüren und Terrassentüren. Pendeltüren schließen automatisch und ermöglichen freies Durchgehen.',
        features: ['Automatisches Schließen', 'Beidseitig begehbar', 'Magnetverschluss', 'Barrierefrei'],
      },
      {
        name: 'Lichtschachtabdeckungen',
        photo: 'lichtschacht',
        alt: 'Insektenschutz für einen Kellerlichtschacht',
        text: 'Hält Laub, Insekten und Kleintiere aus dem Kellerschacht.',
        details: 'Schützen Sie Ihre Kellerfenster und Lichtschächte zuverlässig vor Insekten und Schmutz.',
        features: ['Wetterfest', 'Stabil', 'Einfache Montage', 'Dauerhafter Schutz'],
      },
    ],
    more: 'Außerdem: Schiebetüren und Lösungen für Dachfenster.',
  },
  {
    id: 'p-gardinen',
    title: 'Gardinen und Dekoration',
    slug: 'gardinen',
    linkLabel: 'Mehr zu Gardinen',
    kind: 'list',
    items: [
      { name: 'Gardinen und Vorhänge', text: 'Aus hochwertigen Dekorationsstoffen, blickdicht oder lichtdurchlässig.' },
      { name: 'Flächenvorhänge', text: 'Glatte Stoffbahnen, die sich wie Paneele verschieben lassen.' },
      { name: 'Raffrollos', text: 'Stoff, der sich beim Hochziehen in weiche Falten legt.' },
      { name: 'Vorhangsysteme', text: 'Schienen und Stangen – vorhandene Schienen nutze ich, wo es geht, weiter.' },
    ],
  },
  {
    id: 'p-polsterei',
    title: 'Polsterei',
    slug: 'polsterei',
    linkLabel: 'Mehr zur Polsterei',
    kind: 'list',
    photo: {
      name: 'sessel',
      width: 1200,
      alt: 'Sessel, von Verena Lindstädt neu bezogen',
      portrait: true,
      caption: 'Eigene Arbeit: ein Sessel nach dem Neubezug.',
    },
    items: [
      { name: 'Neubezug', text: 'Sofa, Sessel und Stühle mit neuem Stoff – große Auswahl, auch strapazierfähig für Haushalte mit Haustieren.' },
      { name: 'Polsterarbeiten', text: 'Neue Polsterung, Federn und Reparaturen am Gestell.' },
      { name: 'Restaurierung', text: 'Antike Polstermöbel, fachgerecht und mit Blick auf den Charakter des Stücks.' },
    ],
  },
]

export const STEPS = [
  { title: 'Anrufen oder schreiben', text: 'Per Telefon, WhatsApp oder E-Mail. Ich melde mich zeitnah bei Ihnen.' },
  { title: 'Beratung bei Ihnen', text: 'Ich komme mit Stoffmustern und Katalogen zu Ihnen nach Hause und berate Sie in Ruhe – kostenlos und unverbindlich.' },
  { title: 'Aufmaß', text: 'Ich nehme alle Maße selbst – Sie müssen nichts ausmessen. Danach bekommen Sie ein unverbindliches Angebot.' },
  { title: 'Anfertigung und Montage', text: 'Alles wird nach Maß gefertigt und von mir fachgerecht montiert.' },
]

export const ABOUT = [
  'Schon als Kind haben mich Stoffe, Farben und schöne Räume fasziniert. 2001 habe ich meine Meisterprüfung als Raumausstatterin abgelegt, 2018 habe ich mit Wohnambiente Lindstädt meinen eigenen Betrieb in Kreuzau gegründet.',
  'Bei mir sind Sie keine Nummer: Ich nehme mir Zeit, höre zu und betreue Sie persönlich – von der ersten Beratung bis zur fertigen Montage.',
]

export const MILESTONES = [
  { year: '2001', text: 'Meisterprüfung als Raumausstatterin' },
  { year: '2018', text: 'Gründung von Wohnambiente Lindstädt' },
  { year: 'Heute', text: 'Für Sie da in Kreuzau, Düren und der ganzen Region' },
]

export const QUESTIONS = [
  {
    q: 'Was kostet die Beratung?',
    a: 'Nichts. Beratung und Aufmaß bei Ihnen zu Hause sind kostenlos und unverbindlich. Ich bringe Stoffmuster und Kataloge mit, nehme Maß und schicke Ihnen danach ein Angebot – Sie entscheiden in Ruhe.',
  },
  {
    q: 'Muss ich meine Fenster selbst ausmessen?',
    a: 'Nein. Beim kostenlosen Aufmaß nehme ich alle Maße selbst auf und berücksichtige dabei auch Griffe, Fensterneigung und andere Details. So passt am Ende alles genau.',
  },
  {
    q: 'Geht Sonnenschutz auch ohne Bohren?',
    a: 'Ja, viele Systeme lassen sich mit Klemmträgern am Fensterrahmen befestigen – ideal für Mietwohnungen. Ob das bei Ihren Fenstern möglich ist, prüfe ich beim Beratungstermin.',
  },
  {
    q: 'Was ist der Unterschied zwischen Plissee und Rollo?',
    a: 'Ein Plissee besteht aus gefaltetem Stoff und lässt sich von oben, unten oder mittig einstellen. Ein Rollo ist ein glatter Stoff, der aufgerollt wird. Beide gibt es in verschiedenen Lichtdurchlässigkeiten.',
  },
  {
    q: 'Lohnt sich das Neubeziehen meines alten Sofas?',
    a: 'Oft ja: Ältere Möbel haben häufig ein sehr stabiles Holzgestell, das noch Jahrzehnte hält. Bei einem Besichtigungstermin sage ich Ihnen ehrlich, ob sich der Neubezug lohnt.',
  },
  {
    q: 'Wie lange dauert es bis zur Montage?',
    a: 'Das hängt vom Umfang ab und von meiner Auslastung, die derzeit sehr hoch ist. Eine konkrete Zeitspanne nenne ich Ihnen gern bei Ihrer Anfrage; bei Eilwünschen prüfe ich die Möglichkeiten.',
  },
]

export const AREA = ['Kreuzau', 'Düren', 'Nideggen', 'Hürtgenwald', 'Vettweiß', 'Nörvenich', 'Langerwehe', 'Heimbach', 'Jülich']
export const AREA_MORE = 'und die ganze Region – von Heinsberg bis Bonn, von Düsseldorf bis in die Eifel.'
export const SHOWROOM_NOTE = 'Aktuell im Umbau – Stoffe und Muster zeige ich Ihnen gern nach Vereinbarung in Kreuzau.'

// Partner list from the current website (Partner page).
export const BRANDS = [
  'Höpcke',
  'Kadeco',
  'Erfal',
  'ADO',
  'Zimmer + Rohde',
  'Indes Fuggerhaus',
  'Porschen',
  'Wolff',
  'Heco',
  'Saum & Viebahn',
  'Verdi',
  'DNW',
  'PT',
  'Delius',
  'C&C',
  'Castello del Barro',
]
export const BRANDS_INTRO =
  'Ich arbeite mit namhaften Herstellern für Stoffe, Gardinen und Sonnenschutz zusammen – Sie bekommen Originalprodukte mit voller Herstellergarantie.'
