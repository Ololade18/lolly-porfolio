import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    let rafId
    const animate = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.1
      p.ry += (p.my - p.ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = Math.round(p.rx) + 'px'
        ringRef.current.style.top  = Math.round(p.ry) + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const addHover = () => {
      dotRef.current?.classList.add(styles.hover)
      ringRef.current?.classList.add(styles.hoverRing)
    }
    const removeHover = () => {
      dotRef.current?.classList.remove(styles.hover)
      ringRef.current?.classList.remove(styles.hoverRing)
    }

    const targets = 'a, button, [data-hover]'
    const attachHover = () => {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    attachHover()
    const observer = new MutationObserver(attachHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
