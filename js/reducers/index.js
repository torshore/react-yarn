import { combineReducers } from 'redux';
import StoriesReducer from './stories_reducer.js';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  stories: StoriesReducer,
  form: formReducer
});

export default allReducers;