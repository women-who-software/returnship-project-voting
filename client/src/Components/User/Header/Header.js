import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/Logo.svg";
import MenuClosed from "../../Images/hamburger-closed.svg";
import MenuOpen from "../../Images/hamburger-open.svg";
import NavbarSmall from "../Navigation/NavbarSmall";
import NavbarLarge from "../Navigation/NavbarLarge";

const HeaderLarge = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="header">
        <div className="header__large">
          <div className="header__large-title">
            Women Who Code Boulder / Denver
          </div>

          <div className="header__large-subTitle">ProjectHUB</div>
        </div>

        <div className="header__small">
          <div className="header__small-title">
            <img src={Logo} alt="ProjectHUB Logo" />

            <NavLink
              to="/"
              className="header__title-career"
              style={{ color: "#58bacc" }}
            >
              Project<strong>HUB</strong>
            </NavLink>
          </div>

          <div className="header__small-hamburger">
            <div className="header__hamburger">
              <img
                src={openMenu ? MenuOpen : MenuClosed}
                alt=""
                onClick={() => handleHamburgerClick()}
              />
            </div>
          </div>
        </div>
      </div>
      <NavbarLarge />
      {openMenu ? <NavbarSmall /> : ""}
    </>
  );
};

export default HeaderLarge;
