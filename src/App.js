import React, { Component } from 'react';
import './App.css';
import Panel from './Panel.jsx';
import NavBar from "./NavBar.jsx";

export default class App extends Component {


  render() {
    return (
      <div className="wrapper">

        <NavBar />

        <Panel />
      </div>
    );
  }
}

