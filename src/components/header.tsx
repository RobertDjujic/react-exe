import { NavLink } from "react-router-dom";
import logo from "./../assets/images/astronaut.png";

type LinkType = {
  isActive: boolean;
};

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img className="header__logo" src={logo} alt="Logo image." />
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
