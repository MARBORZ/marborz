import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HeroTitle from '@/components/motion/HeroTitle'
import { Reveal } from '@/components/motion/Reveal'
import styles from '@/styles/NotFound/notFound.module.scss'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.breadcrumb}>{t('notFound.breadcrumb')}</div>
        <div className={styles.status}>{t('home.location')}</div>
      </div>

      <HeroTitle className={styles.hero} lines={['404', t('notFound.line2')]} />

      <Reveal delay={0.3}>
        <p className={styles.body}>
          {t('notFound.body')}
        </p>

        <Link to="/" className={styles.homeLink}>
          {t('notFound.link')}
        </Link>
      </Reveal>
    </section>
  )
}
