import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import Nav from "../Nav/Nav";
import ValidateError from "../ValidateError/ValidateError";
import { GlobalContext } from "../../Context/GlobalContext";

const Required = () => <span className="required">*</span>;

export default function Voting() {
  const { projects } = useContext(GlobalContext);
  let history = useHistory();

  const Checkbox = ({ type = "checkbox", name, id, checked = false, onChange }) => {
    return (
      <input
        type={type}
        htmlFor={id}
        name={name}
        value={id}
        checked={checked}
        onChange={onChange}
      />
    );
  };

  const [name, setName] = useState({ value: "", touched: "" });
  const [slack, setSlack] = useState({ value: "", touched: "" });
  const [selectedProjects, setSelectedProjects] = useState({});

  // Update state from form

  const updateName = (name) => {
    setName({
      value: name,
      touched: true,
    });
  };

  const updateSlack = (slack) => {
    setSlack({
      value: slack,
      touched: true,
    });
  };

  const updateSelectedProjects = (event) => {
    setSelectedProjects({
      ...selectedProjects,
      [event.target.name]: { checked: event.target.checked, id: event.target.value },
    });
  };

  // Form Submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("name", name);
    console.log("slack", slack);
    console.log("selectedProjects", selectedProjects);
  };

  // Validate form fields
  const validateUserName = () => {
    const userName = name.value.trim();

    if (userName.length === 0) {
      return { error: true, message: "Name is required" };
    }

    return { error: false, message: "" };
  };

  const validateSlack = () => {
    const userSlack = slack.value.trim();

    if (userSlack.length === 0) {
      return { error: true, message: "Slack Handle or Email address is required" };
    }

    return { error: false, message: "" };
  };

  const validateSelectedProjects = () => {
    const userSelectedProjects = selectedProjects;

    console.log("userSelectedProjects", userSelectedProjects);

    if (Object.keys(userSelectedProjects).length === 0) {
      return { error: true, message: "You must selected at least 1 Project to vote for" };
    }

    return { error: false, message: "" };
  };

  // Check for validation errors
  let buttonDisabled = true;

  const NameError = validateUserName();
  const SlackError = validateSlack();
  const SelectedProjectsError = validateSelectedProjects();

  if (!NameError.error && !SlackError.error && !SelectedProjectsError.error) {
    buttonDisabled = false;
  }

  // Project Options
  const projectOptions = [];
  projects.map((project) =>
    projectOptions.push({
      key: project.project_id,
      name: project.project_name,
      label: project.project_name,
    })
  );

  // Check if selectedOption is checked
  const checkSelectedProject = (project) => {
    return selectedProjects[project] ? selectedProjects[project].checked : false;
  };

  // render
  return (
    <>
      <Nav />
      <section className="voting">
        <div className="header">Vote</div>
        <div className="card">
          <div>
            In order to prioritize potential projects, please vote on which projects you would be
            interested in working on
          </div>
          <form onSubmit={handleOnSubmit}>
            <div className="required">* Required Fields</div>
            <div className="voting__project-options">
              <div>
                <Required />
                Pick up to 2 projects
              </div>
              <div className="voting__projects-options-option">
                {projectOptions.map((item) => (
                  <div key={item.key}>
                    <Checkbox
                      name={item.name}
                      id={item.key}
                      checked={checkSelectedProject(item.name)}
                      value={item.key}
                      onChange={updateSelectedProjects}
                    />
                    <label id={item.key} htmlFor={item.key}>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {selectedProjects && <ValidateError message={SelectedProjectsError.userName} />}
            </div>
            <div className="voting__name-input">
              <label className="voting__name-input-label" htmlFor="userName">
                <Required />
                Name:
              </label>
              <input
                name="userName"
                className="voting__name-input-input"
                onChange={(e) => updateName(e.target.value)}
                type="text"
                placeholder="your name"
                required
              />
            </div>
            <div>{name.touched && <ValidateError message={NameError.userName} />}</div>
            <div className="voting__slack-input">
              <label className="voting__slack-input-label" htmlFor="slack">
                <Required />
                Slack Handle / Email :
              </label>
              <input
                name="slack"
                className="voting__slack-input-input"
                onChange={(e) => updateSlack(e.target.value)}
                type="text"
                placeholder="enter either your slack handle or email address"
                size="50"
                required
              />
            </div>
            <div>{slack.touched && <ValidateError message={SlackError.projects} />}</div>
            <div className="voting__submit">
              <button className="small-button" type="submit" disabled={buttonDisabled}>
                submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
