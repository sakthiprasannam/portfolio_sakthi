import { useEffect } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import Cursor    from './components/Cursor'
import BackToTop from './components/BackToTop'
import './index.css'
import './App.css'

export default function App() {
  /* ── Scroll reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
