import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Project Pages laufen unter /<repo-name>/.
  // Sobald eine Custom Domain aktiv auf GitHub Pages zeigt, hier auf "/" umstellen.
  base: "/wohnambiente-lindstaedt/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
