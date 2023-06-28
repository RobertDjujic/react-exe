import { ButtonHTMLAttributes } from "react";
import Plus from "../assets/icons/plus";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      <Plus />
    </button>
  );
};

export default FloatingButton;
