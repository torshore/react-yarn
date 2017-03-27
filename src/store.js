import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk'
import allReducers from  './js/reducers/index.js';
// import stories from './js/components/StoriesHome';


const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;