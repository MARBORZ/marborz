import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '@/styles/NotFound/notFound.module.scss'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.breadcrumb}>404 / {t('nav.notFound', { defaultValue: 'NOT FOUND' })}</div>
        <div className={styles.status}>{t('home.location')}</div>
      </div>

      <div className={styles.hero}>
        <h1>404</h1>
        <h1>Page not found.</h1>
      </div>

      <p className={styles.body}>
        The page you're looking for doesn't exist or was moved.
        Nothing broken — just a wrong turn.
      </p>

      <Link to="/" className={styles.homeLink}>
        ← {t('nav.home', { defaultValue: 'HOME' })}
      </Link>
    </section>
  )
}
