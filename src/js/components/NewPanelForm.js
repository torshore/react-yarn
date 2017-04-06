import React, { Component, PropTypes } from 'react';
import Panel from './Panel';
import TextBox from './TextBox';
// import Choices from './Choices';
import {Row, Col} from 'react-materialize';


export default class NewPanelForm extends Component{
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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


render(){
  return(
    <div>
      <Row>
        <h3 className="bldpaneltitle"> Create a New Chapter:  </h3>
      </Row>


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



