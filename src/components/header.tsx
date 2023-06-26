import { LinkType } from "../data/types";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.png";

type HeaderProps = {
  onClose: () => void;
  toggleSidebar: () => void;
};

const headerLinks: LinkType[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Kontakt",
    path: "/contact",
  },
  {
    label: "Animals",
    path: "/animals",
  },
];

const Header = ({ onClose, toggleSidebar }: HeaderProps) => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img
          className="header__logo"
          onClick={toggleSidebar}
          src={logo}
          alt="A floating astronaut."
        />
        <nav className="header__nav">
          {headerLinks.map((link) => {
            return (
              <NavLink
                className="header__nav__link"
                key={link.path}
                onClick={onClose}
                to={link.path}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default Header;
