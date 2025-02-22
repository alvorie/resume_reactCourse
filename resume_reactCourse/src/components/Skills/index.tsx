import { Skill, SkillComponent } from '../Skill';
import Styles from './Skills.module.css';

interface Props {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  return (
    <section id="skills" className={Styles.skillsContainer}>
      <h2>skills</h2>
      <div className={Styles.skills}>{skills.map((elem, index) => (
        <SkillComponent skillName={elem.skillName} key={index} skillGroup={''}></SkillComponent>
      ))}</div>
    </section>
  );
}
