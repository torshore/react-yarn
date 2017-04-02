import React, { Component } from 'react';



class PanelEdit extends Component {

  render () {
    return(
        <form action={`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}`}>
          <input type="text" placeholder="insert image link here"/>
          <input type="submit" value="Submit" />

        </form>


    )
  }
}

export default PanelEdit;