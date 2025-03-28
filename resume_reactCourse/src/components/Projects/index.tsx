import { useTranslation } from "react-i18next";
import Project from "../Project";
import Styles from "./projects.module.css";

interface Projects {
  title: string;
  items: {
    name: string;
    imgPath: string;
    technologies: string;
    demoLink: string;
  }[];
}

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true }) as Projects;

  return (
    <section id="projects" className={Styles.projectContainer}>
      <h2>{projects.title}</h2>
      <div className={Styles.projects}>
        {projects.items.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
