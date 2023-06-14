import { useState } from "react";
import Money from "./assets/icons/money";
import Button from "./components/button";
import Container from "./components/container";
import Divider from "./components/divider";
import Input from "./components/input";
import "./styles/styles.scss";
import Modal from "./components/modal";

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
  const [modal, setModal] = useState<boolean>(false);

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
          disabled={true}
          value={newInputValue}
          onChange={(value: string) => setNewInputValue(value)}
        />
        <Button text="Open Modal" onClick={() => setModal(true)} />
        <Modal
          title="Hello World!"
          onClose={() => setModal(false)}
          modal={modal}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Modal>
      </Container>
    </>
  );
};

export default App;
