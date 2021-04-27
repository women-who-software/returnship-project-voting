import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";
import AdminLogo from "../../Images/admin_logo.svg";

const NavLinks = () => {
  const { isAdmin } = useContext(GlobalContext);

  return (
    <div className="navbar__links">
      <div>
        <NavLink to="/">About</NavLink>
      </div>
      <div>
        <NavLink to="/projects">Project List</NavLink>
      </div>
      {isAdmin && (
        <div>
          <img src={AdminLogo} alt="Admin Logo" />

          <NavLink to="/admin">Admin</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
