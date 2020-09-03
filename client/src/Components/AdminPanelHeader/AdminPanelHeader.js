// Import React Packages
import React from "react";

// Import ReactBootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AdminPanelHeader() {
  return (
    <>
      <Navbar expand="lg" className="admin-header--container">
        <Navbar.Brand href="/" className="admin-header--brand">
          <img
            src="https://github.com/wwcodecolorado/returnship-project-voting/blob/kl-feature12-admin-panel-redesign/client/assets/icons/Home.png?raw=true"
            alt="Home Icon"
            className="admin-header--icon"
            id="admin-header--home-icon"
          />
          Woman Who Code Boulder / Denver
          <br />
          <span className="admin-header--sub-heading">Career Returnship</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="/" className="">
              <img
                src="https://raw.githubusercontent.com/wwcodecolorado/returnship-project-voting/95131d763e19fd80be8df4cff037076b6ea20b09/client/assets/icons/Profile.svg"
                alt="Circular Profile Icon"
                className="admin-header--icon"
                id="admin-header--profile-icon"
              />
              <span className="admin-header--nav-link">Admin</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
