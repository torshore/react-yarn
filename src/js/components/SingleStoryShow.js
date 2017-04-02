import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPanel } from '../actions/index';
import { Row, Col, CardPanel} from 'react-materialize';
import '../../../styles/App.css';
import { getChoices } from '../actions/index';
import Choices from './Choices.js'
import Panel from './Panel.js'


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
    <Row>
      <Col s={12} m={7} className='pic-size'>
        <img src={this.props.panel.image} className="pic-size" alt="storyimage"/>
      </Col>
      <Col s={12} m={5} className='grid-example'>
        <CardPanel>
          {this.props.panel.body_text}
        </CardPanel>
      </Col>
    </Row>
  )
  }

  render() {
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



