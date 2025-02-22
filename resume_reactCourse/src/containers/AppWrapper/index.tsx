import { ReactNode } from "react";
import Style from "./AppWrapper.module.css";

interface Props {
    children: ReactNode;
}

export default function AppWrapper({ children } : Props) {
  return <div className={Style.AppWrapper}>
    {children}
  </div>;
}
