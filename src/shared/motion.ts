import type { Transition, Variants } from "framer-motion";

// Apple's marketing pages use this curve for most fades and slides
export const EASE_APPLE = [0.28, 0.11, 0.32, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Soft spring with a hint of bounce, similar to iOS sheet and card motion
export const SPRING_SOFT: Transition = {
  type: "spring",
  visualDuration: 0.5,
  bounce: 0.15,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  visualDuration: 0.35,
  bounce: 0.2,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    // Drop the filter afterwards so it doesn't keep a GPU layer or trap fixed children
    transitionEnd: { filter: "none" },
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

export const staggerVariants = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

// Trigger reveals a bit before the element is fully on screen
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;
