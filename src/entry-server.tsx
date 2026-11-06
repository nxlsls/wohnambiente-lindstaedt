import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { AppProviders, AppRoutes } from "./App";

/** Alle Seiten, die beim Build als statisches HTML erzeugt und in die Sitemap aufgenommen werden. */
export const prerenderRoutes = [
  "/",
  "/ueber-mich",
  "/leistungen",
  "/insektenschutz",
  "/sonnenschutz",
  "/gardinen",
  "/polsterei",
  "/partner",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <AppProviders helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join("\n    ")
    : "";
  const htmlAttributes = helmet ? helmet.htmlAttributes.toString() : "";

  return { html, head, htmlAttributes };
}
