import useReveal from './useReveal'
import styles from './Audience.module.css'

const TRAITS = [
  { title: 'High Intent',     desc: 'Here to buy, not browse' },
  { title: 'Deeply Engaged',  desc: 'Comments, saves, shares' },
  { title: 'UK Core',         desc: 'Growing globally' },
  { title: 'Underserved',     desc: 'Hungry for honest content' },
]

const STATS = [
  { val: '1070+', lbl: 'TikTok Followers',    dark: true  },
  { val: '100+',  lbl: 'Instagram Followers', dark: false },
  { val: '12–19%', lbl: 'Engagement Rate',     dark: false },
  { val: '9+',   lbl: 'Brand Partnerships',  dark: true  },
]

export default function Audience() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className={styles.section} id="audience">
      <div className={styles.grid}>
        <div ref={leftRef} className={`${styles.left} reveal`}>
          <p className={styles.tag}>Audience</p>
          <h2 className={styles.heading}>Loyal, high-intent,<br /><em>deeply engaged.</em></h2>
          <p>My audience are women with deeper skin tones who are tired of beauty advice that doesn't apply to them. They come to learn, compare, and buy — and they trust me to tell the truth.</p>
          <p>UK-based core community with growing international reach. An underserved segment with real purchasing power and genuine demand for content made for them.</p>
          <div className={styles.traits}>
            {TRAITS.map(({ title, desc }) => (
              <div key={title} className={styles.trait} data-hover>
                <p className={styles.traitTitle}>{title}</p>
                <p className={styles.traitDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={rightRef} className={`${styles.right} reveal`}>
          {STATS.map(({ val, lbl, dark }) => (
            <div key={lbl} className={`${styles.stat} ${dark ? styles.dark : ''}`} data-hover>
              <p className={styles.statVal}>{val}</p>
              <p className={styles.statLbl}>{lbl}</p>
            </div>
          ))}
          <div className={`${styles.stat} ${styles.wide}`} data-hover>
            <p className={`${styles.statVal} ${styles.statValSm}`}>UK &amp; International</p>
            <p className={styles.statLbl}>Audience Reach</p>
          </div>
        </div>
      </div>
    </section>
  )
}
