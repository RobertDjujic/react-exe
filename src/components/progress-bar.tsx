type ProgressBarProps = {
  onFinish?: () => void;
  progress: number;
  state?: "active" | "success" | "warning" | "error";
};

const ProgressBar = ({
  onFinish,
  progress,
  state = "active",
}: ProgressBarProps) => {
  const handleProgress = () => {
    if (progress === 100) {
      onFinish && onFinish();
    }
    if (progress > 100) {
      return "100%";
    }
    if (progress < 0) {
      return "0%";
    }
    return `${progress}%`;
  };

  return (
    <div className="progress-bar__wrap">
      <div
        className={`progress-bar progress-bar--${state}`}
        style={{ width: handleProgress() }}
      >{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
