import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo"
          onClick={e => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }) }}>
          Sakthi<span>.</span>
        </a>
        <p className="footer-text">
          Designed &amp; Developed with <i className="fas fa-heart" style={{ color:'#00cfff' }} /> by Sakthi Prasanna
        </p>
        <p className="footer-copy">© 2026 Sakthi Prasanna. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
