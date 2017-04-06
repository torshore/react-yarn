import React, { Component, PropTypes } from 'react';
import Panel from './Panel';
import TextBox from './TextBox';
// import Choices from './Choices';
import {Row, Col} from 'react-materialize';


export default class NewPanelForm extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  handleSubmit(event) {
    event.preventDefault()
    var data = {panel: {
      "title": this.title.value,
      "image": this.image.value,
      "body_text": this.body_text.value
    }};
    console.log(data);
  }

    // fetch('/panels', {
    //   headers: {'Content-Type': 'application/json'},
    //   method: "POST",
    //   body: JSON.stringify(data)
    // }).then(response => response.json())
    //   .then(json => {
    //     this.setState({panelid: json.data})
    //     const panelid = json.data
    //     window.location.assign(`/stories/${storyid}/panels/${panelid}`)
    //   })
  // }


render(){
  return(
    <div>
      <Row>
        <h3 className="bldpaneltitle"> Create a New Chapter:  </h3>

       <div className="mini-panel">
          <Row className="wrapper">
            <Col s={11} m={6}>
              <Panel panel={this.data.image} />
            </Col>

            <Col s={11} m={5}>
              <TextBox panel={this.data.body_text}/>

            </Col>
            <Col s={1} m={1}/>
          </Row>
       </div>
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



