import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import allReducers from  './js/reducers/index.js';

const defaultState = {
  data
}

const store = createStore(allReducers, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;