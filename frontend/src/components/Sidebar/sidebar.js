import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../../_imgs/svg/HomeIcon.svg";
import { ReactComponent as SearchIcon } from "../../_imgs/svg/SearchIcon.svg";
import { ReactComponent as LibraryIcon } from "../../_imgs/svg/LibraryIcon.svg";
import SidebarOption from "./sidebarOption";


const Sidebar = () => {


    return (
 
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <ul>
            <SidebarOption Icon={HomeIcon} option="Home"/>
            <SidebarOption Icon={SearchIcon} option="Search"/>

            {/* <strong className="sidebarTitle">PLAYLIST</strong> */}
            </ul>
            <div className="library-option">
            <SidebarOption Icon={LibraryIcon} option="Your Library"/>
            </div>
        </div>
    );
}

export default Sidebar;