import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPanel } from '../actions/index';
import Choices from './Choices';
import { Row, Col } from 'react-materialize';
import '../../../styles/App.css';
import { getChoices } from '../actions/index';
import Panel from './Panel.js';
import TextBox from './TextBox.js';
import NavBar from './NavBar';

class SingleStoryShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {

    this.props.dispatch(getPanel(this.props.match.params.storyid, this.props.match.params.panelid));
    this.props.dispatch(getChoices(this.props.match.params.storyid, this.props.match.params.panelid));
  }


  render() {
    if(!this.props.panel) {
      return <div> Fetching your Adventure! </div>;
    }

    return(
      <div className="single-story">
      <NavBar />
      <Row className="wrapper">

        <Col s={11} m={6}>
          <Panel panel={this.props.panel} />
        </Col>
        <Col m={1}/>
        <Col s={11} m={4}>
          <TextBox panel={this.props.panel}/>
          <Choices choices={this.props.choices} panel={this.props.panel}/>
        </Col>
        <Col s={1} m={1}/>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return{panel: state.panel.panel,
         choices: state.choices.choices};

}

export default connect(mapStateToProps)(SingleStoryShow);



