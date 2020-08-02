import React from 'react';
import './CadastreEmail.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import FormBlock from './FormBlock';
import { fmt } from '../index';


class SectionCadastreEmail extends React.Component {
  render() {
    return (
      <div id="cadastre-email">
        <Container>
          <Row>
            <Col>
              <h4><FormattedMessage id="app.box.email.title" /></h4>
              <h6><FormattedMessage id="app.box.email.text" /></h6>
            </Col>
          </Row>
          <Row>
            <Col sm={0} md={4}></Col>
            <Col sm={12} md={5} className="text-center">
              <FormBlock placeholder={fmt({'id': 'app.footer.form.label'})} buttonLabel={fmt({'id': 'app.box.email.button'})} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionCadastreEmail;
