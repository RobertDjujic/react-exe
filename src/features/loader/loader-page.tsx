import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Divider from "../../components/divider";
import Loader from "../../components/loader";

const LoaderPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <div>
        <h1>Loader</h1>
        <Divider />
        <Loader isActive={loading} />
        <p>You can turn-on the loader by pressing the button below.</p>
        <Button onClick={() => handleLoader()} text="Turn-on the loader!" />
      </div>
    </Container>
  );
};

export default LoaderPage;
