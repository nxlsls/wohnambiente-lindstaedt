import { useCallback, useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import gsap from 'gsap'
import { APPOINTMENTS, NAV, SHOP } from '../content'
import { PHONE, scrollToSection } from '../lib/motion'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  // On the start page the menu scrolls to its sections; elsewhere it links to them.
  home: boolean
}

const rootPx = (prop: string) => getComputedStyle(document.documentElement).getPropertyValue(prop).trim()

// The page is seen through a window: a fixed navy frame (the huge box-shadow of the rounded window)
// with the top bar and the bottom bar. Opening the menu slides the window into the bottom-right
// corner and the menu appears on the frame.
export function Frame({ open, onOpenChange, home }: Props) {
  const winRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const animate = useCallback((isOpen: boolean) => {
    const win = winRef.current
    const nav = navRef.current
    if (!win || !nav) return
    const links = nav.querySelectorAll('.menu-link')
    const phone = matchMedia(PHONE).matches
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const corner = { top: phone ? '70vh' : '50vh', left: phone ? '46vw' : '60vw' }

    tlRef.current?.kill()
    tlRef.current = null

    if (reduce) {
      if (isOpen) {
        gsap.set(win, corner)
        gsap.set(nav, { autoAlpha: 1 })
        gsap.set(links, { yPercent: 0 })
      } else {
        gsap.set(nav, { autoAlpha: 0 })
        gsap.set(win, { clearProps: 'top,left' })
      }
      return
    }

    if (isOpen) {
      // Visible but transparent at once, so focus can land on the first link.
      gsap.set(nav, { visibility: 'visible', opacity: 0 })
      tlRef.current = gsap
        .timeline()
        .to(win, { ...corner, duration: 0.9, ease: 'power3.inOut' })
        .set(nav, { autoAlpha: 1 }, 0.3)
        .fromTo(links, { yPercent: 110 }, { yPercent: 0, stagger: 0.05, duration: 0.7, ease: 'power3.out' }, 0.35)
    } else {
      tlRef.current = gsap
        .timeline()
        .to(nav, { autoAlpha: 0, duration: 0.2 })
        .to(win, { top: rootPx('--ft'), left: rootPx('--fs'), duration: 0.8, ease: 'power3.inOut', clearProps: 'top,left' }, 0.05)
    }
  }, [])

  const setMenu = useCallback(
    (next: boolean, restoreFocus = false) => {
      onOpenChange(next)
      animate(next)
      if (next) {
        document.documentElement.style.overflow = 'hidden'
        requestAnimationFrame(() => navRef.current?.querySelector<HTMLElement>('.menu-link')?.focus())
      } else {
        document.documentElement.style.overflow = ''
        if (restoreFocus) btnRef.current?.focus()
      }
    },
    [animate, onOpenChange],
  )

  // While open: Escape closes, Tab cycles through the button, the links and the contact lines.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMenu(false, true)
        return
      }
      if (e.key !== 'Tab' || !navRef.current || !btnRef.current) return
      const items = [btnRef.current, ...navRef.current.querySelectorAll<HTMLElement>('a')]
      const i = items.indexOf(document.activeElement as HTMLElement)
      const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : i === items.length - 1 ? 0 : i + 1
      e.preventDefault()
      items[next].focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, setMenu])

  const goTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!home) {
      if (open) setMenu(false)
      return
    }
    e.preventDefault()
    if (!open) {
      scrollToSection(id)
      return
    }
    setMenu(false)
    // Wait until the window has started to slide back, then scroll.
    setTimeout(() => scrollToSection(id), 120)
  }

  const sectionHref = (id: string) => (home ? `#${id}` : `/#${id}`)

  return (
    <>
      <header className="topbar">
        <a className="brand" href={home ? '#top' : '/'} onClick={() => open && setMenu(false)} aria-label={`${SHOP.fullName} – zur Startseite`}>
          <img className="brand-mark" src="/brand/mark.png" alt="" width={86} height={32} />
          <span className="brand-name">
            <span>Wohnambiente</span> <span className="brand-sub">Lindstädt</span>
          </span>
        </a>
        <nav className="topbar-nav" aria-label="Schnellnavigation">
          {NAV.filter((item) => item.top).map((item) => (
            <a key={item.id} className="label" href={sectionHref(item.id)} onClick={(e) => goTo(e, item.id)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          ref={btnRef}
          type="button"
          className="menu-btn label"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenu(!open, open)}
        >
          {open ? 'Schließen' : 'Menü'}
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </header>

      <nav id="menu" ref={navRef} className="menu" aria-label="Hauptmenü" inert={!open}>
        <ol className="menu-list">
          {NAV.map((item) => (
            <li key={item.id}>
              <a className="menu-link poster" href={sectionHref(item.id)} onClick={(e) => goTo(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="menu-ctas">
          <a className="menu-cta label" href={SHOP.phoneHref}>
            Anrufen · {SHOP.phoneDisplay}
          </a>
          <a className="menu-cta label" href={SHOP.whatsapp} target="_blank" rel="noopener">
            WhatsApp schreiben
          </a>
          <a className="menu-cta label" href={`mailto:${SHOP.email}`}>
            E-Mail schreiben
          </a>
        </div>
        <p className="menu-legal">
          <a className="label" href={SHOP.impressum}>
            Impressum
          </a>
          <a className="label" href={SHOP.datenschutz}>
            Datenschutz
          </a>
        </p>
      </nav>

      <div ref={winRef} className="window" aria-hidden="true" />
    </>
  )
}

export function BottomBar() {
  return (
    <footer className="bottombar">
      <p className="bottombar-note label">{APPOINTMENTS}</p>
      <a className="bottombar-cta label" href={SHOP.phoneHref}>
        <span className="bottombar-cta-verb">Anrufen </span>
        {SHOP.phoneDisplay}
      </a>
    </footer>
  )
}
