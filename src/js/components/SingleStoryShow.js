import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getStory, deleteStory } from '../actions/index';

class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getStory(this.props.params.id);
  }

  deleteButtonClick(){
    this.props.deleteStory(this.props.params.id)
      .then(() => {
        this.props.router.push('/');
      });
  }

  render(){
    if(!this.props.story){
      return <div> Getting story, please wait. </div>;
    }

    return(
      <div className="container">

      <h3>Title: {this.props.story.title} </h3>

      <button className="btn btn-warning" onClick={this.deleteButtonClick}>
        Delete Story
      </button>

      </div>
    );
  }
}

function mapStateToProps(state){
  return { story: state.stories.story};
}


export default connect(mapStateToProps, {getStory, deleteStory})(SingleStoryShow);

