import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img className="header__logo" src={logo} alt="A floating astronaut." />
        <nav className="header__nav">
          <NavLink className={"header__nav__link"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"header__nav__link"} to={"/contact"}>
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
