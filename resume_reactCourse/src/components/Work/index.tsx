import Styles from './work.module.css';

export default function Work() {
  return (
    <section id="work experience" className={Styles.workContainer}>
      <h2>work experience</h2>
      <ul className={Styles.workList}>
        <li className={Styles.workElement}>
          <div>
            <b>Computer Science Mentor</b>
            <br></br> 100points - Unified State Exam School <br></br>
          </div>
          <i className={Styles.date}>2023 jan. - 2024 jan.</i>
        </li>
      </ul>
    </section>
  );
}
