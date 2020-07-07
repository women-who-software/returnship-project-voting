import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function ProjectDetails(props) {
  const { project } = props;

  return (
    <>
      <Nav />
      <section className="projectdetails">
        <div className="header">{project.project_name}</div>
        <div className="projectdetails__description">
          <div>
            <span className="strong">Description: </span>
            {project.project_long_desc}
          </div>
          <div>
            <span className="strong">Contact: </span>
            {project.client_name}
          </div>
          <div>
            <span className="strong">Company: </span>
            {project.client_company}
          </div>
          <div>
            <span className="strong">Tech Stack: </span>
            {project.tech_stack.map((tech) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>
          <div>
            <span className="strong">Team Members Needed: </span>
            {project.max_team_members}
          </div>
          <div>
            <span className="strong">Status: </span>
            {project.status}
          </div>
        </div>
        <div className="projectdetails__back">
          <NavLink to="/projects">
            <button className='small-button'>Back to Projects</button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
