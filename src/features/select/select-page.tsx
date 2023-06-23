import Container from "../../components/container";
import Divider from "../../components/divider";
import Select from "../../components/select";

export type OptionType = {
  label: string;
  value: string;
};

const selectOptions: OptionType[] = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];

const SelectPage = () => {
  return (
    <Container>
      <h1>Select</h1>
      <Divider />
      <p>
        Select komponenta prima "options" prop koji je zapravo lista objekata
        tipa "OptionsType". Osim option može primiti i placeholder prop koji će
        nam ispisati kao default laben unutar dropdown komponente.
      </p>
      <p>
        Također, komponenta prima onChange callback koji nam daje događaj na
        svaku promjenu vrijednosti unutar naše dropdown komponente.
      </p>
      <Select
        options={selectOptions}
        onChange={(option) => console.log(option)}
      />
    </Container>
  );
};

export default SelectPage;
