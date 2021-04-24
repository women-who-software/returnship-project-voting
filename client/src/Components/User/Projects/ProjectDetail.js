import React from "react";
import StatusOpen from "../../Images/project-open.svg";
import StatusNew from "../../Images/project-accepting-new.svg";

export default function Accordion({ project, children }) {
  const [isOpen, setOpen] = React.useState(false);

  const getStatus = (status) => {
    let statusText = "";
    let statusImage = "";
    let statusImageText = "";

    switch (status) {
      case "OpenVote":
        statusImage = StatusOpen;
        statusText = "Open Project";
        statusImageText = "SIGN UP";
        break;
      case "SignUp":
        statusImage = StatusNew;
        statusText = "Open Vote";
        statusImageText = "VOTE";
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
    <div className="projectDetail">
      <div
        className={`projectDetail__title ${titleOpen} ${projectActive} ${projectComplete}`}
        onClick={() => setOpen(!isOpen)}
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
            {project.project_status === "OpenVote" ||
            project.project_status === "SignUp" ? (
              <button>
                {getStatus(project.project_status).image}{" "}
                {getStatus(project.project_status).statusImageText}
              </button>
            ) : (
              ""
            )}
          </div>
          <div>
            <div className="projectDetail__title-right-accordion-large">
              More details
            </div>
            <div className="projectDetail__title-right-accordion"> </div>
          </div>
        </div>
      </div>
      <div className={`projectDetail__item ${!isOpen ? "collapsed" : ""}`}>
        <div className="projectDetail__content">{children}</div>
      </div>
    </div>
  );
}
