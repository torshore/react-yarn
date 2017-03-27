import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import StoriesHome from './components/StoriesHome';
import NewStory from './components/NewStory';
import SingleStoryShow from './components/SingleStoryShow';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={StoriesHome} />
    <Route path="stories/new" component={NewStory} />
    <Route path="stories/:id" component={SingleStoryShow} />
  </Route>
);