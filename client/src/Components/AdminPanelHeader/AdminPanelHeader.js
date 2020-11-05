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
            src="https://github.com/wwcodecolorado/returnship-project-voting/blob/master/client/assets/icons/Home.png?raw=true"
            alt="Home Icon"
            className="admin-header--icon"
          />
          <span className="admin-header--heading">Career Returnship</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="/" className="">
              <img
                src="https://github.com/wwcodecolorado/returnship-project-voting/blob/master/client/assets/icons/login%20icon.png?raw=true"
                alt="Profile Icon"
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
