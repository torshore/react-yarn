import { GET_STORIES } from '../actions/index.js';

const initialState = {
  stories: []
}

export default function(state = initialState, action){
  switch(action.type){
    case "GET_STORIES":
      debugger
      return {
        ...state,
        stories: action.payload
      }
    default:
      debugger
      return state;
  }
}

