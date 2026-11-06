import { Brands, About, Products, Questions, Steps, Visit } from '../components/Sections'
import { Hero } from '../components/Hero'
import { Chapters, Statement } from '../components/Chapters'
import { QUESTIONS } from '../content'

export function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Chapters />
      <Products />
      <Brands />
      <Steps />
      <About />
      <Questions items={QUESTIONS} />
      <Visit />
    </>
  )
}
