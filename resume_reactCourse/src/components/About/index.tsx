import { useTranslation } from "react-i18next";
import Styles from "./about.module.css";

interface About {
  title: string;
  description: string;
}

export default function About() {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true }) as About;

  return (
    <section id="about" className={Styles.aboutContainer}>
      <h2>{about.title}</h2>
      <p>{about.description}</p>
    </section>
  );
}
