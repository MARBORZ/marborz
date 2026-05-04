import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import { allProjects, PROJECT_FILTERS, type ProjectStatus } from '@/shared/projects'
import styles from '@/styles/Projects/projects.module.scss'

export default function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<ProjectStatus | 'all'>('all')
  const [activeId, setActiveId] = useState<string | null>(null)

  const filterKeys: Record<'all' | ProjectStatus, string> = {
    all: 'all',
    active: 'active',
    shipped: 'shipped',
    experiment: 'experiments',
    planned: 'planned',
  }

  const handleCloseModal = useCallback(() => {
    setActiveId(null)
  }, [])

  const filtered = filter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.status === filter)

  const featured = filtered.find((p) => p.status === 'active') ?? filtered[0]
  const gridProjects = filtered.filter((p) => p.id !== featured?.id && (p.status === 'active' || p.status === 'shipped')).slice(0, 4)
  const archiveProjects = filtered.filter((p) => p.status === 'experiment' || p.status === 'planned')

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t('projects.breadcrumb')}</div>
          <div className={styles.count}>{t('projects.count')}</div>
        </div>

        <div className={styles.hero}>
          <h1>{t('projects.hero.line1')}</h1>
          <h1>{t('projects.hero.line2')}</h1>
        </div>

        <div className={styles.filters}>
          <span className={styles.filterLabel}>{t('projects.filter.label')}</span>
          <div className={styles.filterButtons}>
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? styles.active : ''}
                onClick={() => setFilter(f)}
              >
                {t(`projects.filter.${filterKeys[f]}`)}
              </button>
            ))}
          </div>
          <span className={styles.filterCount}>{filtered.length} / {allProjects.length}</span>
        </div>

        {featured && (
          <div className={styles.featuredSection}>
            <div className={styles.featuredLabel}>{t('projects.featured.label')}</div>
            <button
              type="button"
              className={styles.featuredProject}
              onClick={() => setActiveId(featured.id)}
            >
              <div className={styles.featuredMedia}>
                {featured.imageUrl
                  ? <img src={featured.imageUrl} alt={featured.title} className={styles.featuredImg} />
                  : <span>[ DEMO VIDEO PLACEHOLDER ]</span>
                }
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredNum}>/{featured.number}</span>
                  <span className={styles.featuredStatus}>{t(`common.statuses.${featured.status}`)}</span>
                </div>
                <span className={styles.featuredTitle}>{featured.title}</span>
                <p className={styles.featuredDescription}>
                  {t(`projects.list.${featured.id}.description`, { defaultValue: featured.stack })}
                </p>
              </div>
            </button>
          </div>
        )}

        {gridProjects.length > 0 && (
          <div className={styles.projectsGrid}>
            {gridProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={styles.projectCard}
                onClick={() => setActiveId(project.id)}
              >
                <div className={styles.cardMedia}>
                  {project.imageUrl
                    ? <img src={project.imageUrl} alt={project.title} className={styles.cardImg} />
                    : <span>[ IMAGE PLACEHOLDER ]</span>
                  }
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardNum}>/{project.number}</span>
                    <span className={styles.cardStatus}>
                      {t(`common.statuses.${project.status}`)}
                    </span>
                  </div>
                  <span className={styles.cardTitle}>{project.title}</span>
                  <p className={styles.cardDescription}>
                    {t(`projects.list.${project.id}.description`, { defaultValue: project.stack })}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {archiveProjects.length > 0 && (
          <div className={styles.archiveSection}>
            <div className={styles.archiveLabel}>{t('projects.archive.label')}</div>
            <div className={styles.archiveList}>
              {archiveProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={styles.archiveRow}
                  onClick={() => setActiveId(project.id)}
                >
                  <span className={styles.archiveNum}>/{project.number}</span>
                  <span className={styles.archiveTitle}>{project.title}</span>
                  <span className={styles.archiveSub}>— {project.subtitle}</span>
                  <span className={styles.archiveStack}>{project.stack}</span>
                  <span className={styles.archiveArrow}>→</span>
                </button>
              ))}
            </div>
          </div>
        )}
        <Footer title={t('projects.footer.next')} href="/about" />
      </section>

      <ProjectModal projectId={activeId} onClose={handleCloseModal} />
    </>
  )
}
