// Import React Components
import React from "react";
import { NavLink } from "react-router-dom";
import AdminNavSmall from "./AdminNavSmall";

export default function AdminNavLinks() {
  return (
    <>
      <div className="admin_nav_links_container">
        <div className="admin_nav_links_row">
          <NavLink to="/admin">Projects</NavLink>
        </div>
        <div className="admin_nav_links_row">
          <NavLink to="/admin">Users</NavLink>
        </div>
      </div>
    </>
  );
}
