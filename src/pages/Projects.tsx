import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { allProjects, type ProjectStatus } from "@/shared/projects";

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<ProjectStatus | "all">("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  return (
    <Layout>
      <section className="projects-page">
        <div className="breadcrumb">{t("projects.breadcrumb")}</div>

        <div className="hero">
          <h1>{t("projects.hero.line1")}</h1>
          <h1>{t("projects.hero.line2")}</h1>
        </div>

        <div className="count">{t("projects.count")}</div>

        <div className="filters">
          <span className="filter-label">{t("projects.filter.label")}</span>
          <div className="filter-buttons">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              {t("projects.filter.all")}
            </button>
            <button
              className={filter === "active" ? "active" : ""}
              onClick={() => setFilter("active")}
            >
              {t("projects.filter.active")}
            </button>
            <button
              className={filter === "shipped" ? "active" : ""}
              onClick={() => setFilter("shipped")}
            >
              {t("projects.filter.shipped")}
            </button>
            <button
              className={filter === "experiment" ? "active" : ""}
              onClick={() => setFilter("experiment")}
            >
              {t("projects.filter.experiments")}
            </button>
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-featured">
            <div className="section-label">{t("projects.featured.label")}</div>
            <div className="projects-grid">
              {filteredProjects
                .filter((p) => p.status === "active" || p.status === "shipped")
                .slice(0, 4)
                .map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-number">{project.number}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-stack">{project.stack}</p>
                    <p className="project-description">
                      {t(`projects.list.${project.id}.description`)}
                    </p>
                    <span className="project-status">
                      {t(`common.statuses.${project.status}`)}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="projects-archive">
            <div className="section-label">{t("projects.archive.label")}</div>
            <div className="projects-list">
              {filteredProjects
                .filter(
                  (p) => p.status === "experiment" || p.status === "planned",
                )
                .map((project) => (
                  <div key={project.id} className="project-item">
                    <div className="item-number">{project.number}</div>
                    <div className="item-content">
                      <h4>{project.title}</h4>
                      <p className="item-stack">{project.stack}</p>
                      <p className="item-description">
                        {t(`projects.list.${project.id}.description`)}
                      </p>
                    </div>
                    <span className="item-status">
                      {t(`common.statuses.${project.status}`)}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer title={t("projects.footer.next")} href="/about" />
    </Layout>
  );
}
