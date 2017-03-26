import { GET_STORIES } from './actions/index.js';

const INITIAL_STATE = (all: [], story:null);

const stories_get = (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_STORIES
    return(
      ...state, all: action.payload.data
    );
    case GET_STORY
    return(
      return { ...state, story: action.payload.data} ;
    )
    default:
    return state;
  }
}