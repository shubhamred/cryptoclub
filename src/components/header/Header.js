import React from "react";
import "./header.scss";

import { Navbar, Nav, Container, Row, Col, Carousel, Form, FormControl, Button } from "react-bootstrap";
import { ReactComponent as Neonbtn } from "../../assets/images/Group90.svg";
import Cbtn from "../../assets/images/connectwallet.png";
import { Link } from 'react-router-dom'
// import logo from "../../assets/images/logogif.gif";
import logo from "../../assets/images/LOGO 1.png";
import bulb from "../../assets/images/bulbVer.01.png";


export const Header = () => {
  return (
    <div className="header">
      <img src={bulb} className="img-fluid max-auto d-block bulb" />

      <Navbar varient="dark" expand="lg">
        <Container>
          <div className="row justify-content-center m-auto" style={{ width: "100%" }}>
            <div className="col-md-10 col-12">
            <Navbar.Brand>
              <a href="#" className="d-block d-sm-none float-start"><img src={Cbtn} /></a> 
                       
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="float-end" />  
              
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navlink">
                  <Nav.Link href="/" title="Home">Home</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="/about" title="About">About</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="/mint" title="Mint">
                     Mint</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="/traits" title="Traits">Traits</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="/roadmap" title="Roadmap">Roadmap</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="/community" title="Community">Community</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="/team" title="Team">Team</Nav.Link>
                  <span className="right-border"></span>
                  <Nav.Link href="#team" title="VIP">VIP</Nav.Link>
                </Nav>
                <Form className="d-flex d-block d-xs-none">
                  <Nav.Link href="#btn" className="p-0">
                    <Neonbtn />
                  </Nav.Link>
                </Form>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>

      <div className="text-center">
        <img src={logo} className="logo" alt="logo" />
      </div>
      
    </div>
  );
};
