import React, {Component} from 'react';
import '../../../styles/App.css';
import { Navbar, NavItem } from 'react-materialize';


export default class NavBar extends Component {
  render() {
    return(
      <Navbar brand='YARN' className="nav" right>
        <NavItem href='/stories'>Play</NavItem>
        <NavItem href='/stories/new'>Weave an Adventure!</NavItem>
      </Navbar>
    )
  }
}




