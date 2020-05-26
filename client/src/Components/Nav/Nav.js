import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav__header">
        <div>WWC - Boulder / Denver</div>
        <div className="spacer" />
        <div>Career Returnship</div>
      </div>
      <nav className="nav">
        <div className="nav__logo">
          <NavLink to="/">ProjectHub</NavLink>
        </div>
        <div className="spacer" />
        <div className="nav__links">
          <ul>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/voting">Voting</NavLink>
            </li>
            <li>
              <NavLink to="/signups">Sign-Ups</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
