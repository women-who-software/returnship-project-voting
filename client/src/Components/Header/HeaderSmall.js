import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuClosed from "../Images/hamburger-closed.svg";
import MenuOpen from "../Images/hamburger-open.svg";
import NavSmall from "../Nav/NavSmall";

export default function HeaderSmall() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="header__small">
        <div className="header__small-title">
          <div>Women Who Code Boulder / Denver</div>

          <div className="header__spacer"></div>

          <div>
            <NavLink
              to="/"
              className="header__title-career"
              style={{ color: "#58bacc" }}
            >
              Career Returnship
            </NavLink>
          </div>
        </div>

        <div className="header__small-title-hamburger">
          <div>
            <NavLink
              to="/"
              className="header__title-career"
              style={{ color: "#58bacc" }}
            >
              Career Returnship
            </NavLink>
          </div>

          <div className="header__spacer"></div>

          <div className="header__hamburger">
            <img
              src={openMenu ? MenuOpen : MenuClosed}
              alt=""
              onClick={() => handleHamburgerClick()}
            />
          </div>
        </div>
      </div>

      {openMenu ? <NavSmall /> : ""}
    </>
  );
}
