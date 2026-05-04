import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '@/styles/NotFound/notFound.module.scss'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.breadcrumb}>{t('notFound.breadcrumb')}</div>
        <div className={styles.status}>{t('home.location')}</div>
      </div>

      <div className={styles.hero}>
        <h1>404</h1>
        <h1>{t('notFound.line2')}</h1>
      </div>

      <p className={styles.body}>
        {t('notFound.body')}
      </p>

      <Link to="/" className={styles.homeLink}>
        {t('notFound.link')}
      </Link>
    </section>
  )
}
