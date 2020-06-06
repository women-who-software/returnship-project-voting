import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import Nav from "../Nav/Nav";
import ValidateError from "../ValidateError/ValidateError";
import { GlobalContext } from "../../Context/GlobalContext";

const Required = () => <span className="required">*</span>;

export default function SignUps() {
  const { projects } = useContext(GlobalContext);
  let history = useHistory();

  const Checkbox = ({
    type = "checkbox",
    name,
    id,
    checked = false,
    onChange,
  }) => {
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
  const [github, setGithub] = useState({ value: "", touched: "" });
  const [email, setEmail] = useState({ value: "", touched: "" });
  const [selectedProjects, setSelectedProjects] = useState({});

  // Update state from form

  const updateName = (name) => {
    setName({
      value: name,
      touched: true,
    });
  };

  const updateGithub = (github) => {
    setGithub({
      value: github,
      touched: true,
    });
  };

  const updateEmail = (email) => {
    setEmail({
      value: email,
      touched: true,
    });
  };

  const updateSelectedProjects = (event) => {
    setSelectedProjects({
      ...selectedProjects,
      [event.target.name]: {
        checked: event.target.checked,
        id: event.target.value,
      },
    });
  };

  // Form Submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("name", name);
    console.log("github", github);
    console.log("email", email);
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

  const validateGithub = () => {
    const userGithub = github.value.trim();

    if (userGithub.length === 0) {
      return { error: true, message: "Github Handle is required" };
    }

    return { error: false, message: "" };
  };

  const validateEmail = () => {
    const userEmail = email.value.trim();

    if (userEmail.length === 0) {
      return { error: true, message: "Email address is required" };
    }

    return { error: false, message: "" };
  };

  const validateSelectedProjects = () => {
    const userSelectedProjects = selectedProjects;

    console.log("userSelectedProjects", userSelectedProjects);

    if (Object.keys(userSelectedProjects).length === 0) {
      return {
        error: true,
        message: "You must selected at least 1 Project to vote for",
      };
    }

    return { error: false, message: "" };
  };

  // Check for validation errors
  let buttonDisabled = true;

  const NameError = validateUserName();
  const GithubError = validateGithub();
  const EmailError = validateEmail();
  const SelectedProjectsError = validateSelectedProjects();

  if (
    !NameError.error &&
    !GithubError.error &&
    !EmailError.error &&
    !SelectedProjectsError.error
  ) {
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
    return selectedProjects[project]
      ? selectedProjects[project].checked
      : false;
  };

  // render
  return (
    <>
      <Nav />
      <section className="signups">
        <div className="header">Sign-Ups</div>
        <div className="card">
          <div>
            Please let us know if you are interested in working on one of the
            projects below:
          </div>
          <form onSubmit={handleOnSubmit}>
            <div className="required">* Required Fields</div>
            <div className="signups__project-options">
              <div>
                <Required />
                Available Projects
              </div>
              <div className="signups__projects-options-option">
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
              {selectedProjects && (
                <ValidateError message={SelectedProjectsError.userName} />
              )}
            </div>

            <div className="signups__name-input">
              <label className="signups__name-input-label" htmlFor="userName">
                <Required />
                Name:
              </label>
              <input
                name="userName"
                className="signups__name-input-input"
                onChange={(e) => updateName(e.target.value)}
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              {name.touched && <ValidateError message={NameError.userName} />}
            </div>

            <div className="signups__github-input">
              <label className="signups__github-input-label" htmlFor="github">
                <Required />
                Github Handle:
              </label>
              <input
                name="github"
                className="signups__github-input-input"
                onChange={(e) => updateGithub(e.target.value)}
                type="text"
                placeholder="Enter your Github Handle"
                size="50"
                required
              />
            </div>
            <div>
              {github.touched && (
                <ValidateError message={GithubError.projects} />
              )}
            </div>

            <div className="signups__email-input">
              <label className="signups__email-input-label" htmlFor="github">
                <Required />
                Email Address:
              </label>
              <input
                name="email"
                className="signups__email-input-input"
                onChange={(e) => updateEmail(e.target.value)}
                type="text"
                placeholder="Enter your Email Address"
                size="50"
                required
              />
            </div>
            <div>
              {email.touched && <ValidateError message={EmailError.projects} />}
            </div>
            <div className="signups__submit">
              <button
                className="small-button"
                type="submit"
                disabled={buttonDisabled}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
