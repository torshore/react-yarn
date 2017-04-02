import React from 'react';
import { Link } from 'react-router-dom'
import SingleStoryShow from './SingleStoryShow.js';

class Choices extends React.Component {

  render(){
    const storyid = this.props.panel.story_id
    return (
      <div>
      { this.props.choices.map((choice, index) => {
        return (
          <div key={choice.id}>
            <Link to={`/stories/${storyid}/panels/${choice.path_to}`} onClick={SingleStoryShow}>
              <div className="test" >
                <div> {choice.body_text}
                </div>
              </div>
            </Link>
          </div>
          )
      })}
      </div>
    )
  }
}

export default Choices;