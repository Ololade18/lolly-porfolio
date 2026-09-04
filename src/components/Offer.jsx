import useReveal from './useReveal'
import styles from './Offer.module.css'

const SERVICES = [
  { num: 'i',   title: 'Product Reviews',    body: 'Honest, detailed content for deeper complexions. Drives purchase decisions because it\'s trusted.' },
  { num: 'ii',  title: 'GRWM Integrations',  body: 'Natural brand features inside high-retention get-ready-with-me content.' },
  { num: 'iii', title: 'Unboxing Content',   body: 'Authentic first-impression videos for launches and PR drops.' },
  { num: 'iv',  title: 'UGC Licensing',      body: 'Short-form video to your brief — licensed for your channels and paid ads.' },
  { num: 'v',   title: 'Brand Ambassador',   body: 'Long-term partnerships. Sustained visibility with an audience that actually listens.' },
  { num: 'vi',  title: 'Gifted & PR',        body: 'Open to gifted collabs for the right products. Every piece made with care regardless of budget.' },
]

export default function Offer() {
  const ref = useReveal()

  return (
    <section className={styles.section} id="work">
      <div ref={ref} className="reveal">
        <p className={styles.tag}>Services</p>
        <h2 className={styles.title}>Your product, on skin<br />that needs to see <em>it work.</em></h2>
        <div className={styles.items}>
          {SERVICES.map(({ num, title, body }) => (
            <div key={num} className={styles.item} data-hover>
              <span className={styles.num}>{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
