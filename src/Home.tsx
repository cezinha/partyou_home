import React from 'react';
import './Home.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { fmt } from './index';

import celular from './assets/home_intro.png';
import small_unesp from './assets/unesp.png';
import ico_pagamento from './assets/ico_pagamento.png';
import ico_loja from './assets/ico_loja.png';
import ico_qr from './assets/ico_qr.png';
import ico_estoque from './assets/ico_estoque.png';
import ico_celular from './assets/ico_celular.png';
import ico_ingressos from './assets/ico_ingressos.png';
import img_funciona from './assets/funciona.jpg';
import foto_app from './assets/foto_app.jpg';
import btn_googleplay from './assets/btn_googleplay.png';
import btn_applestore from './assets/btn_applestore.png';
import SectionCarousel from './components/Carousel';
import SectionCallToAction from './components/CallToAction';
import SectionFunding from './components/Funding';
import MainNavbar from './components/MainNavbar';
import FormStart from './components/FormStart';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <SectionFunding />
        <SectionCallToAction />
        <SectionCarousel />
        <Section5 />
      </div>
    );
  }
}

export default Home;

function Section1() {
  return (
    <Container id="section-1">
      <Row>
        <Col sm={12} md={7}>
          <h1><FormattedMessage id="app.home.intro.title" /></h1>
          <p className="size-22 partyou-lightgrey-5"><strong><FormattedMessage id="app.home.intro.subtitle1" /><br />
              <FormattedMessage id="app.home.intro.subtitle2" /></strong></p>
          { /* <InputGroup size="lg">
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <Button variant="primary" size="lg">
              <FormattedMessage id="app.home.intro.button.label" />
            </Button>{' '}
            </InputGroup> */}
          <FormStart buttonLabel={fmt({id:'app.home.intro.button.label'})} />
          <p className="policy partyou-lightblack-3"><small>
            <FormattedMessage id="app.home.intro.button.obs" />
            <a href="#policy" className="bolder">
              <FormattedMessage id="app.home.intro.button.obs.link" />
            </a></small>
          </p>
          <div className="testimonials">
            <p>“Mudou minha rotina na Atlética”</p>
            <div>
              <img src="https://placekitten.com/56/56" alt="foto da estudante" />
              <span>Helena Carvalho, </span><strong>UNESP</strong><br />
              <img src={small_unesp} alt="unesp" />
            </div>
          </div>
        </Col>
        <Col sm={1}>
          <img className="celular" src={celular} alt="imagem do celular" />
        </Col>
      </Row>
    </Container>
  );
}

function Section2() {
  const texts = [
    [
      {
        "icon": ico_pagamento,
        "title": fmt({id: 'app.home.section2.item1.title'}),
        "text": fmt({id: 'app.home.section2.item1.text'})
      },
      {
        "icon": ico_loja,
        "title": fmt({id: 'app.home.section2.item2.title'}),
        "text": fmt({id: 'app.home.section2.item2.text'})
      },
      {
        "icon": ico_qr,
        "title": fmt({id: 'app.home.section2.item3.title'}),
        "text": fmt({id: 'app.home.section2.item3.text'})
      }
    ],
    [
        {
        "icon": ico_estoque,
        "title": fmt({id: 'app.home.section2.item4.title'}),
        "text": fmt({id: 'app.home.section2.item4.text'})
      },
      {
        "icon": ico_celular,
        "title": fmt({id: 'app.home.section2.item5.title'}),
        "text": fmt({id: 'app.home.section2.item5.text'})
      },
      {
        "icon": ico_ingressos,
        "title": fmt({id: 'app.home.section2.item6.title'}),
        "text": fmt({id: 'app.home.section2.item6.text'})
      }
    ]
  ];

  return (
    <Container id="section-2">
      <h2><FormattedMessage id="app.home.section2.title" /></h2>
      {texts.map(
        (group, index) => (
          <Row className="justify-content-between" key={`row-${index}`}>
            {group.map(
              (item, idx) => (
                <Col sm={12} md={3} key={`row-${index}-${idx}`}>
                  <img src={item.icon} alt="ícone" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Col>
              )
            )}
          </Row>
        )
      )}
      <div className="text-center btn-funcionalidades">
        <Button variant="primary" size="lg" onClick={() => window.location.href = '/funcionalidades' }>
          <FormattedMessage id="app.home.section2.button.label" />
        </Button>{' '}
      </div>
    </Container>
  );
}

function Section3() {
  return (
    <div className="bg">
      <Container id="section-3">
        <Row>
          <ul className="option">
            <li className="title"><FormattedMessage id="app.home.section3.label"/></li>
            <li className="active"><span><FormattedMessage id="app.home.section3.option1"/></span></li>
            <li><FormattedMessage id="app.home.section3.option2"/></li>
            <li><FormattedMessage id="app.home.section3.option3"/></li>
          </ul>
        </Row>
        <Row>
          <Col>
            <h2><FormattedMessage id="app.home.section3.title"/></h2>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="primary" size="lg">
            <FormattedMessage id="app.home.section3.button"/>
          </Button>{' '}
        </div>
        <div className="box">
          <img src={img_funciona} alt="Jovens em reunião" />
          <div className="text-center">
            <h6><FormattedMessage id="app.home.section3.subtitle"/></h6>
          </div>
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <h1><FormattedMessage id="app.home.section3.item1.number" /></h1>
                <h6><FormattedMessage id="app.home.section3.item1.text" /></h6>
              </Col>
              <Col sm={12} md={4}>
                <h1><FormattedMessage id="app.home.section3.item2.number" /></h1>
                <h6><FormattedMessage id="app.home.section3.item2.text" /></h6>
              </Col>
              <Col sm={12} md={4}>
                <h1><FormattedMessage id="app.home.section3.item3.number" /></h1>
                <h6><FormattedMessage id="app.home.section3.item3.text" /></h6>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

function Section5() {
  return (
    <div id="section-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h2><FormattedMessage id="app.home.section5.title" /></h2>
            <h4><FormattedMessage id="app.home.section5.subtitle" /></h4>
            <p><img src={foto_app} alt="Foto App Partyou" id="foto_app" /></p>
            <p><a href="https://play.google.com">
              <img src={btn_googleplay} alt="Google Play" />
            </a>
            <a href="https://applestore.com">
              <img src={btn_applestore} alt="Apple Store" />
            </a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
