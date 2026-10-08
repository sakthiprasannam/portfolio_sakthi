import { useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 'project-1',
    tag: 'Full Stack • Live',
    featured: true,
    image: '/student-management.jpg',
    title: 'Student & Classroom Management System',
    desc: 'An advanced full-stack Student and Classroom Management application deployed on Render. Features interactive course scheduling, attendance analytics, student performance tracking, and secure REST APIs.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Render'],
    liveUrl: 'https://llm-management-2.onrender.com',
    githubUrl: 'https://github.com/sakthiprasannam/class_room_management_system',
  },
  {
    id: 'project-2',
    tag: 'Full Stack',
    featured: false,
    image: '/url-shortener.jpg',
    title: 'URL Shortener Platform',
    desc: 'A robust full-stack URL shortener built with React, Node.js, Express, and MySQL. Features fast URL redirection, custom alias generation, input sanitization, error handling, and click tracking support.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    liveUrl: null,
    githubUrl: 'https://github.com/sakthiprasannam',
  },
  {
    id: 'project-3',
    tag: 'Java / Maven',
    featured: false,
    image: '/todo-maven.jpg',
    title: 'To-Do List Management Web App',
    desc: 'A high-efficiency Java task management web application configured with Maven for dependency handling. Implements full CRUD capabilities with real-time status filtering (Completed vs Pending) and structured tables.',
    stack: ['Java', 'Maven', 'CRUD', 'Web UI'],
    liveUrl: null,
    githubUrl: 'https://github.com/sakthiprasannam',
  },
]

function ProjectCard({ id, tag, featured, image, title, desc, stack, liveUrl, githubUrl }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect  = card.getBoundingClientRect()
    const x     = e.clientX - rect.left
    const y     = e.clientY - rect.top
    const cx    = rect.width  / 2
    const cy    = rect.height / 2
    const rotX  = ((y - cy) / cy) * -5
    const rotY  = ((x - cx) / cx) *  5
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`
  }

  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <div
      className={`project-card reveal ${featured ? 'card-featured' : ''}`}
      id={id}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-img-wrap">
        <img src={image} alt={title} className="project-img" loading="lazy" />
        <div className="project-overlay">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link live"
              aria-label={`View live demo of ${title}`}
              title="View Live Demo"
            >
              <i className="fas fa-external-link-alt" />
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link github"
            aria-label={`View source code of ${title}`}
            title="View GitHub Repository"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      <div className="project-info">
        <div className="project-header-row">
          <span className="project-tag">{tag}</span>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="live-badge"
              title="Deployed on Render"
            >
              <span className="live-dot" /> Live Demo
            </a>
          )}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-footer-actions">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-project-live">
              <i className="fas fa-play" /> Live Preview
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-project-code">
            <i className="fab fa-github" /> View Code
          </a>
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
          <p className="section-tag">Showcase</p>
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
