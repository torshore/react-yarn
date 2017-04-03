const initialState = {
  rows: []
}

export default function(state = initialState, action) {
  console.log('reducer', action.type, action);
  switch(action.type){
    case "GET_ROW":
      return {
        ...state,
        rows: action.payload
      }
    default:
      return state;
  }
}