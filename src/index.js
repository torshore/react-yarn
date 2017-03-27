import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './js/components/App'
import Store from './store.js';
import routes from './js/routes.js'
import '../styles/index.css';
import 'react-bootstrap';

const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
   <BrowserRouter history={history} routes={routes}>
     <App />
   </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);
