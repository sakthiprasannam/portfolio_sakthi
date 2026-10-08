import { useEffect, useRef } from 'react'
import './Skills.css'

const categories = [
  {
    id: 'languages',
    icon: 'fas fa-code',
    title: 'Programming Languages',
    skills: [
      { name: 'Java',    pct: 88 },
      { name: 'C++',     pct: 82 },
      { name: 'JavaScript', pct: 85 },
      { name: 'Python',  pct: 78 },
    ],
  },
  {
    id: 'web',
    icon: 'fas fa-laptop-code',
    title: 'Web & MERN Stack',
    skills: [
      { name: 'React.js',       pct: 88 },
      { name: 'Node.js & Express', pct: 84 },
      { name: 'HTML5 & CSS3',   pct: 92 },
      { name: 'RESTful APIs',   pct: 86 },
    ],
  },
  {
    id: 'databases-cloud',
    icon: 'fas fa-database',
    title: 'Databases & Cloud',
    skills: [
      { name: 'MongoDB',        pct: 85 },
      { name: 'MySQL / SQL',    pct: 82 },
      { name: 'AWS Cloud',      pct: 75 },
      { name: 'Render / Deploy',pct: 80 },
    ],
  },
  {
    id: 'tools',
    icon: 'fas fa-tools',
    title: 'Developer Tools',
    skills: [
      { name: 'GitHub & Git',   pct: 88 },
      { name: 'VS Code',        pct: 92 },
      { name: 'Maven',          pct: 80 },
      { name: 'Postman',        pct: 84 },
    ],
  },
]

const techIcons = [
  { id: 'tech-react',    icon: 'fab fa-react',      label: 'React.js' },
  { id: 'tech-node',     icon: 'fab fa-node-js',    label: 'Node.js' },
  { id: 'tech-js',       icon: 'fab fa-js-square',  label: 'JavaScript' },
  { id: 'tech-java',     icon: 'fab fa-java',       label: 'Java' },
  { id: 'tech-cpp',      icon: 'fas fa-code',       label: 'C++' },
  { id: 'tech-aws',      icon: 'fab fa-aws',        label: 'AWS' },
  { id: 'tech-mongo',    icon: 'fas fa-database',   label: 'MongoDB' },
  { id: 'tech-mysql',    icon: 'fas fa-server',     label: 'MySQL' },
  { id: 'tech-html',     icon: 'fab fa-html5',      label: 'HTML5' },
  { id: 'tech-css',      icon: 'fab fa-css3-alt',   label: 'CSS3' },
  { id: 'tech-git',      icon: 'fab fa-git-alt',    label: 'Git' },
  { id: 'tech-github',   icon: 'fab fa-github',     label: 'GitHub' },
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
          <p className="section-tag">Expertise</p>
          <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
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

        <div className="tech-icons-row reveal">
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
