import React, {Component} from 'react';
// import '../../styles/App.css';
import { Navbar, Nav } from 'react-bootstrap';

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
          <Link to="/stories" component={StoriesHome}>
        </Nav>
      </div>
    )
  }
}




