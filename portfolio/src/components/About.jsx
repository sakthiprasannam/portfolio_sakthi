import './About.css'

const info = [
  { icon: 'fas fa-user',           label: 'Name',     value: 'Sakthi Prasanna' },
  { icon: 'fas fa-graduation-cap', label: 'Degree',   value: 'B.E. CSE' },
  { icon: 'fas fa-university',     label: 'College',  value: 'Karpagam Academy of Higher Education' },
  { icon: 'fas fa-calendar-alt',   label: 'Year',     value: '4th Year (Final Year)' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Tamil Nadu, India' },
  { icon: 'fas fa-briefcase',      label: 'Status',   value: 'Open to Opportunities' },
]

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          {/* Image */}
          <div className="about-image-col reveal-left">
            <div className="about-img-wrapper">
              <img src="/sakthi.jpg" alt="Sakthi Prasanna" className="about-img" />
              <div className="about-exp-badge">
                <span className="exp-number">4th</span>
                <span className="exp-label">Year Student</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text-col reveal-right">
            <h3 className="about-subtitle">B.E. Computer Science Engineering Student</h3>
            <p className="about-desc">
              I'm <strong>Sakthi Prasanna</strong>, a dedicated and enthusiastic Computer
              Science student in my final year at{' '}
              <strong>Karpagam Academy of Higher Education</strong>. I have a deep passion
              for software development, problem-solving, and creating meaningful digital
              experiences.
            </p>
            <p className="about-desc">
              Throughout my academic journey, I've built a strong foundation in programming,
              data structures, algorithms, and modern web technologies. I thrive on
              challenges and continuously push myself to learn new technologies and
              frameworks.
            </p>

            <div className="about-info-grid">
              {info.map(({ icon, label, value }) => (
                <div className="info-item" key={label}>
                  <i className={icon} />
                  <div>
                    <span className="info-label">{label}</span>
                    <span className="info-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn btn-primary" id="resume-btn">
              <i className="fas fa-download" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
