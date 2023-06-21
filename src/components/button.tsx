import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  color?: "blue" | "disabled" | "green" | "red";
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ color = "green", text, ...props }: ButtonProps) => {
  return (
    <button className={`btn btn--${color}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
