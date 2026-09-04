import useReveal from './useReveal'
import styles from './Statement.module.css'

export default function Statement() {
  const ref = useReveal()
  return (
    <section className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <p className={styles.quip}>
          <em>Lollypopping</em> into your feed —
        </p>
        <p className={styles.quote}>
          "The brands that win the next generation of beauty consumers are the ones investing in voices that speak to who those consumers actually are."
        </p>
        <p className={styles.attr}>Lolly · @ao.beth · @lollythecreator</p>
      </div>
    </section>
  )
}
