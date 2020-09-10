import React from "react";
import StatusOpen from "../Images/project-open.svg";
import StatusNew from "../Images/project-accepting-new.svg";
import StatusDev from "../Images/project-in-development.png";
import StatusCompleted from "../Images/project-completed.svg";
import ReactTooltip from "react-tooltip";

export default function Accordion({ project, children }) {
  const [isOpen, setOpen] = React.useState(false);

  const getStatusImage = (status) => {
    let statusImage = "";
    let statusText = "";

    switch (status) {
      case "open":
        statusImage = StatusOpen;
        statusText = "Open Project";
        break;

      case "new-members":
        statusImage = StatusNew;
        statusText = "Accepting New members";
        break;

      case "in-progress":
        statusImage = StatusDev;
        statusText = "In Development";
        break;

      case "completed":
        statusImage = StatusCompleted;
        statusText = "Completed";
        break;

      default:
        statusImage = "";
        break;
    }

    return <img src={statusImage} alt={statusText} />;
  };

  const getStatusText = (status) => {
    let statusText = "";

    switch (status) {
      case "open":
        statusText = "Open Project";
        break;

      case "new-members":
        statusText = "Accepting New members";
        break;

      case "in-progress":
        statusText = "In Development";
        break;

      case "completed":
        statusText = "Completed";
        break;

      default:
        statusText = "";
        break;
    }

    return statusText;
  };

  return (
    <div className="accordion__wrapper">
      <div
        className={`accordion__title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div>
          <div>Project: {project.project_name}</div>
          <div>
            Status{"\u00a0"}{" "}
            <button
              className="accordian__status"
              data-for="accordion__status"
              data-tip={getStatusText(project.status)}
            >
              {getStatusImage(project.status)}
            </button>
            <ReactTooltip
              id="accordion__status"
              className="accordion__status"
              delayHide={1000}
              textColor="#000"
              backgroundColor="#FFF"
              effect="solid"
            />
          </div>
        </div>
        <div className="accordion__title-more">More Details{"\u00a0"}</div>
      </div>
      <div className={`accordion__item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
}
