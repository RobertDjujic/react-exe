import { ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  placeholder = "",
  icon,
  size = "md",
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="input__wrap">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={`input input--${size} ${icon && "input--has-icon"}`}
        placeholder={placeholder}
        type="text"
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};

export default Input;
