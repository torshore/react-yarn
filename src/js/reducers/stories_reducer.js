import { GET_STORIES, GET_STORY } from '../actions/index.js';

const INITIAL_STATE = {all: [], article: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_STORIES:
      return { ...state, all: action.payload.data} ;
    case GET_STORY:
      return { ...state, article: action.payload.data} ;
    default:
      return state;
  }
}

