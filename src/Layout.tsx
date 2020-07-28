import React from 'react';
import './Layout.scss';
import { Button } from 'react-bootstrap';

class Layout extends React.Component {
  render() {
    return (
      <div className="bd-content">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 id="buttons">Buttons</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Button variant="primary" size="lg">
                Large button
              </Button>{' '}
              <Button variant="secondary" size="lg">
                Large button
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Button variant="primary" size="sm">
                Small button
              </Button>{' '}
              <Button variant="secondary" size="sm">
                Small button
              </Button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 id="headings">Headings</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
              </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 id="text-sizes">Text sizes</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p className="size-17">size-17</p>
              <p className="size-18">size-18</p>
              <p className="size-19">size-19</p>
              <p className="size-20">size-20</p>
              <p className="size-22">size-22</p>
              <p>normal 16px <strong>strong</strong> <small>small</small></p>
              <p className="bold">bold</p>
              <p className="bolder">bolder</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 id="text-colors">Text Colors</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h3 className="partyou-blue">partyou-blue</h3>
              <h3 className="partyou-darkblue">partyou-darkblue</h3>
              <h3 className="partyou-lightblue">partyou-lightblue</h3>
              <h3 className="partyou-darkblack">partyou-darkblack</h3>
              <h3 className="partyou-lightblack-1">partyou-lightblack-1</h3>
              <h3 className="partyou-lightblack-2">partyou-lightblack-2</h3>
              <h3 className="partyou-black">partyou-black</h3>
              <h3 className="partyou-darkgrey">partyou-darkgrey</h3>
              <h3 className="partyou-mediumgrey">partyou-mediumgrey</h3>
              <h3 className="partyou-grey">partyou-grey</h3>
              <h3 className="partyou-lightgrey-1">partyou-lightgrey-1</h3>
              <h3 className="partyou-lightgrey-2">partyou-lightgrey-2</h3>
              <h3 className="partyou-lightgrey-3">partyou-lightgrey-3</h3>
              <h3 className="partyou-lightgrey-4">partyou-lightgrey-4</h3>
              <h3 className="partyou-lightgrey-5">partyou-lightgrey-5</h3>
              <h3 className="partyou-lightgrey-6">partyou-lightgrey-6</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 id="bootstrap">Bootstrap</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
          <h3>
            Fancy display heading
            <small className="text-muted">With faded secondary text</small>
          </h3>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
          <h1 className="display-1">Display 1</h1>
          <h1 className="display-2">Display 2</h1>
          <h1 className="display-3">Display 3</h1>
          <h1 className="display-4">Display 4</h1>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
          <blockquote className="blockquote">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
          <blockquote className="blockquote">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
