import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'CSE Student 🎓',
  'Web Developer 💻',
  'Problem Solver 🧠',
  'Python Enthusiast 🐍',
  'Open Source Fan 🌐',
]

function useTyped(roles) {
  const [text,       setText]       = useState('')
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [charIndex,  setCharIndex]  = useState(0)
  const [deleting,   setDeleting]   = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let delay = deleting ? 60 : 110

    if (!deleting && charIndex === current.length) {
      delay = 1800
      setTimeout(() => setDeleting(true), delay)
      return
    }
    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
      return
    }

    const timer = setTimeout(() => {
      setText(current.substring(0, deleting ? charIndex - 1 : charIndex + 1))
      setCharIndex(i => deleting ? i - 1 : i + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, charIndex, deleting, roleIndex, roles])

  return text
}

export default function Hero() {
  const particlesRef = useRef(null)
  const typedText    = useTyped(ROLES)

  /* Generate floating particles */
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const count = 28
    for (let i = 0; i < count; i++) {
      const p    = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 4 + 1
      const isGlow = Math.random() > 0.6
      const col  = Math.random() > 0.5 ? '#00cfff' : '#a855f7'
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        bottom: -10px;
        width: ${size}px; height: ${size}px;
        background: ${col};
        box-shadow: ${isGlow ? `0 0 ${size * 3}px ${col}` : 'none'};
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: -${Math.random() * 10}s;
      `
      container.appendChild(p)
    }
  }, [])

  return (
    <section id="home" className="home-section">
      <div className="home-particles" ref={particlesRef} />

      <div className="home-container">
        {/* Content */}
        <div className="home-content">
          <p className="home-greeting">Hello, World! 👋</p>
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Sakthi Prasanna</span>
          </h1>
          <div className="home-role">
            <span className="role-prefix">I'm a </span>
            <span className="typed-text">{typedText}</span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="home-bio">
            A passionate 4th-year{' '}
            <strong>B.E. Computer Science Engineering</strong> student at{' '}
            <strong>Karpagam Academy of Higher Education</strong>, dedicated
            to building innovative digital solutions and turning ideas into
            reality through code.
          </p>
          <div className="home-buttons">
            <a href="#contact" className="btn btn-primary" id="hire-me-btn"
               onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}>
              <i className="fas fa-paper-plane" /> Hire Me
            </a>
            <a href="#projects" className="btn btn-outline" id="projects-btn"
               onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}>
              <i className="fas fa-code" /> View Work
            </a>
          </div>
          <div className="home-socials">
            <a href="#" className="social-link" id="social-github"  aria-label="GitHub">   <i className="fab fa-github" /></a>
            <a href="#" className="social-link" id="social-linkedin" aria-label="LinkedIn"> <i className="fab fa-linkedin-in" /></a>
            <a href="#" className="social-link" id="social-twitter" aria-label="Twitter">  <i className="fab fa-twitter" /></a>
            <a href="#" className="social-link" id="social-instagram" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          </div>
        </div>

        {/* Photo */}
        <div className="home-photo">
          <div className="photo-ring" />
          <div className="photo-ring2" />
          <div className="photo-wrapper">
            <img src="/sakthi.jpg" alt="Sakthi Prasanna" className="profile-img" />
            <div className="photo-glow" />
          </div>
          <div className="floating-badge badge-1">
            <i className="fas fa-code" /><span>CSE</span>
          </div>
          <div className="floating-badge badge-2">
            <i className="fas fa-graduation-cap" /><span>4th Year</span>
          </div>
          <div className="floating-badge badge-3">
            <i className="fas fa-star" /><span>Developer</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}
