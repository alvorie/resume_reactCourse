import Styles from "./TextButton.module.css";

interface ButtonProps {
  text: string;
  link?: string;
}

export default function TextButton({ text, link }: ButtonProps) {
  return (
    <a href={link} className={Styles.textButton}>
      {text}
    </a>
  );
}
