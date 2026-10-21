import { motion, type HTMLMotionProps } from "framer-motion";
import { revealVariants, staggerVariants, VIEWPORT } from "@/shared/motion";

type Tag = "div" | "section";

const tags = {
  div: motion.div,
  section: motion.section,
} as const;

interface RevealProps extends HTMLMotionProps<"div"> {
  as?: Tag;
  delay?: number;
}

// Fades, lifts and un-blurs its content once it scrolls into view
export function Reveal({ as = "div", delay = 0, children, ...rest }: RevealProps) {
  const Component = tags[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={revealVariants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

interface RevealGroupProps extends HTMLMotionProps<"div"> {
  as?: Tag;
  stagger?: number;
  delayChildren?: number;
}

// Container that staggers its <RevealItem> children in
export function RevealGroup({
  as = "div",
  stagger = 0.08,
  delayChildren = 0,
  children,
  ...rest
}: RevealGroupProps) {
  const Component = tags[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerVariants(stagger, delayChildren)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={revealVariants} {...rest}>
      {children}
    </motion.div>
  );
}
