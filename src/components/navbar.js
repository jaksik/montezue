import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Row, Col } from 'reactstrap';
import Img from "gatsby-image"

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          {/* <header>
            <div className="row no-gutters" className="commerce-header" style={{ display: `flex`, background: `#508104`}}>
                <div className="col-lg-4 d-none d-lg-block"><p style={{ textAlign: `left`}}><strong>30 DAY MONEY BACK GAURANTEE</strong></p></div>  
                <div className="col-xs-12 col-lg-4"><p style={{ textAlign: `center`}}><strong>FREE SHIPPING ON ALL ORDERS IN THE U.S.</strong></p></div>
                <div className="col-lg-4 d-none d-lg-block"><p style={{ textAlign: `right`}}><strong>30 DAY MONEY BACK GAURANTEE</strong></p></div>       
     
            </div>
        </header> */}
        <Row className="no-gutters d-none d-sm-block">
          <Col xs={{ size: 3, offset: 9 }}>
            <a href="/cart"><Img fluid={this.props.fluid} style={{ width:`40px`}}/></a>
          </Col>
        </Row>

        <Navbar color="" light expand="md"  style={{ background: ``}}>
          <Row>
          <Col xs={4}>
          <NavbarBrand href="/" className="">
            {/* <img src={logo} width={150}/> */}
            Montezue
            </NavbarBrand>
          </Col>
            
          <Col xs={2} className="d-block d-sm-none">
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/cart/"><Img fluid={this.props.fluid} style={{ width:`25px`}}/></NavLink>
                  </NavItem>
                </Nav>
            </Col>

            <Col xs={2} className="d-block d-sm-none">
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/cart/"><Img fluid={this.props.fluid} style={{ width:`25px`}}/></NavLink>
                  </NavItem>
                </Nav>
            </Col>

            <Col xs={4}>
              <NavbarToggler onClick={this.toggle} />
              </Col>          
          </Row>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/blog/">Blog</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/shop/">Shop</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Shop
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/shop/">Men's</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/shop/">Woman's</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/components/">Blog</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Gallery</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>

        <Row style={{background: `black`}} className="no-gutters">
          <Col xs={12}>
              <p style={{color: `white`, textAlign: `center`}}>Join VIP Peak Rewards for 10% off your first purchase online.</p>
          </Col>
        </Row>
      </div>
    );
  }
}