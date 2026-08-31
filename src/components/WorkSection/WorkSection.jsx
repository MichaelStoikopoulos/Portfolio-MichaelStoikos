import { Link } from 'react-router-dom'
import projects from '../../data/projects.js'
import { isVideoSrc } from '../../utils/media.js'
import './WorkSection.css'

const WorkSection = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <span className="section-eyebrow">Selected Work</span>
        <h2 className="work__heading">A few things I've built.</h2>

        <div className="work__grid">
          {projects.map((project) => (
            <Link key={project.slug} to={`/work/${project.slug}`} className="work__tile">
              <div className="work__thumb" style={{ background: project.gradient }}>
                {project.image && isVideoSrc(project.image) ? (
                  <video
                    src={project.image}
                    className="work__thumb-img"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : project.image ? (
                  <img src={project.image} alt={project.name} className="work__thumb-img" />
                ) : null}
              </div>
              <div className="work__meta">
                <h3>{project.name}</h3>
                <p>{project.tagline}</p>
                <div className="work__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/work" className="work__all">
          View all work →
        </Link>
      </div>
    </section>
  )
}

export default WorkSection
