import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './js/components/App';
import SingleStoryShow from './js/components/SingleStoryShow';
import StoriesHome from './js/components/StoriesHome';
import Home from './js/components/Home';
import PanelEdit from './js/components/PanelEdit';
import StoryChart from './js/components/StoryChart'
import NewStory from './js/components/NewStory'
import store, { history } from './store.js';
import 'react-materialize';


const router = (
  <Provider store={store}>
   <BrowserRouter history={history}>
      <App>
          <Route exact={true} path="/" />
          <Route path="/new" component={NewStory}/>
          <Switch>
            <Route path="/stories/:storyid/panels/:panelid" component={SingleStoryShow}/>
            <Route path="/stories/:storyid/" component={StoryChart}/>

            <Route path="/stories" component={StoriesHome} />
            <Route path="/" component={Home}/>
          </Switch>
          <Route path="/stories/:storyid/panels/:panelid/edit" component={PanelEdit}/>
      </App>
   </BrowserRouter>
 </Provider>
  )

render(router, document.getElementById('root'));

