import { baseInputs, dataHeaders, initialData } from "../animals/animal-create";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ValuesType } from "../contact/types";
import Button from "../../components/button";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Field from "../../components/field";
import Loader from "../../components/loader";

const AnimalEdit = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  //Ako nešto može biti undefined, moramo u logici prvo provjerit postoji li zapravo.
  let { animalId } = useParams();

  const getAnimal = (animalId: string) => {
    fetch(`http://localhost:3000/animals/${animalId}`)
      .then((res) => {
        if (res.ok) {
          setError("");
          return res.json();
        }
        setError("Nije moguće dohvatiti životinju s ID: " + animalId);
        setLoading(false);
      })
      .then((data) => {
        setLoading(false);
        const fetchedData = {
          animalClass: data.animalClass,
          diet: data.diet,
          habitat: data.habitat,
          id: data.id,
          name: data.name,
          species: data.species,
        };
        setInputsValue(fetchedData);
      })
      .catch((err) => console.log(err));
  };

  const onEdit = (values: ValuesType) => {
    let getOut = false;
    let errorInputs = "";

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

    fetch(`http://localhost:3000/animals/${animalId}`, {
      method: "PUT",
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

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  useEffect(() => {
    if (animalId) {
      setError("");
      getAnimal(animalId);
    } else {
      setError("Nije moguće dohvatiti životinju s ID: " + animalId);
    }
  }, []);

  return (
    <Container>
      <Loader isActive={loading} />
      <h1>Edit an Existing Animal!</h1>
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
        <Button
          text="Uredi životinju"
          onClick={() => {
            if (animalId) {
              onEdit(inputsValue);
            }
          }}
        />
      </div>
    </Container>
  );
};

export default AnimalEdit;
