import LanguageToggle from "../LanguageToggle";
import Style from "./navigation.module.css";
import { useTranslation } from "react-i18next";
`  `;

interface NavElement {
  key: string;
  text: string;
}

export default function Navigation() {
  const { t } = useTranslation();
  const navElements = t("navElements", { returnObjects: true }) as NavElement[];

  return (
    <nav className={Style.nav}>
      <div>
        <LanguageToggle />
      </div>
      <div>
        <ul className={Style.navList}>
          {navElements.map((item) => (
            <li key={item.key} className={Style.navItem}>
              <a href={`#${item.key}`} className={Style.navLink}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
