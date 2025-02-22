import Styles from "./education.module.css";

interface EducationProps {
  data: {
    title: string;
    items: { institution: string; degree: string; date: string }[];
  };
}

export default function Education({ data }: EducationProps) {
  return (
    <section className={Styles.educationContainer} id="education">
      <h2>{data.title}</h2>
      <ul className={Styles.educationList}>
        {data.items.map((edu, index) => (
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
