import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { HERO_EYEBROW, HERO_INTRO, HERO_LINES, HERO_PHOTO, HERO_POINTS, SHOP } from '../content'
import { MOTION_OK, scrollToSection } from '../lib/motion'
import { Photo } from './Photo'

export function Hero() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        MOTION_OK,
        () => {
          // y: 0 drops the pixel offset GSAP would otherwise read from the CSS pre-hide transform.
          gsap.fromTo(
            '.h-word',
            { y: 0, yPercent: 105 },
            { y: 0, yPercent: 0, duration: 1.2, stagger: 0.12, ease: 'power3.out', delay: 0.25 },
          )
          document.documentElement.classList.remove('motion')
          gsap.fromTo(
            '.hero-fade',
            { y: 14, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1, ease: 'power2.out', delay: 0.6 },
          )
          gsap.fromTo('.hero-photo img', { scale: 1.06 }, { scale: 1, duration: 2.6, ease: 'power2.out' })
        },
        scope,
      )
      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section id="top" ref={scope} className="hero" aria-labelledby="hero-title">
      <div className="hero-photo">
        <Photo name={HERO_PHOTO.name} width={HERO_PHOTO.width} sizes="100vw" alt={HERO_PHOTO.alt} eager />
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <h1 id="hero-title">
          <span className="hero-eyebrow label hero-fade">{HERO_EYEBROW}</span>{' '}
          <span className="hero-headline">
            {HERO_LINES.map((line) => (
              <span key={line} className="h-line">
                <span className="h-word">{line}</span>{' '}
              </span>
            ))}
          </span>
        </h1>
        <p className="hero-intro hero-fade">{HERO_INTRO}</p>
        <div className="hero-actions hero-fade">
          <a
            className="btn btn--light label"
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('kontakt')
            }}
          >
            Kostenlose Beratung<span className="btn-more">&nbsp;vereinbaren</span>
          </a>
          <a className="hero-phone label" href={SHOP.phoneHref}>
            Oder anrufen: {SHOP.phoneDisplay}
          </a>
        </div>
      </div>

      <ul className="hero-points hero-fade" aria-label="Auf einen Blick">
        {HERO_POINTS.map((point) => (
          <li key={point} className="label">
            {point}
          </li>
        ))}
      </ul>
    </section>
  )
}
