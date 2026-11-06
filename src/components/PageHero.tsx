import type { ReactNode } from 'react'
import { HERO_LINES, SHOP } from '../content'
import type { PagePhoto } from '../pages-data'
import { scrollToSection } from '../lib/motion'
import { Photo } from './Photo'

type Props = {
  crumb: string
  title: string
  intro: string
  photo: PagePhoto
  /** Shows the company name as the big heading and the title as the line below it (both stay in the h1). */
  nameFirst?: boolean
  children?: ReactNode
}

// Header of the sub pages, like the home hero: text on white on the left, the photo on the right
// (phone: photo on top). Works for any photo without extra shading.
export function PageHero({ crumb, title, intro, photo, nameFirst }: Props) {
  return (
    <section id="top" className="page-hero" aria-labelledby="page-title">
      <div className="page-hero-body">
        <nav className="crumbs label" aria-label="Brotkrumen">
          <a href="/">Startseite</a>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 id="page-title" className="page-hero-title">
          {nameFirst ? (
            <>
              <span className="page-hero-name">
                {HERO_LINES.map((line) => (
                  <span key={line}>{line} </span>
                ))}
              </span>
              <span className="page-hero-sub">{title}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="page-hero-intro">{intro}</p>
        <div className="hero-actions">
          <a
            className="btn label"
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
      <div className="page-hero-photo">
        <Photo name={photo.name} width={photo.width} sizes="(min-width: 768px) 50vw, 100vw" alt={photo.alt} eager />
      </div>
    </section>
  )
}
