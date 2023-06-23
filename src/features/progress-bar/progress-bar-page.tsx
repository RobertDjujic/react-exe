import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Divider from "../../components/divider";
import ProgressBar from "../../components/progress-bar";

const ProgressBarPage = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleState = (progress: number) => {
    if (progress < 100) {
      return "active";
    }
    if (progress === 100) {
      return "success";
    }
  };

  return (
    <Container>
      <h1>Progress Bar</h1>
      <Divider />
      <ProgressBar
        onFinish={() => console.log("Loading finished!")}
        progress={progress}
        state={handleState(progress)}
      />
      <div className="progress-bar-page__btns">
        <Button
          color={progress === 0 ? "disabled" : "green"}
          disabled={progress === 0 && true}
          onClick={() => setProgress(progress - 5)}
          text="Minus 5%"
        />
        <Button
          color={progress === 100 ? "disabled" : "green"}
          disabled={progress === 100 && true}
          onClick={() => setProgress(progress + 5)}
          text="Plus 5%"
        />
      </div>
    </Container>
  );
};

export default ProgressBarPage;
