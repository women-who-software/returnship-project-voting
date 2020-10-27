import React from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../Hooks/useToggle";
import Modal from "../Modals/Modal";
import VotingModalForm from "../Modals/VotingModalForm";
import SignUpsModalForm from "../Modals/SignUpsModalForm";
import Logo from "../Images/logo.svg";
import NavLinks from "./NavLinks";

export default function Nav() {
  const [openVoting, setOpenVoting] = useToggle(false);
  const [openSignUps, setOpenSignUps] = useToggle(false);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="Career Returnship Logo" />
        <NavLink to="/">CAREER RETURNSHIP</NavLink>
      </div>
      <div className="spacer" />
      <NavLinks />
    </nav>
  );
}
