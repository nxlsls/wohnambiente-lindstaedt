import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Für Custom Domain (www.wohnambiente-lindstaedt.de) – bei reinem GitHub-Repo-Pfad auf "/wohnambiente-lindstaedt/" stellen
  base: "/",
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
