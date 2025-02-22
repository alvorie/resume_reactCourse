import Style from "./navigation.module.css";

interface Props {
  navElements: string[];
}

export default function Navigation({ navElements }: Props) {
  return (
    <nav className={Style.nav}>
      <ul className={Style.navList}>
        {navElements.map((elem, index) => (
          <li key={index} className={Style.navItem}>
            <a href={`#${elem}`} className={Style.navLink}>{elem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
