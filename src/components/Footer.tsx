import React from 'react';
import './Footer.scss';
import { Container, Row, Col, InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { fmt } from '..';
import logo from '../assets/logo.png';
import ico_redes from '../assets/ico_redes.png';

class Footer extends React.Component {
  render() {
    return (
      <Container id="footer">
        <Row>
          <Col sm={12} md={3}>
            <h2>
              <FormattedMessage id="app.footer.title" />
            </h2>
          </Col>
          <Col sm={0} md={3}></Col>
          <Col sm={12} md={2}><a href="/funcionalidades"><FormattedMessage id="app.footer.menu.item1" /></a></Col>
          <Col sm={12} md={2}><a href="/sobre"><FormattedMessage id="app.footer.menu.item2" /></a></Col>
          <Col sm={12} md={2}><a href="https://partyoublog.com/"><FormattedMessage id="app.footer.menu.item3" /></a></Col>
        </Row>
        <Row>
          <Col sm={0} md={5}></Col>
          <Col sm={12} md={3} className="text-center">
            <h6><FormattedMessage id="app.footer.form.title" /></h6>
          </Col>
          <Col sm={12} md={4}>
            <ul className="redes">
              <li className="instagram"><a href="https://www.instagram.com/partyou.pay/" style={{backgroundImage: `url(${ico_redes})`}}>@partyou.pay</a></li>
              <li className="facebook"><a href="https://www.facebook.com/partyou.pay/" style={{backgroundImage: `url(${ico_redes})`}}>fb.com/partyou.pay</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={0} md={4}></Col>
          <Col sm={12} md={5} className="text-center">
            <form>
              <InputGroup size="lg">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder={fmt({id: 'app.footer.form.label'})}/>
                <Button variant="primary" size="lg">
                  <FormattedMessage id="app.footer.form.button" />
                </Button>{' '}
              </InputGroup>
            </form>
          </Col>
        </Row>
        <Row className="footer-last">
          <Col xs={6} md={4}>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="Idioma">
              <Dropdown.Item href="#/action-1">Português</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Inglês</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col xs={6} md={5} className="text-center"><a href="/"><img src={logo} alt="Partyou" /></a></Col>
          <Col sm={12} md={3} className="text-right">
            <a href="/privacidade"><FormattedMessage id="app.footer.link.privacy" /></a>
            <a href="/termos"><FormattedMessage id="app.footer.link.terms" /></a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;