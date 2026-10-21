import styles from './PageSkeleton.module.scss'

export default function PageSkeleton() {
  return (
    <div className={styles.page} aria-busy="true">
      <div className={styles.topBar}>
        <div className={`${styles.block} ${styles.breadcrumb}`} />
        <div className={`${styles.block} ${styles.status}`} />
      </div>
      <div className={styles.hero}>
        <div className={`${styles.block} ${styles.heroTitle}`} />
        <div className={`${styles.block} ${styles.heroSubtitle}`} />
      </div>
      <div className={styles.content}>
        <div className={`${styles.block} ${styles.line}`} />
        <div className={`${styles.block} ${styles.line}`} />
        <div className={`${styles.block} ${styles.line}`} />
      </div>
    </div>
  )
}
