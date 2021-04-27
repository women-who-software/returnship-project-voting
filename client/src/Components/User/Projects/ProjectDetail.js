import React from "react";
import StatusOpen from "../../Images/project-open.svg";
import StatusNew from "../../Images/project-accepting-new.svg";
import useToggle from "../../Hooks/useToggle";
import { Modal, Button } from "../../UI";
import VotingForm from "../ProjectForms/VotingForm";
import SignUpsForm from "../ProjectForms/SignUpForm";

export default function Accordion({ project, children }) {
  const [isOpen, setOpen] = React.useState(false);
  const [openVoting, setOpenVoting] = useToggle(false);
  const [openSignUps, setOpenSignUps] = useToggle(false);

  const handleSignUpsOnSubmit = () => {
    setOpenSignUps();
  };

  const handleVotingOnSubmit = () => {
    setOpenVoting();
  };

  const getStatus = (status) => {
    let statusText = "";
    let statusImage = "";
    let statusImageText = "";

    switch (status) {
      case "OpenVote":
        statusImage = StatusOpen;
        statusText = "Open Vote";
        statusImageText = "VOTE";
        break;
      case "SignUp":
        statusImage = StatusNew;
        statusText = "Open Project";
        statusImageText = "Sign Up";
        break;
      case "Active":
        statusText = "Active";
        break;
      case "Complete":
        statusText = "Completed";
        break;
      default:
        statusImage = "";
        break;
    }

    return {
      image: statusImage ? <img src={statusImage} alt={statusImageText} /> : "",
      status: statusText,
      statusImageText: statusImageText ? statusImageText : "",
    };
  };

  // ClassNames
  let titleOpen = isOpen ? "open" : "";
  let projectActive =
    project.project_status === "Active"
      ? "projectDetail__title-project-active"
      : "";
  let projectComplete =
    project.project_status === "Complete"
      ? "projectDetail__title-project-complete"
      : "";

  return (
    <>
      <div className="projectDetail">
        <div
          className={`projectDetail__title  ${projectActive} ${projectComplete}`}
        >
          <div className="projectDetail__title-left">
            <div className="projectDetail__title-project">
              Project: {project.project_name}
            </div>
            <div className="projectDetail__title-status">
              <span className="projectDetail__title-status-title">Status</span>{" "}
              {getStatus(project.project_status).status}
            </div>
          </div>
          <div className="projectDetail__title-right">
            <div className="projectDetail__title-right-modal">
              {project.project_status === "OpenVote" ? (
                <Button
                  handleClick={() => setOpenVoting()}
                  label={getStatus(project.project_status).statusImageText}
                  img={getStatus(project.project_status).image}
                />
              ) : (
                ""
              )}
              {project.project_status === "SignUp" ? (
                <Button
                  handleClick={() => setOpenSignUps()}
                  label={getStatus(project.project_status).statusImageText}
                  img={getStatus(project.project_status).image}
                />
              ) : (
                ""
              )}
              {project.project_status !== "SignUp" &&
              project.project_status !== "OpenVote" ? (
                <div className="projectDetail__content-spacer"></div>
              ) : (
                ""
              )}
            </div>
            <div className={`${titleOpen}`} onClick={() => setOpen(!isOpen)}>
              <div className="projectDetail__title-right-accordion-large">
                More details
              </div>
              <div className="projectDetail__title-right-accordion">
                {"\u1433"}
              </div>
            </div>
          </div>
        </div>
        <div className={`projectDetail__item ${!isOpen ? "collapsed" : ""}`}>
          <div className="projectDetail__content">{children}</div>
        </div>
      </div>

      {openVoting && (
        <Modal open={openVoting} toggle={setOpenVoting}>
          <VotingForm handleSubmit={handleVotingOnSubmit} />
        </Modal>
      )}
      {openSignUps && (
        <Modal open={openSignUps} toggle={setOpenSignUps}>
          <SignUpsForm handleSubmit={handleSignUpsOnSubmit} />
        </Modal>
      )}
    </>
  );
}
