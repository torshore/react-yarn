const initialState = {
  panel: {}
}

export default function(state = initialState, action) {
  switch(action.type){
    case "GET_PANEL":
      return {
        ...state,
        panel: action.payload
      }
    default:
      return state;
  }
}