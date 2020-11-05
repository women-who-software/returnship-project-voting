// Import React Packages
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

// Import Custom Components
import AdminPanelHeader from "../AdminPanelHeader/AdminPanelHeader";
import SideBar from "../SideBar/SideBar";

export default function AdminProjectDetails(props) {
  const projects = props;
  console.log(projects);
  return (
    <>
      <AdminPanelHeader />
      <div className="sideBar__row admin_project_details">
        <div className="sideBar__col">
          <SideBar />
        </div>
        <div className="sideBar__col admin_project_details__container">
          Hello World
        </div>
      </div>
    </>
  );
}
