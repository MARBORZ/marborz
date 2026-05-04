import { useTranslation } from 'react-i18next'
import Footer from '@/components/Footer'
import styles from '@/styles/About/about.module.scss'

interface LearningItem {
  level: string
  name: string
  status: string
}

interface Principle {
  number: string
  title: string
  body: string
}

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t('about.breadcrumb')}</div>
          <div className={styles.status}>{t('about.status')}</div>
        </div>

        <div className={styles.hero}>
          <h1>{t('about.hero.line1')}</h1>
          <h1>{t('about.hero.line2')}</h1>
          <h1>{t('about.hero.line3')}</h1>
        </div>

        {/* Background + Quick Info side by side */}
        <div className={styles.infoRow}>
          <section className={styles.backgroundSection}>
            <div className={styles.sectionLabel}>{t('about.background.label')}</div>
            <p className={styles.body}>{t('about.background.body')}</p>
          </section>

          <section className={styles.quickInfoSection}>
            <div className={styles.sectionLabel}>{t('about.quickInfo.label')}</div>
            <div className={styles.infoGrid}>
              {['location', 'status', 'codingSince', 'focus', 'stack', 'editor'].map((key) => (
                <div key={key} className={styles.infoItem}>
                  <span className={styles.infoKey}>{t(`about.quickInfo.${key}.key`)}</span>
                  <span className={styles.infoValue}>{t(`about.quickInfo.${key}.value`)}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className={styles.learningSection}>
          <div className={styles.sectionLabel}>{t('about.learning.label')}</div>
          <p className={styles.learningSubtitle}>{t('about.learning.subtitle')}</p>
          <div className={styles.learningItems}>
            {(t('about.learning.items', { returnObjects: true }) as LearningItem[]).map((item) => (
              <div key={item.level} className={styles.learningItem}>
                <span className={styles.levelIndicator} />
                <span className={styles.levelName}>{item.name}</span>
                <span className={styles.levelStatus}>{item.status}</span>
                <span className={styles.levelNum}>{item.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.sectionLabel}>{t('about.principles.label')}</div>
          <div className={styles.principlesList}>
            {(t('about.principles.items', { returnObjects: true }) as Principle[]).map((item) => (
              <div key={item.number} className={styles.principleCard}>
                <span className={styles.principleIndicator}>■</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer title={t('about.footer.next')} href="/contact" />
      </section>
    </>
  )
}
