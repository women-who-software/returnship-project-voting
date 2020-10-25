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
      <div className="projects__items-project-name">
        {projects.project_name}
      </div>
      <div className="projects__items-short-desc">{projects.short_desc}</div>
      <div className="projects__items-status">
        <span className="strong">Status: </span>
        {projects.status}
      </div>
      <div className="projects__items-more">
        {/*?? TODO - Change the route to EditProjectDetailsPage */}
        <NavLink to={`/projects/${projects.project_id}`}>
          <button className="small-button">More Details</button>
        </NavLink>
      </div>

      {/* row 5 col */}
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
            <div className="col">Project</div>
            <div className="col">Vote</div>
            <div className="col">Sign Up</div>
            <div className="col">Status</div>
            <div className="col">Date</div>
          </div>
          <div className="col projectCards">{getProjects}</div>
        </div>
      </div>
    </>
  );
}
