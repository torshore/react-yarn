// import { GET_STORIES } from '../actions/index.js';

const initialState = {
  stories: [],
  story: null
}

export default function(state = initialState, action){
  switch(action.type){
    case "GET_STORIES":
      return {
        ...state,
        stories: action.payload
      }
    case "GET_STORY":
    debugger;
      return {
        ...state,
        story: action.payload
      }
    default:

      return state;
  }
}

