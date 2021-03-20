// Import React Components
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Import ReactBootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Import Custom Components
import MenuClosed from "../Images/hamburger-closed.svg";
import MenuOpen from "../Images/hamburger-open.svg";
import AdminNavSmall from "../AdminNav/AdminNavSmall";
export default function AdminPanelHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="admin_header__container">
        <div className="header__col admin_header__brand">
          <div className="admin_header__hamburger">
            <img
              src={openMenu ? MenuOpen : MenuClosed}
              alt=""
              onClick={() => handleHamburgerClick()}
            />
          </div>
          <NavLink to="/">
            <img
              src="https://github.com/wwcodecolorado/returnship-project-voting/blob/master/client/assets/icons/Home.png?raw=true"
              alt="Home Icon"
              className="admin_header__icon home_icon"
            />
            <span className="admin_header__heading">Career Returnship</span>
          </NavLink>
        </div>
        <div className="header__col">
          <NavLink to="/admin">
            <img
              src="https://github.com/wwcodecolorado/returnship-project-voting/blob/master/client/assets/icons/login%20icon.png?raw=true"
              alt="Profile Icon"
              className="admin_header__icon"
              id="admin_header__profile_icon"
            />
            <span className="admin_header__nav_link">Admin</span>
          </NavLink>
        </div>
      </div>
      {openMenu ? <AdminNavSmall /> : ""}
    </>
  );
}
