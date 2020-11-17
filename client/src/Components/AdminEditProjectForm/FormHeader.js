import React, { useState } from "react";

export default function FormHeader(props) {
  const { project } = props;

  const [projectName, setProjectName] = useState({
    value: project.project_name,
    touched: "",
  });
  return (
    <>
      <div className="adminEditProjectForm__form_row adminEditProjectForm__header">
        <div className="adminEditProjectForm__form_col adminEditProjectForm__header_title">
          Project Details
        </div>
        <div className="adminEditProjectForm__form_col">
          <button className="adminEditProjectForm__btn">Save As Draft</button>
        </div>
        <div className="adminEditProjectForm__form_col">
          <button className="adminEditProjectForm__btn" type="submit">
            Publish
          </button>
        </div>
      </div>
      <div className="adminEditProjectForm__form_row">
        <label>Project Title</label>
      </div>
      <div className="adminEditProjectForm__form_row">
        <input
          type="text"
          name="project_name"
          defaultValue={projectName.value}
          // onChange={}
        />
      </div>
    </>
  );
}
