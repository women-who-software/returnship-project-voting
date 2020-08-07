import React from "react";
import { NavLink } from "react-router-dom";
import useToggle from '../Hooks/useToggle';
import Modal from '../Modals/Modal';
import VotingModalForm from '../Modals/VotingModalForm';
import SignUpsModalForm from '../Modals/SignUpsModalForm';
import Logo from "../Images/logo.svg";
import AdminLogo from "../Images/admin_logo.svg";

export default function Nav() {
  const [openVoting, setOpenVoting] = useToggle(false);
  const [openSignUps, setOpenSignUps] = useToggle(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <img src={Logo} alt="Career Returnship Logo" />
          <NavLink to="/">CAREER RETURNSHIP</NavLink>
        </div>
        <div className="spacer" />
        <div className="nav__links">
          <div className="nav__links-nav">
            <div>
              <NavLink to="/projects">Project list</NavLink>
            </div>
            <div className="nav__links-button">
              <button onClick={ () => setOpenVoting() }>Vote on Projects</button>
            </div>
            <div className="nav__links-button">
            <button onClick={ () => setOpenSignUps() }>Sign Up for Projects</button>
            </div>
          </div>
          <div className="nav__links-admin">
            <img src={AdminLogo} alt="Admin Button" />
            <NavLink to="/admin">ADMIN</NavLink>
          </div>
        </div>
      </nav>
      {openVoting && (
        <Modal open={openVoting} toggle={setOpenVoting}>
          <VotingModalForm />
        </Modal>
      )}
      {openSignUps && (
        <Modal open={openSignUps} toggle={setOpenSignUps}>
          <SignUpsModalForm />
        </Modal>
      )}
    </>
  );
}
