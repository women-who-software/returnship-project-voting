import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/Logo.svg";
import NavLinks from "./NavLinks";

const NavbarLarge = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__large">
        <div className="navbar__large-logo">
          <img src={Logo} alt="ProjectHUB Logo" />

          <NavLink to="/">
            Project<span className="navbar__large-logo-bold">HUB</span>
          </NavLink>
        </div>
        <div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default NavbarLarge;
