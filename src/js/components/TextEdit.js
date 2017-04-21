import React, {Component} from 'react';
import { changeBodyText } from '../actions/index';
import { bindActionCreators } from 'redux'
import {Row, Col, Button} from 'react-materialize';
import { connect } from 'react-redux';


class TextEdit extends Component {
  constructor(props) {
    super(props);
    this.handleBodyTextSubmit = this.handleBodyTextSubmit.bind(this);
}

    handleBodyTextSubmit(event) {

    event.preventDefault()
    console.log(event.target)
    var data = {panel: {

      "id": this.props.panel.id,
      "body_text": this.body_text.value,
      "story_id":this.props.panel.story_id
    }};
    console.log("sending", data);
    fetch(`/stories/${this.props.panel.story_id}/panels/${this.props.panel.id}`, {
      headers: {'Content-Type': 'application/json'},
      method: "PUT",
      body: JSON.stringify(data)
    })
  }

  render() {
  console.log('hola', this.props.panel)
    return(
      <div>
        <Row>
      <div className="body-text-panel-form">
        <form className="form" onSubmit={this.handleBodyTextSubmit}>
              <label>
                Body Text:
                <br/>
                <textarea className="bodyTextForm" name="body_text" ref={(input) => this.body_text = input}  value={this.props.panel.body_text} onChange={() => this.props.changeBodyText(this.body_text.value)}/>
              </label>
              <br/>
              <input className="waves-effect waves-light btn" type="submit" value="Submit" />
            </form>

          <Col m={1}/>
      </div>
    </Row>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({changeBodyText: changeBodyText}, dispatch)
}

export default connect(null, matchDispatchToProps)(TextEdit);