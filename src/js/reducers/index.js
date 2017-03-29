import { combineReducers } from 'redux';
import StoriesReducer from './stories_reducer.js';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  stories: StoriesReducer,
  story: StoriesReducer,
  routing: routerReducer,
  form: formReducer
});

export default allReducers;