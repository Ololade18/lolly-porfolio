import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#content',  label: 'Content'  },
  { href: '#featured', label: 'Videos'   },
  { href: '#work',     label: 'Services' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={close}>
          <div className={styles.logoMark}>L</div>
          <div className={styles.logoText}>
            Lolly
            <span className={styles.logoSub}>the creator</span>
          </div>
        </a>
        <ul className={styles.links}>
          {LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={styles.cta}>Work with me</a>
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul>
          {LINKS.map(({ href, label }) => (
            <li key={href}><a href={href} onClick={close}>{label}</a></li>
          ))}
          <li><a href="#contact" className={styles.drawerCta} onClick={close}>Work with me</a></li>
        </ul>
      </div>
      {open && <div className={styles.overlay} onClick={close} />}
    </>
  )
}
