import React, {Component, PropTypes} from 'react';
import { Row, Col, Input, Button } from 'react-materialize';
import {createStory} from '../actions/index';


class NewStory extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = {story: {"title": this.title.value, "tagline": this.tagline.value, "image": this.image.value}}
    console.log(data);
    fetch('/stories', {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(data)
    })
  }

  render() {
    return (
      <div className="single-story">
      <Row>
        <div className="upper-div">
          <h2 className="bldtitle"> Start a New Story: </h2>
        </div>
      </Row>
      <Row >
        <Col m={3}/>
        <Col m={6} className="newstoryform" onSubmit={this.handleSubmit}>
          <Input m={6} type="text" label="Title:" ref={(input) => this.title = input} />
          <Input m={6} type="text" label="Tagline:" ref={(input) => this.tagline = input} />
          <Input m={6} type="text" label="Image Link for Cover:" ref={(input) => this.image = input} />
          <Button m={6} type="submit" value="Submit"> Submit </Button>
        </Col>
        <Col m={3}/>
      </Row>
    </div>
    );
  }
}

export default NewStory