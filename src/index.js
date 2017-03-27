import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import App from './js/components/App';
import StoriesHome from './js/components/StoriesHome';
import NewStory from './js/components/NewStory';
import SingleStoryShow from './js/components/SingleStoryShow';
import store, { history } from './store.js';

import '../styles/index.css';
import 'react-bootstrap';

// const StoreInstance = Store();
const router = (
  <Provider store={store}>
   <BrowserRouter history={history}>
     <Route path="/" component={App}>
       <IndexRoute component={StoriesHome} />
       <Route path="stories/new" component={NewStory} />
       <Route path="stories/:id" component={SingleStoryShow} />
     </Route>
   </BrowserRouter>
 </Provider>
  )

render(router, document.getElementById('root'));

