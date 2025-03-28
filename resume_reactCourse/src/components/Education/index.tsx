import { useTranslation } from "react-i18next";
import Styles from "./education.module.css";

interface Education {
  title: string;
  items: { institution: string; degree: string; date: string }[];
}

export default function Education() {
  const { t } = useTranslation();
  const education = t("education", { returnObjects: true }) as Education;

  return (
    <section className={Styles.educationContainer} id="education">
      <h2>{education.title}</h2>
      <ul className={Styles.educationList}>
        {education.items.map((edu, index) => (
          <li key={index} className={Styles.educationElement}>
            <div>
              <b>{edu.institution}</b>
              <br /> {edu.degree} <br />
            </div>
            <i className={Styles.date}>{edu.date}</i>
          </li>
        ))}
      </ul>
    </section>
  );
}
