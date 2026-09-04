import useReveal from './useReveal'
import styles from './Content.module.css'

const CARDS = [
  { idx: '01', title: 'Reviews',        body: 'Deep-dive product reviews for deeper skin tones — honest, specific, the kind brands can\'t make themselves.' },
  { idx: '02', title: 'GRWM',           body: 'Get-ready-with-me content that feels like a conversation. High retention, seamless brand integration.' },
  { idx: '03', title: 'Unboxing',       body: 'Real first-impression reactions for launches and PR drops. Authentic energy, genuine engagement.' },
  { idx: '04', title: 'Fragrance',      body: 'Reviews, layering guides, and hidden gems — with the personality most fragrance content is missing.' },
  { idx: '05', title: 'Skincare Routines', body: 'Morning, evening, actives — your product woven into a trusted, established format.' },
  { idx: '06', title: 'UGC',            body: 'Short-form video to your brief, licensed for use across your own channels and paid media.' },
]

export default function Content() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <section className={styles.section} id="content">
      <div ref={headerRef} className={`${styles.header} reveal`}>
        <p className={styles.tag}>What I create</p>
        <h2 className={styles.title}>Content that fills the gaps<br />the industry keeps <em>leaving.</em></h2>
      </div>
      <div ref={gridRef} className={`${styles.grid} reveal`}>
        {CARDS.map(({ idx, title, body }) => (
          <div key={idx} className={styles.card} data-hover>
            <span className={styles.cardIdx}>{idx}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
