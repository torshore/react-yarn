import React, {Component} from 'react';
import {Card} from 'react-materialize';



export default class TextBox extends Component {
  render() {
    return(
      <div>
        <Card className="yellow lighten-2 black-text textbox">
         {this.props.panel.body_text}
        </Card>
      </div>
    )
  }
}