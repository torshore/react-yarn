import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import { getStories } from '../actions/index';
import NavBar from './NavBar';




class StoriesHome extends Component{

  componentDidMount() {
    this.props.dispatch(getStories());
  }

  renderStories() {
    return this.props.stories.map((story) => {
      return (
        <div key={story.id}>


        <div className="single-story" >
          <Col s={1} m={1}/>
          <Col s={11} m={5}>
            <Card  className='small horizontal hoverable'
            header={<CardTitle image={story.image}> {story.title}</CardTitle>} >
              <p className="tag"> {story.tagline} </p>
              <div className="card-action grey-text">
                <a className="story-link grey-text text-darken-2" href={`/stories/${story.id}/panels/${story.firstpanel}`}>Choose this Adventure!</a>
              </div>
            </Card>
          </Col>

        </div>
        </div>
      )
    });
  }
  render(){
    return(

      <div className="single-story">
      <NavBar />
      <h2 className="bldtitle"> Choose an Adventure: </h2>

      <Row>
            {this.renderStories()}
      </Row>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {stories: state.stories.stories }
}

export default connect(mapStateToProps)(StoriesHome);



