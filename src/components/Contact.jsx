import useReveal from './useReveal'
import styles from './Contact.module.css'

const OPEN_TO = [
  'One-off campaigns',
  'Long-term brand partnerships',
  'Product launches & PR seeding',
  'UGC licensing',
  'Brand ambassador roles',
  'Gifted collaborations',
]

export default function Contact() {
  const leftRef = useReveal()

  return (
    <section className={styles.section} id="contact">
      <div ref={leftRef} className={`${styles.left} reveal`}>
        <p className={styles.tag}>Get in touch</p>
        <h2 className={styles.heading}>
          Let&apos;s make<br /><em>something</em><br />real.
        </h2>
        <p className={styles.sub}>Fast response. Professional approach. Content that genuinely serves both your brand and the audience it&apos;s made for.</p>
        {/* 👇 Replace with your actual email */}
        <a className={styles.email} href="mailto:collabwithlolly@gmail.com">collabwithlolly@gmail.com</a>
        <div className={styles.handleRow}>
          <a className={styles.handle} href="https://www.tiktok.com/@ao.beth" target="_blank" rel="noreferrer">TikTok @ao.beth</a>
          <a className={styles.handle} href="https://www.instagram.com/lollythecreator" target="_blank" rel="noreferrer">Instagram @lollythecreator</a>
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <p className={styles.rightLabel}>Open to</p>
          <div className={styles.types}>
            {OPEN_TO.map(item => (
              <div key={item} className={styles.type} data-hover>
                <span className={styles.typeName}>{item}</span>
                <span className={styles.typeDot} />
              </div>
            ))}
          </div>
        </div>
        <p className={styles.rightNote}>
          Response time is typically within 24–48 hours. All collaborations are reviewed for brand-audience fit before confirming — quality over volume, always.
        </p>
      </div>
    </section>
  )
}
