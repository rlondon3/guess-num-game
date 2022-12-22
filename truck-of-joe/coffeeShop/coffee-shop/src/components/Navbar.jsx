import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo512.png'

const Navigation = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="xxxl" bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Our Stories</Nav.Link>
                            <Nav.Link href="#pricing">Our Impact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Careers</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Menu
                            </Nav.Link>
                        </Nav>
                </Navbar.Collapse>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                React-Bootstrapp App
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" drop="up" />
                
            </Container>
          </Navbar>
        </>
      );
}
 
export default Navigation;