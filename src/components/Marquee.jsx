import styles from './Marquee.module.css'

const ITEMS = [
  'Skincare','Deeper Skin Tones','Honest Reviews','Fragrance',
  'K-Beauty','GRWM','Makeup','UGC','Birmingham UK','TikTok & Instagram',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
