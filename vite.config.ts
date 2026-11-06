import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The site lives at the root of www.wohnambiente-lindstaedt.de; absolute paths keep assets
  // working on every page (/gardinen, /impressum, …) and on the 404 page.
  base: '/',
  plugins: [react()],
  // The prerender bundle includes all dependencies, so Node never has to load GSAP's browser files.
  ssr: { noExternal: true },
  server: { port: 5190 },
  preview: { port: 5191 },
})
