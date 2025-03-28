import { useTranslation } from "react-i18next";
import Button from "../Buttons/Button";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return <Button onClick={toggleLang}>{i18n.language.split("-")[0]}</Button>;
}
