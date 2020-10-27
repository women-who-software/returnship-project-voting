import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuClosed from "../Images/hamburger-closed.svg";
import MenuOpen from "../Images/hamburger-open.svg";
import Logo from "../Images/logo.svg";
import NavSmall from "../Nav/NavSmall";

export default function LandingPage() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="header">
        <div className="header__title">
          <div className="header__title-WWC">
            Women Who Code Boulder / Denver
          </div>
          <div className="header__image">
            <img src={Logo} alt="Career Returnship Logo" />
          </div>
          <NavLink to="/" className="header__title-career" style={{color: '#58bacc'}}>CAREER RETURNSHIP</NavLink>

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
