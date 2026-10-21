import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import MediaImage from '@/components/MediaImage'
import StatusPill from '@/components/StatusPill'
import HeroTitle from '@/components/motion/HeroTitle'
import ScrollText from '@/components/motion/ScrollText'
import { Reveal, RevealGroup } from '@/components/motion/Reveal'
import { allProjects } from '@/shared/projects'
import { SITE_CONFIG } from '@/shared/config'
import { EASE_APPLE, revealVariants } from '@/shared/motion'
import { MEDIA } from '@/shared/breakpoints'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/Home/home.module.scss'

const previewProjects = allProjects.slice(0, 4)

export default function Home() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const finePointer = useMediaQuery(MEDIA.finePointer)

  // Floating preview that trails the cursor over the project list
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 350, damping: 35, mass: 0.6 })
  const y = useSpring(mouseY, { stiffness: 350, damping: 35, mass: 0.6 })

  const handleCloseModal = useCallback(() => {
    setActiveId(null)
  }, [])

  const hovered = previewProjects.find((p) => p.id === hoveredId)

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t('home.breadcrumb')}</div>
          <div className={styles.location}>{t('home.location')}</div>
        </div>

        <HeroTitle
          className={styles.hero}
          lines={[t('home.hero.line1'), t('home.hero.line2'), t('home.hero.line3')]}
        />

        <section className={styles.projectsSection}>
          <Reveal>
            <div className={styles.sectionLabel}>{t('home.projects.label')}</div>
            <p className={styles.projectsSubtitle}>{t('home.projects.subtitle')}</p>
          </Reveal>

          <RevealGroup
            className={styles.projectsList}
            onPointerEnter={(e) => {
              // Start at the cursor instead of springing in from the corner
              mouseX.set(e.clientX)
              mouseY.set(e.clientY)
              x.jump(e.clientX)
              y.jump(e.clientY)
            }}
            onPointerMove={(e) => {
              mouseX.set(e.clientX)
              mouseY.set(e.clientY)
            }}
            onPointerLeave={() => setHoveredId(null)}
          >
            {previewProjects.map((project) => (
              <motion.button
                key={project.id}
                type="button"
                className={styles.projectRow}
                onClick={() => {
                  setHoveredId(null)
                  setActiveId(project.id)
                }}
                onPointerEnter={(e) => {
                  if (e.pointerType === 'mouse' && finePointer) setHoveredId(project.id)
                }}
                disabled={project.status === 'planned'}
                data-soon={t('common.comingSoon')}
                variants={revealVariants}
                whileTap={{ scale: 0.99 }}
              >
                <span className={styles.rowNum}>/{project.number}</span>
                <span className={styles.rowTitle}>{project.title}</span>
                <span className={styles.rowSub}>{t(`projects.list.${project.id}.tagline`)}</span>
                <span className={styles.rowStack}>{project.stack}</span>
                <StatusPill status={project.status} className={styles.rowStatus} />
                <span className={styles.rowArrow} aria-hidden="true">
                  →
                </span>
              </motion.button>
            ))}
          </RevealGroup>

          <Reveal className={styles.viewAllWrap}>
            <Link to="/projects" className={styles.viewAll}>
              {t('home.projects.viewAll')}
            </Link>
          </Reveal>
        </section>

        <section className={styles.approach}>
          <Reveal>
            <div className={styles.sectionLabel}>{t('home.approach.label')}</div>
            <div className={styles.approachContent}>
              <h3>{t('home.approach.line1')}</h3>
              <h3>{t('home.approach.line2')}</h3>
            </div>
          </Reveal>
          <ScrollText text={t('home.approach.body')} className={styles.body} />
        </section>

        <Reveal as="section" className={styles.cta}>
          <div className={styles.sectionLabel}>{t('home.cta.label')}</div>
          <a href={`mailto:${SITE_CONFIG.email}`} className={styles.emailLink}>
            <span className={styles.emailText}>{SITE_CONFIG.email}</span>
            <span className={styles.emailArrow} aria-hidden="true">
              →
            </span>
          </a>
        </Reveal>
        <Footer title={t('home.footer.next')} href="/projects" />
      </section>

      {/* Portaled so the page's enter transform can't offset this fixed element */}
      {createPortal(
        <AnimatePresence>
          {hovered && (
            <motion.div
              className={styles.hoverPreview}
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: EASE_APPLE }}
              aria-hidden="true"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={hovered.id}
                  className={styles.hoverPreviewImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE_APPLE }}
                >
                  <MediaImage src={hovered.imageUrl} alt="" eager />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}

      <ProjectModal projectId={activeId} onClose={handleCloseModal} />
    </>
  )
}
