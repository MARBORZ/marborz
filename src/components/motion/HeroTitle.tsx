import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE_OUT_EXPO } from "@/shared/motion";
import styles from "./motion.module.scss";

interface HeroTitleProps {
  lines: string[];
  className?: string;
}

// Each line slides up from behind a mask, then the block drifts and fades as you scroll past
export default function HeroTitle({ lines, className }: HeroTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {lines.map((line, i) => (
        <h1 key={i} className={styles.maskLine}>
          <motion.span
            className={styles.maskInner}
            initial={{ y: "110%", rotate: 2 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.09 }}
          >
            {line}
          </motion.span>
        </h1>
      ))}
    </motion.div>
  );
}
