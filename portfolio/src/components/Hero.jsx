import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'MERN Stack Developer 💻',
  'CSE Student (2023-2027) 🎓',
  'Full Stack Engineer 🚀',
  'Java & C++ Developer ⚡',
  'Cloud & Database Enthusiast ☁️',
]

function useTyped(roles) {
  const [text,       setText]       = useState('')
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [charIndex,  setCharIndex]  = useState(0)
  const [deleting,   setDeleting]   = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let delay = deleting ? 50 : 100

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

export default function Hero({ onOpenResume }) {
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
            Hi, I'm <span className="highlight">SAKTHI PRASANNA M</span>
          </h1>
          <div className="home-role">
            <span className="role-prefix">I'm a </span>
            <span className="typed-text">{typedText}</span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="home-bio">
            A passionate <strong>B.E. Computer Science and Engineering</strong> student at{' '}
            <strong>Karpagam Academy of Higher Education</strong> (2023–2027 | 7.1 CGPA),
            with practical industry internship experience in <strong>MERN Stack</strong> &amp; web development,
            driven to engineer reliable, scalable software solutions.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary" id="projects-btn"
               onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}>
              <i className="fas fa-layer-group" /> View Projects
            </a>
            <button className="btn btn-outline" id="hero-resume-btn" onClick={onOpenResume}>
              <i className="fas fa-file-alt" /> View Resume
            </button>
          </div>
          <div className="home-socials">
            <a href="https://github.com/sakthiprasannam" target="_blank" rel="noreferrer" className="social-link" id="social-github" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/sakthi-prasanna-647b79290/" target="_blank" rel="noreferrer" className="social-link" id="social-linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="mailto:mspsakthiprasanna@gmail.com" className="social-link" id="social-email" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
            <a href="tel:+917806977800" className="social-link" id="social-phone" aria-label="Phone">
              <i className="fas fa-phone-alt" />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="home-photo">
          <div className="photo-ring" />
          <div className="photo-ring2" />
          <div className="photo-wrapper">
            <img src="/sakthi.jpg" alt="SAKTHI PRASANNA M" className="profile-img" />
            <div className="photo-glow" />
          </div>
          <div className="floating-badge badge-1">
            <i className="fas fa-laptop-code" /><span>MERN Stack</span>
          </div>
          <div className="floating-badge badge-2">
            <i className="fas fa-graduation-cap" /><span>7.1 CGPA</span>
          </div>
          <div className="floating-badge badge-3">
            <i className="fas fa-award" /><span>AWS Certified</span>
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
