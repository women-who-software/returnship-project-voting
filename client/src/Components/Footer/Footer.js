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
        <ul className="footer__nav-link">
          <li><NavLink to="/" className="animate-left">About Us</NavLink></li>
          <li><NavLink to="/projects" className="animate-left">Project List</NavLink></li>
          <li><NavLink to="/contact" className="animate-left">Contact Us</NavLink></li>
          <li><a className="animate-left" href="https://career-returnship.netlify.app/">Career Returnship</a></li>
          <li><a className="animate-left" href="https://linktr.ee/wwcodecolorado">Women Who Code</a></li>
        </ul>
        <div></div>
        <div className="footer__nav-logo footer__nav-link">
          <a href="https://www.linkedin.com/showcase/wwcodecolorado/">
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          <img src={Meetup} alt="Meetup Logo" />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXD-WAi01pdtE5o5qgkqRUudV3ykfcLCslCUeTR7UNQRycXQ/viewform">
            <img src={Slack} alt="Slack Logo" />
          </a>
        </div>
      </div>
      <div className="footer__copyright">Copyright {date}</div>
    </div>
  );
}
