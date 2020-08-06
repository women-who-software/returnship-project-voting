import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.svg";
import LinkedIn from "../Images/linkedin_logo.svg";
import Slack from "../Images/slack_logo.svg";
import Meetup from "../Images/meetup_logo.svg";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <hr />
      <div className="footer__nav">
        <div>
          <img src={Logo} alt="Career Returnship Logo" />
        </div>
        <div className="footer__nav-link">
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/projects">Project List</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/">Career Returnship</NavLink>
          <a href="https://linktr.ee/wwcodecolorado">Women Who Code</a>
        </div>
        <div></div>
        <div className="footer__nav-logo footer__nav-link">
          <a href="https://www.linkedin.com/showcase/wwcodecolorado/">
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          <img src={Meetup} alt="Meetup Logo" />
          <img src={Slack} alt="Slack Logo" />
        </div>
      </div>
      <div className="footer__copyright">Copyright {date}</div>
    </div>
  );
}
