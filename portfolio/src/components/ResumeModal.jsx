import './ResumeModal.css'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadHTML = () => {
    const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sakthi Prasanna M - Resume</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.5; color: #222; padding: 40px; background: #fff; max-width: 850px; margin: 0 auto; }
    header { text-align: center; border-bottom: 2px solid #222; padding-bottom: 12px; margin-bottom: 16px; }
    h1 { font-size: 26px; font-weight: 800; letter-spacing: 1px; color: #111; margin-bottom: 6px; }
    .contacts { display: flex; justify-content: center; gap: 16px; font-size: 13px; color: #444; flex-wrap: wrap; }
    .contacts a { color: #0284c7; text-decoration: none; font-weight: 600; }
    section { margin-bottom: 16px; }
    h2 { font-size: 14px; font-weight: 800; letter-spacing: 1px; color: #111; border-bottom: 1px solid #ccc; padding-bottom: 3px; margin-bottom: 8px; text-transform: uppercase; }
    p, li { font-size: 13.5px; color: #333; line-height: 1.5; }
    .entry { margin-bottom: 10px; }
    .entry-head { display: flex; justify-content: space-between; font-weight: 700; font-size: 13.5px; color: #111; }
    .entry-sub { display: flex; justify-content: space-between; font-size: 13px; color: #444; margin-bottom: 4px; }
    ul { padding-left: 20px; margin-top: 4px; }
    li { margin-bottom: 3px; }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <header>
    <h1>SAKTHI PRASANNA M</h1>
    <div class="contacts">
      <span>📞 +91 7806977800</span>
      <span>✉️ mspsakthiprasanna@gmail.com</span>
      <a href="https://www.linkedin.com/in/sakthiprasannam" target="_blank">LinkedIn</a>
      <a href="https://github.com/sakthiprasannam" target="_blank">GitHub</a>
    </div>
  </header>

  <section>
    <h2>SUMMARY</h2>
    <p>To obtain a challenging position in the field of Computer Science and Engineering where I can apply my technical skills, innovative thinking, and problem-solving abilities to contribute effectively to the success of the organization while advancing my professional career.</p>
  </section>

  <section>
    <h2>EDUCATION</h2>
    <div class="entry">
      <div class="entry-head">
        <span>Karpagam Academy of Higher Education</span>
        <span>2023 - 2027</span>
      </div>
      <div class="entry-sub">
        <span>Bachelor Of Engineering in Computer Science &amp; Engineering</span>
        <span><strong>7.1/10 CGPA</strong></span>
      </div>
    </div>
  </section>

  <section>
    <h2>INTERNSHIP</h2>
    <div class="entry">
      <div class="entry-head">
        <span>Yardstick Digital Solutions</span>
        <span>July 2024</span>
      </div>
      <div class="entry-sub">
        <span>MERN Stack Intern</span>
      </div>
      <ul>
        <li>Completed a one-month internship focused on MERN stack development, gaining hands-on experience with MongoDB, Express.js, React.js, and Node.js.</li>
        <li>Collaborated with team members to implement and debug application features while following industry-standard development practices.</li>
      </ul>
    </div>
    <div class="entry">
      <div class="entry-head">
        <span>iDigisoft Technologies</span>
        <span>May 2025</span>
      </div>
      <div class="entry-sub">
        <span>Web Development Intern</span>
      </div>
      <ul>
        <li>Successfully completed a one-month internship in Web Development, gaining practical experience in designing and developing web applications.</li>
        <li>Applied responsive design principles and performed testing to ensure compatibility across different browsers and devices.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>PROJECTS</h2>
    <div class="entry">
      <div class="entry-head">
        <span>Student &amp; Classroom Management System (Live: https://llm-management-2.onrender.com)</span>
        <span>React.js, Node.js, Express.js, MongoDB</span>
      </div>
      <ul>
        <li>Built a comprehensive classroom &amp; student management platform with real-time dashboards, attendance monitoring, and academic progress tracking.</li>
        <li>Deployed backend services on Render with RESTful endpoints and optimized database querying for smooth responsiveness.</li>
      </ul>
    </div>
    <div class="entry">
      <div class="entry-head">
        <span>URL Shortener</span>
        <span>React.js, Node.js, Express.js, MySQL</span>
      </div>
      <ul>
        <li>Built a full-stack URL shortener using React, enabling users to convert long URLs into short, shareable links.</li>
        <li>Developed a backend with Node.js and Express.js to handle URL redirection, storage, and validation with MySQL database support.</li>
        <li>Designed a responsive and user-friendly React interface that allows users to generate, copy, and reuse shortened URLs with ease.</li>
        <li>Implemented input sanitization and exception handling to ensure secure, reliable URL processing and a seamless user experience.</li>
      </ul>
    </div>
    <div class="entry">
      <div class="entry-head">
        <span>To-Do List using Maven</span>
        <span>Java, Maven</span>
      </div>
      <ul>
        <li>Developed a To-Do List web application in Java using Maven, enabling efficient task management through a clean and intuitive interface.</li>
        <li>Implemented complete CRUD functionality, allowing users to add, update, delete, and refresh tasks with title and description fields.</li>
        <li>Displayed tasks in a structured table with filters for completed and pending items, demonstrating dynamic task handling and organized task tracking.</li>
        <li>Organized the project using Maven for dependency management and streamlined build, testing, and deployment workflows.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>TECHNICAL SKILLS</h2>
    <p><strong>Programming Languages:</strong> Java, C++</p>
    <p><strong>Web Design &amp; Development:</strong> HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, React.js, Node.js)</p>
    <p><strong>Databases &amp; Cloud:</strong> AWS, SQL (MySQL), MongoDB</p>
    <p><strong>Developer Tools:</strong> VS Code, GitHub, Maven</p>
  </section>

  <section>
    <h2>CERTIFICATIONS</h2>
    <ul>
      <li>Cloud Computing – Certification (2023)</li>
      <li>Web Development Basics – IBM (2024)</li>
      <li>AWS Cloud Certification (2025)</li>
    </ul>
  </section>
</body>
</html>`

    const blob = new Blob([resumeHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Sakthi_Prasanna_M_Resume.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={e => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="resume-modal-header no-print">
          <div className="resume-modal-title">
            <i className="fas fa-file-alt" /> Sakthi Prasanna M — Curriculum Vitae
          </div>
          <div className="resume-header-actions">
            <button className="btn btn-primary btn-sm" onClick={handlePrint} title="Print or Save as PDF">
              <i className="fas fa-print" /> Save as PDF / Print
            </button>
            <button className="btn btn-outline btn-sm" onClick={handleDownloadHTML} title="Download Resume file">
              <i className="fas fa-download" /> Download File
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-paper" id="resume-sheet">
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">SAKTHI PRASANNA M</h1>
            <div className="resume-contact-bar">
              <span><i className="fas fa-phone-alt" /> +91 7806977800</span>
              <span><i className="fas fa-envelope" /> mspsakthiprasanna@gmail.com</span>
              <a href="https://www.linkedin.com/in/sakthiprasannam" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a href="https://github.com/sakthiprasannam" target="_blank" rel="noreferrer">
                <i className="fab fa-github" /> GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">SUMMARY</h2>
            <p className="resume-text">
              To obtain a challenging position in the field of Computer Science and Engineering where I can apply my technical
              skills, innovative thinking, and problem-solving abilities to contribute effectively to the success of the organization while
              advancing my professional career.
            </p>
          </section>

          {/* Education */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">EDUCATION</h2>
            <div className="resume-entry">
              <div className="entry-head">
                <span className="entry-org">Karpagam Academy of Higher Education</span>
                <span className="entry-date">2023 - 2027</span>
              </div>
              <div className="entry-sub">
                <span>Bachelor Of Engineering in Computer Science &amp; Engineering</span>
                <span className="entry-grade"><strong>7.1/10 CGPA</strong></span>
              </div>
            </div>
          </section>

          {/* Internship */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">INTERNSHIP</h2>
            
            <div className="resume-entry">
              <div className="entry-head">
                <span className="entry-org">Yardstick Digital Solutions</span>
                <span className="entry-date">July 2024</span>
              </div>
              <div className="entry-sub">
                <span className="entry-role">MERN Stack Intern</span>
              </div>
              <ul className="entry-bullets">
                <li>Completed a one-month internship focused on MERN stack development, gaining hands-on experience with MongoDB, Express.js, React.js, and Node.js.</li>
                <li>Collaborated with team members to implement and debug application features while following industry-standard development practices.</li>
              </ul>
            </div>

            <div className="resume-entry">
              <div className="entry-head">
                <span className="entry-org">iDigisoft Technologies</span>
                <span className="entry-date">May 2025</span>
              </div>
              <div className="entry-sub">
                <span className="entry-role">Web Development Intern</span>
              </div>
              <ul className="entry-bullets">
                <li>Successfully completed a one-month internship in Web Development, gaining practical experience in designing and developing web applications.</li>
                <li>Applied responsive design principles and performed testing to ensure compatibility across different browsers and devices.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">PROJECTS</h2>

            <div className="resume-entry">
              <div className="entry-head">
                <span className="entry-org">Student &amp; Classroom Management System <a href="https://llm-management-2.onrender.com" target="_blank" rel="noreferrer" className="entry-link">Live Demo ↗</a></span>
                <span className="entry-date">React.js, Node.js, Express.js, MongoDB</span>
              </div>
              <ul className="entry-bullets">
                <li>Built a comprehensive classroom &amp; student management platform with real-time dashboards, attendance monitoring, and academic progress tracking.</li>
                <li>Deployed backend services on Render with RESTful endpoints and optimized database querying for smooth responsiveness.</li>
              </ul>
            </div>

            <div className="resume-entry">
              <div className="entry-head">
                <span className="entry-org">URL Shortener</span>
                <span className="entry-date">React.js, Node.js, Express.js, MySQL</span>
              </div>
              <ul className="entry-bullets">
                <li>Built a full-stack URL shortener using React, enabling users to convert long URLs into short, shareable links.</li>
                <li>Developed a backend with Node.js and Express.js to handle URL redirection, storage, and validation with MySQL database support.</li>
                <li>Designed a responsive and user-friendly React interface that allows users to generate, copy, and reuse shortened URLs with ease.</li>
                <li>Implemented input sanitization and exception handling to ensure secure, reliable URL processing and a seamless user experience.</li>
              </ul>
            </div>

            <div className="resume-entry">
              <div className="entry-head">
                <span className="entry-org">To-Do List using Maven</span>
                <span className="entry-date">Java, Maven</span>
              </div>
              <ul className="entry-bullets">
                <li>Developed a To-Do List web application in Java using Maven, enabling efficient task management through a clean and intuitive interface.</li>
                <li>Implemented complete CRUD functionality, allowing users to add, update, delete, and refresh tasks with title and description fields.</li>
                <li>Displayed tasks in a structured table with filters for completed and pending items, demonstrating dynamic task handling and organized task tracking.</li>
                <li>Organized the project using Maven for dependency management and streamlined build, testing, and deployment workflows.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-list">
              <p><strong>Programming Languages:</strong> Java, C++</p>
              <p><strong>Web Design &amp; Development:</strong> HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, React.js, Node.js)</p>
              <p><strong>Databases &amp; Cloud:</strong> AWS, SQL (MySQL), MongoDB</p>
              <p><strong>Developer Tools:</strong> VS Code, GitHub, Maven</p>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">CERTIFICATIONS</h2>
            <ul className="entry-bullets cert-list">
              <li>Cloud Computing – Certification (2023)</li>
              <li>Web Development Basics – IBM (2024)</li>
              <li>AWS Cloud Certification (2025)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
