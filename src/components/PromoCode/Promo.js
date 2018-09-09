import React, { Component } from 'react';
import { Button, Collapse, Well, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class PromoCodeDiscount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ''
    };
  }

render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Показать ` : `Скрыть `}
          промо код {this.state.open === false ? `+` : `-`}
        </Button>
         <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Промо-код </ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Введите промо-код"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>{' '}
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      // type="submit"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default PromoCodeDiscount;