import React, {Component} from 'react';
import StoriesHome from './StoriesHome';
// import '../../styles/App.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';

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
        <Router>
        <div>
          <ul>
             <li> <Link to="/stories"> Play!</Link> </li>
          </ul>

          <Route path="/stories" component={StoriesHome}/>
           </div>
        </Router>

        </Nav>
      </div>
    )
  }
}




