import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import AnimalCreate from "./features/animals/animal-create";
import AnimalEdit from "./features/animal-edit/animal-edit";
import Animals from "./features/animals/animals";
import Contact from "./features/contact/contact";
import Home from "./features/home/home";
import Layout from "./components/layout";
import LoaderPage from "./features/loader/loader-page";
import NoMatch from "./features/no-match/no-match";
import ProgressBarPage from "./features/progress-bar/progress-bar-page";
import SelectPage from "./features/select/select-page";
import Calculator from "./features/calculator/calculator";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar-page" element={<ProgressBarPage />} />
          <Route path="loader-page" element={<LoaderPage />} />
          <Route path="select-page" element={<SelectPage />} />
          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<AnimalCreate />} />
          <Route path="animals/:animalId" element={<AnimalEdit />} />
          <Route path="weather" element={<Calculator />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
