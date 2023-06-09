type ButtonProps = {
  color?: "blue" | "green" | "red";
  text: string;
};

const Button = ({ color = "green", text }: ButtonProps) => {
  return <button className={`btn btn--${color}`}>{text}</button>;
};

export default Button;
