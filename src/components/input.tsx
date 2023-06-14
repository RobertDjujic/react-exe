import { ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const Input = ({
  placeholder = "",
  icon,
  size = "md",
  value,
  onChange,
  disabled = false,
}: InputProps) => {
  return (
    <div>
      <input
        disabled={disabled}
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
