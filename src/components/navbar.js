import React from 'react';
import logo from '../images/mountain.png'
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
  DropdownItem } from 'reactstrap';

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
          <header>
            <div className="row no-gutters" className="commerce-header" style={{ display: `flex`, background: `#508104`}}>
                <div className="col-lg-4 d-none d-lg-block"><p style={{ textAlign: `left`}}><strong>30 DAY MONEY BACK GAURANTEE</strong></p></div>  
                <div className="col-xs-12 col-lg-4"><p style={{ textAlign: `center`}}><strong>FREE SHIPPING ON ALL ORDERS IN THE U.S.</strong></p></div>
                <div className="col-lg-4 d-none d-lg-block"><p style={{ textAlign: `right`}}><strong>30 DAY MONEY BACK GAURANTEE</strong></p></div>       
     
            </div>
        </header>
        <Navbar color="" light expand="md"  style={{ background: `#db8200`}}>
          <NavbarBrand href="/" className="text-danger"><img src={logo} width={150}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}