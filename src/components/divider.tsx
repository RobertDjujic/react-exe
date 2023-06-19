type DividerProps = {
  marginBottom?: "sm" | "md" | "lg";
  marginTop?: "sm" | "md" | "lg";
};

const Divider = ({ marginBottom = "md", marginTop = "md" }: DividerProps) => {
  return (
    <div
      className={`divider divider--mb--${marginBottom} divider--mt--${marginTop}`}
    ></div>
  );
};

export default Divider;
