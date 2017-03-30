import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router';
import { getPanel } from '../actions/index';
import { getChoices } from '../actions/index';
import Choices from './Choices.js';



class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {

    this.props.dispatch(getPanel(this.props.match.params.storyid, this.props.match.params.panelid));
    this.props.dispatch(getChoices(this.props.match.params.storyid, this.props.match.params.panelid));
  }

  renderPanel() {
    return(
      <img src={this.props.panel.image} alt="panel"/>
    )
  }


  render(){
    if(!this.props.panel) {
      return <div> Fetching your Adventure! </div>;
    }

    return(
      <div>
        <div>
          {this.renderPanel()}
        </div>
        <Choices choices={this.props.choices}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{panel: state.panel.panel,
         choices: state.choices.choices};

}

export default connect(mapStateToProps)(SingleStoryShow);



