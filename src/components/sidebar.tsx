import { LinkType } from "../data/types";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const linkList: LinkType[] = [
  {
    label: "Progress bar",
    path: "/progress-bar-page",
  },
  {
    label: "Loader",
    path: "/loader-page",
  },
  {
    label: "Select",
    path: "/select-page",
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      {linkList.map((link) => {
        return (
          <div className="sidebar__link__wrapper">
            <NavLink
              className="sidebar__link"
              key={link.path}
              onClick={onClose}
              to={link.path}
            >
              {link.label}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
