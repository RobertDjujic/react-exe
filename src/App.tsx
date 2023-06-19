import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./features/contact/contact";
import Home from "./features/home/home";
import Layout from "./components/layout";
import NoMatch from "./features/no-match/no-match";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
