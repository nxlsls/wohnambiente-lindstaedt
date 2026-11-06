// Head tags and structured data (schema.org) for every page, written into the prerendered HTML.
import { AREA, PRODUCT_GROUPS, QUESTIONS, SHOP, SITE_URL } from './content'
import { DUEREN, PAGE_META, SERVICE_PAGES } from './pages-data'
import type { Faq } from './pages-data'

const BRAND = SHOP.fullName
const BUSINESS_ID = `${SITE_URL}/#business`
const WEBSITE_ID = `${SITE_URL}/#website`

export const pageUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)
export const fullTitle = (path: string) => `${PAGE_META[path].title} | ${BRAND}`

const business = {
  '@type': 'HomeAndConstructionBusiness',
  '@id': BUSINESS_ID,
  name: BRAND,
  alternateName: ['Wohnambiente Lindstaedt', 'Verena Lindstädt Raumausstattung'],
  description:
    'Raumausstatter-Meisterbetrieb in Kreuzau bei Düren: Gardinen, Sonnenschutz, Insektenschutz und Polsterei nach Maß. Kostenlose Beratung bei Ihnen zu Hause, Aufmaß und Montage.',
  url: `${SITE_URL}/`,
  telephone: SHOP.phoneIntl,
  faxNumber: SHOP.faxIntl,
  email: SHOP.email,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SHOP.street,
    postalCode: SHOP.postalCode,
    addressLocality: SHOP.town,
    addressRegion: 'Nordrhein-Westfalen',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SHOP.geo.lat, longitude: SHOP.geo.lon },
  areaServed: AREA.map((name) => ({ '@type': 'City', name })),
  founder: { '@type': 'Person', name: SHOP.owner, jobTitle: SHOP.role },
  foundingDate: '2018',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Überweisung, EC-Karte, Bar',
  sameAs: [SHOP.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Raumausstattung',
    itemListElement: SERVICE_PAGES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: pageUrl(`/${s.slug}`) },
    })),
  },
}

const website = { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${SITE_URL}/`, name: BRAND, inLanguage: 'de-DE', publisher: { '@id': BUSINESS_ID } }

const faqPage = (path: string, faqs: Faq[]) => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl(path)}#faq`,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

const breadcrumb = (path: string, name: string) => ({
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl(path)}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name, item: pageUrl(path) },
  ],
})

export function structuredData(path: string) {
  const meta = PAGE_META[path]
  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${pageUrl(path)}#webpage`,
    url: pageUrl(path),
    name: fullTitle(path),
    description: meta.description,
    inLanguage: 'de-DE',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
  }
  const graph: unknown[] = [business, website, webPage]

  const service = SERVICE_PAGES.find((s) => `/${s.slug}` === path)
  if (path === '/') {
    graph.push(faqPage(path, QUESTIONS.map(({ q, a }) => ({ q, a }))))
  } else if (service) {
    const group = PRODUCT_GROUPS.find((g) => g.id === service.groupId)
    webPage.breadcrumb = { '@id': `${pageUrl(path)}#breadcrumb` }
    graph.push(
      breadcrumb(path, service.name),
      {
        '@type': 'Service',
        '@id': `${pageUrl(path)}#service`,
        name: service.h1,
        serviceType: service.name,
        description: meta.description,
        url: pageUrl(path),
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA.map((name) => ({ '@type': 'City', name })),
        ...(group && { hasOfferCatalog: { '@type': 'OfferCatalog', name: group.title, itemListElement: group.items.map((i) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i.name } })) } }),
      },
      faqPage(path, service.faqs),
    )
  } else if (path === '/raumausstatter-dueren') {
    webPage.breadcrumb = { '@id': `${pageUrl(path)}#breadcrumb` }
    graph.push(
      breadcrumb(path, 'Raumausstatter Düren'),
      {
        '@type': 'Service',
        '@id': `${pageUrl(path)}#service`,
        name: 'Raumausstattung in Düren',
        serviceType: 'Raumausstatter',
        url: pageUrl(path),
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'City', name: 'Düren' },
      },
      faqPage(path, DUEREN.faqs),
    )
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function headHtml(path: string) {
  const meta = PAGE_META[path]
  const title = fullTitle(path)
  const url = pageUrl(path)
  const tags = [
    `<title>${attr(title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
  ]
  if (!meta.noindex) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:locale" content="de_DE" />`,
      `<meta property="og:site_name" content="${attr(BRAND)}" />`,
      `<meta property="og:title" content="${attr(title)}" />`,
      `<meta property="og:description" content="${attr(meta.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${SITE_URL}/og-image.jpg" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<script type="application/ld+json">${JSON.stringify(structuredData(path)).replace(/</g, '\\u003c')}</script>`,
    )
  }
  return tags.join('\n    ')
}
