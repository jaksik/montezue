import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.state = { 
      filter: false,
      sort: false,
    };
  }

  toggleFilter() {
      this.setState(state => ({ filter: !state.filter }));
      this.setState({ sort: false });
  }

  toggleSort() {
    this.setState(state => ({ sort: !state.sort }));
    this.setState({ filter: false });
}

  render() {
    return (
      <div>
          <Row className="">
            <Col xs={6}>
                <Button color="primary" onClick={this.toggleFilter} style={{ marginBottom: '1rem' }}>Filter</Button>
              </Col>
            <Col xs={6}>
                <Button color="primary" onClick={this.toggleSort} style={{ marginBottom: '1rem' }}>Sort</Button>
              </Col>
          </Row>

        <Collapse isOpen={this.state.filter}>
          <Card>
            <CardBody>
            <button>Men's</button><br/>
            <button>Woman's</button><br/>
            </CardBody>
          </Card>
        </Collapse>

        <Collapse isOpen={this.state.sort}>
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