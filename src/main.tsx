import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-500.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/source-sans-3/latin-300.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-500.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";
import "./index.css";

const container = document.getElementById("root")!;
const prerenderedPath = container.dataset.prerenderedPath;

// Nur hydratisieren, wenn das vorgerenderte HTML zur aktuellen URL passt
// (z. B. nicht bei alten "/?/seite"-Links, die erst clientseitig umgeschrieben werden).
if (container.hasChildNodes() && prerenderedPath === window.location.pathname) {
  hydrateRoot(container, <App />);
} else {
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
