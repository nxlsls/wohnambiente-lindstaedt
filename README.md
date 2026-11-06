# Wohnambiente Lindstädt – Website

Offizielle Website des Raumausstattungsunternehmens **Wohnambiente Lindstädt** in Kreuzau (Insektenschutz, Sonnenschutz, Gardinen, Polsterei).

**Live:** [www.wohnambiente-lindstaedt.de](https://www.wohnambiente-lindstaedt.de)

---

## Technologie

- **Vite** – Build-Tool
- **React 18** + **TypeScript**
- **Tailwind CSS** – Styling
- **shadcn/ui** (Radix UI) – Komponenten
- **React Router** – Routing
- **React Helmet Async** – SEO (Meta, Open Graph)

---

## Lokale Entwicklung

Voraussetzung: **Node.js** (z. B. per [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)) und **npm**.

```sh
# Repository klonen
git clone <DEINE_GIT_URL>
cd wohnambiente-lindstaedt

# Abhängigkeiten installieren
npm install

# Dev-Server starten (mit Hot Reload)
npm run dev
```

Die App läuft dann unter `http://localhost:8080` (oder dem angezeigten Port).

---

## Skripte

| Befehl        | Beschreibung                    |
|---------------|----------------------------------|
| `npm run dev` | Dev-Server starten               |
| `npm run build` | Produktions-Build inkl. Prerendering aller Seiten |
| `npm run preview` | Build lokal vorspielen        |
| `npm run lint` | ESLint ausführen                 |

---

## Deployment

Bei jedem Push auf `main` baut GitHub Actions die Seite und veröffentlicht sie auf GitHub Pages (Custom Domain `www.wohnambiente-lindstaedt.de`).

`npm run build` erledigt drei Schritte:

1. Client-Build mit Vite nach `dist/`
2. SSR-Build von `src/entry-server.tsx` nach `dist-ssr/`
3. `scripts/prerender.mjs` erzeugt für jede Route eine statische HTML-Datei (`dist/gardinen.html` usw.) inkl. Titel, Meta-Tags und Inhalt, außerdem `dist/404.html` und `dist/sitemap.xml`

**Neue Seite hinzufügen:** Route in `src/App.tsx` eintragen **und** in `prerenderRoutes` in `src/entry-server.tsx` ergänzen – dann wird sie vorgerendert und automatisch in die Sitemap aufgenommen.

**Bilder:** Bitte als WebP in sinnvoller Größe (max. ca. 1400 px Breite) unter `src/assets/` ablegen – keine mehrere MB großen PNGs.

---

## Projektstruktur (Auszug)

```
src/
├── assets/          # Bilder, Logos
├── components/      # Wiederverwendbare Komponenten
│   ├── layout/      # Header, Footer, Layout
│   ├── sections/    # Sektionen (Formulare, Karten, FAQ)
│   ├── seo/         # SEOHead
│   └── ui/          # shadcn/ui Komponenten
├── hooks/
├── lib/
├── pages/           # Seiten (Index, Kontakt, Leistungen, …)
├── App.tsx
├── main.tsx
└── index.css
```

---

© Wohnambiente Lindstädt – Raumausstattung in Kreuzau
