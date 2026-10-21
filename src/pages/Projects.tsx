import { useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import MediaImage from "@/components/MediaImage";
import StatusPill from "@/components/StatusPill";
import SegmentedControl from "@/components/SegmentedControl";
import HeroTitle from "@/components/motion/HeroTitle";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { EASE_APPLE, revealVariants } from "@/shared/motion";
import {
  allProjects,
  PROJECT_FILTERS,
  type Project,
  type ProjectFilter,
} from "@/shared/projects";
import styles from "@/styles/Projects/projects.module.scss";

const filterKeys: Record<ProjectFilter, string> = {
  all: "all",
  active: "active",
  shipped: "shipped",
  experiment: "experiments",
};

function FeaturedProject({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (id: string) => void;
}) {
  const { t } = useTranslation();
  const ref = useRef<HTMLButtonElement>(null);
  // The screenshot settles from slightly zoomed in as the card scrolls into place
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <Reveal as="section" className={styles.featuredSection}>
      <div className={styles.featuredLabel}>{t("projects.featured.label")}</div>
      <motion.button
        ref={ref}
        type="button"
        className={styles.featuredProject}
        onClick={() => onOpen(project.id)}
        disabled={project.status === "planned"}
        whileTap={{ scale: 0.985 }}
      >
        <div className={styles.featuredMedia}>
          <motion.div className={styles.featuredMediaInner} style={{ scale }}>
            <MediaImage src={project.imageUrl} alt={project.title} eager />
          </motion.div>
        </div>
        <div className={styles.featuredBody}>
          <div className={styles.featuredMeta}>
            <span className={styles.featuredNum}>/{project.number}</span>
            <StatusPill status={project.status} />
          </div>
          <span className={styles.featuredTitle}>{project.title}</span>
          <p className={styles.featuredDescription}>
            {t(`projects.list.${project.id}.description`, {
              defaultValue: project.stack,
            })}
          </p>
        </div>
      </motion.button>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleCloseModal = useCallback(() => {
    setActiveId(null);
  }, []);

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  const featured = filtered.find((p) => p.status === "active") ?? filtered[0];
  const gridProjects = filtered.filter(
    (p) =>
      p.id !== featured?.id &&
      (p.status === "active" || p.status === "shipped"),
  );
  const archiveProjects = filtered.filter(
    (p) =>
      p.id !== featured?.id &&
      (p.status === "experiment" || p.status === "planned"),
  );

  const filterOptions = PROJECT_FILTERS.map((f) => ({
    value: f,
    label: t(`projects.filter.${filterKeys[f]}`),
  }));

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t("projects.breadcrumb")}</div>
          <div className={styles.count}>{t("projects.count")}</div>
        </div>

        <HeroTitle
          className={styles.hero}
          lines={[t("projects.hero.line1"), t("projects.hero.line2")]}
        />

        <div className={styles.filters}>
          <span className={styles.filterLabel}>
            {t("projects.filter.label")}
          </span>
          <SegmentedControl
            id="project-filter"
            options={filterOptions}
            value={filter}
            onChange={setFilter}
            ariaLabel={t("projects.filter.label")}
            className={styles.filterControl}
          />
          <span className={styles.filterCount}>
            {filtered.length} / {allProjects.length}
          </span>
        </div>

        {/* Re-keyed per filter so results crossfade and re-stagger */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: EASE_APPLE } }}
            transition={{ duration: 0.3, ease: EASE_APPLE }}
          >
            {featured && (
              <FeaturedProject project={featured} onOpen={setActiveId} />
            )}

            {gridProjects.length > 0 && (
              <RevealGroup className={styles.projectsGrid} stagger={0.07}>
                {gridProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    className={styles.projectCard}
                    onClick={() => setActiveId(project.id)}
                    disabled={project.status === "planned"}
                    variants={revealVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={styles.cardMedia}>
                      <MediaImage src={project.imageUrl} alt={project.title} />
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardNum}>/{project.number}</span>
                        <StatusPill status={project.status} />
                      </div>
                      <span className={styles.cardTitle}>{project.title}</span>
                      <p className={styles.cardDescription}>
                        {t(`projects.list.${project.id}.description`, {
                          defaultValue: project.stack,
                        })}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </RevealGroup>
            )}

            {archiveProjects.length > 0 && (
              <section className={styles.archiveSection}>
                <Reveal className={styles.archiveLabel}>
                  {t("projects.archive.label")}
                </Reveal>
                <RevealGroup className={styles.archiveList} stagger={0.06}>
                  {archiveProjects.map((project) => (
                    <motion.button
                      key={project.id}
                      type="button"
                      className={styles.archiveRow}
                      onClick={() => setActiveId(project.id)}
                      disabled={project.status === "planned"}
                      variants={revealVariants}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className={styles.archiveNum}>/{project.number}</span>
                      <span className={styles.archiveTitle}>{project.title}</span>
                      <span className={styles.archiveSub}>
                        {project.subtitle}
                      </span>
                      <span className={styles.archiveStack}>{project.stack}</span>
                      <span className={styles.archiveArrow} aria-hidden="true">→</span>
                    </motion.button>
                  ))}
                </RevealGroup>
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        <Footer title={t("projects.footer.next")} href="/about" />
      </section>

      <ProjectModal projectId={activeId} onClose={handleCloseModal} />
    </>
  );
}
