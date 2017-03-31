import React, {Component} from 'react';
import Picture from './Picture';
import TextBox from './TextBox';
import '../../../styles/App.css';
import {Jumbotron, Col} from 'reactstrap';



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