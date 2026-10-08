import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { id: 'home',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills'     },
  { id: 'projects',   label: 'Projects'   },
  { id: 'contact',    label: 'Contact'    },
]

export default function Navbar({ onOpenResume }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('home')
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [theme,     setTheme]     = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      let current = 'home'
      links.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => handleNav('home')}>
          Sakthi<span>.</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                id={`nav-${id}`}
                className={`nav-link ${active === id ? 'active' : ''}`}
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="mobile-resume-li">
            <button className="nav-resume-btn" onClick={() => { setMenuOpen(false); onOpenResume() }}>
              <i className="fas fa-file-alt" /> Resume
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="btn btn-outline btn-sm desktop-resume-btn"
            onClick={onOpenResume}
            title="View Resume"
          >
            <i className="fas fa-file-alt" /> Resume
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          </button>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
