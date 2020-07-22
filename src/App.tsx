import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import logo from './assets/logo.png';
import {
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import './App.scss';

const Home = lazy(() => import('./Home'));
const Layout = lazy(() => import('./Layout'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="splash-screen"></div>}>
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img src={logo} className="App-logo" alt="Partyou" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/funcionalidades">
                <FormattedMessage id="app.home.menu.funcionalidades"
                  defaultMessage="Funcionalidades"
                  description="Link: Funcionalidades"/>
              </Nav.Link>
              <Nav.Link href="/sobre">
                <FormattedMessage id="app.home.menu.sobre"
                  defaultMessage="Sobre a Partyou"
                  description="Link: Sobre"/>
              </Nav.Link>
            </Nav>
            <a href="/login" className="link-login">
              <FormattedMessage id="app.home.menu.login"
                defaultMessage="Login"
                description="Link: Login"/></a>
            <Button variant="primary" size="lg">
                <FormattedMessage id="app.home.menu.cadastro"
                  defaultMessage="Criar sua conta"
                  description="Link: Criar sua conta"/>
            </Button>{' '}
          </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/layout">
              <Layout />
            </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
