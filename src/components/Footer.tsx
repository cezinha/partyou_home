import React from 'react';
import './Footer.scss';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { fmt } from '..';
import logo from '../assets/logo.png';
import ico_redes from '../assets/ico_redes.png';
import FormBlock from './FormBlock';

class Footer extends React.Component {
  render() {
    return (
      <Container id="footer">
        <Row>
          <Col sm={12} md={3}>
            <h4><FormattedMessage id="app.footer.title" /></h4>
          </Col>
          <Col sm={0} md={3}></Col>
          <Col sm={12} md={6}>
            <ul className="flex-container space-between">
              <li className="flex-item"><a href="/funcionalidades"><FormattedMessage id="app.footer.menu.item1" /></a></li>
              <li className="flex-item"><a href="/sobre"><FormattedMessage id="app.footer.menu.item2" /></a></li>
              <li className="flex-item"><a href="https://partyoublog.com/"><FormattedMessage id="app.footer.menu.item3" /></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={0} md={4}></Col>
          <Col sm={12} md={4} className="text-center">
            <p><strong><FormattedMessage id="app.footer.form.title" /></strong></p>
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
          <Col sm={12} md={4} className="text-center">
            <FormBlock placeholder={fmt({'id': 'app.footer.form.label'})} buttonLabel={fmt({'id': 'app.footer.form.button'})} />
          </Col>
        </Row>
        <Row className="footer-last">
          <Col xs={6} md={4}>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="Idioma">
              <Dropdown.Item href="#/action-1">Português</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Inglês</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col xs={6} md={4} className="text-center"><a href="/"><img src={logo} alt="Partyou" /></a></Col>
          <Col sm={12} md={4}>
            <ul className="flex-container space-between">
              <li className="flex-item"><a href="/privacidade"><FormattedMessage id="app.footer.link.privacy" /></a></li>
              <li className="flex-item"><a href="/termos"><FormattedMessage id="app.footer.link.terms" /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
