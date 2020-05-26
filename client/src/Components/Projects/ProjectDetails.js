import React from "react";
import Nav from "../Nav/Nav";

export default function ProjectDetails(props) {
  const { project } = props;

  return (
    <>
      <Nav />
      <section className="projectdetails">
        <div className="projectdetails__header">{project.project_name}</div>
        <div className="projectdetails__description">
          <div>
            <span className="strong">Description: </span>
            {project.long_desc}
          </div>
          <div>
            <span className="strong">Contact: </span>
            {project.contact}
          </div>
          <div>
            <span className="strong">Company: </span>
            {project.company}
          </div>
          <div>
            <span className="strong">Tech Stack: </span>
            {project.tech_stack.map((tech) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>
          <div><span className='strong'>Team Members Needed: </span>{project.team_members_needed}</div>
          <div><span className='strong'>Status: </span>{project.status}</div>
        </div>
      </section>
    </>
  );
}
