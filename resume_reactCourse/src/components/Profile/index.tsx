import { Contacts } from '../Contacts';
import Styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={Styles.profileContainer}>
      <img
        className={Styles.profileImg}
        src="/assets/img/profilePhoto.jpg"
      ></img>
      <h2>Alena Volf</h2>
      <Contacts></Contacts>
    </div>
  );
}
