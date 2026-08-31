import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.js'
import { isVideoSrc } from '../utils/media.js'
import './ProjectPage.css'

const ProjectPage = () => {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="project-detail project-detail--empty">
        <p>Project not found.</p>
        <Link to="/work" className="project-detail__mobile-back">
          Back to work
        </Link>
      </main>
    )
  }

  const placeholderTiles = [
    { size: 'wide', filter: 'none' },
    { size: 'small', filter: 'brightness(1.2)' },
    { size: 'small', filter: 'brightness(0.75)' },
    { size: 'wide', filter: 'brightness(0.9)' },
  ]

  const tiles = project.images?.length
    ? project.images.map((src, index) => ({ src, size: index % 3 === 0 ? 'wide' : 'small' }))
    : placeholderTiles

  return (
    <div className="project-detail">
      <aside className="project-rail">
        <Link to="/work" className="project-rail__home">
          <span className="project-rail__dot" />
          Work
        </Link>

        <nav className="project-rail__list">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className={`project-rail__item ${p.slug === project.slug ? 'project-rail__item--active' : ''}`}
            >
              <span className="project-rail__item-dot" />
              <span className="project-rail__item-label">{p.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="project-detail__main">
        <Link to="/work" className="project-detail__mobile-back">
          Back to work
        </Link>

        <header className="project-detail__header">
          <div className="project-detail__title">
            <h1>
              {project.name}
              <br />
              <span>{project.category}</span>
            </h1>
            <div className="project-detail__title-row">
              <span className="project-detail__year">{project.year}</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-detail__live"
              >
                See it live <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="project-detail__meta">
            <div className="project-detail__meta-block">
              <span className="project-detail__meta-label">Challenge</span>
              <p>{project.tagline}</p>
            </div>
            <div className="project-detail__meta-block">
              <span className="project-detail__meta-label">Tags</span>
              <div className="project-detail__meta-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-detail__meta-block">
              <span className="project-detail__meta-label">Approach</span>
              <p>{project.approach}</p>
            </div>
          </div>
        </header>

        <section className="project-detail__gallery">
          {tiles.map((tile, index) => {
            if (!tile.src) {
              return (
                <div
                  key={index}
                  className={`project-detail__tile project-detail__tile--${tile.size}`}
                  style={{ background: project.gradient, filter: tile.filter }}
                />
              )
            }

            return isVideoSrc(tile.src) ? (
              <video
                key={tile.src}
                src={tile.src}
                className={`project-detail__tile project-detail__tile--${tile.size}`}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                key={tile.src}
                src={tile.src}
                alt={`${project.name} screenshot ${index + 1}`}
                className={`project-detail__tile project-detail__tile--${tile.size}`}
              />
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default ProjectPage
