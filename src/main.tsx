import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/raleway'
import '@fontsource-variable/source-sans-3'
import './styles.css'
import App from './App'
import { routeFor } from './pages-data'

const root = document.getElementById('root')!
const path = routeFor(location.pathname)
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// Built pages ship as prerendered HTML (readable for search engines without JavaScript);
// React takes it over. In development the root is empty and React renders from scratch.
if (root.firstElementChild && root.dataset.path === path) hydrateRoot(root, app)
else {
  root.textContent = ''
  createRoot(root).render(app)
}

window.__waReady = true
