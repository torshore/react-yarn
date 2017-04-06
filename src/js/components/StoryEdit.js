import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import NewPanelForm from './NewPanelForm';




class StoryEdit extends Component {




  renderPanels() {
    return this.props.panels.map((panel, i) => {
      return (
        <div key={i}>
          <Link to={`/stories/${panel.storyid}/panels/${panel.id}`} onClick={NewPanelForm}>
              <Button />
          </Link>
        </div>
      )
    });
}
  render () {
    return(
      <div>
        {this.renderPanels()}
      </div>
      )
  }
}
export default StoryEdit;