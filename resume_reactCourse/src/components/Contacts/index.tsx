import Styles from "./contacts.module.css";
import { contactsData } from "../../data";

export function Contacts() {
  return (
    <ul className={Styles.contactList}>
      {contactsData.map((contact, index) => (
        <li key={index} className={Styles.contactElement}>
          <a className={Styles.contactLink} href={contact.link}>
            {contact.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
