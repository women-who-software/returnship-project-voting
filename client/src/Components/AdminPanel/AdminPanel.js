// Import React Packages
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Custom Imports
import AdminPanelHeader from "../AdminPanelHeader/AdminPanelHeader";
import SideBar from "../SideBar/SideBar";
import { GlobalContext } from "../../Context/GlobalContext";

// Import ReactBootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default function AdminPanel() {
  //?? TODO - Move `project` into a separate component
  const { projects } = useContext(GlobalContext);

  const getProjects = projects.map((projects) => (
    <div className="projects__items-project card" key={projects.project_id}>
      <div className="projects__items-project-name">
        {projects.project_name}
      </div>
      <div className="projects__items-short-desc">{projects.short_desc}</div>
      <div className="projects__items-status">
        <span className="strong">Status: </span>
        {projects.status}
      </div>
      <div className="projects__items-more">
        {/*?? TODO - Change the route to EditProjectDetailsPage */}
        <NavLink to={`/projects/${projects.project_id}`}>
          <button className="small-button">More Details</button>
        </NavLink>
      </div>
    </div>
  ));
  return (
    <>
      <AdminPanelHeader />
      <Container fluid className="admin">
        <Row>
          <Col className="sideBar">
            <SideBar />
          </Col>
          <Col className='admin-panel'>
            <Row className="d-flex justify-content-end">
              <a href="" className="admin-btn">
                Add New Projects
              </a>
            </Row>
            <Row>
              <Col>{getProjects}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
