import React from 'react';
import './CallToAction.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import ico_temporeal from '../assets/ico_temporeal.png';
import ico_cartaocredito from '../assets/ico_cartaocredito.png';
import ico_retirada from '../assets/ico_retirada.png';

class SectionCallToAction extends React.Component {
  render() {
    return (
      <div id="call-to-action">
        <Container>
          <Row>
            <Col sm={0} md={1}></Col>
            <Col sm={12} md={4}>
              <h2><FormattedMessage id="app.box.call.title" /></h2>
              <p><FormattedMessage id="app.box.call.text" /></p>
            </Col>
            <Col sm={0} md={1}></Col>
            <Col sm={12} md={5}>
              <ul>
                <li>
                  <img src={ico_temporeal} alt="ícone" />
                  <h6><FormattedMessage id="app.box.call.item1.title" /></h6>
                  <p><FormattedMessage id="app.box.call.item1.text" /></p>
                </li>
                <li>
                  <img src={ico_cartaocredito} alt="ícone" />
                  <h6><FormattedMessage id="app.box.call.item2.title" /></h6>
                  <p><FormattedMessage id="app.box.call.item2.text" /></p>
                </li>
                <li>
                  <img src={ico_retirada} alt="ícone" />
                  <h6><FormattedMessage id="app.box.call.item3.title" /></h6>
                  <p><FormattedMessage id="app.box.call.item3.text" /></p>
                </li>
              </ul>
            </Col>
            <Col sm={0} md={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionCallToAction;
