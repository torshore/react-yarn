const initialState = {
  stories: []
}

export default function(state = initialState, action){
  switch(action.type){
    case "GET_STORIES":
      return {
        ...state,
        stories: action.payload
      }
    default:

      return state;
  }
}

