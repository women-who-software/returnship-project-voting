import React from "react";
import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom";

export default function Projects(props) {
  const { projects } = props;

  const getProjects = projects.map((projects) => (
    <div className="projects__items-project" key={projects.project_id}>
      <div className="projects__items-project-name">{projects.project_name}</div>
      <div className="projects__items-short-desc">{projects.short_desc}</div>
      <div className="projects__items-status"><span className='strong'>Status: </span>{projects.status}</div>
      <div className="projects__items-more">
        <NavLink to={`/projects/${projects.project_id}`}>
          <button>More Details</button>
        </NavLink>
      </div>
    </div>
  ));

  return (
    <>
      <Nav />
      <section className="projects">
        <div className="projects__header">Projects</div>
        <div className="projects__items">{getProjects}</div>
      </section>
    </>
  );
}
