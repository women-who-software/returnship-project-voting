import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function Footer() {
  const copyrightDate = new Date().getFullYear();

  library.add(fab);

  return (
    <address className="footer">
      <div className="footer__about">
        <div>Women Who Code is a 501(c)(3) not-for-profit organization</div>
        <div>EIN 46-4218859</div>
        <div>
          {"\u00a9"} {copyrightDate} Women Who Code{" "}
        </div>
      </div>
      <div className="footer__spacer"></div>
      <div className="footer__socialMedia-icons">
        <div>
          <a href="https://github.com/wwcodecolorado">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              className="socialIcons"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/showcase/wwcodecolorado/">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className="socialIcons"
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/wwcodecolorado/">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              className="socialIcons"
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/wwcodecolorado">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="2x"
              className="socialIcons"
            />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/wwcodecolorado/">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="2x"
              className="socialIcons"
            />
          </a>
        </div>
      </div>
    </address>
  );
}
