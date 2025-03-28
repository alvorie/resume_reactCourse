import { useTranslation } from "react-i18next";
import Styles from "./contacts.module.css";

interface Contact {
  link: string;
  label: string;
}

export function Contacts() {
  const { t } = useTranslation();
  const contacts = t("contacts", { returnObjects: true }) as Contact[];

  return (
    <ul className={Styles.contactList}>
      {contacts.map((item, index) => (
        <li key={index} className={Styles.contactElement}>
          <a className={Styles.contactLink} href={item.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
