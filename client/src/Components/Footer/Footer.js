import React from "react";

export default function Footer() {
  let copy = "\u00a9";
  let currentYear = new Date().getFullYear();

  return (
    <address className="Footer">
      <div className="Footer__left">
        <div>Women Who Code is a 501(c)(3) not-for-profit organization</div>
        <div>EIN 36-4218859</div>
        <div>
          {copy} {currentYear} Women Who Code
        </div>
      </div>
      <div className="Footer__spacer"></div>
      <div className="Footer__socialIcons">Social Media Icons</div>
    </address>
  );
}
