import { AnimalType } from "./animals";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ValuesType } from "../contact/types";
import Button from "../../components/button";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Field from "../../components/field";

type InputsType = {
  id: string;
  label: string;
};

export const initialData: Omit<AnimalType, "id"> = {
  animalClass: "",
  diet: "",
  habitat: "",
  name: "",
  species: "",
};

export const baseInputs: InputsType[] = [
  {
    id: "name",
    label: "Name of the animal",
  },
  {
    id: "species",
    label: "The animal's species",
  },
  {
    id: "animalClass",
    label: "Name of the animal's class",
  },
  {
    id: "diet",
    label: "What this animal eats",
  },
  {
    id: "habitat",
    label: "Where this animal lives",
  },
];

export const dataHeaders = {
  "Content-Type": "application/json",
};

const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  const onSubmit = (inputsValue: ValuesType) => {
    let getOut = false;
    //String u kojemu držimo popis polja u kojima se dogodio error.
    let errorInputs = "";

    // const keys = Object.keys(inputsValue);
    // for (let i = 0; i < keys.length; i++) {
    //   if (inputsValue[keys[i]] === "") {
    //     getOut = true;
    //     break;
    //   }
    // }

    //Mapiramo sve keys i provjeravamo koji su prazni.
    Object.keys(inputsValue).forEach((key) => {
      if (inputsValue[key] === "") {
        getOut = true;
        errorInputs = errorInputs + key + ", ";
      }
    });

    if (getOut) {
      setError(
        "Sva polja moraju biti ispunjena kako bi se životinja dodala. Polja koja se trebaju ispuniti su: " +
          errorInputs.substring(0, errorInputs.length - 2)
      );
      return;
    } else {
      setError("");
    }

    const obj = inputsValue;
    obj.id = uuidv4();
    //Logika za request
    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: dataHeaders,
      body: JSON.stringify(inputsValue),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        navigate("/animals");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Create a New Animal!</h1>
      <Divider />
      {error && <div className="message message--error">{error}</div>}
      <div>
        {baseInputs.map((field) => {
          return (
            <Field
              key={field.id}
              id={field.id}
              value={inputsValue[field.id]}
              label={field.label}
              onChange={(newValue) => handleInputsValue(newValue, field.id)}
            />
          );
        })}
        <Button text="Dodaj životinju" onClick={() => onSubmit(inputsValue)} />
      </div>
    </Container>
  );
};

export default AnimalCreate;
