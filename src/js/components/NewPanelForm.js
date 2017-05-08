import React, { Component } from 'react';
import ChoicesEdit from './ChoicesEdit';
import {Button} from 'react-materialize';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import StoryChart from './StoryChart';
import Draggable from 'react-draggable';


class NewPanelForm extends Component{


  constructor(props) {
    super(props);

    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleBodyTextChange = this.handleBodyTextChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleBodyTextSubmit = this.handleBodyTextSubmit.bind(this)
    this.handleChoiceBodyTextChange = this.handleChoiceBodyTextChange.bind(this)
    this.handleChoiceSubmit = this.handleChoiceSubmit.bind(this)
    this.handleChoiceAdd = this.handleChoiceAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleImageResize = this.handleImageResize.bind(this)
    this.handleImageDrag = this.handleImageDrag.bind(this)
    this.handleImageReposition = this.handleImageReposition.bind(this)
    this.handleImagePanelShow = this.handleImagePanelShow.bind(this)
    this.handleUndo = this.handleUndo.bind(this)
    this.handleBodyTextSizeChange = this.handleBodyTextSizeChange.bind(this)
    this.handleBodyTextDrag = this.handleBodyTextDrag.bind(this)
    this.handleBodyTextReposition = this.handleBodyTextReposition.bind(this)

    this.state = {
      choices: [],
      body_text: "",
      panel_id: "",
      story_id: "",
      image: "",
      index: "",
      choice: "",
      display: "none",
      image_height: "",
      image_width: "",
      imagePosition: {
        x: 15, y: 15
      },
      imagePanelDisplay: 'none',
      body_text_height: "",
      body_text_width: "",
      bodyTextPosition: {
        x:540, y: -580
      }

    };
  }

    getImageandBodyText = () => {

      return fetch(`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({body_text: (data.data.body_text || ""),
                       panel_id: data.data.id,
                       story_id: data.data.story_id,
                       image: (data.data.image || ""),
                       index: data.data.index,
                       image_height: data.data.image_height,
                       image_width: data.data.image_width,
                       body_text_height: data.data.body_text_height,
                       body_text_width: data.data.body_text_width,
                       imagePosition: {x: data.data.image_position_x, y: data.data.image_position_y},
                       bodyTextPosition: {x: data.data.body_text_position_x, y: data.data.body_text_position_y}
                      })

      })
        .catch(err => console.log(err))
    }

    getChoices = () => {
      return fetch(`/stories/${this.props.match.params.storyid}/panels/${this.props.match.params.panelid}/choices`)
      .then((response) => response.json())
      .then((data) => {

        this.setState({choices: data.data})
        if (this.state.choices.length === 0){
          this.setState({display: "inline"})
        }
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

     handleChoiceAdd = (event) => {
      event.preventDefault()
      var data = {choice: {
        "panel_id": this.state.panel_id,
        "body_text": "",
        "story_id": this.state.story_id,
        "index": this.state.index

      }};
      console.log(data);
      fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}/choices`, {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify(data)
      }).then(json => {
        console.log('choices', data)
          this.setState({new_choice_body_text: ""})
          this.setState({display: "none"})
            this.getChoices()
          })
      }

      handleBodyTextChange(event) {
        this.setState({body_text: event.target.value});
      }

      handleImageChange(event) {
        this.setState({image: event.target.value});
      }

      handleImagePanelShow() {
        if (this.state.imagePanelDisplay === 'none') {
          this.setState({imagePanelDisplay: 'inline'})
        } else {this.setState({imagePanelDisplay: 'none'})}
      }

