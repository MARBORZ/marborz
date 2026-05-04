import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import styles from '@/styles/Footer/footer.module.scss'

function Footer({
  title,
  href,
}: {
  title: string
  href: string
}) {
  const { t } = useTranslation()

  return (
    <section className={styles.footer}>
      <span>{t('common.copyright')}</span>
      <Link to={href}>{title}</Link>
    </section>
  )
}

export default memo(Footer)
