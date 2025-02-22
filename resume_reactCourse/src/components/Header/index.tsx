import { ReactNode } from "react";
import Styles from "./header.module.css";

export default function Header({ children }: { children: ReactNode }) {
  return <header className={Styles.Header}>{children}</header>;
}
