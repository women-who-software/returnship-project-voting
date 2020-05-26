import React from "react";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="landing">
      <div className="landing__header">
        <div>Women Who Code Boulder / Denver</div>
        <div>Career Returnship</div>
        <div>ProjectHub</div>
      </div>
      <div className="landing__buttons">
        <NavLink to="/projects">
          <button>Projects List</button>
        </NavLink>
        <NavLink to="/voting">
          <button>Vote</button>
        </NavLink>
        <NavLink to="/signups">
          <button>Sign-Up</button>
        </NavLink>
      </div>
      <div className="landing__about">
        <div className="landing__about-heading">About Career Returnship</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
      <div className="landing__admin">
        <NavLink to="/login">
          <button>Admin</button>
        </NavLink>
      </div>
    </section>
  );
}
