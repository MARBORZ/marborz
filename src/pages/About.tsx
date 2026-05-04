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
    },
  }

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
        {!isMobile && (
          <motion.div
            ref={infoRef.ref}
            className={styles.infoRow}
            initial="hidden"
            animate={infoRef.isInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
        )}

        {isMobile && (
          <div ref={infoRef.ref} className={styles.infoRow}>
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
        )}

        {!isMobile && (
          <motion.section
            ref={learningRef.ref}
            className={styles.learningSection}
            initial="hidden"
            animate={learningRef.isInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={styles.sectionLabel}>{t('about.learning.label')}</div>
            <p className={styles.learningSubtitle}>{t('about.learning.subtitle')}</p>
            <motion.div
              className={styles.learningItems}
              variants={containerVariants}
              initial="hidden"
              animate={learningRef.isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {(t('about.learning.items', { returnObjects: true }) as LearningItem[]).map((item) => (
                <motion.div
                  key={item.level}
                  className={styles.learningItem}
                  variants={itemVariants}
                >
                  <span className={styles.levelIndicator} />
                  <span className={styles.levelName}>{item.name}</span>
                  <span className={styles.levelStatus}>{item.status}</span>
                  <span className={styles.levelNum}>{item.level}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {isMobile && (
          <section ref={learningRef.ref} className={styles.learningSection}>
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
        )}

        {!isMobile && (
          <motion.section
            ref={principlesRef.ref}
            className={styles.principlesSection}
            initial="hidden"
            animate={principlesRef.isInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={styles.sectionLabel}>{t('about.principles.label')}</div>
            <motion.div
              className={styles.principlesList}
              variants={containerVariants}
              initial="hidden"
              animate={principlesRef.isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {(t('about.principles.items', { returnObjects: true }) as Principle[]).map((item) => (
                <motion.div
                  key={item.number}
                  className={styles.principleCard}
                  variants={itemVariants}
                >
                  <span className={styles.principleIndicator}>■</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {isMobile && (
          <section ref={principlesRef.ref} className={styles.principlesSection}>
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
        )}
        <Footer title={t('about.footer.next')} href="/contact" />
      </section>
    </>
  )
}
