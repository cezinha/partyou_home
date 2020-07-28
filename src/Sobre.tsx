import React from 'react';
import './Sobre.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { fmt } from './index';

import SectionFunding from './components/Funding';
import SectionCadastreEmail from './components/CadastreEmail';
import SectionDownload from './components/Download';
import ico_dinheiro from './assets/ico_dinheiro.png';
import ico_mudanca from './assets/ico_mudanca.png';
import ico_ouvir from './assets/ico_ouvir.png';
import arrow from './assets/arrow.png';
import MainNavbar from './components/MainNavbar';

class Sobre extends React.Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <SectionFunding />
        <SectionCadastreEmail />
        <SectionDownload />
      </div>
    );
  }
}

function Section1() {
  return (
    <div id="section-1">
      <Container>
        <Row>
          <Col>
            <h1><FormattedMessage id="app.sobre.section1.title" /></h1>
            <div className="text-center">
              <Button variant="primary" size="lg">
                <FormattedMessage id="app.sobre.section1.button" />
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
      <img src="https://picsum.photos/seed/picsum/1440/818" alt="Foto: Universitários em reunião" />
    </div>
  );
}

function Section2() {
  const text = fmt({id: 'app.sobre.section2.content'});

  return (
    <div id="section-2">
      <Container>
        <Row>
          <Col>
            <h2><FormattedMessage id="app.sobre.section2.title" /></h2>
            <div className="content"
              dangerouslySetInnerHTML={{
                __html: text
              }}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Section3() {
  return (
    <div id="section-3">
      <Container>
        <Row>
          <Col>
            <h2><FormattedMessage id="app.sobre.section3.title" /></h2>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col sm={12} md={3}>
            <p className="icon"><img src={ico_dinheiro} alt="Ícone: Dinheiro digital" /></p>
            <h5><FormattedMessage id="app.sobre.section3.item1.title" /></h5>
            <p><FormattedMessage id="app.sobre.section3.item1.text" /></p>
          </Col>
          <Col sm={12} md={3}>
            <p className="icon"><img src={ico_mudanca} alt="Ícone: Mudança de hábito" /></p>
            <h5><FormattedMessage id="app.sobre.section3.item2.title" /></h5>
            <p><FormattedMessage id="app.sobre.section3.item2.text" /></p>
          </Col>
          <Col sm={12} md={3}>
            <p className="icon"><img src={ico_ouvir} alt="Ícone: Ouvir" /></p>
            <h5><FormattedMessage id="app.sobre.section3.item3.title" /></h5>
            <p><FormattedMessage id="app.sobre.section3.item3.text" /></p>
          </Col>
        </Row>
        <div id="gallery">
          <div className="col1">
            <img src="https://placeimg.com/591/764" alt="" />
          </div>
          <div className="col2">
            <ul className="flex-container">
              <li className="flex-item"><img src="https://placeimg.com/458/241" alt="" /></li>
              <li className="flex-item"><img src="https://picsum.photos/seed/picsum/458/241" alt="" /></li>
              <li className="flex-item"><img src="https://loremflickr.com/458/241" alt="" /></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Section4() {
  const data = [
    {"name": "Elvis Benificio", "role": "CEO", "image": "https://placekitten.com/137/137"},
    {"name": "Renata Austin", "role": "CTO", "image": "https://placekitten.com/200/200"},
    {"name": "Alberto Oxford", "role": "CFO", "image": "https://placekitten.com/180/180"},
    {"name": "Maria Antonieta", "role": "Software Engineer", "image": "https://placekitten.com/160/160"},
    {"name": "Elisabeth Ox", "role": "Visual Designer", "image": "https://placekitten.com/175/175"},
    {"name": "João Gil", "role": "UX Designer", "image": "https://placekitten.com/250/250"},
    {"name": "Renata Vasconcelos", "role": "PM Manager", "image": "https://placekitten.com/310/310"},
    {"name": "Diego Antoniel", "role": "Ilustrador", "image": "https://placekitten.com/280/280"}
  ]
  return (
    <div id="section-4">
      <Container>
        <Row>
          <Col>
            <h2><FormattedMessage id="app.sobre.section4.title" /></h2>
          </Col>
        </Row>
        <Row className="justify-content-between">
          {data.map((person, index) => (
            <Col xs={6} md={3} className="text-center" key={index}>
              <div className="picture" style={{backgroundImage: `url(${person.image})`}}></div>
              <p className="name">{person.name}</p>
              <p className="role">{person.role}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Section5() {
  const data = [
    { "title": "Embaixador", "link": "/vaga/embaixador" },
    { "title": "UX Designer", "link": "/vaga/ux-designer" },
    { "title": "Front-End Developer", "link": "/vaga/front-end-developer" }
  ]

  return (
    <div id="section-5">
      <h2><FormattedMessage id="app.sobre.section5.title" /></h2>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <ul id="vagas">
              {data.map((vaga, index) => (
                <li className="vaga" key={`vaga-${index}`}>
                  <a href={vaga.link} className="vaga"><span className="title">{vaga.title}</span> <span className="arrow" style={{backgroundImage: `url(${arrow})`}}></span></a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre;
