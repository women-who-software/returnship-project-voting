// Import React Packages
import React from 'react'
// import { NavLink } from 'react-router-dom'

// Import ReactBootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
  return (
    <>
      <Navbar expand='lg' id='header'>
        <Navbar.Brand href='/'>WWC - Boulder / Denver</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Career Returnship</Nav.Link>
            <Nav.Link href='/projects'>ProjectHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
