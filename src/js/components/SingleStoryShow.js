import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router';
import { getPanel } from '../actions/index';
import { getChoices } from '../actions/index';
import Choices from './Choices.js';
import Panel from './Panel.js';


class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
// function arguments are taken from the url params
    this.props.dispatch(getPanel(this.props.match.params.storyid, this.props.match.params.panelid));
    this.props.dispatch(getChoices(this.props.match.params.storyid, this.props.match.params.panelid));
  }

  render(){
    if(!this.props.panel) {
      return <div> Fetching your Adventure! </div>;
    }

    return(
      <div>
        <Panel panel={this.props.panel}/>
        <Choices choices={this.props.choices}
                  panel={this.props.panel}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{panel: state.panel.panel,
         choices: state.choices.choices};

}

export default connect(mapStateToProps)(SingleStoryShow);



