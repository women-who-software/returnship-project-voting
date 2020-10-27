import React from "react";
import Logo from "../Images/Logo.svg";
import Github from "../Images/github_logo.svg";
import Slack from "../Images/slack_logo.svg";
import Meetup from "../Images/meetup_logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer__nav">
        <div className="footer__nav-logo">
          <img src={Logo} alt="Career Returnship Logo" />
          <a href="https://career-returnship.netlify.app/">Career Returnship</a>
        </div>
        <div>
          <div className="footer__nav-icons">
            <a href="https://github.com/wwcodecolorado/">
              <img src={Github} alt="Github Logo" />
            </a>
            <a href="https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/">
              <img src={Meetup} alt="Meetup Logo" />
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXD-WAi01pdtE5o5qgkqRUudV3ykfcLCslCUeTR7UNQRycXQ/viewform">
              <img src={Slack} alt="Slack Logo" />
            </a>
          </div>
        </div>
        <div>
          <a href="https://linktr.ee/wwcodecolorado">
            Women Who Code
          </a>
        </div>
        <div>
          <div className="footer__nav-copyright">{"\u00A9"} Career Returnship</div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-copyright">{"\u00A9"} Career Returnship</div>
      </div>
    </div>
  );
}
