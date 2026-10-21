import { useId } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SPRING_SOFT } from '@/shared/motion'
import type { Theme } from '@/hooks/useTheme'
import styles from '@/styles/ui/themeToggle.module.scss'

interface ThemeToggleProps {
  theme: Theme
  onToggle: (origin: { x: number; y: number }) => void
}

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315]

// Sun that folds into a crescent moon: the core grows, a masked "bite" slides in, the rays spin away
export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useTranslation()
  const maskId = `moon-mask-${useId().replace(/:/g, '')}`
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={dark ? t('nav.toLight') : t('nav.toDark')}
      title={dark ? t('nav.toLight') : t('nav.toDark')}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        onToggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <mask id={maskId}>
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <motion.circle
            r="7"
            fill="black"
            initial={false}
            animate={dark ? { cx: 17, cy: 7 } : { cx: 30, cy: -6 }}
            transition={SPRING_SOFT}
          />
        </mask>

        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          mask={`url(#${maskId})`}
          initial={false}
          animate={{ r: dark ? 8.5 : 4.5 }}
          transition={SPRING_SOFT}
        />

        <motion.g
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ originX: '12px', originY: '12px' }}
          initial={false}
          animate={dark ? { rotate: 90, scale: 0.4, opacity: 0 } : { rotate: 0, scale: 1, opacity: 1 }}
          transition={SPRING_SOFT}
        >
          {RAYS.map((angle) => (
            <line key={angle} x1="12" y1="2.5" x2="12" y2="4.5" transform={`rotate(${angle} 12 12)`} />
          ))}
        </motion.g>
      </svg>
    </button>
  )
}
