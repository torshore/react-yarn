import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createStory} from '../actions/index';

class NewStory extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.createStory(props)
      .then(() => {
        this.props.router.push('/');
      });
  }

  render(){
    const {fields:{title, tagline}, handleSubmit} = this.props;

    return(
      <div className="container">

        <h1> Create a new article </h1>

        <form onSubmit={handleSubmit(this.onSubmit)}>

          <div className="form-group">
            <label>Title </label>
            <input type="text" className="form-control" {...title} />
          </div>
          <div className="form-group">
            <label>Tagline </label>
            <input type="text" className="form-control" {...tagline} />
          </div>
          <button type="submit" className="btn btn-success">Create</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'NewStoryForm',
  fields: ['title', 'tagline']
}, null, {createStory}) (NewStory);

