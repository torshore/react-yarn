import React from 'react';
import {Card} from 'react-materialize';


class PanelEdit extends React.Component{

  render() {
    return(
        <div>
          {this.props.panel.image}
          {this.props.panel.body_text}
        </div>
    )
  }
}







export default PanelEdit;
