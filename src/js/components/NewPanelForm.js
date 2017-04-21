import React, { Component, PropTypes } from 'react';
import Image from './Image';
import ChoicesEdit from './ChoicesEdit';
import {Row, Col, Button} from 'react-materialize';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import StoryChart from './StoryChart';





class NewPanelForm extends Component{
  static contextTypes = {
    router: PropTypes.object
  };
   constructor(props) {
    super(props);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleBodyTextChange = this.handleBodyTextChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleBodyTextSubmit = this.handleBodyTextSubmit.bind(this)
    this.handleChoiceSubmit = this.handleChoiceSubmit.bind(this)
    this.handleChoiceBodyTextChange = this.handleChoiceBodyTextChange.bind(this)

    this.state = {
      choices: [],
      body_text: "",
      panel_id: "",
      story_id: "",
      image: "",
      new_choice_body_text: ""
    };
  }

    getImageandBodyText = () => {

      return fetch(`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({body_text: data.data.body_text,
                       panel_id: data.data.id,
                       story_id: data.data.story_id,
                       image: data.data.image


                      })
        console.log("bt", this.state.panel_id)

    })
    .catch(err => console.log(err))
  }

    getChoices = () => {
      return fetch(`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}/choices`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        this.setState({choices: data.data})
      })
      .catch(err => console.log(err))

}
    componentDidMount() {

      this.getImageandBodyText()
      this.getChoices()

    }


    handleImageSubmit(event) {
      event.preventDefault()
      var data = {panel: {

        "id": this.state.panel_id,
        "image": this.state.image,
        "story_id":this.state.story_id
      }};
      console.log(data);
      fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
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
      "panel_id": this.state.panel_id,
      "body_text": this.state.new_choice_body_text,
      "story_id": this.state.story_id,
      "index": this.props.panel.index

    }};
    console.log(data);
    fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}/choices`, {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify(data)
    }).then(json => {
      console.log('choices', data)
        this.setState({new_choice_body_text: ""})
        this.getChoices()
      })
  }

    handleBodyTextChange(event) {
      this.setState({body_text: event.target.value});
    }
    handleImageChange(event) {
      this.setState({image: event.target.value});
    }
    handleChoiceBodyTextChange(event) {
      this.setState({new_choice_body_text: event.target.value})
    }

    handleBodyTextSubmit(event) {

    event.preventDefault()
    console.log("131", this.state.panel_id)
    var data = {panel: {

      "id": this.state.panel_id,
      "body_text": this.state.body_text,
      "story_id":this.state.story_id
    }};
    console.log("sending", data);
    fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
      headers: {'Content-Type': 'application/json'},
      method: "PUT",
      body: JSON.stringify(data)
    })
  }


  render(){
    return(
    <div>
      <NavBar/>
              <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionEnterTimeout={600}
          transitionLeave={false}>

      <div>

      <div className="mini-panel">
        <Col s={11} m={6}>
          <Image image={this.state.image} />
        </Col>
        <Col s={11} m={5}>
          <ChoicesEdit choices={this.state.choices} story_id={this.state.story_id}/>
        </Col>
        </div>
        <form className="form" onSubmit={this.handleChoiceSubmit}>
          <Row>
            <Col m={1}/>
            <Col m={10}>
              <div className="panel-form2">

                <label>
                  New Choice:
                  <input type="text" value={this.state.new_choice_body_text} onChange={this.handleChoiceBodyTextChange}/>
                </label>
                <input className="waves-effect waves-light btn" type="submit" value="Submit" />
              </div>
            </Col>
          </Row>
        </form>
      <Row>
        <div className="panel-form">
          <form className="form" onSubmit={this.handleImageSubmit}>
            <label>
              Image:
              <input type="text" value={this.state.image} onChange={this.handleImageChange} />
            </label>
            <input className="waves-effect waves-light btn" type="submit" value="Submit" />
          </form>

          <Col m={1}/>
        </div>
      </Row>
      <br/>
      <div>
        <Row>
          <div className="body-text-panel-form">
            <form className="form" onSubmit={this.handleBodyTextSubmit}>
              <label>
              Body Text:
              <br/>
              <textarea className="bodyTextForm" name="body_text" value={this.state.body_text} onChange={this.handleBodyTextChange} />
                </label>
                <br/>
                <input className="waves-effect waves-light btn" type="submit" value="Submit" />
            </form>

            <Col m={1}/>
          </div>
        </Row>
      </div>
      <div>
        <Link to={`/stories/${this.props.panel.story_id}/`} onClick={StoryChart }>
        <Button>Back to the Chart!</Button>
        </Link>
      </div>
    </div>
  </ReactCSSTransitionGroup>
  </div>
  );
}
}


function mapStateToProps(state) {

  return{panel: state.panel.panel,
         choices: state.choices.choices};


}




export default connect(mapStateToProps)(NewPanelForm);







