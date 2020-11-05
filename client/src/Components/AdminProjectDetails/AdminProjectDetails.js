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
      <div className="row">
        <div className="col">
          <SideBar />
        </div>
        <div className="col">Hello World</div>
      </div>
    </>
  );
}
