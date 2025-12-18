# Wohnambiente Lindstädt

Website für Wohnambiente Lindstädt - Raumausstattung in Kreuzau.

## Technologien

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Preview des Production Builds
npm run preview
```

## GitHub Pages Deployment

Die Website wird automatisch über GitHub Pages deployed, wenn Code zum `main` Branch gepusht wird.

### Manuelles Deployment

1. Build erstellen:
```bash
npm run build
```

2. Build-Ordner zum `gh-pages` Branch pushen (oder GitHub Actions verwenden)

## Projektstruktur

```
src/
├── components/     # React Komponenten
│   ├── layout/     # Layout-Komponenten (Header, Footer)
│   ├── sections/   # Seiten-spezifische Komponenten
│   ├── seo/        # SEO-Komponenten
│   └── ui/         # UI-Komponenten (shadcn/ui)
├── pages/          # Seiten-Komponenten
├── assets/         # Statische Assets (Bilder, etc.)
└── lib/            # Utility-Funktionen
```

## Lizenz

© 2024 Wohnambiente Lindstädt

