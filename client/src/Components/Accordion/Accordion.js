import React from "react";

export default function Accordion({ project, children }) {
  const [isOpen, setOpen] = React.useState(false);
  
  return (
    <div className="accordion__wrapper">
      <div
        className={`accordion__title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        Project: {project.project_name}
      </div>
      <div className={`accordion__item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
}
