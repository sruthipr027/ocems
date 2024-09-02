import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DashboardSam from '../Dashboard/DashboardSam';
import './header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function Hedaer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className='ms-0'>
      <div className='mt-4 col-lg-12'>
        <Navbar expand="lg" className="mb-4 header-navbar">
          <Container fluid className='d-flex align-items-center justify-content-between'>
            {/* Left aligned brand */}
            <Navbar.Brand href="#home" className="brand-text">
              <span className="d-none d-lg-inline">User ID : </span>
              <span className='text-dark'><b>Admin Developer</b></span>
            </Navbar.Brand>
            
            {/* Icons pushed to the right */}
            <div className="d-flex align-items-center icons">
              <Nav.Link className='me-3' href="#home">
                <i className="fa-regular fa-bell fa-1x"></i>
              </Nav.Link>
              <Dropdown className="me-3">
                <Dropdown.Toggle as={Nav.Link} bsPrefix="p-0" id="user-dropdown">
                  <i className="fa-solid fa-user"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#signout" onClick={handleSignOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Hamburger menu */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          </Container>
        </Navbar>

        {/* Offcanvas for DashboardSam */}
        <Offcanvas show={show} onHide={handleClose} className="full-screen-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='d-flex align-items-center justify-content-center'>
            <DashboardSam />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Hedaer;
