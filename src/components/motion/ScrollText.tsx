import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import styles from "./motion.module.scss";

interface ScrollTextProps {
  text: string;
  className?: string;
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className={styles.word}>
      <motion.span style={{ opacity }}>{word}</motion.span>{" "}
    </span>
  );
}

// Apple-style reading reveal: words light up one after another as the paragraph scrolls through the viewport
export default function ScrollText({ text, className }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
}
