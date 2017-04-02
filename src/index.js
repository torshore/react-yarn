import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './js/components/App';
import SingleStoryShow from './js/components/SingleStoryShow';
import StoriesHome from './js/components/StoriesHome';
import PanelEdit from './js/components/PanelEdit';
import StoryChart from './js/components/StoryChart'
import store, { history } from './store.js';
// import '../styles/index.css';
import 'react-materialize';

// const StoreInstance = Store();
const router = (
  <Provider store={store}>
   <BrowserRouter history={history}>
      <App>
          <Route exact={true} path="/" />
          <Switch>
            <Route path="/stories/:storyid/panels/:panelid" component={SingleStoryShow}/>
            <Route path="/stories/:storyid/" component={StoryChart}/>
            <Route path="/stories" component={StoriesHome} />
          </Switch>
          <Route path="/stories/:storyid/panels/:panelid/edit" component={PanelEdit}/>
      </App>
   </BrowserRouter>
 </Provider>
  )

render(router, document.getElementById('root'));

