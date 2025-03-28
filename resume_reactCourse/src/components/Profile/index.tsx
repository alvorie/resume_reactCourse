import { useTranslation } from "react-i18next";
import { Contacts } from "../Contacts";
import Styles from "./profile.module.css";

export default function Profile() {
  const { t } = useTranslation();
  const name = t("profile.name", { returnObjects: true }) as unknown as string;

  return (
    <div className={Styles.profileContainer}>
      <img
        className={Styles.profileImg}
        src="/assets/img/profilePhoto.jpg"
      ></img>
      <h2>{name}</h2>
      <Contacts></Contacts>
    </div>
  );
}
