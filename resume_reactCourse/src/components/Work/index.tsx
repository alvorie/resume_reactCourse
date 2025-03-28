import { useTranslation } from "react-i18next";
import Styles from "./work.module.css";

interface Work {
  title: string;
  items: { position: string; company: string; date: string }[];
}

export default function Work() {
  const { t } = useTranslation();
  const work = t("work", { returnObjects: true }) as Work;

  return (
    <section id="experience" className={Styles.workContainer}>
      <h2>{work.title}</h2>
      <ul className={Styles.workList}>
        {work.items.map((job, index) => (
          <li key={index} className={Styles.workElement}>
            <div>
              <b>{job.position}</b>
              <br /> {job.company} <br />
            </div>
            <i className={Styles.date}>{job.date}</i>
          </li>
        ))}
      </ul>
    </section>
  );
}
