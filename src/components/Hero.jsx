import useReveal from './useReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgName} aria-hidden="true">LOLLY</div>

      <div className={styles.inner}>
        <div className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <img src="/hero.jpg" alt="Lolly" className={styles.photo} />
            <div className={styles.photoTag}>Beauty &amp; Lifestyle Creator · Birmingham</div>
          </div>
        </div>

        <div ref={ref} className={`${styles.introCol} reveal`}>
          <p className={styles.hi}>Hi, I'm Lolly 👋🏾</p>
          <h1 className={styles.headline}>
            It's Lolly —<br />
            <em>popping</em> into<br />
            your feed.
          </h1>
          <p className={styles.sub}>
            Beauty content made for deeper skin tones. Honest reviews, real results, zero vague advice. Trusted by brands across luxury, indie, and K-beauty.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statVal}>1,180+</span>
              <span className={styles.statLbl}>TikTok</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>1900+</span>
              <span className={styles.statLbl}>Instagram</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>12–19%</span>
              <span className={styles.statLbl}>Engagement</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>9+</span>
              <span className={styles.statLbl}>Brand deals</span>
            </div>
          </div>

          <div className={styles.handles}>
            <a className={styles.handle} href="https://www.tiktok.com/@lollythecreator" target="_blank" rel="noreferrer">@lollythecreator ↗</a>
            <a className={styles.handle} href="https://www.instagram.com/lollythecreator" target="_blank" rel="noreferrer">@lollythecreator ↗</a>
          </div>

          <a href="#contact" className={styles.cta}>Work with me</a>
        </div>
      </div>

      <div className={styles.ticker}>
        {['Skincare','·','Makeup','·','Fragrance','·','GRWM','·','UGC','·','K-Beauty','·','Deeper Skin Tones','·'].map((w, i) => (
          <span key={i} className={w === '·' ? styles.tickerDot : ''}>{w}</span>
        ))}
      </div>
    </section>
  )
}
