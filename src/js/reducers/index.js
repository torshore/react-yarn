import { combineReducers } from 'redux';
import StoriesReducer from './stories_reducer.js';
import PanelReducer from './panel_reducer.js';
import ChoicesReducer from './choices_reducer.js';
import RowsReducer from './rows_reducer.js';
import PanelsReducer from './panels_reducer.js';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  stories: StoriesReducer,
  routing: routerReducer,
  panel: PanelReducer,
  form: formReducer,
  choices: ChoicesReducer,
  rows: RowsReducer,
  panels: PanelsReducer,
});

export default allReducers;