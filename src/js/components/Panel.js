import React, {Component} from 'react';
import '../../../styles/App.css';



class Panel extends Component {
  render () {
    return (
      <img src={this.props.panel.image} alt="Story"/>



    );
  }
}

export default Panel;