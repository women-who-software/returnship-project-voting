// Import React Packages
import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => (
  <>
    <div className="sideBar--container">
      <div className="sideBar--row">
        <div className="sideBar--col">
          <ul>
            <li>
              <NavLink className="sideBar--link" exact to="/admin">
                <img
                  src="https://github.com/wwcodecolorado/returnship-project-voting/blob/master/client/assets/icons/archives.png?raw=true"
                  alt="Archives Icon"
                  className="admin-header--icon"
                  id="admin-header--archives-icon"
                />
                <span className='sideBar_link__header'>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="sideBar--link" exact to="/admin">
                <img
                  src="https://github.com/wwcodecolorado/returnship-project-voting/blob/master/client/assets/icons/user-icon.png?raw=true"
                  alt="User Icon"
                  className="admin-header--icon"
                />
                <span className='sideBar_link__header'>Users</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default SideBar;
