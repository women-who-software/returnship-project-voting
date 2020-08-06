import React, { useContext } from "react";
import Accordion from "../Accordion/Accordion";
import { GlobalContext } from "../../Context/GlobalContext";

export default function Projects() {
  const { projects } = useContext(GlobalContext);

  const getProjects = projects.map((project) => (
    <Accordion project={project} key={project.project_id}>
      <div className="accordion__content-line">
        <div className="accordion__content-item">
          <div className="accordion__content-label">COMPANY</div>
          <div className="accordion__content-value">
            {project.client_company}
          </div>
        </div>
        <div className="accordion__content-item">
          <div className="accordion__content-label">CONTACT</div>
          <div className="accordion__content-value">{project.client_email}</div>
        </div>
      </div>

      <div className="accordion__content-line">
        <div className="accordion__content-item">
          <div className="accordion__content-label">NAME</div>
          <div className="accordion__content-value">{project.client_name}</div>
        </div>
        <div className="accordion__content-item">
          <div className="accordion__content-label">TEAM MEMBERS NEEDED</div>
          <div className="accordion__content-value">
            {project.max_team_members}
          </div>
        </div>
      </div>

      <div className="accordion__content-line">
        <div className="accordion__content-item">
          <div className="accordion__content-label">TECH STACK</div>
          <div className="accordion__content-value">{project.tech_stack}</div>
        </div>
      </div>

      <div className="accordion__content-desc">
        <div className="accordion__content-desc-label">DESCRIPTION</div>
        <div className="accordion__content-desc-value">
          {project.project_desc}
        </div>
      </div>
    </Accordion>
  ));

  return <div className="accordion">{getProjects}</div>;
}
