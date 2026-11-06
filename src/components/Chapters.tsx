import { Fragment, useRef } from 'react'
import type { CSSProperties } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CHAPTERS, SERVICES_TEXT, SERVICES_WORDS } from '../content'
import { MOTION_OK, scrollToSection } from '../lib/motion'
import { Photo } from './Photo'

export function Statement() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        MOTION_OK,
        () => {
          gsap.utils.toArray<HTMLElement>('.st-line').forEach((line, i) => {
            gsap.fromTo(
              line,
              { xPercent: i % 2 === 0 ? -18 : 18, autoAlpha: 0.25 },
              {
                xPercent: 0,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'center center', scrub: true },
              },
            )
          })
        },
        scope,
      )
      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section id="leistungen" ref={scope} tabIndex={-1} className="statement" aria-labelledby="statement-title">
      <p className="label star-rule">Was ich für Sie mache</p>
      <h2 id="statement-title" className="statement-title poster">
        {SERVICES_WORDS.map((word, i) => (
          <Fragment key={word}>
            <span className={`st-line${i % 2 ? ' st-line--right' : ''}`}>{word}</span>{' '}
          </Fragment>
        ))}
      </h2>
      <div className="statement-foot">
        <p className="statement-text">{SERVICES_TEXT}</p>
        <a
          className="text-link label"
          href="#produkte"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('produkte')
          }}
        >
          Alle Produkte ansehen <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export function Chapters() {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        MOTION_OK,
        () => {
          gsap.utils.toArray<HTMLElement>('.chapter').forEach((chapter) => {
            const fromRight = chapter.dataset.side === 'left'
            const st = () => ({ trigger: chapter, start: 'top bottom', end: 'bottom top', scrub: true })
            gsap.fromTo(
              chapter.querySelector('.chapter-photo img'),
              { yPercent: -4, scale: 1.1 },
              { yPercent: 4, scale: 1.1, ease: 'none', scrollTrigger: st() },
            )
            // Calm drift: the word glides a little across the photo edge. x: 0 drops the CSS translate.
            gsap.fromTo(
              chapter.querySelector('.chapter-word'),
              { x: 0, xPercent: fromRight ? 56 : -56 },
              { xPercent: fromRight ? 44 : -44, ease: 'none', scrollTrigger: st() },
            )
          })
        },
        scope,
      )
      return () => mm.revert()
    },
    { scope },
  )

  return (
    <div ref={scope}>
      {CHAPTERS.map((c, i) => (
        <section
          key={c.word}
          className={`chapter${i % 2 ? ' chapter--alt' : ''}`}
          data-side={c.photoSide}
          style={{ '--word-size': `${c.size}vw`, '--word-size-m': `${c.sizePhone}vw` } as CSSProperties}
          aria-labelledby={`chapter-${i}`}
        >
          <div className="chapter-photo">
            <Photo name={c.photo} width={c.photoWidth} sizes="(min-width: 768px) 52vw, 80vw" alt={c.alt} />
          </div>
          <h3 id={`chapter-${i}`} className="chapter-word poster blend-word">
            {c.word}
          </h3>
          <div className="chapter-text">
            <p className="label">
              0{i + 1} / 0{CHAPTERS.length}
            </p>
            <p>{c.text}</p>
            <a className="text-link label" href={`/${c.slug}`}>
              Mehr zu {c.word} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      ))}
    </div>
  )
}
