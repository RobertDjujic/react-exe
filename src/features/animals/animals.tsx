import { useEffect, useState } from "react";
import AnimalCard from "./animal-card";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Select from "../../components/select";
import { OptionType } from "../select/select-page";
import FloatingButton from "../../components/floating-button";

export type AnimalType = {
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
};

const noOfItems = 20;

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
      .catch((err) => console.error(err));
  };

  //ako imamo page u useEffect dependency[], ne stavljaj unutra setPage
  useEffect(() => {
    const numberOfPages = Math.ceil(noOfItems / rpp);
    if (page > numberOfPages) {
      setPage(numberOfPages);
    } else {
      getAnimals();
    }
  }, [page, rpp]);

  return (
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
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </div>
      <Pagination
        activePage={page}
        noOfPages={Math.ceil(noOfItems / rpp)}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FloatingButton />
    </Container>
  );
};

export default Animals;
