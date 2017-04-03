const initialState = {
  rows: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case "GET_ROWS":
      return {
        ...state,
        rows: action.payload
      }
    default:
      return state;
  }
}