import { useState } from "react";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Field from "../../components/field";
import { AnimalType } from "./animals";
import { ValuesType } from "../contact/types";
import Button from "../../components/button";

const initialData: AnimalType = {
  animalClass: "",
  diet: "",
  habitat: "",
  name: "",
  species: "",
};

const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <Container>
      <h1>Create a New Animal!</h1>
      <Divider />
      <div>
        <Field
          id="name"
          value={inputsValue.name}
          label="Name of the animal"
          onChange={(newValue) => handleInputsValue(newValue, "name")}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="The animal's species"
          onChange={(newValue) => handleInputsValue(newValue, "species")}
        />
        <Field
          id="animalClass"
          value={inputsValue.animalClass}
          label="Name of the animal's class"
          onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
        />
        <Field
          id="diet"
          value={inputsValue.diet}
          label="What this animal eats"
          onChange={(newValue) => handleInputsValue(newValue, "diet")}
        />
        <Field
          id="habitat"
          value={inputsValue.habitat}
          label="Where this animal lives"
          onChange={(newValue) => handleInputsValue(newValue, "habitat")}
        />
        <Button text="Dodaj životinju" />
      </div>
    </Container>
  );
};

export default AnimalCreate;
