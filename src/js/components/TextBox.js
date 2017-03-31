import React, {Component} from 'react';



export default class TextBox extends Component {
  render() {
    return(
      <div>
        <p>
         {this.props.body_text}
        </p>
      </div>
    )
  }
}