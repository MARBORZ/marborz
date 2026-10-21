import { useId } from "react";
import { motion } from "framer-motion";
import { SPRING_SNAPPY } from "@/shared/motion";
import styles from "@/styles/ui/segmented.module.scss";

interface SegmentedControlProps<T extends string> {
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  className?: string;
  stretch?: boolean;
}

// iOS-style segmented control: the active pill slides between options
export default function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className,
  stretch = false,
}: SegmentedControlProps<T>) {
  // Unique per instance so two controls on screen don't share one sliding pill
  const pillId = `${useId()}-pill`;

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`${styles.track} ${stretch ? styles.stretch : ""} ${className ?? ""}`}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            className={`${styles.option} ${active ? styles.active : ""}`}
            onClick={() => onChange(option.value)}
          >
            {active && (
              <motion.span
                layoutId={pillId}
                className={styles.pill}
                transition={SPRING_SNAPPY}
              />
            )}
            <span className={styles.label}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
