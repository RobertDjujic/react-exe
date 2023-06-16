import { useState } from "react";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Input from "../../components/input";
import Button from "../../components/button";

type ObjType = {
  [key: string]: string;
};

const obj: ObjType = {
  firstName: "",
  lastName: "",
};

const Contact = () => {
  const [newInputValue, setNewInputValue] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [inputsValue, setInputsValue] = useState<ObjType>(obj);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ObjType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <Container>
      <h1>Hello World</h1>
      <Divider />
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <Input
              value={inputsValue.firstName}
              onChange={(value) => handleInputsValue(value, "First Name")}
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <Input
              value={inputsValue.lastName}
              onChange={(value) => handleInputsValue(value, "Last Name")}
            />
          </div>
          <div className="field">
            <label htmlFor="email">E-Mail</label>
          </div>
          <Button text="Send a Message" />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
