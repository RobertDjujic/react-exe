import "./../../../styles/components/button.scss";

type ButtonProps = {
  className: string;
  value: number | string;
  onClick: () => void;
};

const Button = ({ className, value, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default Button;
