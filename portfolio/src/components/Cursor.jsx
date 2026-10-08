import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef     = useRef(null)
  const outlineRef = useRef(null)
  const mouse      = useRef({ x: 0, y: 0 })
  const outline    = useRef({ x: 0, y: 0 })
  const raf        = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      outline.current.x += (mouse.current.x - outline.current.x) * 0.12
      outline.current.y += (mouse.current.y - outline.current.y) * 0.12
      if (outlineRef.current) {
        outlineRef.current.style.left = outline.current.x + 'px'
        outlineRef.current.style.top  = outline.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    const onEnter = () => outlineRef.current?.classList.add('hover')
    const onLeave = () => outlineRef.current?.classList.remove('hover')

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    const targets = document.querySelectorAll('a, button, .skill-category, .project-card, .tech-icon, .info-item, .contact-card')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}     id="cursor-dot"     />
      <div ref={outlineRef} id="cursor-outline" />
    </>
  )
}
