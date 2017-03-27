import { GET_STORIES } from './types.js';
import { axios } from 'axios';
import 'whatwg-fetch';


export const getStories = () => {
 const request = axios.get(`${API_URL}/stories`);
  return{
    type: GET_STORIES,
    payload: request
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
