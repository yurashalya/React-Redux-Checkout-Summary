import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Показать` : `Спрятать`} детали товара
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    src="https://ae01.alicdn.com/kf/HTB1CFLyPFXXXXaOXXXXq6xXFXXXC/WCG-LOL.jpg_640x640.jpg"
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Игровой стул серии: OFB ES-3085, гарантия и качество от производителя.
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${
                        this.props.price
                      }`}</strong>
                    </Col>
                    <Col md={6}>
                      <strong>Кол-во: 1</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}