import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
}

export function SEOHead({ 
  title, 
  description, 
  canonical,
  type = "website",
  image = "/og-image.jpg"
}: SEOHeadProps) {
  const siteTitle = "Wohnambiente Lindstädt";
  const fullTitle = `${title} | ${siteTitle}`;
  const baseUrl = "https://wohnambiente-lindstaedt.de";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Language */}
      <html lang="de" />
    </Helmet>
  );
}
