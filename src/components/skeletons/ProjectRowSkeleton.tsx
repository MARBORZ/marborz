import styles from './ProjectRowSkeleton.module.scss'

export default function ProjectRowSkeleton() {
  return (
    <div className={styles.row}>
      <div className={styles.num} />
      <div className={styles.title} />
      <div className={styles.sub} />
      <div className={styles.stack} />
      <div className={styles.arrow} />
    </div>
  )
}
