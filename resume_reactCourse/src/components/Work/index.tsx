import Styles from "./work.module.css";

interface WorkProps {
  data: {
    title: string;
    items: { position: string; company: string; date: string }[];
  };
}

export default function Work({ data }: WorkProps) {
  return (
    <section id="work experience" className={Styles.workContainer}>
      <h2>{data.title}</h2>
      <ul className={Styles.workList}>
        {data.items.map((job, index) => (
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
