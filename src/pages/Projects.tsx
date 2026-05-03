import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/Footer'
import { allProjects, type ProjectStatus } from '@/shared/projects'
import styles from '@/styles/Projects/projects.module.scss'

export default function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<ProjectStatus | 'all'>('all')

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
            {(['all', 'active', 'shipped', 'experiment'] as const).map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? styles.active : ''}
                onClick={() => setFilter(f)}
              >
                {t(`projects.filter.${f === 'all' ? 'all' : f === 'active' ? 'active' : f === 'shipped' ? 'shipped' : 'experiments'}`)}
              </button>
            ))}
          </div>
          <span className={styles.filterCount}>{filtered.length} / {allProjects.length}</span>
        </div>

        {featured && (
          <div className={styles.featuredSection}>
            <div className={styles.featuredLabel}>{t('projects.featured.label')}</div>
            <div className={styles.featuredProject}>
              <div className={styles.featuredMedia}>
                <span>[ DEMO VIDEO PLACEHOLDER ]</span>
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
            </div>
          </div>
        )}

        {gridProjects.length > 0 && (
          <div className={styles.projectsGrid}>
            {gridProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.cardMedia}>
                  <span>[ IMAGE PLACEHOLDER ]</span>
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
              </div>
            ))}
          </div>
        )}

        {archiveProjects.length > 0 && (
          <div className={styles.archiveSection}>
            <div className={styles.archiveLabel}>{t('projects.archive.label')}</div>
            <div className={styles.archiveList}>
              {archiveProjects.map((project) => (
                <div key={project.id} className={styles.archiveRow}>
                  <span className={styles.archiveNum}>/{project.number}</span>
                  <span className={styles.archiveTitle}>{project.title}</span>
                  <span className={styles.archiveSub}>— {project.subtitle}</span>
                  <span className={styles.archiveStack}>{project.stack}</span>
                  <span className={styles.archiveArrow}>→</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <Footer title={t('projects.footer.next')} href="/about" />
      </section>
    </>
  )
}
