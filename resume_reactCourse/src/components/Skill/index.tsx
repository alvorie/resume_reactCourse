import Styles from "./Skill.module.css";

export class Skill {
  skillName: string;
  skillGroup: string;

  constructor(skillName: string, skillGroup: string) {
    this.skillGroup = skillGroup;
    this.skillName = skillName;
  }
}

export function SkillComponent(skill: Skill) {
  return <div className={Styles.Skill}>{skill.skillName}</div>;
}
