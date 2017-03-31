import React, {Component} from 'react';
import Picture from './Picture';
import TextBox from './TextBox';
import '../../../styles/App.css';
import {Jumbotron, Col} from 'reactstrap';



class Panel extends Component {
  render () {
    return (
      <img src={this.props.panel.image} alt="Story"/>



    );
  }
}

export default Panel;