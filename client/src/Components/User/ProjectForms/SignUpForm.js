import React, { useState, useContext } from "react";
import config from "../../../config";
import ValidateError from "../../ValidateError/ValidateError";
import { GlobalContext } from "../../../Context/GlobalContext";
import { Button, Input, Checkbox } from "../../UI";
import {
  validateEmail,
  validateGithub,
  validateSelectedProjects,
  validateUserName,
} from "./Validation";
import StatusNew from "../../Images/project-accepting-new.svg";

export default function SignUpsModalForm(props) {
  const { handleSubmit } = props;
  const { projects } = useContext(GlobalContext);

  const [name, setName] = useState({ value: "", touched: "" });
  const [github, setGithub] = useState({ value: "", touched: "" });
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
    setProjectsTouched(true);
  };

  // Form Submit
  const handleOnSubmit = (e) => {
    if (!buttonDisabled) {
      e.preventDefault();

      console.log("name", name);
      console.log("github", github);
      console.log("email", email);
      console.log(
        "selected",
        Object.keys(selectedProjects).filter(
          (key) => selectedProjects[key].checked
        )
      );

      handleSubmit(true);
    }
  };

  // Check for validation errors
  let buttonDisabled = true;

  const NameError = validateUserName(name.value.trim());
  const GithubError = validateGithub(github.value.trim());
  const EmailError = validateEmail(email.value.trim());
  const SelectedProjectsError = validateSelectedProjects(selectedProjects);

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
  projects.map((project) => {
    return project.project_status === config.PROJECT_STATUS_SIGNUP
      ? projectOptions.push({
          key: project.project_id,
          name: project.project_name,
          label: project.project_name,
        })
      : "";
  });

  // Check if selectedOption is checked
  const checkSelectedProject = (project) => {
    return selectedProjects[project]
      ? selectedProjects[project].checked
      : false;
  };

  const getImage = () => {
    return <img src={StatusNew} alt="SIGN UP" />;
  };

  // render
  return (
    <div className="form">
      <h1>SIGN UP FOR PROJECTS</h1>

      <div className="form__about">
        Select the projects you are interested in
      </div>

      <form className="form__form">
        <div className="form__options">
          <div className="form__options-label">Pick your top 2:</div>

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
              </div>
            ))}
          </div>
        </div>

        <div>
          {projectsTouched && (
            <ValidateError message={SelectedProjectsError.message} />
          )}
        </div>

        <Input
          type="text"
          name="name"
          onChange={(e) => updateName(e.target.value)}
          error={name.touched && NameError}
          label="Name"
          width="200px"
        />

        <Input
          type="text"
          name="email"
          onChange={(e) => updateEmail(e.target.value)}
          error={email.touched && EmailError}
          label="Email:"
          width="200px"
        />

        <Input
          type="text"
          name="github"
          onChange={(e) => updateGithub(e.target.value)}
          error={github.touched && GithubError}
          label="Github Handle:"
          width="200px"
        />

        <div className="form__submit">
          <Button
            type="submit"
            label="SIGN UP"
            img={getImage()}
            handleClick={handleOnSubmit}
            disabled={buttonDisabled}
          />
        </div>
      </form>
    </div>
  );
}
