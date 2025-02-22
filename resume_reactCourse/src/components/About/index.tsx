import Styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={Styles.aboutContainer}>
      <h2>⊹ about ⊹</h2>
      <p>
        An aspiring frontend developer interested in UI/UX design and
        fullstack development.
        Dedicated to creating functional and
        user-friendly experiences. <br></br>
        Also, a proud cat enthusiast.
      </p>
    </section>
  );
}
