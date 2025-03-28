import { useTranslation } from "react-i18next";
import { Skill, SkillComponent } from "../Skill";
import Styles from "./Skills.module.css";

interface Skills {
  title: string;
  items: Skill[];
}

export default function Skills() {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true }) as Skills;

  return (
    <section id="skills" className={Styles.skillsContainer}>
      <h2>{skills.title}</h2>
      <div className={Styles.skills}>
        {skills.items.map((elem, index) => (
          <SkillComponent
            skillName={elem.skillName}
            key={index}
            skillGroup={""}
          ></SkillComponent>
        ))}
      </div>
    </section>
  );
}
