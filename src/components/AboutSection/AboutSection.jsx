import { Suspense, lazy } from 'react'
import './AboutSection.css'

const AboutBlob = lazy(() => import('./AboutBlob.jsx'))

const TRAITS = [
  { title: 'Self-taught', desc: 'Learned by shipping — every project taught me something the last one couldn\'t.' },
  { title: 'Detail-obsessed', desc: 'The difference between good and great usually lives in the last 10%.' },
  { title: 'Always building', desc: 'There\'s always a side project running somewhere in the background.' },
]

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__copy">
          <span className="section-eyebrow">About</span>
          <h2>
            Young developer.<br />Old soul for the details.
          </h2>
          <p className="about__lede">
            I'm a web developer who cares as much about how something feels as how it works.
            Still early in the journey, already chasing the kind of craft that takes years to get right.
          </p>
          <ul className="about__traits">
            {TRAITS.map((trait) => (
              <li key={trait.title}>
                <span className="about__trait-title">{trait.title}</span>
                <span className="about__trait-desc">{trait.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__stage">
          <Suspense fallback={<div className="about__stage-fallback" />}>
            <AboutBlob />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
