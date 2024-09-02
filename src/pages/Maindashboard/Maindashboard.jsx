import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hedaer from '../Header/Hedaer';
import './maindashboard.css';
import { Button } from 'react-bootstrap';
import filter from '../../assests/images/filter-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Maindashboard() {
  const navigate = useNavigate();

  const handleCalibration = () => {
    navigate('/calibartion');
  };

  const handleReport = () => {
    navigate('/report');
  };

  const handleDownload = () => {
    navigate('/download');
  };

  const handleParameter = () => {
    navigate('/view-parameter');
  };

  return (
    <div className='maindashboard-container d-flex'>
      <div className='flex-grow-1 content'>
        <Hedaer />
        
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-100 p-3 mb-4 shadow" 
            style={{ 
              borderRadius: '10px', 
              border: 'none', 
              paddingRight: '40px' 
            }} 
          />
          <i 
            className="fa fa-search" 
            style={{ 
              position: 'absolute', 
              top: '35%', 
              right: '30px', 
              transform: 'translateY(-50%)', 
              color: '#aaa' 
            }} 
          ></i>
        </div>
        
        <div className='me-1'>
          <Navbar expand="lg" className="navbg p-3 shadow" style={{ borderRadius: '10px' }}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 justify-content-evenly">
                  <Nav.Link href="/water">Water</Nav.Link>
                  <Nav.Link href="/ambient">Ambient Air</Nav.Link>
                  <Nav.Link href="/noise">Noise</Nav.Link>
                  <Nav.Link href="/quantity">Quantity</Nav.Link>
                  <Nav.Link href="/energy">Energy</Nav.Link>
                  
                  <Dropdown>
                    <Dropdown.Toggle as={Nav.Link} id="filter-dropdown" bsPrefix="p-0">
                      <img src={filter} alt="Filter" width="20px" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="no-scroll-dropdown">
                      <Dropdown.Item href="#/industry-type">Industry Type</Dropdown.Item>
                      <Dropdown.Item href="#/company-name">Company Name</Dropdown.Item>
                      <Dropdown.Item href="#/district">District</Dropdown.Item>
                      <Dropdown.Item href="#/state">State</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
          <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mt-3'>
            <div className='d-flex  flex-md-row justify-content-evenly align-items-center '>
              <Dropdown className='m-2 buttonbg'>
                <Dropdown.Toggle className="btn buttonbg shadow" style={{ background: '#236a80', border: 'none' }}>
                  Calibration
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/add-calibartion">Add Calibration</Dropdown.Item>
                  <Dropdown.Item href="/view-calibartion">View Calibration</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className='m-2'>
                <Dropdown.Toggle className="btn buttonbg shadow" style={{ background: '#236a80', border: 'none' }}>
                  Report
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/report">Add Report</Dropdown.Item>
                  <Dropdown.Item href="/view-report">View Report</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='d-flex  flex-md-row '>
              <Button className="btn buttonbg shadow m-2 p-0" onClick={handleDownload} style={{ background: '#236a80', border: 'none' }}>
                Download
              </Button>

              <Button className="btn buttonbg shadow m-2" onClick={handleParameter} style={{ background: '#236a80', border: 'none' }}>
                Parameter Exceedence
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maindashboard;
