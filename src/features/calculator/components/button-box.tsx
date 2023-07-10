import { ReactNode } from "react";

type ButtonBoxProps = {
  children: ReactNode;
};

const ButtonBox = ({ children }: ButtonBoxProps) => {
  return <div className="button-box">{children}</div>;
};

export default ButtonBox;
