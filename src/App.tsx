import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BottomBar, Frame } from './components/Frame'
import { Home } from './pages/Home'
import { ServicePage } from './pages/ServicePage'
import { Dueren } from './pages/Dueren'
import { Datenschutz, Impressum } from './pages/Legal'
import { NotFound } from './pages/NotFound'
import { SERVICE_PAGES } from './pages-data'
import { fullTitle } from './seo'

gsap.registerPlugin(ScrollTrigger)

function Page({ path }: { path: string }) {
  if (path === '/') return <Home />
  const service = SERVICE_PAGES.find((s) => `/${s.slug}` === path)
  if (service) return <ServicePage page={service} />
  if (path === '/raumausstatter-dueren') return <Dueren />
  if (path === '/impressum') return <Impressum />
  if (path === '/datenschutz') return <Datenschutz />
  return <NotFound />
}

export default function App({ path }: { path: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // The built pages carry their title in the HTML; in development it is set here.
    document.title = fullTitle(path)
    // Measure trigger positions again once the real fonts and photos are in.
    document.fonts.ready.then(() => ScrollTrigger.refresh())
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [path])

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          mainRef.current?.focus()
        }}
      >
        Zum Inhalt springen
      </a>
      <Frame open={menuOpen} onOpenChange={setMenuOpen} home={path === '/'} />
      <main id="main" ref={mainRef} tabIndex={-1} inert={menuOpen}>
        <Page path={path} />
      </main>
      <BottomBar />
    </>
  )
}
