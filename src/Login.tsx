import React from 'react';
import './Login.scss';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import logo from './assets/logo.png';

import SectionCallToAction from './components/CallToAction';
import FormSignup from './components/FormSignup';

class Login extends React.Component {
  render() {
    return (
      <div>
        <SimpleNavbar />
        <Section1 />
        <SectionCallToAction />
      </div>
    );
  }
}

function Section1() {
  return (
    <div id="section-1" className="bg">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={5}>
            <h3><FormattedMessage id="app.signup.title" /></h3>
            <p className="subtitle"><FormattedMessage id="app.signup.subtitle" /></p>
            <FormSignup />
            <p className="already"><a href="/login"><FormattedMessage id="app.signup.label.already" /></a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function SimpleNavbar() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="Partyou" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/sobre">
            <FormattedMessage id="app.home.menu.sobre" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Login;
