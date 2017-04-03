// import { GET_STORIES } from './types.js';
import 'whatwg-fetch';
import axios from 'axios'
import {CREATE_STORY} from './types'


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

export const getChoices = (storyid, panelid) => {
  return dispatch => {
    fetch(`/stories/${storyid}/panels/${panelid}/choices`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        return dispatch({type: "GET_CHOICES", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}

export const getRow = (storyid) => {
  return dispatch => {
    console.log("dispatch2", dispatch)
    fetch(`/stories/${storyid}/choices/listrow`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        return dispatch({type: "GET_ROW", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}

export const createStory = (props) => {
  return dispatch => {

    fetch("/stories", {
      method: 'post',
      type: CREATE_STORY,
      body: props
    })

  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

}

}




//   const request = axios.post('/stories', props);
//   return{
//     type: CREATE_STORY,
//     payload: request
//   };
// }



