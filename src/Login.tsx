import React, { useState } from 'react';
import './Login.scss';
import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import logo from './assets/logo.png';

import SectionCallToAction from './components/CallToAction';
import { fmt } from '.';

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
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="section-1" className="bg">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={5}>
            <h3><FormattedMessage id="app.signup.title" /></h3>
            <p className="subtitle"><FormattedMessage id="app.signup.subtitle" /></p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formDocument">
                <Form.Control type="text" size="lg" required placeholder={fmt({'id': 'app.signup.label.document'})} />
                <Form.Control.Feedback><span role="img" aria-label="Check">✔️</span></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">* campo obrigatório</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Control type="text" size="lg" required placeholder={fmt({'id': 'app.signup.label.name'})} />
                <Form.Control.Feedback><span role="img" aria-label="Check">✔️</span></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">* campo obrigatório</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBirth">
                <Form.Control type="text" size="lg" placeholder={fmt({'id': 'app.signup.label.birthdate'})} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" size="lg" required placeholder={fmt({'id': 'app.signup.label.email'})} />
                <Form.Control.Feedback><span role="img" aria-label="Check">✔️</span></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">* campo obrigatório</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" size="lg" required placeholder={fmt({'id': 'app.signup.label.password'})} />
                <Form.Control.Feedback><span role="img" aria-label="Check">✔️</span></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">* campo obrigatório</Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" variant="primary" size="lg">
                <FormattedMessage id="app.signup.label.button" />
              </Button>{' '}
            </Form>
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
