import React from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../Hooks/useToggle";
import Modal from "../Modals/Modal";
import VotingModalForm from "../Modals/VotingModalForm";
import SignUpsModalForm from "../Modals/SignUpsModalForm";
import AdminLogo from "../Images/admin_logo.svg";

export default function Nav() {
  const [openVoting, setOpenVoting] = useToggle(false);
  const [openSignUps, setOpenSignUps] = useToggle(false);

  const handleSignUpsOnSubmit = () => {
    setOpenSignUps();
  }

  const handleVotingOnSubmit = () => {
    setOpenVoting();
  }

  return (
    <>
      <div className="nav__links">
        <div className="nav__links-nav">
          <div>
            <NavLink to="/projects" className="animate-left">
              Project List
            </NavLink>
          </div>
          <div className="nav__links-button">
            <button onClick={() => setOpenVoting()} className="animate-left">
              Vote on Projects
            </button>
          </div>
          <div className="nav__links-button">
            <button onClick={() => setOpenSignUps()} className="animate-left">
              Sign Up for Projects
            </button>
          </div>
          <div className="nav__links-button-admin">
            <NavLink to="/admin" className="animate-left">
              Admin
            </NavLink>
          </div>
        </div>
        <div className="nav__links-admin">
          <img src={AdminLogo} alt="Admin Button" />
          <NavLink to="/admin">ADMIN</NavLink>
        </div>
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
