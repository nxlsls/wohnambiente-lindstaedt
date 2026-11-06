import { renderToString } from 'react-dom/server'
import App from './App'
import { REDIRECTS, ROUTES } from './pages-data'
import { headHtml, pageUrl } from './seo'

export { REDIRECTS, ROUTES, headHtml, pageUrl }

export function render(path: string) {
  return renderToString(<App path={path} />)
}
