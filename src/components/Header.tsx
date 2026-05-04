import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef, useCallback, memo } from 'react'
import styles from '@/styles/Header/header.module.scss'

function Header() {
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  // Unified effect for resize and click outside
  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const mobile = window.innerWidth <= 600
        setIsMobile(mobile)

        // Close menu when switching to desktop
        if (!mobile && isMenuOpen) {
          setIsMenuOpen(false)
        }
      }, 150)
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        burgerRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !burgerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/projects', key: 'projects' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ]

  const languages = ['NO', 'EN', 'RU']
  const currentLang = i18n.language.toUpperCase()

  const handleNavClick = useCallback((path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }, [navigate])

  const handleLangChange = useCallback((lang: string) => {
    i18n.changeLanguage(lang.toLowerCase())
    setIsMenuOpen(false)
  }, [i18n])

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        [ MARBORZ.ONE ]
      </div>

      {/* Desktop nav - only render on desktop */}
      {!isMobile && (
        <>
          <nav className={`${styles.nav} ${styles.desktopNav}`}>
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

          <div className={`${styles.lang} ${styles.desktopLang}`}>
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
        </>
      )}

      {/* Mobile burger - only render on mobile */}
      {isMobile && (
        <button
          ref={burgerRef}
          type='button'
          className={styles.burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Mobile menu - only render on mobile */}
      {isMobile && isMenuOpen && (
        <div ref={menuRef} className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <button
                key={item.path}
                type='button'
                className={`${styles.mobileNavItem} ${location.pathname === item.path ? styles.active : ''}`}
                onClick={() => handleNavClick(item.path)}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          <div className={styles.mobileLang}>
            {languages.map((lang) => (
              <button
                type='button'
                key={lang}
                className={`${styles.mobileLangBtn} ${lang === currentLang ? styles.active : ''}`}
                onClick={() => handleLangChange(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default memo(Header)
