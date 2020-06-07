// Import React Packages
import React, { useContext } from 'react'
import Header from '../Header/Header'
import { GlobalContext } from '../../Context/GlobalContext'

// Import ReactBootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function AdminPage() {
  //?? TODO - Move `project` into a separate component
  const { projects } = useContext(GlobalContext)

  const getProjects = projects.map(projects => (
    <div className='projects__items-project card' key={projects.project_id}>
      <div className='projects__items-project-name'>
        {projects.project_name}
      </div>
      <div className='projects__items-short-desc'>{projects.short_desc}</div>
      <div className='projects__items-status'>
        <span className='strong'>Status: </span>
        {projects.status}
      </div>
      <div className='projects__items-more'>
        <Nav.Link to={`/projects/${projects.project_id}`}>
          <button className='small-button'>More Details</button>
        </Nav.Link>
      </div>
    </div>
  ))
  return (
    <>
      <Header />
      <section className='admin'>
        <Container>
          <Row>
            <h2>Admin Panel</h2>
          </Row>
          <Row>
            <Col>
              <h3>Projects</h3>
            </Col>
            <Col className='d-flex justify-content-end'>
              <a href=''>Add New Projects</a>
            </Col>
          </Row>
          <Row>
            <Col>{getProjects}</Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
