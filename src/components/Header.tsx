import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useRef, useCallback, memo } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import SegmentedControl from '@/components/SegmentedControl'
import ThemeToggle from '@/components/ThemeToggle'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useOverlay } from '@/hooks/useOverlay'
import { useTheme } from '@/hooks/useTheme'
import { MEDIA } from '@/shared/breakpoints'
import { EASE_APPLE, SPRING_SNAPPY, revealVariants, staggerVariants } from '@/shared/motion'
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

// Ignore tiny direction changes (iOS momentum scrolling) when deciding to hide the header
const SCROLL_THRESHOLD = 10

function Header() {
  const { i18n, t } = useTranslation()
  const { pathname } = useLocation()
  const isMobile = useMediaQuery(MEDIA.mobileLg)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { theme, toggleTheme } = useTheme()
  const lastY = useRef(0)

  const currentLang = (i18n.resolvedLanguage ?? 'en') as Lang
  const menuOpen = isMenuOpen && isMobile
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useOverlay(menuOpen, closeMenu)

  // Hide on scroll down, reveal on scroll up, like Safari's toolbar.
  // React bails out of same-value updates, so this only re-renders when something flips.
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 8)
    const delta = y - lastY.current
    if (Math.abs(delta) < SCROLL_THRESHOLD) return
    setHidden(delta > 0 && y > 120)
    lastY.current = y
  })

  // Close the menu whenever the route changes
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setIsMenuOpen(false)
  }

  const languageControl = (stretch: boolean) => (
    <SegmentedControl
      options={languages}
      value={currentLang}
      onChange={(lang: Lang) => i18n.changeLanguage(lang)}
      ariaLabel={t('nav.language')}
      stretch={stretch}
    />
  )

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}
        animate={{ y: hidden && !menuOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: EASE_APPLE }}
      >
        <Link to="/" className={styles.logo}>
          [ MARBORZ.ONE ]
        </Link>

        {!isMobile && (
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
                    <motion.span layoutId="nav-pill" className={styles.navPill} transition={SPRING_SNAPPY} />
                  )}
                  <span className={styles.navLabel}>{t(`nav.${item.key}`)}</span>
                </Link>
              )
            })}
          </nav>
        )}

        <div className={styles.actions}>
          {!isMobile && languageControl(false)}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          {isMobile && (
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
          )}
        </div>
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
              variants={staggerVariants(0.05, 0.05)}
            >
              {navItems.map((item, i) => {
                const active = pathname === item.path
                return (
                  <motion.div key={item.path} variants={revealVariants}>
                    <Link
                      to={item.path}
                      className={`${styles.mobileNavItem} ${active ? styles.active : ''}`}
                      aria-current={active ? 'page' : undefined}
                      onClick={closeMenu}
                    >
                      <span className={styles.mobileNavNum}>00{i + 1}</span>
                      {t(`nav.${item.key}`)}
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            <motion.div
              className={styles.mobileLang}
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              custom={0.25}
            >
              <span className={styles.mobileLangLabel}>{t('nav.language')}</span>
              {languageControl(true)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(Header)
