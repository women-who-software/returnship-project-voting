import React, { useState } from "react";

export default function FormHeader(props) {
  const { project } = props;

  const [projectName, setProjectName] = useState({
    value: project.project_name,
    touched: "",
  });
  return (
    <>
      <div className="adminEditProjectForm__header">
        <div className="adminEditProjectForm__form_row adminEditProjectForm__toolbar">
          <div className="adminEditProjectForm__form_col adminEditProjectForm__header_title">
            Project Details
          </div>
          <div className="adminEditProjectForm__form_col adminEditProjectForm__btn_col">
            <button className="adminEditProjectForm__btn">Save As Draft</button>
          </div>
          <div className="adminEditProjectForm__form_col adminEditProjectForm__btn_col">
            <button className="adminEditProjectForm__btn" type="submit">
              Publish
            </button>
          </div>
        </div>
        <div className="adminEditProjectForm__project_info_container">
          <div className="adminEditProjectForm__form_row adminEditProjectForm__project_title">
            <label>Project Title:</label>
          </div>
          <div className="adminEditProjectForm__form_row">
            <input
              type="text"
              name="project_name"
              className="adminEditProjectForm__project_title_input"
              defaultValue={projectName.value}
              // onChange={}
            />
          </div>
        </div>
      </div>
    </>
  );
}
