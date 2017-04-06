import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import NewPanelForm from './NewPanelForm';

class StoryEdit extends Component {


  renderPanels() {
    return this.props.panels.map((panel, i) => {
      return (
        <div key={i}>
          <Link to={`/stories/${panel.story_id}/panels/${panel.id}/choices/edit`} onClick={NewPanelForm}>
              <Button>{panel.title}</Button>
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