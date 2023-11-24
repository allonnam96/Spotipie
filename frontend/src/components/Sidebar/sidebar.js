import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../../_imgs/svg/HomeIcon.svg";
import { ReactComponent as SearchIcon } from "../../_imgs/svg/SearchIcon.svg";
import { ReactComponent as LibraryIcon } from "../../_imgs/svg/LibraryIcon.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import SidebarOption from "./sidebarOption";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul>
                <img
                    className="sidebar__logo"
                    src="../../_imgs/svg/spotifyLogo.png"
                    alt=""
                />
                <NavLink to="/">
                    <SidebarOption Icon={HomeIcon} option="Home" />
                </NavLink>
                <SidebarOption Icon={SearchIcon} option="Search" />

                {/* <strong className="sidebarTitle">PLAYLIST</strong> */}
            </ul>
            <div className="library-option">
                <ul>
                    <SidebarOption Icon={LibraryIcon} option="Your Library" />

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;