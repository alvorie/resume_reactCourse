import Project from "../Project";
import Styles from "./projects.module.css";

interface ProjectsProps {
  data: {
    title: string;
    items: {
      name: string;
      imgPath: string;
      technologies: string;
      demoLink: string;
    }[];
  };
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className={Styles.projectContainer}>
      <h2>{data.title}</h2>
      <div className={Styles.projects}>
        {data.items.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
