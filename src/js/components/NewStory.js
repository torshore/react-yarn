
import React, {Component} from 'react';
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
    }).then(response => response.json())
    .then(json => {
      this.setState({storyid: json.data})
      const storyid = json.data
      window.location.assign(`/stories/${storyid}`)
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
        <Col m={6} className="newstoryform">
          <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" ref={(input) => this.title = input} />
            </label>
            <label>
              Tagline:
              <input type="text" ref={(input) => this.tagline = input} />
            </label>
            <label>
              Image Link for Cover:
              <input type="text" ref={(input) => this.image = input} />
            </label>
            <input className="waves-effect waves-light btn" type="submit" value="Submit" />
          </form>
        </Col>
        <Col m={3}/>
      </Row>
    </div>
    );
  }
}

export default NewStory