import React, {Component, PropTypes} from 'react';

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
      <form className="newstoryform" onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewStory