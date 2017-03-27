import { GET_STORIES, GET_STORY, CREATE_STORY, DELETE_STORY } from './types.js';
import { axios } from 'axios';
const API_URL = "http://localhost:3000";

export const getStories = () => {
  const request = axios.get(`${API_URL}/stories`);
  return {
    type: GET_STORIES,
    payload: request
  };
}

export const createStory = (props) => {
  const request = axios.post(`${API_URL}/stories`, props);
  return {
    type: CREATE_STORY,
    payload: request
  };
}

export const deleteStory = (id) => {
  const request = axios.delete(`${API_URL}/stories/${id}`);

  return {
    type: DELETE_STORY,
    payload: request
  };
}

export const getStory = (id) => {
  const request = axios.get(`${API_URL}/stories/${id}`);

  return {
    type: GET_STORY,
    payload: request
  };
}