import React from 'react';
import { Link } from 'react-router-dom'
import NewPanelForm from './NewPanelForm.js';
import {Collection, CollectionItem, Row} from 'react-materialize';

class ChoicesEdit extends React.Component {

  render(){
    const storyid = this.props.panel.story_id
    return (
      <div>
      { this.props.choices.map((choice, index) => {
        return (
          <Row key={choice.id}>
          <div>
           <Link to={`/stories/${storyid}/panels/${choice.path_to}/edit`} onClick={NewPanelForm}>
              <Collection className="choice">
                <CollectionItem className="grey-text text-darken-3 choice"> {choice.body_text}</CollectionItem>
              </Collection>
            </Link>
          </div>
          </Row>
          )
      })}
      </div>
    )
  }
}

export default ChoicesEdit;