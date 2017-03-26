import React, {Component} from 'react';
import { Row, Image} from 'react-bootstrap';
import './App.css';

export default class Picture extends Component {
  render() {
    return(
        <Row>
          <Image className="pic-size" src="`${this.props.image}`"  />
        </Row>

    );
  }
}