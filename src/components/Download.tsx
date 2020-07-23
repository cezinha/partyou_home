import React from 'react';
import './Download.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import foto_app from '../assets/foto_app2.png';
import btn_googleplay from '../assets/btn_googleplay2.png';
import btn_applestore from '../assets/btn_applestore2.png';

class SectionDownload extends React.Component {
  render() {
    return (
      <div id="download">
        <Container>
          <Row>
            <Col className="text-center">
              <h1><FormattedMessage id="app.home.section5.title" /></h1>
              <h4><FormattedMessage id="app.home.section5.subtitle" /></h4>
              <p><a href="https://play.google.com">
                <img src={btn_googleplay} alt="Google Play" />
              </a>
              <a href="https://applestore.com">
                <img src={btn_applestore} alt="Apple Store" />
              </a></p>
              <img src={foto_app} alt="Foto App Partyou" id="foto_app" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionDownload;