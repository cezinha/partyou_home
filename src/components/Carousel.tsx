import React from 'react';
import './Carousel.scss';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import foto_universitaria from '../assets/foto_perfil.jpg';
import logo_unesp from '../assets/logo_unesp.png';

interface iState {
  index: number
};

class SectionCarousel extends React.Component<{}, iState> {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleSelect(selectedIndex : number) {
    this.setState({ index: selectedIndex});
  }

  render() {
    let style = {
      backgroundImage: `url(${logo_unesp})`
    };
    return (
      <div id="carousel-section">
        <Carousel activeIndex={this.state.index}
          onSelect={(idx) => this.handleSelect(idx)}
          indicators={true}
          slide={true}
          interval={4000}
          controls={true}>
          <Carousel.Item>
            <Container>
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
                    <h5>Desde que comecei a usar Partyou, temos sido muito mais eficiente em nossas vendas
                    e organização da entidade.</h5>
                    <footer className="blockquote-footer">Helena Carvalho, <strong>UNESP</strong></footer>
                  </blockquote>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
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
                    <h5>A Partyou trouxe um nível organizacional que a gente precisava. Conseguimos fazer parcelamentos e a taxa é baixa. Estão super disponíveis para ouvir a gente.</h5>
                    <footer className="blockquote-footer">Fernanda Alves, <strong>Diretora de Eventos - Atlética da Poli (USP)</strong></footer>
                  </blockquote>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default SectionCarousel;
