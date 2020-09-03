// Import React Packages
import React from "react";

// Import ReactBootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AdminPanelHeader() {
  return (
    <>
      <Navbar expand="lg" className="admin-header-container">
        <Navbar.Brand href="/" className="admin-header-brand">
          <img src="../../../assets/icons/Home.png" alt="Home Icon" className='admin-header-icon'/>
          Woman Who Code Boulder / Denver
          <span>Career Returnship</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link href="/" className="header-link">
              <img src="../../../assets/icons/Profile.svg" alt="Circular Profile Icon" className='admin-header-icon'/>
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
