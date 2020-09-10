// Import React Packages
import React from "react";
import { NavLink } from "react-router-dom";

// Import ReactBootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const SideBar = () => (
  <>
    {/* <Container className="sideBar--container">
      <Row className="sideBar--row">
        Comment out `col` below
        <Col>
        <NavLink className="sideBar--link" exact to="/admin">
          <img
            src="https://github.com/wwcodecolorado/returnship-project-voting/blob/kl-feature12-admin-panel-redesign/client/assets/icons/archives.png?raw=true"
            alt="Archives Icon"
            className="admin-header--icon"
            id="admin-header--archives-icon"
          />
          Projects
        </NavLink>
        </Col>
      </Row>
    </Container> */}
    <div className="col sideBar--container">
      <div className="row sideBar--row">
        <NavLink className="sideBar--link" exact to="/admin">
          <img
            src="https://github.com/wwcodecolorado/returnship-project-voting/blob/kl-feature12-admin-panel-redesign/client/assets/icons/archives.png?raw=true"
            alt="Archives Icon"
            className="admin-header--icon"
            id="admin-header--archives-icon"
          />
          Projects
        </NavLink>
      </div>
    </div>
  </>
);

export default SideBar;
