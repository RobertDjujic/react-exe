type ScreenProps = {
  value: number;
};

const Screen = ({ value }: ScreenProps) => {
  return <div className="screen">{value}</div>;
};

export default Screen;
