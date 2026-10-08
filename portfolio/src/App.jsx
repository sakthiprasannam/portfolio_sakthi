import { useEffect, useState } from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Experience  from './components/Experience'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import Cursor      from './components/Cursor'
import BackToTop   from './components/BackToTop'
import ResumeModal from './components/ResumeModal'
import './index.css'
import './App.css'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  /* ── Scroll reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  )
}
