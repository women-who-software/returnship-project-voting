import React from "react";
import StatusOpen from "../Images/project-open.svg";
import StatusDev from "../Images/project-accepting-new.svg";
import ReactTooltip from "react-tooltip";

export default function Accordion({ project, children }) {
  const [isOpen, setOpen] = React.useState(false);

  const getStatusIcon = () => {
    switch (project.status) {
      case "open":
        return StatusOpen;

      case "in-progress":
        return StatusDev;

      case "new-members":
        return StatusOpen;

      default:
        return StatusOpen;
    }
  };

  const getStatusText = () => {
    switch (project.status) {
      case "open":
        return "Open";

      case "in-progress":
        return "In progress";

      case "new-members":
        return "New";

      default:
        return "Open";
    }
  };

  return (
    <>
      <ReactTooltip
        id="projectStatus"
        type="light"
        className="accordion__title-tooltip"
        effect="solid"
        getContent={(dataTip) => `${dataTip}`}
      />
      <div className="accordion__wrapper">
        <div
          className={`accordion__title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          <div>
            <div>Project: {project.project_name}</div>
            <div className="accordion__title-sub">
              <span className="accordion__title-sub-header">Status</span>
              <img
                src={getStatusIcon()}
                alt={project.project_name}
                data-tip={getStatusText()}
                data-for="projectStatus"
              />
            </div>
          </div>
        </div>
        <div className={`accordion__item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion__content">{children}</div>
        </div>
      </div>
    </>
  );
}
