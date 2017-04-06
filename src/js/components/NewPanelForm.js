import React, { Component, PropTypes } from 'react';
import Panel from './Panel';
import TextBox from './TextBox';
// import Choices from './Choices';
import {Row, Col} from 'react-materialize';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getPanel } from '../actions/index';
import Choices from './Choices';
import { getChoices } from '../actions/index';
import NavBar from './NavBar';


class NewPanelForm extends Component{
  static contextTypes = {
    router: PropTypes.object
  };
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {

    this.props.dispatch(getPanel(this.props.match.params.storyid, this.props.match.params.panelid));
    this.props.dispatch(getChoices(this.props.match.params.storyid, this.props.match.params.panelid));
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {panel: {
      "id": this.props.match.params.panelid,
      "title": this.title.value,
      "image": this.image.value,
      "body_text": this.body_text.value
    }};
    console.log(data);
    fetch(`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}`, {
      headers: {'Content-Type': 'application/json'},
      method: "PUT",
      body: JSON.stringify(data)
    }).then(json => {
        this.setState({panelid: json.data})

      })
  }

   handleChoiceSubmit = (event) => {
    event.preventDefault()
    var data = {choice: {
      "panel_id": this.props.match.params.panelid,
      "body_text": this.choiceBodyText.value,
      "story_id": this.props.match.params.storyid,

    }};
    console.log(data);
    fetch(`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}/choices`, {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify(data)
    }).then(json => {
        this.setState({choiceid: json.data})
        const choiceid = json.data
      })
  }

  render(){
    return(
      <div>
        <Row>
          <h3 className="bldpaneltitle"> Create a New Chapter:  </h3>
        </Row>
          <Col s={11} m={6}>
            <Panel panel={this.props.panel} />
          </Col>

          <Col s={11} m={5}>
            <TextBox panel={this.props.panel}/>
            <Choices choices={this.props.choices} panel={this.props.panel}/>
          </Col>

            <form className="form" onSubmit={this.handleChoiceSubmit}>
              <label>
                New Choice:
                <input type="text" ref={(input) => this.choiceBodyText = input} />
              </label>
              <input className="waves-effect waves-light btn" type="submit" value="Submit" />
            </form>



    <Row>
      <div className="panel-form">
        <Row >
          <Col m={1}/>
          <Col m={10}>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input type="text" ref={(input) => this.title = input} />
              </label>
              <label>
                Chapter Text:
                <input type="text" ref={(input) => this.body_text = input} />
              </label>
              <label>
                Image:
                <input type="text" ref={(input) => this.image = input} />
              </label>
              <input className="waves-effect waves-light btn" type="submit" value="Submit" />
            </form>
          </Col>
          <Col m={1}/>
        </Row>
      </div>
    </Row>
  </div>
  );
}
}

function mapStateToProps(state) {

  return{panel: state.panel.panel,
         choices: state.choices.choices};

}

export default connect(mapStateToProps)(NewPanelForm);






