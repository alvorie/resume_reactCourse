import Styles from "./education.module.css";

export default function Education() {
  return (
    <section className={Styles.educationContainer} id="education">
      <h2>education</h2>
      <ul className={Styles.educationList}>
        <li className={Styles.educationElement}>
          <div>
            <b>Russian Technological University MIREA</b>
            <br></br> Bachelors in Applied Computer Science <br></br>
          </div>
          <i className={Styles.date}>2022 sep. - 2026 jul.</i>
        </li>
        <li className={Styles.educationElement}>
            <div>
            <b>Beijing Institute of Technology</b>
            <br></br> Exchange semester, Computer Science <br></br>
            </div>
          <i>2024 feb. - 2024 jul.</i>
        </li>
      </ul>
    </section>
  );
}
