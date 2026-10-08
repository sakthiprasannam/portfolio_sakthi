import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Let's Connect</p>
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal-left">
            <h3>Let's Talk!</h3>
            <p>I'm currently open to internship opportunities and exciting projects.
              Whether you have a question, a project idea, or just want to say hi —
              my inbox is always open!</p>

            <div className="contact-cards">
              <div className="contact-card" id="contact-email">
                <div className="contact-icon"><i className="fas fa-envelope" /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-val">sakthiprasanna@email.com</span>
                </div>
              </div>
              <div className="contact-card" id="contact-phone">
                <div className="contact-icon"><i className="fas fa-phone-alt" /></div>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-val">+91 XXXXX XXXXX</span>
                </div>
              </div>
              <div className="contact-card" id="contact-location">
                <div className="contact-icon"><i className="fas fa-map-marker-alt" /></div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-val">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="social-link" id="csocial-github"    aria-label="GitHub">    <i className="fab fa-github" /></a>
              <a href="#" className="social-link" id="csocial-linkedin"  aria-label="LinkedIn">  <i className="fab fa-linkedin-in" /></a>
              <a href="#" className="social-link" id="csocial-twitter"   aria-label="Twitter">   <i className="fab fa-twitter" /></a>
              <a href="#" className="social-link" id="csocial-instagram" aria-label="Instagram"> <i className="fab fa-instagram" /></a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal-right">
            <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name-input">Your Name</label>
                <input id="name-input" name="name" type="text" placeholder="John Doe"
                  value={form.name} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Your Email</label>
                <input id="email-input" name="email" type="email" placeholder="john@example.com"
                  value={form.email} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject-input">Subject</label>
                <input id="subject-input" name="subject" type="text" placeholder="Project Inquiry"
                  value={form.subject} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea id="message-input" name="message" rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message} onChange={onChange} required />
              </div>

              <button
                type="submit"
                id="send-btn"
                className={`btn btn-primary btn-full ${status === 'success' ? 'success' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'idle'    && <><i className="fas fa-paper-plane" /> Send Message</>}
                {status === 'loading' && <><i className="fas fa-spinner fa-spin" /> Sending...</>}
                {status === 'success' && <><i className="fas fa-check-circle" /> Message Sent!</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
