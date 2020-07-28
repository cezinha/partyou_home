import React from 'react';
import './Funding.scss';
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import logo_desenvolvesp from '../assets/logo_desenvolvesp.png';
import logo_googlestartups from '../assets/logo_googlestartups.png';
import logo_kria from '../assets/logo_kria.png';
import logo_startupfarm from '../assets/logo_startupfarm.png';

class SectionFunding extends React.Component {
  render() {
    return (
      <div id="funding">
        <Container>
          <h4><FormattedMessage id="app.funding.title" /></h4>
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
      </div>
    );
  }
}

export default SectionFunding;
