import { ButtonHTMLAttributes } from "react";
import Plus from "../assets/icons/plus";
import { useNavigate } from "react-router-dom";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      <Plus />
    </button>
  );
};

export default FloatingButton;
