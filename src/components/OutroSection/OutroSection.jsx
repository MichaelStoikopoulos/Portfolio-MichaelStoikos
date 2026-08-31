import './OutroSection.css'

const VIDEO_PLAYBACK_RATE = 0.75

const OutroSection = () => {
  return (
    <section id="contact" className="outro">
      <video
        className="outro__video"
        src="/BackgroundAnimated-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE
        }}
      />
      <div className="outro__tint" />
      <div className="outro__scrim" />

      <p className="outro__word">Let's build something worth scrolling for.</p>

      <div className="outro__row">
        <div className="outro__block">
          <h2 className="outro__name">Michael</h2>
          <span className="outro__caption">Frontend Developer · 2026</span>
        </div>
        <div className="outro__block outro__block--right">
          <h2 className="outro__name">Stoikos</h2>
          <a href="mailto:michael.stoikos@outlook.com" className="outro__caption outro__caption--link">
            Say hello — let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default OutroSection
