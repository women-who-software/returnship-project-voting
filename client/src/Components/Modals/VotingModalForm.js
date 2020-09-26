import React, { useState, useContext } from "react";
import ValidateError from "../ValidateError/ValidateError";
import { GlobalContext } from "../../Context/GlobalContext";

const validator = require("email-validator");

export default function VotingModalForm(props) {
  const { projects } = useContext(GlobalContext);
  const { handleSubmit } = props;

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
  const [email, setEmail] = useState({ value: "", touched: "" });
  const [selectedProjects, setSelectedProjects] = useState({});
  const [projectsTouched, setProjectsTouched] = useState(false);

  // Update state from form

  const updateName = (name) => {
    setName({
      value: name,
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
    setProjectsTouched(true);
  };

  // Form Submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("name", name);
    console.log("email", email);
    console.log(
      "selected",
      Object.keys(selectedProjects).filter(
        (key) => selectedProjects[key].checked
      )
    );

    handleSubmit(true);
  };

  // Validate form fields
  const validateUserName = () => {
    const userName = name.value.trim();

    if (userName.length === 0) {
      return { error: true, message: "Name is required" };
    }

    return { error: false, message: "" };
  };

  const validateEmail = () => {
    const userEmail = email.value.trim();

    if (!validator.validate(userEmail)) {
      return {
        error: true,
        message: "Please enter a valid email address",
      };
    }

    return { error: false, message: "" };
  };

  const validateSelectedProjects = () => {
    const userSelectedProjects = selectedProjects;

    const count = Object.values(userSelectedProjects).filter((k) => k.checked);

    if (Object.keys(userSelectedProjects).length === 0 || count.length === 0) {
      return {
        error: true,
        message: "You must selected at least 1 Project to vote for",
      };
    }

    if (count.length > 2) {
      return {
        error: true,
        message: "Please only select a max of 2 projects",
      };
    }

    return { error: false, message: "" };
  };

  // Check for validation errors
  let buttonDisabled = true;

  const NameError = validateUserName();
  const EmailError = validateEmail();
  const SelectedProjectsError = validateSelectedProjects();

  if (!NameError.error && !EmailError.error && !SelectedProjectsError.error) {
    buttonDisabled = false;
  }

  // Project Options
  const projectOptions = [];
  projects.map((project) => {
    if (project.status === "open") {
      projectOptions.push({
        key: project.project_id,
        name: project.project_name,
        label: project.project_name,
      });
    }
  });

  // Check if selectedOption is checked
  const checkSelectedProject = (project) => {
    return selectedProjects[project]
      ? selectedProjects[project].checked
      : false;
  };

  // render
  return (
    <div className="form">
      <h1>VOTE ON PROJECTS</h1>

      <div className="form__about">
        Select your top choice so we can prioritize projects.
      </div>

      <form onSubmit={handleOnSubmit} className="form__form">
        <div className="form__options">
          <div className="form__options-label">
            Pick your top 2:
          </div>
          <div className="form__options-values">
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
          {projectsTouched && (
            <ValidateError message={SelectedProjectsError.message} />
          )}
        </div>

        <div className="form__input">
          <label className="form__input-label" htmlFor="userName">
            Name:
          </label>
          <input
            name="userName"
            className="form__input-input"
            onChange={(e) => updateName(e.target.value)}
            type="text"
            required
          />
        </div>
        <div>
          {name.touched && <ValidateError message={NameError.message} />}
        </div>

        <div className="form__input">
          <label className="form__input-label" htmlFor="email">
            Email:
          </label>
          <input
            name="email"
            className="form__input-input"
            onChange={(e) => updateEmail(e.target.value)}
            type="text"
            size="50"
            required
          />
        </div>
        <div>
          {email.touched && <ValidateError message={EmailError.message} />}
        </div>

        <div className="form__submit">
          <button type="submit" disabled={buttonDisabled}>
            SUBMIT CHOICE
          </button>
        </div>
      </form>
    </div>
  );
}
