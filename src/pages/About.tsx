import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useInView } from '@/hooks/useInView'
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
  const isMobile = useIsMobile()

  const infoRef = useInView({ threshold: 0.1 })
  const learningRef = useInView({ threshold: 0.1 })
  const principlesRef = useInView({ threshold: 0.1 })

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
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
        <motion.div
          ref={infoRef.ref}
          className={styles.infoRow}
          initial={!isMobile ? 'hidden' : false}
          animate={!isMobile && infoRef.isInView ? 'visible' : 'hidden'}
          variants={!isMobile ? sectionVariants : undefined}
        >
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
        </motion.div>

        <motion.section
          ref={learningRef.ref}
          className={styles.learningSection}
          initial={!isMobile ? 'hidden' : false}
          animate={!isMobile && learningRef.isInView ? 'visible' : 'hidden'}
          variants={!isMobile ? sectionVariants : undefined}
        >
          <div className={styles.sectionLabel}>{t('about.learning.label')}</div>
          <p className={styles.learningSubtitle}>{t('about.learning.subtitle')}</p>
          <motion.div
            className={styles.learningItems}
            variants={!isMobile ? containerVariants : undefined}
            initial={!isMobile ? 'hidden' : false}
            animate={!isMobile && learningRef.isInView ? 'visible' : 'hidden'}
          >
            {(t('about.learning.items', { returnObjects: true }) as LearningItem[]).map((item) => (
              <motion.div
                key={item.level}
                className={styles.learningItem}
                variants={!isMobile ? itemVariants : undefined}
              >
                <span className={styles.levelIndicator} />
                <span className={styles.levelName}>{item.name}</span>
                <span className={styles.levelStatus}>{item.status}</span>
                <span className={styles.levelNum}>{item.level}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          ref={principlesRef.ref}
          className={styles.principlesSection}
          initial={!isMobile ? 'hidden' : false}
          animate={!isMobile && principlesRef.isInView ? 'visible' : 'hidden'}
          variants={!isMobile ? sectionVariants : undefined}
        >
          <div className={styles.sectionLabel}>{t('about.principles.label')}</div>
          <motion.div
            className={styles.principlesList}
            variants={!isMobile ? containerVariants : undefined}
            initial={!isMobile ? 'hidden' : false}
            animate={!isMobile && principlesRef.isInView ? 'visible' : 'hidden'}
          >
            {(t('about.principles.items', { returnObjects: true }) as Principle[]).map((item) => (
              <motion.div
                key={item.number}
                className={styles.principleCard}
                variants={!isMobile ? itemVariants : undefined}
              >
                <span className={styles.principleIndicator}>■</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <Footer title={t('about.footer.next')} href="/contact" />
      </section>
    </>
  )
}
