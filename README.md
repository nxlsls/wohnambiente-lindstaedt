# Wohnambiente Lindstädt – Website

Website des Raumausstatter-Meisterbetriebs **Wohnambiente Lindstädt** (Verena Lindstädt) in Kreuzau:
Gardinen, Sonnenschutz, Insektenschutz und Polsterei.

**Live:** [www.wohnambiente-lindstaedt.de](https://www.wohnambiente-lindstaedt.de)

## Aufbau

- **Startseite** im „Fensterrahmen“-Design: Startbild, Leistungen, Produkte, Marken, Ablauf, Über mich, Fragen, Kontakt mit eigenem Stadtplan.
- **Unterseiten** für Suchbegriffe wie „Gardinen Düren“: `/gardinen`, `/sonnenschutz`, `/insektenschutz`, `/polsterei`, `/raumausstatter-dueren`.
- **Rechtliches:** `/impressum`, `/datenschutz`.
- Alte Adressen (`/leistungen`, `/ueber-mich`, `/kontakt`, `/partner`, `/galerie`) leiten auf die passenden Abschnitte der Startseite weiter.

Kein Tracking, keine Cookies, keine externen Anfragen beim Seitenaufruf (Schriften, Bilder und Karte kommen von der eigenen Domain).

## Technik

React 19 + Vite + TypeScript, GSAP für ruhige Bewegungen (bei „Bewegung reduzieren“ abgeschaltet), Schriften Raleway und Source Sans 3 selbst gehostet.

`npm run build` erledigt:

1. Typprüfung und Client-Build nach `dist/`
2. SSR-Build von `src/entry-server.tsx`
3. `scripts/prerender.mjs`: jede Seite als fertiges HTML (`dist/gardinen.html` …) mit eigenem Titel, Beschreibung, Canonical-Link und strukturierten Daten (schema.org), dazu `404.html`, Weiterleitungen und `sitemap.xml`

Bei jedem Push auf `main` baut GitHub Actions die Seite und veröffentlicht sie auf GitHub Pages.

## Befehle

```bash
npm install
npm run dev       # http://localhost:5190
npm run build     # Build + Vorrendern nach dist/
npm run preview   # gebauten Stand ansehen (http://localhost:5191)
npm run photos    # Fotos aus photo-sources/ neu erzeugen (nur lokal, siehe unten)
npm run map       # Stadtplan aus OpenStreetMap neu zeichnen
```

## Wo was steht

| Datei | Inhalt |
|---|---|
| `src/content.ts` | Kontaktdaten, Startseiten-Texte, Produkte, Marken, Fragen |
| `src/pages-data.ts` | Unterseiten (Texte, Fragen), Seitentitel und -beschreibungen, Weiterleitungen |
| `src/seo.ts` | Kopfdaten und strukturierte Daten für Google |
| `src/pages/` | Startseite, Leistungsseiten, Düren-Seite, Impressum, Datenschutz, 404 |
| `src/components/` | Rahmen und Menü, Startbild, Kapitel, Abschnitte, Kopf der Unterseiten |
| `src/styles.css` | Farben (aus Logo und Visitenkarte), Schriften, Layout |
| `public/photos/` | Fertige Webbilder (WebP in 3 Größen, ohne Kamera-Metadaten) |

**Neue Seite hinzufügen:** Eintrag in `PAGE_META` (`src/pages-data.ts`) und Komponente in `src/App.tsx` – sie wird dann automatisch vorgerendert und in die Sitemap aufgenommen.

**Fotos:** Die Originalfotos liegen nur lokal in `photo-sources/` (nicht im Repository, weil Kamerafotos Metadaten wie den Aufnahmeort enthalten können). `npm run photos` erzeugt daraus die Webbilder in `public/photos/`.
