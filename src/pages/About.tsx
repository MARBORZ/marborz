import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import HeroTitle from '@/components/motion/HeroTitle'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { EASE_OUT_EXPO, VIEWPORT } from '@/shared/motion'
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

const QUICK_INFO_KEYS = ['location', 'status', 'codingSince', 'focus', 'stack', 'editor'] as const

// How far along each learning step is, in the same order as about.learning.items
const LEARNING_PROGRESS = [1, 0.6, 0.25, 0.1]

export default function About() {
  const { t } = useTranslation()
  const learningItems = t('about.learning.items', { returnObjects: true }) as LearningItem[]
  const principles = t('about.principles.items', { returnObjects: true }) as Principle[]

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t('about.breadcrumb')}</div>
          <div className={styles.status}>{t('about.status')}</div>
        </div>

        <HeroTitle
          className={styles.hero}
          lines={[t('about.hero.line1'), t('about.hero.line2'), t('about.hero.line3')]}
        />

        {/* Background + Quick Info side by side */}
        <div className={styles.infoRow}>
          <Reveal as="section" className={styles.backgroundSection}>
            <div className={styles.sectionLabel}>{t('about.background.label')}</div>
            {t('about.background.body')
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i} className={styles.body}>
                  {paragraph}
                </p>
              ))}
          </Reveal>

          <section className={styles.quickInfoSection}>
            <Reveal className={styles.sectionLabel}>{t('about.quickInfo.label')}</Reveal>
            <RevealGroup className={styles.infoGrid} stagger={0.05}>
              {QUICK_INFO_KEYS.map((key) => (
                <RevealItem key={key} className={styles.infoItem}>
                  <span className={styles.infoKey}>{t(`about.quickInfo.${key}.key`)}</span>
                  <span className={styles.infoValue}>{t(`about.quickInfo.${key}.value`)}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        </div>

        <section className={styles.learningSection}>
          <Reveal>
            <div className={styles.sectionLabel}>{t('about.learning.label')}</div>
            <p className={styles.learningSubtitle}>{t('about.learning.subtitle')}</p>
          </Reveal>
          <RevealGroup className={styles.learningItems}>
            {learningItems.map((item, i) => (
              <RevealItem key={item.level} className={styles.learningItem}>
                <span className={styles.levelNum}>{item.level}</span>
                <span className={styles.levelName}>{item.name}</span>
                <span className={styles.levelStatus}>{item.status}</span>
                <span className={styles.levelTrack} aria-hidden="true">
                  <motion.span
                    className={styles.levelFill}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: LEARNING_PROGRESS[i] ?? 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.2 + i * 0.08 }}
                  />
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className={styles.principlesSection}>
          <Reveal className={styles.sectionLabel}>{t('about.principles.label')}</Reveal>
          <RevealGroup className={styles.principlesList} stagger={0.1}>
            {principles.map((item) => (
              <RevealItem key={item.number} className={styles.principleCard}>
                <span className={styles.principleNum}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
        <Footer title={t('about.footer.next')} href="/contact" />
      </section>
    </>
  )
}
