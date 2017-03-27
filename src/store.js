import { createStore } from 'redux';
import allReducers from  './js/reducers/index.js';
export default(initialState) => {
    return createStore(allReducers, initialState);
}