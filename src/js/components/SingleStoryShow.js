import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router';
import { getStory } from '../actions/index';



class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    debugger;
    this.props.dispatch(getStory(this.props.match.params.storyid));
  }

  renderPanel() {
    return this.props.story.map((panel) => {
      return(
        <div>
          <p>Panel: {panel.body_text} </p>
          <img> {panel.image}</img>
        </div>
      )
    })
  }

  render(){
    if(!this.props.story) {
      return <div> Fetching your Adventure! </div>;
    }

    return(
      <div>
        {this.renderPanel()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  debugger;
  return{story: state.stories.stories}
}

export default connect(mapStateToProps)(SingleStoryShow);



