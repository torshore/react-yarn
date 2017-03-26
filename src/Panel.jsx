import React, {Component} from 'react';
import Picture from './Picture.jsx';
import TextBox from './TextBox.jsx';
import './App.css';
import {Jumbotron, Col} from 'react-bootstrap';



export default class Panel extends Component {
  render () {
    return (

      <Col xs={12}>
        <Jumbotron className="jumbotron">
          <div className="image">
            <Picture />
          </div>
          <div className="text-size">
            <TextBox />
          </div>
        </Jumbotron>
      </Col>

    );
  }
}