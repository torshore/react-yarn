import React, {Component} from 'react';
import '../../../styles/App.css';
import { Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav">
         <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>
                <Link to="/">YARN</Link>
              </h1>
            </Navbar.Brand>
          </Navbar.Header>

          <ul className="links">
             <li > <Link to="/stories"> Play!</Link> </li>
          </ul>

        </Navbar>
      </div>
    )
  }
}




