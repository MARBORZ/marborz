import { useEffect, useMemo, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { allProjects } from '@/shared/projects'
import styles from '@/styles/ProjectModal/projectModal.module.scss'

interface ProjectModalProps {
  projectId: string | null
  onClose: () => void
}

function getYoutubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}` : null
}

function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const { t } = useTranslation()

  const project = useMemo(() =>
    projectId ? allProjects.find((p) => p.id === projectId) : null,
    [projectId]
  )

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const youtubeEmbed = project.videoUrl ? getYoutubeEmbedUrl(project.videoUrl) : null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.mediaSection}>
          {youtubeEmbed ? (
            <iframe
              src={youtubeEmbed}
              className={styles.iframe}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : project.videoUrl ? (
            <video
              src={project.videoUrl}
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} className={styles.image} />
          ) : (
            <div className={styles.placeholder}>[ NO PREVIEW ]</div>
          )}
        </div>

        <div className={styles.body}>
          <div className={styles.topRow}>
            <div className={styles.meta}>
              <span className={styles.num}>/{project.number}</span>
              <span className={styles.statusBadge}>{t(`common.statuses.${project.status}`)}</span>
            </div>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
          </div>

          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.stack}>{project.stack}</p>

          {project.fullDescription && (
            <p className={styles.description}>{project.fullDescription}</p>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoLink}
            >
              OPEN DEMO →
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

export default memo(ProjectModal)
