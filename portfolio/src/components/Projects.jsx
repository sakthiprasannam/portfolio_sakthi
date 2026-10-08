import { useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 'project-1',
    tag: 'Web App',
    image: '/ecommerce.jpg',
    title: 'E-Commerce Platform',
    desc: 'A full-featured online shopping platform with user authentication, product catalog, cart system, and payment integration using HTML, CSS, JavaScript & MySQL.',
    stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    id: 'project-2',
    tag: 'AI / ML',
    image: '/ml-predictor.jpg',
    title: 'Student Performance Predictor',
    desc: 'A machine learning project that predicts student academic performance using regression models trained on historical data, built with Python and Scikit-learn.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    id: 'project-3',
    tag: 'Web App',
    image: '/hospital.jpg',
    title: 'Hospital Management System',
    desc: 'A comprehensive hospital management system for managing patients, appointments, doctors, and billing records with a clean admin dashboard.',
    stack: ['Java', 'MySQL', 'HTML', 'CSS'],
  },
]

function ProjectCard({ id, tag, image, title, desc, stack }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect  = card.getBoundingClientRect()
    const x     = e.clientX - rect.left
    const y     = e.clientY - rect.top
    const cx    = rect.width  / 2
    const cy    = rect.height / 2
    const rotX  = ((y - cy) / cy) * -6
    const rotY  = ((x - cx) / cx) *  6
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`
  }
  const onMouseLeave = () => { if (cardRef.current) cardRef.current.style.transform = '' }

  return (
    <div
      className="project-card reveal"
      id={id}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-img-wrap">
        <img src={image} alt={title} className="project-img" loading="lazy" />
        <div className="project-overlay">
          <a href="#" className="project-link" aria-label="View project"><i className="fas fa-external-link-alt" /></a>
          <a href="#" className="project-link github" aria-label="View code"><i className="fab fa-github" /></a>
        </div>
      </div>
      <div className="project-info">
        <span className="project-tag">{tag}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">My Work</p>
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  )
}
