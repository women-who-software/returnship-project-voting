import React from "react";
import NavLinks from "./NavLinks";

const NavbarSmall = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__small">
        <NavLinks />
      </div>
    </div>
  );
};

export default NavbarSmall;
