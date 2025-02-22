import { ReactNode } from "react";
import Styles from './InfoContainer.module.css';

interface Props {
  children: ReactNode;
}

export default function InfoContainer({ children }: Props) {
  return <div className={Styles.infoContainer}>{children}</div>;
}
