import React, { useState } from "react";
import Nav from "../Nav/Nav";

export default function Voting() {
  const [name, setName] = useState("");
  const [slack, setSlack] = useState("");
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
      <section className="voting">
        <div className="header">Vote</div>
        <div>
          In order to prioritize potential projects, please vote on which projects you would be
          interested in working on
        </div>
        <form onSubmit={onSubmit}>
          <div className="voting__project-input">
            <label className="voting__project-input-label" htmlFor="project">
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
          <div className="voting__name-input">
            <label className="voting__name-input-label" htmlFor="name">
              Name:
            </label>
            <input
              name="name"
              className="voting__name-input-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="your name"
            />
          </div>
          <div className="voting__slack-input">
            <label className="voting__slack-input-label" htmlFor="slack">
              Slack Handle / Email :
            </label>
            <input
              name="slack"
              className="voting__slack-input-input"
              value={slack}
              onChange={(e) => setSlack(e.target.value)}
              type="text"
              placeholder="enter either your slack handle or email address"
              size='50'
            />
          </div>
          <div className="voting__submit">
            <button>
              submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
