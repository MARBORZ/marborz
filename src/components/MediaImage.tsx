import { useState } from "react";
import { motion } from "framer-motion";
import { EASE_APPLE } from "@/shared/motion";
import styles from "@/styles/MediaImage/mediaImage.module.scss";

interface MediaImageProps {
  src?: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

// Image with a shimmer skeleton underneath that fades and settles in once loaded
export default function MediaImage({ src, alt, className, eager = false }: MediaImageProps) {
  // Track which src finished, so a new src shows the skeleton again
  const [loadedSrc, setLoadedSrc] = useState<string>();
  const [failedSrc, setFailedSrc] = useState<string>();
  const loaded = src !== undefined && loadedSrc === src;
  const failed = src === undefined || failedSrc === src;

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      {failed ? (
        <span className={styles.placeholder}>[ NO PREVIEW ]</span>
      ) : (
        <>
          {!loaded && <div className={styles.skeleton} aria-hidden="true" />}
          <motion.img
            src={src}
            alt={alt}
            className={styles.img}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoadedSrc(src)}
            onError={() => setFailedSrc(src)}
            initial={false}
            animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: EASE_APPLE }}
          />
        </>
      )}
    </div>
  );
}
