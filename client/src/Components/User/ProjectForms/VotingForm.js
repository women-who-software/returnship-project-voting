import React, { useState, useContext } from "react";
import config from "../../../config";
import ValidateError from "../../ValidateError/ValidateError";
import { GlobalContext } from "../../../Context/GlobalContext";
import { Button, Input, Checkbox } from "../../UI";
import {
  validateEmailOrSlack,
  validateSelectedProjects,
  validateUserName,
} from "./Validation";
import StatusOpen from "../../Images/project-open.svg";

export default function VotingModalForm(props) {
  const { projects } = useContext(GlobalContext);
  const { handleSubmit } = props;
  const [name, setName] = useState({ value: "", touched: "" });
  const [emailOrSlack, setEmailOrSlack] = useState({ value: "", touched: "" });
  const [selectedProjects, setSelectedProjects] = useState({});
  const [projectsTouched, setProjectsTouched] = useState(false);

  // Update state from form

  const updateName = (name) => {
    setName({
      value: name,
      touched: true,
    });
  };

  const updateEmailOrSlack = (input) => {
    setEmailOrSlack({
      value: input,
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

      console.log("emailOrSlack", emailOrSlack);

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
  const EmailOrSlackError = validateEmailOrSlack(emailOrSlack.value.trim());
  const SelectedProjectsError = validateSelectedProjects(selectedProjects);

  if (
    !NameError.error &&
    !EmailOrSlackError.error &&
    !SelectedProjectsError.error
  ) {
    buttonDisabled = false;
  }

  // Project Options
  const projectOptions = [];
  projects.map((project) => {
    if (project.project_status === config.PROJECT_STATUS_OPENVOTE) {
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

  const getImage = () => {
    return <img src={StatusOpen} alt="VOTE" />;
  };

  // render
  return (
    <div className="form">
      <h1>VOTE ON PROJECTS</h1>

      <div className="form__about">
        Select your top choice so we can prioritize projects.
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
          name="userName"
          onChange={(e) => updateName(e.target.value)}
          error={name.touched && NameError}
          label="Name"
          width="200px"
        />

        <Input
          type="text"
          name="OrSlack"
          onChange={(e) => updateEmailOrSlack(e.target.value)}
          error={emailOrSlack.touched && EmailOrSlackError}
          label="Slack Handle or Email:"
          width="200px"
        />

        <div className="form__submit">
          <Button
            type="submit"
            label="VOTE"
            handleClick={handleOnSubmit}
            disabled={buttonDisabled}
            img={getImage()}
          />
        </div>
      </form>
    </div>
  );
}
