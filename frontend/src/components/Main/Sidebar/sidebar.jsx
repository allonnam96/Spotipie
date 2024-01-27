import "./Sidebar.css";
import { ReactComponent as HomeIcon } from "../../../_imgs/svg/HomeIcon.svg";
import { ReactComponent as HomeFillIcon } from "../../../_imgs/svg/HomeFillIcon.svg";
import { ReactComponent as SearchIcon } from "../../../_imgs/svg/SearchIcon.svg";
import { ReactComponent as SearchFillIcon } from "../../../_imgs/svg/SearchFillIcon.svg";
import { ReactComponent as LibraryIcon } from "../../../_imgs/svg/LibraryIcon.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import SidebarOption from "./sidebarOption";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <NavLink
          className={`homelink ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          <SidebarOption
            Icon={location.pathname === "/" ? HomeFillIcon : HomeIcon}
            option="Home"
          />
        </NavLink>
        <NavLink
          className={`homelink ${location.pathname === "/search" ? "active" : ""}`}
          to="/search"
        >
          <SidebarOption
            Icon={location.pathname === "/search" ? SearchFillIcon : SearchIcon}
            option="Search"
          />
        </NavLink>
      </ul>
      <div className="library-option">
        <ul>
          <SidebarOption Icon={LibraryIcon} option="Your Library" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
