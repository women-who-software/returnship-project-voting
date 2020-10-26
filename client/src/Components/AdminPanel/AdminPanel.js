// Import React Packages
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Custom Imports
import AdminPanelHeader from "../AdminPanelHeader/AdminPanelHeader";
import SideBar from "../SideBar/SideBar";
import { GlobalContext } from "../../Context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanel() {
  //?? TODO - Move `project` into a separate component
  const { projects } = useContext(GlobalContext);
  const chevronDownElement = <FontAwesomeIcon icon={faChevronDown} />;

  const getProjects = projects.map((projects) => (
    <div className="projects__items-project card" key={projects.project_id}>
      {/* TODO: Create method function for checkbox action */}
      <input type="checkbox" name="select_checkbox" className='project_checkbox' id=""/>
      <div className="projects__items-project-name table-col">
        <NavLink to={`/projects/${projects.project_id}`}>
          {projects.project_name}
        </NavLink>
      </div>
      <div className="projects__items-vote table-col">{projects.vote}</div>
      <div className="projects__items-sign_up table-col">
        {projects.sign_up}
      </div>
      <div className="projects__items-status table-col">{projects.status}</div>
      <div className="projects__items-date table-col">{projects.date}</div>
    </div>
  ));
  return (
    <>
      <AdminPanelHeader />
      <div className="row admin-container">
        <div className="col sideBar">
          <SideBar className="sideBar-component" />
        </div>
        <div className="col admin-panel">
          <div className="row toolbar">
            {/* <div className="row d-flex justify-content-end"> */}
            <div className="col">
              <a role="button" href="#" className="tool-btn bulk-btn">
                Bulk Actions
              </a>
              {/* TODO: Convert to accordion with options: 1) Edit 2) Move to Trash  */}
              <span className="chevronDownElement">{chevronDownElement}</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div className="col">
              <a role="button" href="#" className="tool-btn apply-btn">
                Apply
              </a>
            </div>
            <div className="col">
              <a role="button" href="#" className="tool-btn projects-btn">
                Add New Projects
              </a>
            </div>
          </div>
          <div className="row table-header">
            <div className="projects__items-project-name table-col header-name">
              Project
            </div>
            <div className="projects__items-vote table-col header-vote">
              Vote
            </div>
            <div className="projects__items-sign_up table-col header-sign_up">
              Sign Up
            </div>
            <div className="projects__items-status table-col header-status">
              Status
            </div>
            <div className="projects__items-date table-col header-date">
              Date
            </div>
          </div>
          <div className="col projectCards">{getProjects}</div>
        </div>
      </div>
    </>
  );
}
