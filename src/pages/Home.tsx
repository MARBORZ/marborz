import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import { allProjects } from '@/shared/projects'
import { SITE_CONFIG } from '@/shared/config'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useInView } from '@/hooks/useInView'
import styles from '@/styles/Home/home.module.scss'

export default function Home() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState<string | null>(null)
  const isMobile = useIsMobile()

  const projectsRef = useInView({ threshold: 0.1 })
  const approachRef = useInView({ threshold: 0.1 })
  const ctaRef = useInView({ threshold: 0.1 })

  const handleCloseModal = useCallback(() => {
    setActiveId(null)
  }, [])

  const previewProjects = allProjects.slice(0, 4)

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t('home.breadcrumb')}</div>
          <div className={styles.location}>{t('home.location')}</div>
        </div>

        <div className={styles.hero}>
          <h1>{t('home.hero.line1')}</h1>
          <h1>{t('home.hero.line2')}</h1>
          <h1>{t('home.hero.line3')}</h1>
        </div>

        <motion.section
          ref={projectsRef.ref}
          className={styles.projectsSection}
          initial={!isMobile ? 'hidden' : false}
          animate={!isMobile && projectsRef.isInView ? 'visible' : 'hidden'}
          variants={!isMobile ? sectionVariants : undefined}
        >
          <div className={styles.sectionLabel}>{t('home.projects.label')}</div>
          <p className={styles.projectsSubtitle}>{t('home.projects.subtitle')}</p>

          <motion.div
            className={styles.projectsList}
            variants={!isMobile ? containerVariants : undefined}
            initial={!isMobile ? 'hidden' : false}
            animate={!isMobile && projectsRef.isInView ? 'visible' : 'hidden'}
          >
            {previewProjects.map((project) => (
              <motion.button
                key={project.id}
                type="button"
                className={styles.projectRow}
                onClick={() => setActiveId(project.id)}
                variants={!isMobile ? itemVariants : undefined}
              >
                <span className={styles.rowNum}>/{project.number}</span>
                <span className={styles.rowTitle}>{project.title}</span>
                <span className={styles.rowSub}>— {project.subtitle}</span>
                <span className={styles.rowStack}>{project.stack}</span>
                <span className={styles.rowStatus}>{t(`common.statuses.${project.status}`)}</span>
                <span className={styles.rowArrow}>→</span>
              </motion.button>
            ))}
          </motion.div>

          <Link to="/projects" className={styles.viewAll}>
            {t('home.projects.viewAll')}
          </Link>
        </motion.section>

        <motion.section
          ref={approachRef.ref}
          className={styles.approach}
          initial={!isMobile ? 'hidden' : false}
          animate={!isMobile && approachRef.isInView ? 'visible' : 'hidden'}
          variants={!isMobile ? sectionVariants : undefined}
        >
          <div className={styles.sectionLabel}>{t('home.approach.label')}</div>
          <div className={styles.approachContent}>
            <h3>{t('home.approach.line1')}</h3>
            <h3>{t('home.approach.line2')}</h3>
          </div>
          <p className={styles.body}>{t('home.approach.body')}</p>
        </motion.section>

        <motion.section
          ref={ctaRef.ref}
          className={styles.cta}
          initial={!isMobile ? 'hidden' : false}
          animate={!isMobile && ctaRef.isInView ? 'visible' : 'hidden'}
          variants={!isMobile ? sectionVariants : undefined}
        >
          <div className={styles.sectionLabel}>{t('home.cta.label')}</div>
          <a href={`mailto:${SITE_CONFIG.email}`} className={styles.emailLink}>
            {SITE_CONFIG.email} →
          </a>
        </motion.section>
        <Footer title={t('home.footer.next')} href="/projects" />
      </section>

      <ProjectModal projectId={activeId} onClose={handleCloseModal} />
    </>
  )
}
