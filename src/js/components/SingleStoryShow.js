import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router';
import { getStory, deleteStory } from '../actions/index';

export default class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  }



  render(){
    return(
     <h1> hello </h1>
    )
  }
}



