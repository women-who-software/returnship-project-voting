import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import ProjectDetail from "./ProjectDetail";
import useToggle from "../../Hooks/useToggle";
import Modal from "../Modals/Modal";
import VotingModalForm from "../Modals/VotingModalForm";
import SignUpsModalForm from "../Modals/SignUpsModalForm";

export default function Projects() {
  const { projects, search } = useContext(GlobalContext);
  const [openVoting, setOpenVoting] = useToggle(false);
  const [openSignUps, setOpenSignUps] = useToggle(false);

  console.log('project', projects)

  const filterProjects =
    search.length > 0
      ? projects.filter(
          (project) =>
            project.project_name.toLowerCase().match(search) ||
            project.project_status.toLowerCase().match(search) ||
            project.project_stack.split(',').find(
              (tech) => tech.toLowerCase() === search.toLowerCase()
            )
        )
      : projects;

  const handleSignUpsOnSubmit = () => {
    setOpenSignUps();
  };

  const handleVotingOnSubmit = () => {
    setOpenVoting();
  };

  const getProjects = filterProjects.map((project) => (
    <ProjectDetail project={project} key={project.project_id}>
      <div className="projectDetail__content-line">
        <div className="projectDetail__content-item">
          <div className="projectDetail__content-label">Client Name</div>
          <div className="projectDetail__content-value">{project.client_name}</div>
        </div>
        <div className="projectDetail__content-item">
          <div className="projectDetail__content-label">Team Members Needed</div>
          <div className="projectDetail__content-value">{project.max_members}</div>
        </div>
      </div>

      <div className="projectDetail__content-line">
        <div className="projectDetail__content-item">
          <div className="projectDetail__content-label">Tech Stack</div>
          <div className="projectDetail__content-value">
            {project.project_stack.split(",").join(", ")}
          </div>
        </div>
      </div>

      <div className="projectDetail__content-desc">
        <div className="projectDetail__content-desc-label">Description</div>
        <div className="projectDetail__content-desc-value">
          {project.project_desc}
        </div>
      </div>

      {project.project_status === "Active" ? (
        <button
          onClick={() => setOpenSignUps()}
          className="projectDetail__content-button animate-left"
        >
          SIGN ME UP
        </button>
      ) : (
        ""
      )}

      {project.project_status === "OpenVote" ? (
        <button
          onClick={() => setOpenVoting()}
          className="projectDetail__content-button animate-left"
        >
          VOTE FOR PROJECT
        </button>
      ) : (
        ""
      )}

      {project.project_status === "SignUp" ? (
        <button className="projectDetail__content-button animate-left">
          <a href="https://career-returnship.netlify.app/contactUs/">
            CONTACT US
          </a>
        </button>
      ) : (
        ""
      )}
    </ProjectDetail>
  ));

  return (
    <>
      <div className="projectDetail">
        {getProjects.length > 0 ? (
          getProjects
        ) : (
          <div className="projectDetail__noresults">
            Sorry, no results were found.
          </div>
        )}
      </div>

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
