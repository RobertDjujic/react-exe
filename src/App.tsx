import { useState } from "react";
import Money from "./assets/icons/money";
import Button from "./components/button";
import Container from "./components/container";
import Divider from "./components/divider";
import Input from "./components/input";
import "./styles/styles.scss";

type ObjType = {
  [key: string]: string;
};

const obj: ObjType = {
  firstName: "",
  lastName: "",
};

const App = () => {
  const [inputsValue, setInputsValue] = useState<ObjType>(obj);
  const [newInputValue, setNewInputValue] = useState<string>("");

  const handleInputsValue = (value: string, id: string) => {
    const newState: ObjType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <>
      <Container>
        <h1>Hello World!</h1>
        <Button color="blue" text="Click Me!" />
        <Divider />
      </Container>
      <Container size="sm">
        <h1>Neki naslov</h1>
        <Input
          value={inputsValue.firstName}
          placeholder="Neki tekst"
          icon={<Money />}
          size="lg"
          onChange={(value: string) => {
            handleInputsValue(value, "firstName");
          }}
        />
        <Input
          value={newInputValue}
          onChange={(value: string) => setNewInputValue(value)}
        />
      </Container>
    </>
  );
};

export default App;
