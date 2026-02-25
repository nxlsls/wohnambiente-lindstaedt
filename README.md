# Wohnambiente Lindstädt – Website

Offizielle Website des Raumausstattungsunternehmens **Wohnambiente Lindstädt** in Kreuzau (Insektenschutz, Sonnenschutz, Gardinen, Polsterei).

**Live:** [wohnambiente-lindstaedt.de](https://wohnambiente-lindstaedt.de)

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
| `npm run build` | Produktions-Build erstellen    |
| `npm run preview` | Build lokal vorspielen        |
| `npm run lint` | ESLint ausführen                 |

---

## Deployment

Der Build liegt nach `npm run build` im Ordner `dist/`.

Für **GitHub Pages** ist in der Vite-Config `base: "/wohnambiente-lindstaedt/"` gesetzt. Bei eigener Domain den `base`-Wert in `vite.config.ts` anpassen (z. B. `"/"` für Root-Domain).

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
