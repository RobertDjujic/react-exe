import { useEffect, useState } from "react";
import AnimalCard from "./animal-card";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";

export type AnimalType = {
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
};

//rows per page
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(20 / 8);

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getAnimals = () => {
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
        }, 2000);
      })
      .catch((err) => console.error(err));
  };

  //ako imamo page u useEffect dependency[], ne stavljaj unutra setPage
  useEffect(() => {
    getAnimals();
  }, [page]);

  return (
    <Container>
      <Loader isActive={loading} />
      <h1>Animals</h1>
      <Divider />
      <div className="grid grid--primary">
        {animals.map((animal) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </div>
      <Pagination
        onPaginate={(activePage) => console.log("active page: ", activePage)}
      />
    </Container>
  );
};

export default Animals;
