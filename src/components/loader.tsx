import loader from "./../assets/images/loader.gif";

type LoaderProps = {
  isActive: boolean;
};

const Loader = ({ isActive }: LoaderProps) => {
  return (
    <>
      {isActive && (
        <>
          <div className="loader__overlay"></div>
          <div className="loader">
            <img src={loader} alt="A loading icon." />
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
