import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Input from "../../components/input";
import Modal from "../../components/modal";
import Money from "./../../assets/icons/money";

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [newState, setNewState] = useState<string>("");

  return (
    <Container>
      <h1>Hello World!</h1>
      <Button text="Click Me!" />
      <Button color="red" text="A New Button" />
      <Divider />
      <h1>A Title</h1>
      <div>Some text.</div>
      <Input
        onChange={(value: string) => setNewState(value)}
        value={newState}
      />
      <Button text="OpenModal" onClick={() => setModal(true)} />
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        onSuccess={() => {
          alert("Success");
          setModal(false);
        }}
        title="My First Modal"
      >
        This is some modal content.
      </Modal>
    </Container>
  );
};

export default Home;
