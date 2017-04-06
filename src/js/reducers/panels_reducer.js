const initialState = {
  panels: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case "GET_PANELS":
      return {
        ...state,
        panels: action.payload
      }
    default:
      return state;
  }
}