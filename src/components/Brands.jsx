import useReveal from './useReveal'
import styles from './Brands.module.css'

const BRANDS = [
  { name: 'Clarins',           cat: 'Luxury Skincare',    badge: 'Clarins Collective'    },
  { name: 'L\'Oréal',          cat: 'Global Beauty',      badge: 'L\'Oréal Star Program' },
  { name: 'Revolution Beauty', cat: 'Accessible Makeup',  badge: 'Ongoing Partnership'   },
  { name: 'Dossier',           cat: 'Indie Fragrance',    badge: 'Fragrance Review'      },
  { name: 'SKIN1004',          cat: 'K-Beauty Skincare',  badge: 'PR Partner'            },
  { name: 'iUNIK',             cat: 'K-Beauty Skincare',  badge: 'PR Partner'            },
  { name: 'COSRX',             cat: 'K-Beauty Skincare',  badge: 'PR Partner'            },
  { name: 'Medicube',          cat: 'K-Beauty Skincare',  badge: 'PR Partner'            },
]

export default function Brands() {
  const topRef  = useReveal()
  const listRef = useReveal()
  const noteRef = useReveal()

  return (
    <section className={styles.section} id="brands">
      <div ref={topRef} className="reveal">
        <p className={styles.tag}>Brand collaborations</p>
        <h2 className={styles.heading}>Luxury to K-beauty —<br />I speak <em>every brand world.</em></h2>
        <p className={styles.sub}>A range of partnerships spanning luxury skincare, accessible makeup, indie fragrance, and K-beauty. Every collaboration has been authentic — I only work with products I genuinely rate.</p>
      </div>
      <div ref={listRef} className={`${styles.list} reveal`}>
        {BRANDS.map(({ name, cat, badge }) => (
          <div key={name} className={styles.item} data-hover>
            <span className={styles.name}>{name}</span>
            <span className={styles.cat}>{cat}</span>
            <span className={styles.badge}>{badge}</span>
          </div>
        ))}
      </div>
      <p ref={noteRef} className={`${styles.note} reveal`}>
        Every partnership has been authentic — I don&apos;t promote what I wouldn&apos;t use on my own skin.
      </p>
    </section>
  )
}
