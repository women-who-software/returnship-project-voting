import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.svg";
import AdminLogo from "../Images/admin_logo.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="Career Returnship Logo" />
        <NavLink to="/">CAREER RETURNSHIP</NavLink>
      </div>
      <div className="spacer" />
      <div className="nav__links">
        <div className="nav__links-nav">
          <div>
            <NavLink to="/projects">Project list</NavLink>
          </div>
          <div>
            <NavLink to="/voting">Vote on Projects</NavLink>
          </div>
          <div>
            <NavLink to="/signups">Sign Up for Projects</NavLink>
          </div>
        </div>
        <div className="nav__links-admin">
          <img src={AdminLogo} alt="Admin Button" />
          <NavLink to="/admin">ADMIN</NavLink>
        </div>
      </div>
    </nav>
  );
}
