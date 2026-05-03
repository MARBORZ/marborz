import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '@/styles/Header/header.module.scss'

export default function Header() {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/projects', key: 'projects' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ]

  const languages = ['NO', 'EN', 'RU']
  const currentLang = i18n.language.toUpperCase()

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        [ MARBORZ.ONE ]
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate(item.path)
            }}
          >
            {t(`nav.${item.key}`)}
          </a>
        ))}
      </nav>

      <div className={styles.lang}>
        {languages.map((lang) => (
          <button
            type='button'
            key={lang}
            className={`${styles.langBtn} ${lang === currentLang ? styles.active : ''}`}
            onClick={() => i18n.changeLanguage(lang.toLowerCase())}
          >
            {lang}
          </button>
        ))}
      </div>
    </header>
  )
}
