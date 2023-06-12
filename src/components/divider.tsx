type DividerProps = {
  marginTop?: "sm" | "md" | "lg";
  marginBottom?: "sm" | "md" | "lg";
};

const Divider = ({ marginBottom = "md", marginTop = "md" }: DividerProps) => {
  return (
    <div
      className={`divider divider--mb--${marginBottom} divider--mt--${marginTop}`}
    ></div>
  );
};

export default Divider;
