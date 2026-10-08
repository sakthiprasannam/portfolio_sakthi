import { useEffect, useRef } from 'react'
import './Skills.css'

const categories = [
  {
    id: 'languages',
    icon: 'fas fa-code',
    title: 'Languages',
    skills: [
      { name: 'C',      pct: 85 },
      { name: 'C++',    pct: 80 },
      { name: 'Python', pct: 78 },
      { name: 'Java',   pct: 72 },
    ],
  },
  {
    id: 'web',
    icon: 'fas fa-globe',
    title: 'Web Development',
    skills: [
      { name: 'HTML5 & CSS3', pct: 90 },
      { name: 'JavaScript',   pct: 75 },
      { name: 'React.js',     pct: 65 },
      { name: 'MySQL',        pct: 70 },
    ],
  },
  {
    id: 'tools',
    icon: 'fas fa-tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', pct: 80 },
      { name: 'VS Code',      pct: 90 },
      { name: 'Linux',        pct: 65 },
      { name: 'Figma',        pct: 60 },
    ],
  },
]

const techIcons = [
  { id: 'tech-c',      icon: 'fas fa-copyright', label: 'C' },
  { id: 'tech-python', icon: 'fab fa-python',     label: 'Python' },
  { id: 'tech-java',   icon: 'fab fa-java',       label: 'Java' },
  { id: 'tech-html',   icon: 'fab fa-html5',      label: 'HTML5' },
  { id: 'tech-css',    icon: 'fab fa-css3-alt',   label: 'CSS3' },
  { id: 'tech-js',     icon: 'fab fa-js-square',  label: 'JavaScript' },
  { id: 'tech-react',  icon: 'fab fa-react',      label: 'React' },
  { id: 'tech-git',    icon: 'fab fa-git-alt',    label: 'Git' },
  { id: 'tech-github', icon: 'fab fa-github',     label: 'GitHub' },
  { id: 'tech-linux',  icon: 'fab fa-linux',      label: 'Linux' },
]

function SkillBar({ name, pct }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { el.style.width = pct + '%' }, 200)
        observer.unobserve(el)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="skill-bar">
        <div ref={fillRef} className="skill-fill" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">What I Know</p>
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {categories.map(cat => (
            <div className="skill-category reveal" key={cat.id}>
              <h3 className="category-title">
                <i className={cat.icon} /> {cat.title}
              </h3>
              <div className="skill-items">
                {cat.skills.map(s => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-icons-row">
          {techIcons.map(({ id, icon, label }) => (
            <div className="tech-icon" key={id} id={id}>
              <i className={icon} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
