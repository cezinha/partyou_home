import React from 'react';
import './Home.scss';
import { Container, Row, Col, InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
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
import logo from './assets/logo.png';
import logo_desenvolvesp from './assets/logo_desenvolvesp.png';
import logo_googlestartups from './assets/logo_googlestartups.png';
import logo_kria from './assets/logo_kria.png';
import logo_startupfarm from './assets/logo_startupfarm.png';
import ico_temporeal from './assets/ico_temporeal.png';
import ico_cartaocredito from './assets/ico_cartaocredito.png';
import ico_retirada from './assets/ico_retirada.png';
import foto_universitaria from './assets/foto_perfil.jpg';
import logo_unesp from './assets/logo_unesp.png';
import foto_app from './assets/foto_app.jpg';
import btn_googleplay from './assets/btn_googleplay.png';
import btn_applestore from './assets/btn_applestore.png';
import ico_redes from './assets/ico_redes.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <BoxCallToAction />
        <Section5 />
        <Section6 />
        <Footer />
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
          <h1><FormattedMessage id="app.home.intro.title"
                  defaultMessage="Home Title"
                  description="Home Title"/></h1>
          <h4><FormattedMessage id="app.home.intro.subtitle1"
                  defaultMessage="Home Subtitle 1"
                  description="Home Subtitle 1"/><br />
              <FormattedMessage id="app.home.intro.subtitle2"
                  defaultMessage="Home Subtitle 2"
                  description="Home Subtitle 2"/></h4>
          <InputGroup size="lg">
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <Button variant="primary" size="lg">
              <FormattedMessage id="app.home.intro.button.label"
                  defaultMessage="Button Intro Label"
                  description="Button Intro Label"/>
            </Button>{' '}
          </InputGroup>
          <p className="policy"><small>
            <FormattedMessage id="app.home.intro.button.obs"
                  defaultMessage="Button Obs"
                  description="Button Obs"/>&nbsp;
            <a href="#policy">
              <FormattedMessage id="app.home.intro.button.obs.link"
                  defaultMessage="Button Link"
                  description="Button Link"/>
            </a></small>
          </p>
          <div className="testimonials">
            <p>“Mudou minha rotina na Atlética”</p>
            <div>
              <img src="https://placekitten.com/56/56" alt="foto da estudante" />
              <span>Helena Carvalho, <strong>UNESP</strong><br />
              <img src={small_unesp} alt="unesp" /></span>
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
  return (
    <Container id="section-2">
      <h2><FormattedMessage id="app.home.section2.title"
        defaultMessage="Section 2 Title"
        description="Section 2 Title"/></h2>
      <Row>
        <Col sm={12} md={3}>
          <img src={ico_pagamento} alt="ícone" />
          <h3><FormattedMessage id="app.home.section2.item1.title"
              defaultMessage="Section 2 Item 1 Title"
              description="Section 2 Item 1 Title"/>
          </h3>
          <p><FormattedMessage id="app.home.section2.item1.text"
              defaultMessage="Section 2 Item 1 Text"
              description="Section 2 Item 1 Text"/>
          </p>
        </Col>
        <Col sm={0} md={1}></Col>
        <Col sm={12} md={3}>
          <img src={ico_loja} alt="ícone" />
          <h3><FormattedMessage id="app.home.section2.item2.title"
              defaultMessage="Section 2 Item 2 Title"
              description="Section 2 Item 2 Title"/>
          </h3>
          <p><FormattedMessage id="app.home.section2.item2.text"
              defaultMessage="Section 2 Item 2 Text"
              description="Section 2 Item 2 Text"/>
          </p>
        </Col>
        <Col sm={0} md={1}></Col>
        <Col sm={12} md={3}>
          <img src={ico_qr} alt="ícone" />
          <h3><FormattedMessage id="app.home.section2.item3.title"
              defaultMessage="Section 2 Item 3 Title"
              description="Section 2 Item 3 Title"/>
          </h3>
          <p><FormattedMessage id="app.home.section2.item3.text"
              defaultMessage="Section 2 Item 3 Text"
              description="Section 2 Item 3 Text"/>
          </p>
        </Col>
      </Row>
      <div className="spacer"></div>
      <Row>
        <Col sm={12} md={3}>
          <img src={ico_estoque} alt="ícone" />
          <h3><FormattedMessage id="app.home.section2.item4.title"
              defaultMessage="Section 2 Item 4 Title"
              description="Section 2 Item 4 Title"/>
          </h3>
          <p><FormattedMessage id="app.home.section2.item4.text"
              defaultMessage="Section 2 Item 4 Text"
              description="Section 2 Item 4 Text"/>
          </p>
        </Col>
        <Col sm={0} md={1}></Col>
        <Col sm={12} md={3}>
          <img src={ico_celular} alt="ícone" />
          <h3><FormattedMessage id="app.home.section2.item5.title"
              defaultMessage="Section 2 Item 5 Title"
              description="Section 2 Item 5 Title"/>
          </h3>
          <p><FormattedMessage id="app.home.section2.item5.text"
              defaultMessage="Section 2 Item 5 Text"
              description="Section 2 Item 5 Text"/>
          </p>
        </Col>
        <Col sm={0} md={1}></Col>
        <Col sm={12} md={3}>
          <img src={ico_ingressos} alt="ícone" />
          <h3><FormattedMessage id="app.home.section2.item6.title"
              defaultMessage="Section 2 Item 6 Title"
              description="Section 2 Item 6 Title"/>
          </h3>
          <p><FormattedMessage id="app.home.section2.item6.text"
              defaultMessage="Section 2 Item 6 Text"
              description="Section 2 Item 6 Text"/>
          </p>
        </Col>
      </Row>
      <div className="text-center btn-funcionalidades">
        <Button variant="primary" size="lg">
          <FormattedMessage id="app.home.section2.button.label"
              defaultMessage="Button Intro Label"
              description="Button Intro Label"/>
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
            <li className="title"><FormattedMessage id="app.home.section3.label"
                defaultMessage="Partyou é usado por"
                description="Section 3 Label"/></li>
            <li className="active"><FormattedMessage id="app.home.section3.option1"
                defaultMessage="Section 3 Option 1"
                description="Section 3 Option 1"/></li>
            <li><FormattedMessage id="app.home.section3.option2"
                defaultMessage="Section 3 Option 2"
                description="Section 3 Option 2"/></li>
            <li><FormattedMessage id="app.home.section3.option3"
                defaultMessage="Section 3 Option 3"
                description="Section 3 Option 3"/></li>
          </ul>
        </Row>
        <Row>
          <Col>
            <h2><FormattedMessage id="app.home.section3.title"
                defaultMessage="Section 3 Title"
                description="Section 3 Title"/></h2>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="primary" size="lg">
            <FormattedMessage id="app.home.section3.button"
                defaultMessage="Button Label"
                description="Button Label"/>
          </Button>{' '}
        </div>
        <div className="box">
          <img src={img_funciona} alt="Jovens em reunião" />
          <div className="text-center">
            <h3><FormattedMessage id="app.home.section3.subtitle"
                  defaultMessage="Section 3 Subtitle"
                  description="Section 3 Subtitle"/></h3>
          </div>
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <h1 className="gradient-text"><FormattedMessage id="app.home.section3.item1.number" /></h1>
                <h5><FormattedMessage id="app.home.section3.item1.text" /></h5>
              </Col>
              <Col sm={12} md={4}>
                <h1 className="gradient-text"><FormattedMessage id="app.home.section3.item2.number" /></h1>
                <h5><FormattedMessage id="app.home.section3.item2.text" /></h5>
              </Col>
              <Col sm={12} md={4}>
                <h1 className="gradient-text"><FormattedMessage id="app.home.section3.item3.number" /></h1>
                <h5><FormattedMessage id="app.home.section3.item3.text" /></h5>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

function Section4() {
  return (
    <Container id="section-4">
      <h4><FormattedMessage id="app.home.section4.title" /></h4>
      <ul>
        <li>
          <img src={logo_desenvolvesp} alt="Desenvolve SP"/>
        </li>
        <li>
          <img src={logo_googlestartups} alt="Google for Startups"/>
        </li>
        <li>
          <img src={logo_kria} alt="Kria"/>
        </li>
        <li>
          <img src={logo_startupfarm} alt="Startup .FARM"/>
        </li>
      </ul>
    </Container>
  );
}

function BoxCallToAction() {
  return (
    <div id="call-to-action">
      <Container>
        <Row>
          <Col sm={0} md={1}></Col>
          <Col sm={12} md={4}>
            <h1><FormattedMessage id="app.box.call.title" /></h1>
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
  )
}

function Section5() {
  let style = {
    backgroundImage: `url(${logo_unesp})`
  };
  return (
    <Container id="section-5">
      <Row>
        <Col md={1}></Col>
        <Col md={4}>
          <div className="logo">
            <div className="bg-logo" style={style}></div>
            <img src={foto_universitaria} alt="Foto da Helena Carvalho" />
          </div>
        </Col>
        <Col md={7}>
          <blockquote>
            <p>Desde que comecei a usar Partyou, temos sido muito mais eficiente em nossas vendas
            e organização da entidade.</p>
            <footer className="blockquote-footer">Helena Carvalho, <strong>UNESP</strong></footer>
          </blockquote>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <ul className="carosel-nav">
            <li className="active"><a href="/#1">1</a></li>
            <li><a href="/#2">2</a></li>
            <li><a href="/#3">3</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

function Section6() {
  return (
    <div id="section-6">
      <Container>
        <Row>
          <Col className="text-center">
            <h1><FormattedMessage id="app.home.section6.title" /></h1>
            <h4><FormattedMessage id="app.home.section6.subtitle" /></h4>
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

function Footer() {
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