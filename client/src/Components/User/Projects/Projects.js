import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const { projects, search } = useContext(GlobalContext);

  const filterProjects =
    search.length > 0
      ? projects.filter(
          (project) =>
            project.project_name.toLowerCase().match(search) ||
            project.project_status.toLowerCase().match(search) ||
            project.project_stack
              .split(",")
              .find((tech) => tech.toLowerCase() === search.toLowerCase())
        )
      : projects;

  const getProjects = filterProjects.map((project) => (
    <ProjectDetail project={project} key={project.project_id}>
      <div className="projectDetail__content-line">
        <div className="projectDetail__content-item">
          <div className="projectDetail__content-label">Client Name</div>
          <div className="projectDetail__content-value">
            {project.client_name}
          </div>
        </div>
        <div className="projectDetail__content-item">
          <div className="projectDetail__content-label">
            Team Members Needed
          </div>
          <div className="projectDetail__content-value">
            {project.max_members}
          </div>
        </div>
      </div>

      <div className="projectDetail__content-line">
        <div className="projectDetail__content-item">
          <div className="projectDetail__content-label">Tech Stack</div>
          <div className="projectDetail__content-value">
            {project.project_stack.split(",").join(", ")}
          </div>
        </div>
      </div>

      <div className="projectDetail__content-desc">
        <div className="projectDetail__content-desc-label">Description</div>
        <div className="projectDetail__content-desc-value">
          {project.project_desc}
        </div>
      </div>
    </ProjectDetail>
  ));

  return (
    <>
      <div className="projectDetail">
        {getProjects.length > 0 ? (
          getProjects
        ) : (
          <div className="projectDetail__noresults">
            Sorry, no results were found.
          </div>
        )}
      </div>
    </>
  );
}
