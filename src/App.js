import React, { Component } from 'react';
import './App.css';
import Panel from './Panel.jsx';
import NavBar from "./NavBar.jsx";
import 'whatwg-fetch';

fetch('/stories')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



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