      handleImageResize(event) {
        const width = event.target.style.width.toString()
        const height = event.target.style.height.toString()
        const data = {panel: {
          "id": this.state.panel_id,
          "image_width": width,
          "image_height": height
        }}

        console.log(width, height)
        console.log(event.target.style)
        if (width != 0 && height !=0) {this.setState({image_width: width,
                                                  image_height: height })

        fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
          headers: {'Content-Type': 'application/json'},
          method: "PUT",
          body: JSON.stringify(data)
          })
        }
      }

      handleImageReposition(){

        const data = {panel : {
          "id": this.state.panel_id,
          "image_position_x": this.state.imagePosition.x,
          "image_position_y": this.state.imagePosition.y
        }}

        console.log(data)
        fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
          headers: {'Content-Type': 'application/json'},
          method: "PUT",
          body: JSON.stringify(data)
          })
      }


      handleChoiceBodyTextChange(event) {
        this.setState({new_choice_body_text: event.target.value})
      }

      handleChoiceSubmit(event) {
          event.preventDefault()

      }

      handleChoiceChange(event) {

       if (event.key === "Enter") {
                var data = {choice: {
          "id": event.target.name,
          "body_text": event.target.value,

        }};
        console.log('hello', data.choice);
        fetch(`/stories/${event.target.label}/panels/${event.target.title}/choices/${event.target.name}`, {
          headers: {'Content-Type': 'application/json'},
          method: "PUT",
          body: JSON.stringify(data)
        }).then(json => {
          console.log(data)

          })
        }
      }

      handleBodyTextSubmit(event) {

      event.preventDefault()
      var data = {panel: {

        "id": this.state.panel_id,
        "body_text": this.state.body_text,
        "story_id":this.state.story_id
      }};
      console.log(data);
      fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
        headers: {'Content-Type': 'application/json'},
        method: "PUT",
        body: JSON.stringify(data)
      })
    }

      handleBodyTextSizeChange(event) {
        const width = event.target.style.width.toString()
        const height = event.target.style.height.toString()
        const data = {panel: {
          "id": this.state.panel_id,
          "body_text_width": width,
          "body_text_height": height
        }}
        console.log(width, height)

        if (width != 0 && height !=0) {this.setState({body_text_width: width,
                                                  body_text_height: height })

        fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
          headers: {'Content-Type': 'application/json'},
          method: "PUT",
          body: JSON.stringify(data)
          })
        }
      }

      handleBodyTextReposition(){

        const data = {panel : {
          "id": this.state.panel_id,
          "body_text_position_x": this.state.bodyTextPosition.x,
          "body_text_position_y": this.state.bodyTextPosition.y
        }}

        console.log(data)
        fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
          headers: {'Content-Type': 'application/json'},
          method: "PUT",
          body: JSON.stringify(data)
          })
      }

      handleDelete(event) {

        event.preventDefault()
        var data = {panel: {
          "id": this.state.panel_id
        }}
        console.log(data);
        fetch(`/stories/${this.state.story_id}/panels/${this.state.panel_id}`, {
          headers: {'Content-Type': 'application/json'},
            method: "DELETE",
            body: JSON.stringify(data)
          }).then(json => {
            console.log(data)
            window.location.assign(`/stories/${this.state.story_id}`)

          })
      }

      handleImageDrag(e, ui) {

        console.log(ui)
        this.setState({
          imagePosition: {
            x: ui.x,
            y: ui.y,
          }

        });
        console.log(this.state.imagePosition)
      }

      handleBodyTextDrag(e, ui) {

        console.log(ui)
        this.setState({
          bodyTextPosition: {
            x: ui.x,
            y: ui.y,
          }

        });
        console.log(this.state.bodyTextPosition)
      }


      handleUndo() {
        this.setState({
          imagePosition: {
            x: 15,
            y: 15
          },
          image_height: "600px",
          image_width: "350px"
        })
      }


    render(){
      const imageStyle = {
        height: this.state.image_height,
        width: this.state.image_width
      }

      const imagePanelStyle = {
      display: this.state.imagePanelDisplay
    }

      const bodyTextStyle = {
        height: this.state.body_text_height,
        width: this.state.body_text_width
      }

      //Start code for enabling resize of image div to smaller than starting size
      //see http://stackoverflow.com/questions/18178301/how-can-i-use-css-resize-to-resize-an-element-to-a-height-width-less-than-init
      function resizableStart(e){
        this.originalW = this.clientWidth;
        this.originalH = this.clientHeight;
        this.onmousemove = resizableCheck;
        this.onmouseup = this.onmouseout = resizableEnd;
      }
      function resizableCheck(e){
        if(this.clientWidth !== this.originalW || this.clientHeight !== this.originalH) {
            this.originalX = e.clientX;
            this.originalY = e.clientY;
            this.onmousemove = resizableMove;
       }
      }
      function resizableMove(e){
        var newW = this.originalW + e.clientX - this.originalX,
            newH = this.originalH + e.clientY - this.originalY;
        if(newW < this.originalW){
            this.style.width = newW + 'px';
        }
        if(newH < this.originalH){
            this.style.height = newH + 'px';
        }
      }
      function resizableEnd(){
        this.onmousemove = this.onmouseout = this.onmouseup = null;
      }
      var els = document.getElementsByClassName('resizable');
        for(var i=0, len=els.length; i<len; ++i){
        els[i].onmouseover = resizableStart;
        }
      //end of smaller resize code.


      return(
      <div className="container">
        <NavBar/>
                <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={600}
            transitionLeave={false}>

          <div>
          <div className="undo-btn">
            <i className="fa fa-undo fa-2x" onClick={this.handleUndo}/>
          </div>
          <div className="image-panel-form" style={imagePanelStyle} >
            <form className="form" onSubmit={this.handleImageSubmit}>
              <label>
                <input type="text" value={this.state.image} onChange={this.handleImageChange} />
              </label>
            </form>
          </div>

          <div onMouseUp={this.handleImageResize}>
            <Draggable handle="strong" onDrag={this.handleImageDrag} position={this.state.imagePosition} onStop={this.handleImageReposition} >
              <div className="image-frame resizable"  style={imageStyle}  >
                <div className="image-form-icon">
                  <i className="fa fa-external-link " onClick={this.handleImagePanelShow}/>
                </div>
                <strong className="cursor">
                  <div className="drag-icon">
                    <i className="fa fa-arrows"/>
                  </div>
                </strong>
                <img src={this.state.image} className="panel-img" alt="Insert Your Image Here"/>
              </div>
            </Draggable>
          </div>
        </div>
        <Draggable handle="strong" onDrag={this.handleBodyTextDrag} position={this.state.bodyTextPosition} onStop={this.handleBodyTextReposition}>
          <div className="panel-form">

                <strong className="cursor">
                  <div className="drag-icon">
                    <i className="fa fa-arrows"/>
                  </div>
                </strong>

            <form className="form" onSubmit={this.handleBodyTextSubmit}>
              <label>
              <br/>
                <textarea className="bodyTextForm resizable" name="body_text" value={this.state.body_text} onChange={this.handleBodyTextChange} style={bodyTextStyle} onMouseUp={this.handleBodyTextSizeChange} />
              </label>
              <br/>
              <input className="waves-effect waves-light btn" type="submit" value="Submit" />
            </form>
          </div>
        </Draggable>

        <ChoicesEdit choices={this.state.choices}
                      handleChoiceChange={this.handleChoiceChange}
                      story_id={this.state.story_id}
                      panel_id={this.state.panel_id}
                      handleChoiceAdd={this.handleChoiceAdd}
                      />

        <div className="back-btn">
          <Link to={`/stories/${this.state.story_id}/`} onClick={StoryChart }>
            <Button>Back to the Chart!</Button>
          </Link>
        </div>
        <Button className="delete-btn" onClick={this.handleDelete} style={{display: this.state.display}}>Delete this Panel</Button>


        </ReactCSSTransitionGroup>
        </div>
      );
    }
  }


export default NewPanelForm;







