import React, {Component} from 'react';
import { Row } from 'react-materialize';


export default class Picture extends Component {
  render() {
    return(
      <Image className="pic-size" src={this.props.image} alt="story"  />
    );
  }
}