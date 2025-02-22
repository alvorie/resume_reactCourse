import Styles from './contacts.module.css';

export function Contacts({}) {
  return <ul className={Styles.contactList} id='contacts'>
        <li className={Styles.contactElement}>
          <a className={Styles.contactLink}>aleena.volf@mail.ru</a>
        </li>
        <li className={Styles.contactElement}>
          <a className={Styles.contactLink}>alvorie</a>
        </li>
      </ul>;
}
  