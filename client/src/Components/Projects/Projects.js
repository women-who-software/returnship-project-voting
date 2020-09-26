import React, { useContext } from "react";
import Accordion from "../Accordion/Accordion";
import { GlobalContext } from "../../Context/GlobalContext";
import useToggle from "../Hooks/useToggle";
import Modal from "../Modals/Modal";
import VotingModalForm from "../Modals/VotingModalForm";
import SignUpsModalForm from "../Modals/SignUpsModalForm";

export default function Projects() {
  const { projects } = useContext(GlobalContext);
  const [openVoting, setOpenVoting] = useToggle(false);
  const [openSignUps, setOpenSignUps] = useToggle(false);

  const handleSignUpsOnSubmit = () => {
    setOpenSignUps();
  };

  const handleVotingOnSubmit = () => {
    setOpenVoting();
  };

  const getProjects = projects.map((project) => (
    <Accordion project={project} key={project.project_id}>
      <div className="accordion__content-line">
        <div className="accordion__content-item">
          <div className="accordion__content-label">Client Name</div>
          <div className="accordion__content-value">{project.client_name}</div>
        </div>
        <div className="accordion__content-item">
          <div className="accordion__content-label">
            Team Members Needed for Project
          </div>
          <div className="accordion__content-value">
            {project.max_team_members}
          </div>
        </div>
      </div>

      <div className="accordion__content-line">
        <div className="accordion__content-item">
          <div className="accordion__content-label">Tech Stack</div>
          <div className="accordion__content-value">
            {project.tech_stack.join(", ")}
          </div>
        </div>
      </div>

      <div className="accordion__content-desc">
        <div className="accordion__content-desc-label">Description</div>
        <div className="accordion__content-desc-value">
          {project.project_desc}
        </div>
      </div>

      {project.status === "new" ? (
        // <div className="accordion__content-button">SIGN ME UP</div>
        <button
          onClick={() => setOpenSignUps()}
          className="accordion__content-button animate-left"
        >
          SIGN ME UP
        </button>
      ) : (
        ""
      )}

      {project.status === "open" ? (
        // <div className="accordion__content-button">VOTE FOR PROJECT</div>
        <button
          onClick={() => setOpenVoting()}
          className="accordion__content-button animate-left"
        >
          VOTE FOR PROJECT
        </button>
      ) : (
        ""
      )}

      {project.status === "dev" ? (
        <div className="accordion__content-button">
          <a href=" ">
            CONTACT US
          </a>
        </div>
      ) : (
        ""
      )}
    </Accordion>
  ));

  return (
    <>
      <div className="accordion">{getProjects}</div>
      {openVoting && (
        <Modal open={openVoting} toggle={setOpenVoting}>
          <VotingModalForm handleSubmit={handleVotingOnSubmit} />
        </Modal>
      )}
      {openSignUps && (
        <Modal open={openSignUps} toggle={setOpenSignUps}>
          <SignUpsModalForm handleSubmit={handleSignUpsOnSubmit} />
        </Modal>
      )}
    </>
  );
}
