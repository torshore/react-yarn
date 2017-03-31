const initialState = {
  choices: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case "GET_CHOICES":
      return {
        ...state,
        choices: action.payload
      }
    default:
      return state;
  }
}