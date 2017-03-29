import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router';
import { getPanel } from '../actions/index';



class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {

    this.props.dispatch(getPanel(this.props.match.params.storyid, this.props.match.params.panelid));
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
        {this.renderPanel()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{panel: state.panel.panel};

}

export default connect(mapStateToProps)(SingleStoryShow);



