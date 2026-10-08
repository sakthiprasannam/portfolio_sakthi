import './About.css'

const info = [
  { icon: 'fas fa-user',           label: 'Full Name',   value: 'Sakthi Prasanna M' },
  { icon: 'fas fa-graduation-cap', label: 'Degree',      value: 'B.E. CSE (2023–2027)' },
  { icon: 'fas fa-university',     label: 'College',     value: 'Karpagam Academy of Higher Education' },
  { icon: 'fas fa-star',           label: 'Academic',    value: '7.1 / 10 CGPA' },
  { icon: 'fas fa-envelope',       label: 'Email',       value: 'mspsakthiprasanna@gmail.com' },
  { icon: 'fas fa-phone-alt',      label: 'Phone',       value: '+91 7806977800' },
]

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Profile</p>
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          {/* Image */}
          <div className="about-image-col reveal-left">
            <div className="about-img-wrapper">
              <img src="/sakthi.jpg" alt="Sakthi Prasanna M" className="about-img" />
              <div className="about-exp-badge">
                <span className="exp-number">7.1</span>
                <span className="exp-label">CGPA / 10</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text-col reveal-right">
            <h3 className="about-subtitle">Computer Science &amp; Engineering Student &amp; Developer</h3>
            <p className="about-desc">
              I am <strong>Sakthi Prasanna M</strong>, a dedicated Computer Science and Engineering student at{' '}
              <strong>Karpagam Academy of Higher Education</strong>. My objective is to obtain a challenging
              position where I can apply my technical skills, innovative thinking, and problem-solving abilities to
              contribute effectively to organizational success while advancing my professional career.
            </p>
            <p className="about-desc">
              I have hands-on industry internship experience in <strong>MERN stack</strong> development with{' '}
              <strong>Yardstick Digital Solutions</strong> and web development with{' '}
              <strong>iDigisoft Technologies</strong>. I enjoy architecting end-to-end full stack web applications,
              database systems, and intuitive user experiences.
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

            <div className="about-actions">
              <button className="btn btn-primary" id="resume-btn" onClick={onOpenResume}>
                <i className="fas fa-file-alt" /> View / Download Resume
              </button>
              <a
                href="https://github.com/sakthiprasannam"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="fab fa-github" /> GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
