// Erzeugt nach dem Client-Build für jede Route eine statische HTML-Datei (inkl. Meta-Tags),
// damit Suchmaschinen jede Unterseite mit Status 200 und vollständigem Inhalt erhalten.
// Außerdem werden 404.html und sitemap.xml aus derselben Routenliste generiert.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE_URL = "https://www.wohnambiente-lindstaedt.de";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, prerenderRoutes } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const headPattern = /<!--app-head-start-->[\s\S]*?<!--app-head-end-->/;
if (!headPattern.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html enthält nicht die erwarteten Platzhalter für das Prerendering.");
}

function buildPage(url, outputPath) {
  const { html, head, htmlAttributes } = render(url);
  const page = template
    .replace('<html lang="de">', `<html ${htmlAttributes || 'lang="de"'}>`)
    .replace(headPattern, () => head)
    .replace(
      '<div id="root"></div>',
      () => `<div id="root" data-prerendered-path="${url}">${html}</div>`,
    );

  const target = path.join(distDir, outputPath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, page);
  console.log(`  prerendered ${url} -> dist/${outputPath}`);
}

console.log("Prerendering routes...");
for (const url of prerenderRoutes) {
  // GitHub Pages liefert /gardinen aus gardinen.html aus (ohne Weiterleitung auf /gardinen/).
  buildPage(url, url === "/" ? "index.html" : `${url.slice(1)}.html`);
}
buildPage("/404", "404.html");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes.map((url) => `  <url><loc>${SITE_URL}${url}</loc></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`  sitemap.xml mit ${prerenderRoutes.length} URLs geschrieben`);
