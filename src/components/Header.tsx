import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, memo } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import SegmentedControl from '@/components/SegmentedControl'
import ThemeToggle from '@/components/ThemeToggle'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useTheme } from '@/hooks/useTheme'
import { EASE_APPLE, EASE_OUT_EXPO, SPRING_SNAPPY } from '@/shared/motion'
import styles from '@/styles/Header/header.module.scss'

const navItems = [
  { path: '/', key: 'home' },
  { path: '/projects', key: 'projects' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' },
] as const

const languages = [
  { value: 'no', label: 'NO' },
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
] as const

type Lang = (typeof languages)[number]['value']

function Header() {
  const { i18n, t } = useTranslation()
  const { pathname } = useLocation()
  const isMobile = useIsMobile(601)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { theme, toggleTheme } = useTheme()

  const currentLang = (i18n.resolvedLanguage ?? 'en') as Lang
  const menuOpen = isMenuOpen && isMobile

  // Hide on scroll down, reveal on scroll up, like Safari's toolbar
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 8)
    setHidden(y > 120 && y > prev && !menuOpen)
  })

  // Close the menu whenever the route changes
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const changeLanguage = (lang: Lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: EASE_APPLE }}
      >
        <Link to="/" className={styles.logo}>
          [ MARBORZ.ONE ]
        </Link>

        {!isMobile && (
          <>
            <nav className={styles.nav}>
              {navItems.map((item) => {
                const active = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${styles.navItem} ${active ? styles.active : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className={styles.navPill}
                        transition={SPRING_SNAPPY}
                      />
                    )}
                    <span className={styles.navLabel}>{t(`nav.${item.key}`)}</span>
                  </Link>
                )
              })}
            </nav>

            <div className={styles.actions}>
              <SegmentedControl
                id="lang"
                options={languages}
                value={currentLang}
                onChange={changeLanguage}
                ariaLabel={t('nav.language')}
              />
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </>
        )}

        {isMobile && (
          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              className={styles.burger}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menu')}
              aria-expanded={menuOpen}
            >
              <motion.span
                className={styles.burgerLine}
                animate={menuOpen ? { y: 0, rotate: 45 } : { y: -4, rotate: 0 }}
                transition={SPRING_SNAPPY}
              />
              <motion.span
                className={styles.burgerLine}
                animate={menuOpen ? { y: 0, rotate: -45 } : { y: 4, rotate: 0 }}
                transition={SPRING_SNAPPY}
              />
            </button>
          </div>
        )}
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25, ease: EASE_APPLE } }}
            transition={{ duration: 0.3, ease: EASE_APPLE }}
          >
            <motion.nav
              className={styles.mobileNav}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navItems.map((item, i) => {
                const active = pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`${styles.mobileNavItem} ${active ? styles.active : ''}`}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={styles.mobileNavNum}>00{i + 1}</span>
                      <span className={styles.mobileNavLabel}>{t(`nav.${item.key}`)}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            <motion.div
              className={styles.mobileLang}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.25 }}
            >
              <span className={styles.mobileLangLabel}>{t('nav.language')}</span>
              <SegmentedControl
                id="lang-mobile"
                options={languages}
                value={currentLang}
                onChange={changeLanguage}
                ariaLabel={t('nav.language')}
                stretch
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(Header)
