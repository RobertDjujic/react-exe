import { useState } from "react";
import { ValuesType } from "./types";
import Button from "../../components/button";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Field from "../../components/field";

const initialData: ValuesType = {
  firstName: "",
  lastName: "",
  eMail: "",
};

const Contact = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <Container>
      <h1>Contact Page</h1>
      <Divider />
      <div>
        <Field
          id="firstName"
          label="First Name"
          onChange={(value) => handleInputsValue(value, "firstName")}
          value={inputsValue.firstName}
        />
        <Field
          id="lastName"
          label="Last Name"
          onChange={(value) => handleInputsValue(value, "lastName")}
          value={inputsValue.lastName}
        />
        <Field
          id="eMail"
          label="E-Mail"
          onChange={(value) => handleInputsValue(value, "eMail")}
          value={inputsValue.eMail}
        />
        <Button
          onClick={() => console.log(inputsValue)}
          text="Send a Message"
        />
      </div>
    </Container>
  );
};

export default Contact;
