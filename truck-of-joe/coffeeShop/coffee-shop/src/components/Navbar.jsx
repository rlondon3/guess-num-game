import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo512.png'

const Navigation = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="xxxl" variant="dark" sticky='top' style={{backgroundColor: 'black'}}>
            <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container>
                <Row>
                  <Col xs={12} md={6} lg={8}>
                    <Navbar.Brand>
                      <Nav style={{paddingTop: '5px'}}>
                        <h3 className="about" style={{alignSelf: 'start'}}>About</h3>
                        <p className="aboutText text-muted" style={{fontSize: '14px', textAlign: '-webkit-auto', width: '70%'}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, 
                          repellat neque! Consectetur quos saepe hic, unde, non magni distinctio 
                          enim nostrum eveniet cupiditate error ipsa cum praesentium numquam fugit nam.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis 
                          excepturi tenetur placeat asperiores, cupiditate aut impedit consequuntur
                          eum! Cum voluptatibus nostrum reprehenderit consectetur quo in corporis 
                          pariatur aut maxime obcaecati.
                        </p>
                      </Nav>
                    </Navbar.Brand>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <Nav className="mr-auto">
                      <Nav.Link href="#features">Our Stories</Nav.Link>
                      <Nav.Link href="#pricing">Our Impact</Nav.Link>
                      <Nav.Link href="#deets">Careers</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                          Menu
                      </Nav.Link>
                    </Nav>
                  </Col>
                </Row>
              </Container>
            </Navbar.Collapse>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                React-Bootstrap Coffee Shop
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" drop="up" />
            </Container>
          </Navbar>
        </>
      );
}
 
export default Navigation;