import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const ANCHOR_PAGES = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/micha%C3%ABl-stoikos-a902a126b/',
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <path d="M18.24 2.75h3.3l-7.2 8.23 8.47 11.27h-6.63l-5.19-6.79-5.94 6.79H1.55l7.7-8.8L1.15 2.75h6.8l4.69 6.2 5.6-6.2Zm-1.16 17.52h1.83L7.03 4.63H5.06l12.02 15.64Z" />
    ),
  },
]

const Nav = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const linkHref = (href) => (isHome ? href : `/${href}`)

  return (
    <header className="nav">
      <Link to="/" className="nav__name">
        Michael Stoikos
      </Link>

      <nav className="nav__pages">
        <Link to="/work" className="nav__link">
          Work
        </Link>
        {ANCHOR_PAGES.map((page) => (
          <a key={page.label} href={linkHref(page.href)} className="nav__link">
            {page.label}
          </a>
        ))}
      </nav>

      <div className="nav__aside">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="nav__icon"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              {social.icon}
            </svg>
          </a>
        ))}
        <a href="mailto:michael.stoikos@outlook.com" className="nav__email">
          michael.stoikos@outlook.com
        </a>
      </div>
    </header>
  )
}

export default Nav
