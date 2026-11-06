import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  /** Lokale Suchbegriffe für bessere Auffindbarkeit (z.B. "Raumausstattung Kreuzau, Gardinen Düren") */
  keywords?: string;
  /** Seite von der Indexierung ausschließen (z. B. 404-Seite) */
  noindex?: boolean;
}

const BASE_URL = "https://www.wohnambiente-lindstaedt.de";
const SITE_TITLE = "Wohnambiente Lindstädt";

export function SEOHead({
  title,
  description,
  canonical,
  type = "website",
  image = "/og-image.jpg",
  keywords,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = `${title} | ${SITE_TITLE}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${BASE_URL}${image}`} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={SITE_TITLE} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${image}`} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonicalUrl} />}

      <html lang="de" />
    </Helmet>
  );
}
