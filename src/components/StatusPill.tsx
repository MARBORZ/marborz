import { useTranslation } from "react-i18next";
import type { ProjectStatus } from "@/shared/projects";
import styles from "@/styles/ui/statusPill.module.scss";

export default function StatusPill({ status, className }: { status: ProjectStatus; className?: string }) {
  const { t } = useTranslation();

  return (
    <span className={`${styles.pill} ${styles[status]} ${className ?? ""}`}>
      {status === "active" && <span className={styles.dot} aria-hidden="true" />}
      {t(`common.statuses.${status}`)}
    </span>
  );
}
