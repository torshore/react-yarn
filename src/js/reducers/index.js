import { combineReducers } from 'redux';
import StoriesReducer from './stories_reducer.js';
import PanelReducer from './panel_reducer.js';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  stories: StoriesReducer,
  routing: routerReducer,
  panel: PanelReducer,
  form: formReducer
});

export default allReducers;