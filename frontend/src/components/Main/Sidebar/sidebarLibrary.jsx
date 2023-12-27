import "./Sidebar.css";
import { ReactComponent as LibraryIcon } from "../../../_imgs/svg/LibraryIcon.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import SidebarOption from "./sidebarOption";

const SidebarLibrary = () => {
  return (
    <div className="sidebar">
      <div className="library-option">
        <ul>
          <SidebarOption Icon={LibraryIcon} option="Your Library" />
        </ul>
      </div>
    </div>
  );
};


export default SidebarLibrary;