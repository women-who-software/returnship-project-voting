// Import React Packages
import React from "react";
import { NavLink } from "react-router-dom";

// Import ReactBootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const SideBar = () => (
  <Container fluid className="sideBar--container">
    <Row className="sideBar--row">
      {/* <Col> */}
      <NavLink className="sideBar--link" exact to="/admin">
        <img
          src="https://github.com/wwcodecolorado/returnship-project-voting/blob/kl-feature12-admin-panel-redesign/client/assets/icons/Home.png?raw=true"
          alt="Home Icon"
          className="admin-header--icon"
          id="admin-header--home-icon"
        />
        Projects
      </NavLink>
      {/* </Col> */}
    </Row>
  </Container>
);

export default SideBar;
