import Button from "./components/button";
import ButtonBox from "./components/button-box";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Screen from "./components/screen";
import Wrapper from "./components/wrapper";
import { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

type InitialStateType = {
  num: number;
  res: number;
  sign: string;
};

const initialState = {
  num: 0,
  res: 0,
  sign: "",
};

const Calculator = () => {
  const [calc, setCalc] = useState<InitialStateType>(initialState);
  const { num, res, sign } = calc;

  return (
    <Container>
      <h1>Calculator</h1>
      <Divider />
      <div className="calculator">
        <Wrapper>
          <Screen value={num ? num : res} />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => {
              return (
                <Button
                  className={btn === "=" ? "equals" : ""}
                  key={i}
                  onClick={() => console.log(`${btn} clicked!`)}
                  value={btn}
                />
              );
            })}
          </ButtonBox>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Calculator;
