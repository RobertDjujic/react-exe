import { AnimalType } from "./animals";
import imgDiet from "./../../assets/images/diet.png";
import imgHabitat from "./../../assets/images/habitat.png";
import imgAnimalClass from "./../../assets/images/animal-class.png";

type AnimalCardProps = {
  animal: AnimalType;
};

const AnimalCard = ({ animal }: AnimalCardProps) => {
  //Na ovaj način raspakiramo objekt kako ne bismo stalno morali pisat "animal" kad ga mapiramo
  const { name, animalClass, diet, species, habitat } = animal;

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header__img"
          width={"100%"}
          src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt={`Image of ${animal.name}`}
        />
        <div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{species}</div>
        </div>
      </div>
      <div className="card__row">
        <img src={imgAnimalClass} alt="Animal class icon." />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgDiet} alt="Icon for an animal's diet." />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="Icon for an animal's habitat." />
        <span>{habitat}</span>
      </div>
    </div>
  );
};

export default AnimalCard;