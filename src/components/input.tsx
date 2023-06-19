import { ReactNode } from "react";

type InputProps = {
  disabled?: boolean;
  icon?: ReactNode;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  value: string;
};

const Input = ({
  disabled = false,
  icon,
  name,
  onChange,
  placeholder = "",
  size = "md",
  value,
}: InputProps) => {
  return (
    <div>
      <input
        className={`input input--${size} ${icon && "input--has-icon"}`}
        disabled={disabled}
        id={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};

export default Input;
