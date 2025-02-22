import { ReactNode } from "react";
import Styles from "./MainContainer.module.css";

interface Props {
  children: ReactNode;
}

export default function MainContainer({ children }: Props) {
  return <div className={Styles.MainContainer}>{children}</div>;
}
