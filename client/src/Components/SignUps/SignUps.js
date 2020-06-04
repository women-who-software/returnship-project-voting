import React, { useState } from "react";
import Nav from "../Nav/Nav";

export default function SignUps() {
  const [name, setName] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [email, setEmail] = useState("");
  const [projects, setProjects] = useState({
    project1: false,
    project2: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // const newEmployee = {
    //   id: employees.length + 1,
    //   name,
    //   location,
    //   designation,
    // };
    // addEmployee(newEmployee);
    // history.push("/");
  };

  const handleProjectClick = ({ target }) =>
    setProjects((project) => ({ ...setProjects, [target.name]: !project[target.name] }));

  return (
    <>
      <Nav />
      <section className="signups">
        <div className="header">Sign-Ups</div>
        <div className="card">
          <div>
            Please let us know if you are interested in working on one of the projects below
          </div>
          <form onSubmit={onSubmit}>
            <div className="signups__project-input">
              <label className="signups__project-input-label" htmlFor="project">
                Pick your top 2
              </label>
              {Object.keys(projects).map((key) => (
                <div key={key}>
                  <input
                    type="checkbox"
                    onChange={handleProjectClick}
                    key={key}
                    name={key}
                    checked={projects[key]}
                  />
                  <span>{key}</span>
                </div>
              ))}
            </div>
            <div className="signups__name-input">
              <label className="signups__name-input-label" htmlFor="name">
                Name:
              </label>
              <input
                name="name"
                className="signups__name-input-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="your name"
              />
            </div>
            <div className="signups__github-input">
              <label className="signups__github-input-label" htmlFor="slack">
                Github Handle:
              </label>
              <input
                name="slack"
                className="signups__github-input-input"
                value={gitHub}
                onChange={(e) => setGitHub(e.target.value)}
                type="text"
                placeholder="enter your github handle"
                size="50"
              />
            </div>
            <div className="signups__email-input">
              <label className="signups__email-input-label" htmlFor="slack">
                Email:
              </label>
              <input
                name="slack"
                className="signups__github-input-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="enter your email address"
                size="50"
              />
            </div>
            <div className="signups__submit">
              <button className='small-button'>submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
