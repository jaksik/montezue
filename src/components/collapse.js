import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
          <Row>
              <Col xs={6}>
              <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Filter</Button>

              </Col>
              <Col xs={6}>
              <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Sort</Button>

              </Col>
          </Row>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <button>Men's</button><br/>
            <button>Woman's</button><br/>

            </CardBody>
          </Card>
        </Collapse>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <button>Newest</button><br/>
            <button>Cheapest</button><br/>
            <button>Newest</button><br/>

            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;