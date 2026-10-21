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

// Only opacity and transform, so reveals stay on the compositor and never fight scrolling.
// Pass a delay through `custom`; it's left out otherwise so parent staggering still applies.
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay?: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, ...(delay ? { delay } : {}) },
  }),
};

export const staggerVariants = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

// Trigger reveals a bit before the element is fully on screen
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;
