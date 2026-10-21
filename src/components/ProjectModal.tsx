import { useEffect, useRef, useState, memo } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion, useDragControls, type PanInfo } from 'framer-motion'
import { allProjects, type Project } from '@/shared/projects'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useOverlay } from '@/hooks/useOverlay'
import { MEDIA } from '@/shared/breakpoints'
import { EASE_APPLE, SPRING_SOFT, revealVariants, staggerVariants } from '@/shared/motion'
import MediaImage from '@/components/MediaImage'
import StatusPill from '@/components/StatusPill'
import styles from '@/styles/ProjectModal/projectModal.module.scss'

interface ProjectModalProps {
  projectId: string | null
  onClose: () => void
}

function getYoutubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}`
    : null
}

const contentVariants = staggerVariants(0.06, 0.15)

function ModalMedia({ project }: { project: Project }) {
  const { t } = useTranslation()
  const [videoReady, setVideoReady] = useState(false)
  const youtubeEmbed = project.videoUrl ? getYoutubeEmbedUrl(project.videoUrl) : null

  if (youtubeEmbed) {
    return (
      <iframe
        src={youtubeEmbed}
        title={project.title}
        className={styles.iframe}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )
  }

  return (
    <>
      {/* Screenshot doubles as the poster, with its own skeleton while it loads */}
      <MediaImage src={project.imageUrl} alt={project.title} className={styles.poster} eager />

      {project.videoUrl && (
        <>
          <motion.video
            src={project.videoUrl}
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoReady ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE_APPLE }}
          />
          <AnimatePresence>
            {!videoReady && (
              <motion.span
                className={styles.loadingChip}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: EASE_APPLE }}
              >
                <span className={styles.loadingDot} aria-hidden="true" />
                {t('projects.modal.loading')}
              </motion.span>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

function ModalPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useTranslation()
  const isMobile = useMediaQuery(MEDIA.mobileLg)
  const dragControls = useDragControls()
  const closeRef = useRef<HTMLButtonElement>(null)

  useOverlay(true, onClose)

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true })
  }, [])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 120 || info.velocity.y > 600) onClose()
  }

  const desc = t(`projects.list.${project.id}.fullDescription`, { defaultValue: '' })

  const panelMotion = isMobile
    ? {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' },
        transition: { type: 'spring' as const, visualDuration: 0.45, bounce: 0.12 },
      }
    : {
        initial: { opacity: 0, scale: 0.94, y: 30 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.97, y: 12, transition: { duration: 0.25, ease: EASE_APPLE } },
        transition: SPRING_SOFT,
      }

  return (
    <motion.div
      className={styles.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE_APPLE }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        drag={isMobile ? 'y' : false}
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.7 }}
        onDragEnd={handleDragEnd}
        {...panelMotion}
      >
        {isMobile && (
          <div className={styles.grabberArea} onPointerDown={(e) => dragControls.start(e)}>
            <span className={styles.grabber} />
          </div>
        )}

        <div className={styles.scroll}>
          <div
            className={styles.mediaSection}
            onPointerDown={isMobile ? (e) => dragControls.start(e) : undefined}
          >
            <ModalMedia project={project} />
          </div>

          <motion.div className={styles.body} variants={contentVariants} initial="hidden" animate="visible">
            <motion.div className={styles.topRow} variants={revealVariants}>
              <div className={styles.meta}>
                <span className={styles.num}>/{project.number}</span>
                <StatusPill status={project.status} />
              </div>
            </motion.div>

            <motion.h2 id="project-modal-title" className={styles.title} variants={revealVariants}>
              {project.title}
            </motion.h2>
            <motion.p className={styles.stack} variants={revealVariants}>
              {project.stack}
            </motion.p>

            {desc && (
              <motion.p className={styles.description} variants={revealVariants}>
                {desc}
              </motion.p>
            )}

            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoLink}
                variants={revealVariants}
                whileTap={{ scale: 0.97 }}
              >
                {t('projects.modal.openDemo')}
                <span className={styles.demoArrow} aria-hidden="true">
                  ↗
                </span>
              </motion.a>
            )}
          </motion.div>
        </div>

        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label={t('projects.modal.close')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectId ? allProjects.find((p) => p.id === projectId) : undefined

  return createPortal(
    <AnimatePresence>
      {project && <ModalPanel key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>,
    document.body,
  )
}

export default memo(ProjectModal)
