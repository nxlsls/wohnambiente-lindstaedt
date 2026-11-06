// Runs after the client build and the SSR build. Writes every page as finished HTML (with its own
// title, description, canonical link and structured data), the 404 page, small redirect pages for
// the addresses of the previous website, and the sitemap. GitHub Pages serves /gardinen from
// gardinen.html, so every page answers with status 200 and full content.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const server = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const { ROUTES, REDIRECTS, headHtml, pageUrl, render } = server
const template = fs.readFileSync('dist/index.html', 'utf8')
const ROOT = '<div id="root"><!--app--></div>'
if (!template.includes('<!--app-head-->') || !template.includes(ROOT)) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app--> placeholder')
}

const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`)
function write(route, file) {
  const html = template
    .replace('<!--app-head-->', () => headHtml(route))
    .replace(ROOT, () => `<div id="root" data-path="${route}">${render(route)}</div>`)
  fs.writeFileSync(path.join('dist', file), html)
  console.log(`  ${route.padEnd(24)} -> dist/${file} (${(html.length / 1024).toFixed(0)} KB)`)
}

console.log('Prerendering:')
for (const route of ROUTES) write(route, fileFor(route))
write('/404', '404.html')

for (const [from, to] of Object.entries(REDIRECTS)) {
  const target = new URL(to, pageUrl('/')).href
  const canonical = pageUrl(to.split('#')[0] || '/')
  fs.writeFileSync(
    path.join('dist', `${from.slice(1)}.html`),
    `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Weiterleitung</title>` +
      `<link rel="canonical" href="${canonical}"><meta http-equiv="refresh" content="0; url=${to}"></head>` +
      `<body><p>Diese Seite ist umgezogen: <a href="${to}">${target}</a></p></body></html>`,
  )
  console.log(`  ${from.padEnd(24)} -> weiter zu ${to}`)
}

const today = new Date().toISOString().slice(0, 10)
const indexed = ROUTES.filter((r) => r !== '/impressum' && r !== '/datenschutz')
fs.writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    indexed.map((r) => `  <url><loc>${pageUrl(r)}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`,
)
console.log(`  sitemap.xml mit ${indexed.length} Seiten`)
fs.rmSync('dist-ssr', { recursive: true, force: true })
