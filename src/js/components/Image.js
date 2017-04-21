import React, {Component} from 'react';
import '../../../styles/App.css';



class Image extends Component {
  render () {
    return (
    <div className="pic-div">
      <div className="frame">
        <img src={this.props.image} className="panel-img" alt="Story"/>
      </div>
    </div>
    );
  }
}

export default Image;