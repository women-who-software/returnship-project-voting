// Import React Packages
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Custom Imports
import AdminPanelHeader from "../AdminPanelHeader/AdminPanelHeader";
import SideBar from "../../SideBar/SideBar";
import { GlobalContext } from "../../../Context/GlobalContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanel() {
  //?? TODO - Move `project` into a separate component
  const { projects } = useContext(GlobalContext);
  // const chevronDownElement = <FontAwesomeIcon icon={faChevronDown} />;

  const getProjects = projects.map((projects) => (
    // <div className="projects__items-project card" key={projects.project_id}>
    //   {/* TODO: Create method function for checkbox action */}
    //   <div className="projects__mobile_row1">
    //     <input
    //       type="checkbox"
    //       name="select_checkbox"
    //       className="project_checkbox"
    //       id=""
    //     />
    //     <div className="projects__items-project-name table-col">
    //       <NavLink to={`/admin/projects/${projects.project_id}`}>
    //         {projects.project_name}
    //       </NavLink>
    //     </div>
    //   </div>
    //   <div className="projects__mobile_row2">
    //     <div className="projects__items-vote table-col">
    //       <span className="projects__mobile_table_header">Vote:</span>
    //       {projects.vote}
    //     </div>
    //     <div className="projects__items-sign_up table-col">
    //       <span className="projects__mobile_table_header">Sign Up:</span>
    //       {projects.sign_up}
    //     </div>
    //     <div className="projects__items-status table-col">
    //       <span className="projects__mobile_table_header">Status:</span>
    //       {projects.status}
    //     </div>
    //     <div className="projects__items-date table-col">
    //       <span className="projects__mobile_table_header">Date:</span>
    //       {projects.date}
    //     </div>
    //   </div>
    // </div>
    <div>Projects</div>
  ));
  return (
    <>
      <AdminPanelHeader />
      <div className="row admin-container">
        <div className="sideBar">
          <SideBar className="sideBar-component" />
        </div>
        <div className="col admin-panel">
          <div className="row toolbar">
            <div className="row projects__toolbar_row">
              <div className="col btn btn_row2">
                <a role="button" href="#" className="tool-btn bulk-btn">
                  Bulk Actions
                </a>
                {/* TODO: Convert to projectDetail with options: 1) Edit 2) Move to Trash  */}
                <span className="chevronDownElement">
                  <img
                    src="https://github.com/wwcodecolorado/returnship-project-voting/blob/feature-admin-details-mobile/client/assets/icons/Up_Vector.png?raw=true"
                    alt="Up_Vector"
                  />
                </span>
              </div>
              <div className="col btn apply-btn">
                <a role="button" href="#" className="tool-btn apply-btn_a">
                  Apply
                </a>
              </div>
            </div>
            <div className="col btn btn_projects">
              <a role="button" href="#" className="tool-btn projects-btn">
                Add New Projects
              </a>
            </div>
          </div>
          <div className="row table-header">
            <div className="header-name">Project</div>
            <div className="header-vote">Vote</div>
            <div className="header-sign_up">Sign Up</div>
            <div className="header-status">Status</div>
            <div className="header-date">Date</div>
          </div>
          <div className="col projectCards">{getProjects}</div>
        </div>
      </div>
    </>
  );
}
