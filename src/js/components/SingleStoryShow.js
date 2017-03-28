import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getStory, deleteStory } from '../actions/index';

export default class SingleStoryShow extends Component{

    render(){
      return(
      <div>

        <h1> The Story id is </h1>
        <h6> {this.props.match.params.storyid} </h6>

      </div>

        )
    }
  }

