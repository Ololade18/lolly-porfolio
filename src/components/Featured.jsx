import useReveal from './useReveal'
import styles from './Featured.module.css'

const VIDEOS = [
  {
    id: '7613803014121393430',
    label: 'Featured Content 01',
  },
  {
    id: '7634564752131230998',
    label: 'Featured Content 02',
  },
  {
    id: '7636363559265389846',
    label: 'Featured Content 03',
  },
]

export default function Featured() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <section className={styles.section} id="featured">
      <div ref={headerRef} className={`${styles.header} reveal`}>
        <div>
          <p className={styles.tag}>Featured content</p>
          <h2 className={styles.title}>Content that<br /><em>converts.</em></h2>
        </div>
        <p className={styles.desc}>
          A selection of recent work across skincare, makeup, and fragrance.
          Real engagement, real audience — click through to see the comments.
        </p>
      </div>

      <div ref={gridRef} className={`${styles.grid} reveal`}>
        {VIDEOS.map(({ id, label }) => (
          <div key={id} className={styles.videoWrap}>
            <p className={styles.videoLabel}>{label}</p>
            <div className={styles.embedWrap}>
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@ao.beth/video/${id}`}
                data-video-id={id}
                data-embed-from="oembed"
                style={{ maxWidth: '100%', minWidth: '100%', margin: 0 }}
              >
                <section>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.tiktok.com/@ao.beth/video/${id}`}
                  >
                    Watch on TikTok
                  </a>
                </section>
              </blockquote>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <a
          href="https://www.tiktok.com/@ao.beth"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaLink}
        >
          View all content @ao.beth ↗
        </a>
        <a
          href="https://www.instagram.com/lollythecreator"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaLink}
        >
          Instagram @lollythecreator ↗
        </a>
      </div>
    </section>
  )
}
