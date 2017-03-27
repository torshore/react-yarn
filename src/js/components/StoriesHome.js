import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { getStories } from '../actions/index.js';


class StoriesHome extends Component{
  componentWillMount(){
    this.props.getStories();
  }

  renderStories(){
    return this.props.stories.map((story) => {
      return (
        <li key={story.id}>
          <Link to={`stories/${story.id}`}>
            <h4> {story.title} </h4>
          </Link>
        </li>
      )
    });
  }
  render(){
    return(
      <div className="container">

        <div>
          <Link to="stories/new" className="btn btn-warning">
            Create Story
          </Link>
        </div>

        Articles Home Page
        <ul className="list-group">
          {this.renderStories()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {stories: state.stories.all }
}

export default connect(mapStateToProps, {stories: getStories })(StoriesHome);



