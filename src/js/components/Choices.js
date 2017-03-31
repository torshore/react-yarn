import React from 'react';
import { Link } from 'react-router-dom'
import SingleStoryShow from './SingleStoryShow.js';
import {Collection, CollectionItem, Row} from 'react-materialize';

class Choices extends React.Component {

  render(){
    const storyid = this.props.panel.story_id
    return (
      <div>
      { this.props.choices.map((choice, index) => {
        return (
          <Row>
          <div key={choice.id}>
            <Link to={`/stories/${storyid}/panels/${choice.path_to}`} onClick={SingleStoryShow}>
              <Collection>
                <CollectionItem> {choice.body_text}</CollectionItem>
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

export default Choices;