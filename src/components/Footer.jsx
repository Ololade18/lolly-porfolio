import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={styles.logo}>Lolly</a>
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#content">Content</a></li>
        <li><a href="#brands">Brands</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className={styles.copy}>© 2025 Ololade Adesagba · Birmingham, UK</span>
    </footer>
  )
}
