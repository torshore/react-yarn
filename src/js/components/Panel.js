import React, {Component} from 'react';
import '../../../styles/App.css';



class Panel extends Component {
  render () {
    return (
    <div className="pic-div">
      <img src={this.props.panel.image} className="panel-img" alt="Story"/>
    </div>
    );
  }
}

export default Panel;