import Styles from "./about.module.css";

interface AboutProps {
  data: {
    title: string;
    description: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className={Styles.aboutContainer}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </section>
  );
}
