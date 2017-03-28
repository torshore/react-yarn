import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { getStories } from '../actions/index';


class StoriesHome extends Component{

  componentDidMount() {
    this.props.dispatch(getStories());
  }

  renderStories() {
    return this.props.stories.map((story) => {
      return (
        <li key={story.id}>

        <h4> {story.title} </h4>
        <img src={story.image}/>

        </li>
      )
    });
  }

  render(){
    return(
      <div className="container">

        <div>

        </div>

        Stories Home Page
        <ul className="list-group">
          {this.renderStories()}
        </ul>
      </div>
    );
  }
}
         // <Link to="stories/new" className="btn btn-warning">
          //   Create Story
          // </Link>
function mapStateToProps(state){
  return {stories: state.stories.stories }
}

export default connect(mapStateToProps)(StoriesHome);



