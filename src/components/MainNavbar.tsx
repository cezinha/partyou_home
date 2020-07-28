import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../assets/logo.png';
import logo_cinza from '../assets/logo_cinza.png';
import {
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';

class MainNavbar extends React.Component {
  render() {
    const { pathname } = window.location;
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          {(pathname === "/funcionalidades") ?
            <img src={logo_cinza} className="App-logo" alt="Partyou" /> :
            <img src={logo} className="App-logo" alt="Partyou" />}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/funcionalidades" className={(pathname === "/funcionalidades") ? 'active' : ''} >
              <FormattedMessage id="app.home.menu.funcionalidades" />
            </Nav.Link>
            <Nav.Link href="/sobre" className={(pathname === "/sobre") ? 'active' : ''}>
              <FormattedMessage id="app.home.menu.sobre" />
            </Nav.Link>
          </Nav>
          <a href="/login" className={(pathname === "/login") ? 'active link-login' : 'link-login'}>
            <FormattedMessage id="app.home.menu.login" /></a>
          <Button variant="primary" size="lg" onClick={() => window.location.href = '/login'}>
              <FormattedMessage id="app.home.menu.cadastro" />
          </Button>{' '}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
