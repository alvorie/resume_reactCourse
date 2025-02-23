import TextButton from "../Buttons/TextButton";
import Styles from "./project.module.css";

interface ProjectProps {
  name: string;
  imgPath: string;
  technologies: string;
  demoLink: string;
}

export default function Project({
  name,
  imgPath,
  technologies,
  demoLink,
}: ProjectProps) {
  return (
    <div className={Styles.projectWrapper}>
      <img src={imgPath} className={Styles.img}></img>
      <div className={Styles.projectInfo}>
        <p className={Styles.projectName}>{name}</p>
        <p className={Styles.projectTechnologies}>{technologies}</p>
        <TextButton text="demo" link={demoLink}></TextButton>
      </div>
    </div>
  );
}
