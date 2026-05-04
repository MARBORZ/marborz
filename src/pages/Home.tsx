import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import { allProjects } from '@/shared/projects'
import { SITE_CONFIG } from '@/shared/config'
import styles from '@/styles/Home/home.module.scss'

export default function Home() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleCloseModal = useCallback(() => {
    setActiveId(null)
  }, [])

  const previewProjects = allProjects.slice(0, 4)

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

        <section className={styles.projectsSection}>
          <div className={styles.sectionLabel}>{t('home.projects.label')}</div>
          <p className={styles.projectsSubtitle}>{t('home.projects.subtitle')}</p>

          <div className={styles.projectsList}>
            {previewProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={styles.projectRow}
                onClick={() => setActiveId(project.id)}
              >
                <span className={styles.rowNum}>/{project.number}</span>
                <span className={styles.rowTitle}>{project.title}</span>
                <span className={styles.rowSub}>— {project.subtitle}</span>
                <span className={styles.rowStack}>{project.stack}</span>
                <span className={styles.rowStatus}>{t(`common.statuses.${project.status}`)}</span>
                <span className={styles.rowArrow}>→</span>
              </button>
            ))}
          </div>

          <Link to="/projects" className={styles.viewAll}>
            {t('home.projects.viewAll')}
          </Link>
        </section>

        <section className={styles.approach}>
          <div className={styles.sectionLabel}>{t('home.approach.label')}</div>
          <div className={styles.approachContent}>
            <h3>{t('home.approach.line1')}</h3>
            <h3>{t('home.approach.line2')}</h3>
          </div>
          <p className={styles.body}>{t('home.approach.body')}</p>
        </section>

        <section className={styles.cta}>
          <div className={styles.sectionLabel}>{t('home.cta.label')}</div>
          <a href={`mailto:${SITE_CONFIG.email}`} className={styles.emailLink}>
            {SITE_CONFIG.email} →
          </a>
        </section>
        <Footer title={t('home.footer.next')} href="/projects" />
      </section>

      <ProjectModal projectId={activeId} onClose={handleCloseModal} />
    </>
  )
}
