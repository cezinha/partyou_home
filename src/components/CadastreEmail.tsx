import React from 'react';
import './CadastreEmail.scss';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


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
              <form>
                <InputGroup size="lg">
                  <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                  <Button variant="primary" size="lg">
                    <FormattedMessage id="app.box.email.button" />
                  </Button>{' '}
                </InputGroup>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionCadastreEmail;