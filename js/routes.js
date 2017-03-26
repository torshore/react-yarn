import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.js';
import StoriesHome from './components/ArticlesHome.js';
import NewStory from './components/NewArticle.js';
import SingleStoryShow from './components/SingleArticleShow.js';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={StoriesHome} />
    <Route path="stories/new" component={NewStory} />
    <Route path="stories/:id" component={SingleStoryShow} />
  </Route>
);