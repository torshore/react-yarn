import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
// import {Link} from 'react-router';
import { getStories } from '../actions/index';


class StoriesHome extends Component{

  componentDidMount() {
    this.props.dispatch(getStories());
  }

  renderStories() {
    return this.props.stories.map((story) => {
      return (
        <Media key={story.id} className="media-box">
          <Media.Left align="middle" className="media-head">
            <img src={story.image} className="story-img" alt="Story"/>
              <div>
               <p className="media-head"> <strong>{story.title}</strong> </p>
               <p className="media-tag"><br/>{story.tagline}</p>
              </div>
           </Media.Left>
        </Media>
      )
    });
  }

  render(){
    return(
      <div className="container">

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



