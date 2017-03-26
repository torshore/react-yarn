import React, {Component} from 'react';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav">
         <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Yarn
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          </NavDropdown>
        </Nav>
      </div>
    )
  }
}




