// Import React Components
import React from "react";
import { NavLink } from "react-router-dom";
import AdminNavSmall from "./AdminNavSmall";

export default function AdminNavLinks() {
  return (
    <>
      <div className="admin_nav__links_container">
        <div className="admin_nav__links_row">
          <NavLink className="admin_nav__links_a" to="/admin">
            Projects
          </NavLink>
        </div>
        <div className="admin_nav__links_row">
          <NavLink className="admin_nav__links_a" to="/admin">
            Users
          </NavLink>
        </div>
          <div className="hr_line"></div>
      </div>
    </>
  );
}
