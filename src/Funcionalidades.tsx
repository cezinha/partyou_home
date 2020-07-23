import React from 'react';
import './Funcionalidades.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import celular from './assets/func_celular.jpg';
import ico_qr from './assets/ico_qr.png';
import ico_pagamento from './assets/ico_pagamento.png';
import func_item1 from './assets/func_item1.jpg';
import func_item2 from './assets/func_item2.jpg';
import func_item3 from './assets/func_item3.jpg';
import func_item4 from './assets/func_item4.jpg';
import SectionCarousel from './components/Carousel';
import SectionCadastreEmail from './components/CadastreEmail';
import SectionDownload from './components/Download';

class Funcionalidades extends React.Component {
  render() {
    return (
      <div>
        <Section1 />
        <Section2 />
        <SectionCarousel />
        <SectionCadastreEmail />
        <SectionDownload />
      </div>
    );
  }
}

function Section1() {
  return (
    <div className="bg" id="section-1">
      <Container>
        <Row>
          <Col>
            <h1><FormattedMessage id="app.funcionalidades.section1.title" /></h1>
            <h5><FormattedMessage id="app.funcionalidades.section1.subtitle" /></h5>
            <div className="text-center">
              <Button variant="primary" size="lg">
                <FormattedMessage id="app.funcionalidades.section1.button" />
              </Button>{' '}
              <p><img src={celular} alt="App Partyou" /></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Section2() {
  return (
    <Container id="section-2">
      <Row>
        <Col>
          <h2><FormattedMessage id="app.funcionalidades.section2.title" /></h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Container fluid>
            <Row>
              <Col sm={12} md={8} className="item">
                <h3><FormattedMessage id="app.funcionalidades.section2.item1.title" /></h3>
                <p><FormattedMessage id="app.funcionalidades.section2.item1.text" /></p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_qr} alt="Ícone QR Code" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item1.subitem1.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item1.subitem1.text" /></p>
              </Col>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_pagamento} alt="Ícone Pagamento" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item1.subitem2.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item1.subitem2.text" /></p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={6}>
          <img src={func_item1} alt="Funcionalidade: Pagamento Online" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <img src={func_item2} alt="Funcionalidade: Pagamento Online" />
        </Col>
        <Col sm={12} md={6}>
          <Container fluid>
            <Row>
              <Col sm={12} md={8} className="item">
                <h3><FormattedMessage id="app.funcionalidades.section2.item2.title" /></h3>
                <p><FormattedMessage id="app.funcionalidades.section2.item2.text" /></p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_qr} alt="Ícone QR Code" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item2.subitem1.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item2.subitem1.text" /></p>
              </Col>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_pagamento} alt="Ícone Pagamento" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item2.subitem2.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item2.subitem2.text" /></p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Container fluid>
            <Row>
              <Col sm={12} md={8} className="item">
                <h3><FormattedMessage id="app.funcionalidades.section2.item3.title" /></h3>
                <p><FormattedMessage id="app.funcionalidades.section2.item3.text" /></p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_qr} alt="Ícone QR Code" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item3.subitem1.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item3.subitem1.text" /></p>
              </Col>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_pagamento} alt="Ícone Pagamento" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item3.subitem2.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item3.subitem2.text" /></p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={6}>
          <img src={func_item3} alt="Funcionalidade: Pagamento Online" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <img src={func_item4} alt="Funcionalidade: Pagamento Online" />
        </Col>
        <Col sm={12} md={6}>
          <Container fluid>
            <Row>
              <Col sm={12} md={8} className="item">
                <h3><FormattedMessage id="app.funcionalidades.section2.item4.title" /></h3>
                <p><FormattedMessage id="app.funcionalidades.section2.item4.text" /></p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_qr} alt="Ícone QR Code" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item4.subitem1.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item4.subitem1.text" /></p>
              </Col>
              <Col sm={12} md={6} className="subitem">
                <p className="icon">
                  <img src={ico_pagamento} alt="Ícone Pagamento" />
                </p>
                <h5><FormattedMessage id="app.funcionalidades.section2.item4.subitem2.title" /></h5>
                <p><FormattedMessage id="app.funcionalidades.section2.item4.subitem2.text" /></p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Funcionalidades;