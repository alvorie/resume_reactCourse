import { ReactNode, MouseEventHandler } from "react";
import Style from "./Button.module.css";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button className={Style.Button} onClick={onClick}>
      {children}
    </button>
  );
}
