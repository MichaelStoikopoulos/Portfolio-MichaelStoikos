import ScrollExpand from '../ScrollExpand/ScrollExpand.jsx'
import './Header.css'

const Header = () => {
  return (
    <section className="header">
      <ScrollExpand
        src="/hero-placeholder.svg"
        alt="Michael Stoikos"
        title="MICHAEL STOIKOS"
        scrollHint="Scroll"
        useWindowScroll
        startWidth={40}
        startHeight={56}
        startRadius={28}
        mediaZoom={1.3}
        scrollDistance={1.3}
        holdDistance={0.4}
      >
        <span className="header__eyebrow">Frontend Developer</span>
        <h2>Building interfaces that feel alive.</h2>
        <p>
          I design and build fast, expressive web experiences — obsessed with motion,
          detail, and the space between pixels.
        </p>
      </ScrollExpand>
    </section>
  )
}

export default Header
