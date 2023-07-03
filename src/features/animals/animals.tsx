import { OptionType } from "../select/select-page";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimalCard from "./animal-card";
import Container from "../../components/container";
import Divider from "../../components/divider";
import FloatingButton from "../../components/floating-button";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Select from "../../components/select";
import { dataHeaders } from "./animal-create";
import Modal from "../../components/modal";
import Button from "../../components/button";

export type AnimalType = {
  id: string;
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
};

const rppOptions: OptionType[] = [
  {
    label: "4 životinje",
    value: "4",
  },
  {
    label: "8 životinja",
    value: "8",
  },
  {
    label: "12 životinja",
    value: "12",
  },
];

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  //rows per page
  const [rpp, setRpp] = useState<number>(8);
  const [noOfItems, setNoOfItems] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animalId, setAnimalId] = useState<string>("");

  const navigate = useNavigate();

  const getAnimals = () => {
    setLoading(true);
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  const getAnimalsCount = () => {
    fetch(`http://localhost:3000/animals`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setNoOfItems(data.length);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: string) => {
    fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE",
      headers: dataHeaders,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        getAnimals();
      })
      .catch((err) => console.log(err));
  };

  //ako imamo page u useEffect dependency[], ne stavljaj unutra setPage
  useEffect(() => {
    getAnimalsCount();
  }, []);

  useEffect(() => {
    if (noOfItems > 0) {
      const numberOfPages = Math.ceil(noOfItems / rpp);
      if (page > numberOfPages) {
        setPage(numberOfPages);
      } else {
        getAnimals();
      }
    }
  }, [page, rpp, noOfItems]);

  return (
    <>
      <Modal
        title="Are you sure?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>If you're sure you wish to delete this animal, click "Yes".</p>
        <Button
          text="Yes"
          onClick={() => {
            handleDelete(animalId);
            setIsOpen(false);
          }}
        />
      </Modal>
      <Container>
        <Loader isActive={loading} />
        <div className="animals__header">
          <h1 className="animals__header__title">Animals</h1>
          <Select
            defaultValue={rppOptions[1]}
            options={rppOptions}
            onChange={(activeRpp) => setRpp(Number(activeRpp.value))}
          />
        </div>
        <Divider />
        <div className="grid grid--primary">
          {animals.map((animal) => {
            return (
              <AnimalCard
                onOpen={() => setIsOpen(true)}
                onDelete={(id: string) => setAnimalId(id)}
                key={animal.name}
                animal={animal}
              />
            );
          })}
        </div>
        <Pagination
          activePage={page}
          noOfPages={Math.ceil(noOfItems / rpp)}
          onPaginate={(activePage) => setPage(activePage)}
        />
        <FloatingButton onClick={() => navigate("/animals/new/")} />
      </Container>
    </>
  );
};

export default Animals;
