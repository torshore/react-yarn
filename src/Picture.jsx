import React, {Component} from 'react';
import { Row, Image} from 'react-bootstrap';
import './App.css';

export default class Picture extends Component {
  render() {
    return(
        <Row>
          <Image className="pic-size" src="localhost:3000/stories/1/panels/1${.data.image}"  />
        </Row>

    );
  }
}