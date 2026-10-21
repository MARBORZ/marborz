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
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      {!loaded && <div className={styles.skeleton} aria-hidden="true" />}
      {src && !failed ? (
        <motion.img
          // Cached images can finish before React attaches onLoad
          ref={(img) => {
            if (img?.complete && img.naturalWidth > 0 && !loaded) setLoaded(true);
          }}
          src={src}
          alt={alt}
          className={styles.img}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          initial={false}
          animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: EASE_APPLE }}
        />
      ) : (
        <span className={styles.placeholder}>[ NO PREVIEW ]</span>
      )}
    </div>
  );
}
