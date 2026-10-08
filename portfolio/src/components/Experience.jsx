import './Experience.css'

const experiences = [
  {
    type: 'internship',
    role: 'MERN Stack Intern',
    company: 'Yardstick Digital Solutions',
    period: 'July 2024',
    icon: 'fas fa-laptop-code',
    points: [
      'Completed an intensive internship focused on full-stack MERN development (MongoDB, Express.js, React.js, Node.js).',
      'Collaborated with senior team members to implement and debug key application features following industry-standard development workflows.',
      'Constructed RESTful API endpoints and integrated seamless frontend user experiences with React.',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
  },
  {
    type: 'internship',
    role: 'Web Development Intern',
    company: 'iDigisoft Technologies',
    period: 'May 2025',
    icon: 'fas fa-globe',
    points: [
      'Successfully completed a web development internship gaining hands-on practical experience in designing and engineering web applications.',
      'Applied modern responsive design principles to guarantee cross-browser and cross-device compatibility.',
      'Conducted frontend testing, UI optimizations, and cross-browser debugging for smooth performance.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Cross-Browser Testing'],
  },
]

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science & Engineering',
    institution: 'Karpagam Academy of Higher Education',
    period: '2023 – 2027',
    score: '7.1 / 10 CGPA',
    description: 'Specializing in software engineering, full stack development, database management systems, and core computer science fundamentals.',
    icon: 'fas fa-graduation-cap',
  },
]

const certifications = [
  {
    title: 'AWS Cloud Certification',
    issuer: 'Amazon Web Services',
    year: '2025',
    icon: 'fab fa-aws',
    badge: 'Cloud & Infrastructure',
  },
  {
    title: 'Web Development Basics',
    issuer: 'IBM',
    year: '2024',
    icon: 'fas fa-code',
    badge: 'Web Fundamentals',
  },
  {
    title: 'Cloud Computing Certification',
    issuer: 'Professional Certification',
    year: '2023',
    icon: 'fas fa-cloud',
    badge: 'Cloud Architecture',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Career Journey</p>
          <h2 className="section-title">Experience &amp; <span className="highlight">Education</span></h2>
          <div className="section-line" />
        </div>

        <div className="experience-layout">
          {/* Work / Internship Timeline */}
          <div className="timeline-block reveal-left">
            <h3 className="block-heading">
              <i className="fas fa-briefcase" /> Professional Internships
            </h3>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot">
                    <i className={exp.icon} />
                  </div>
                  <div className="timeline-card">
                    <div className="card-top">
                      <div>
                        <h4 className="card-role">{exp.role}</h4>
                        <p className="card-company">{exp.company}</p>
                      </div>
                      <span className="card-period">{exp.period}</span>
                    </div>
                    <ul className="card-bullets">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                    <div className="card-tags">
                      {exp.tags.map(t => (
                        <span key={t} className="card-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="timeline-block reveal-right">
            <h3 className="block-heading">
              <i className="fas fa-graduation-cap" /> Education
            </h3>
            <div className="timeline">
              {education.map((edu, idx) => (
                <div className="timeline-item edu-item" key={idx}>
                  <div className="timeline-dot">
                    <i className={edu.icon} />
                  </div>
                  <div className="timeline-card">
                    <div className="card-top">
                      <div>
                        <h4 className="card-role">{edu.degree}</h4>
                        <p className="card-company">{edu.institution}</p>
                      </div>
                      <span className="card-period">{edu.period}</span>
                    </div>
                    <div className="cgpa-pill">
                      <i className="fas fa-award" /> CGPA: <strong>{edu.score}</strong>
                    </div>
                    <p className="edu-desc">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <h3 className="block-heading cert-heading">
              <i className="fas fa-certificate" /> Certifications
            </h3>
            <div className="certs-grid">
              {certifications.map((c, idx) => (
                <div className="cert-card" key={idx}>
                  <div className="cert-icon-wrap">
                    <i className={c.icon} />
                  </div>
                  <div className="cert-info">
                    <h5 className="cert-title">{c.title}</h5>
                    <p className="cert-issuer">{c.issuer} • <span className="cert-year">{c.year}</span></p>
                    <span className="cert-badge">{c.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
