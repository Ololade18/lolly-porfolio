import useReveal from './useReveal'
import styles from './About.module.css'

export default function About() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className={styles.about} id="about">
      <div ref={leftRef} className={`${styles.left} reveal`}>
        <div className={styles.imgWrap}>
          <img src="/about.jpg" alt="Lolly" className={styles.img} />
        </div>
        <div className={styles.caption}>
          <span>Ololade Adesagba</span>
          <span>Birmingham, UK</span>
        </div>
      </div>

      <div ref={rightRef} className={`${styles.right} reveal`}>
        <p className={styles.tag}>About me</p>

        <div className={styles.intro}>
          <p className={styles.introLine}>Beauty creator. Writer. Deeper skin tone girlie.</p>
          <p className={styles.introLine}>Nigerian. Birmingham. Chronically online.</p>
          <p className={styles.introLine}>Making the content I always needed to find.</p>
        </div>

        <p className={styles.body}>
          I started creating because I kept watching tutorials that weren't made for me — wrong shades, wrong skin type, wrong energy. So I became the creator I was looking for.
        </p>

        <p className={styles.body}>
          When I'm not being a content maestro, I hunt down vulnerabilities for a living — yes, really. And when I need to process it all, I write <a className={styles.link} href="https://ololademiasake.substack.com" target="_blank" rel="noreferrer">The GenZ Chronicles</a> on Substack — my unfiltered corner of the internet for beauty, life, and navigating your twenties.
        </p>

        <div className={styles.pills}>
          {['Skincare nerd 🧴','Fragrance lover 🌸','GRWM girlie 💄','Substack writer ✍🏾','K-beauty convert 🇰🇷','Cyber girlie 🔐'].map(p => (
            <span key={p} className={styles.pill}>{p}</span>
          ))}
        </div>

        <div className={styles.partners}>
          <p className={styles.partnersLabel}>Trusted by</p>
          <p className={styles.partnersList}>Clarins · L'Oréal · Revolution · Dossier · SKIN1004 · iUNIK · COSRX · Medicube</p>
        </div>
      </div>
    </section>
  )
}
