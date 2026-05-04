import styles from './ProjectCardSkeleton.module.scss'

export default function ProjectCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.media} />
      <div className={styles.body}>
        <div className={styles.meta}>
          <div className={styles.num} />
          <div className={styles.status} />
        </div>
        <div className={styles.title} />
        <div className={styles.description} />
      </div>
    </div>
  )
}
