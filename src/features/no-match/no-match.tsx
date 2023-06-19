import Container from "../../components/container";
import error404 from "./../../assets/images/404.jpg";

const NoMatch = () => {
  return (
    <Container>
      <div className="no-match">
        <img
          className="no-match__img"
          src={error404}
          alt="An image of a broken robot."
        />
        <div>
          <h1 className="no-match__title">404</h1>
          <div className="no-match__desc">
            The link you were trying to access no longer exists.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NoMatch;
