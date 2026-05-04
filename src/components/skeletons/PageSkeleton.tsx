import styles from './PageSkeleton.module.scss'

export default function PageSkeleton() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.breadcrumb} />
        <div className={styles.status} />
      </div>
      <div className={styles.hero}>
        <div className={styles.heroTitle} />
        <div className={styles.heroSubtitle} />
      </div>
      <div className={styles.content}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  )
}
