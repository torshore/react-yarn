// import { GET_STORIES } from './types.js';
import 'whatwg-fetch';


export const getStories = () => {
  return dispatch => {

    fetch('/stories')
      .then(response => response.json())
      .then((data) => {
        return dispatch({type: "GET_STORIES", payload: data.data })
      })
      .catch(err => console.log(err))

  }
}

export const getPanel = (storyid, panelid) => {
  return dispatch => {

    fetch(`/stories/${storyid}/panels/${panelid}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        return dispatch({type: "GET_PANEL", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}




// fetch('/stories').then(
//     function(response) {
//      if (response.status !== 200) {
//        console.log('Looks like there was a problem. Status Code: ' +
//          response.status);
//        return;
//      }
//      response.json().then((json) => callback(json.data));
//    })
