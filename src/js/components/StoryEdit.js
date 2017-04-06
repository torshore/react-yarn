import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import PanelEdit from './PanelEdit.js'
import { Link } from 'react-router-dom'


class StoryEdit extends Component {




  renderPanels() {

    return this.props.panels.map((panel, i) => {
      return (
        <div key={i}>
          <Modal
            header={`Chapter ${panel.id} : ${panel.panel_title}`}

            trigger={
              <Button waves='light'>{`Chapter ${panel.id} : ${panel.panel_title}/choices/edit`}</Button>
              }>
              <div>
                <Link to={`/stories/${panel.storyid}/panels/${panel.id}`} onClick={NewPanelForm}>
                <Button/>
                </Link>
                <PanelEdit panel={panel}/>
              </div>

          </Modal>
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