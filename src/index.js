import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './js/components/App';
import SingleStoryShow from './js/components/SingleStoryShow';
import StoriesHome from './js/components/StoriesHome';
import StoriesHomeEdit from './js/components/StoriesHomeEdit';
import Home from './js/components/Home';
import StoryChart from './js/components/StoryChart'
import NewStory from './js/components/NewStory'
import NewPanelForm from './js/components/NewPanelForm';
import store, { history } from './store.js';
import 'react-materialize';


const router = (
  <Provider store={store}>
   <BrowserRouter history={history}>
      <App>
        <Route exact={true} path="/" />

        <Switch>
          <Route path="/stories/:storyid/panels/:panelid/edit" component={NewPanelForm}/>
          <Route path="/new" component={NewStory}/>
          <Route path="/stories/:storyid/panels/:panelid" component={SingleStoryShow}/>
          <Route path="/stories/:storyid/" component={StoryChart}/>
          <Route path="/storiesedit" component={StoriesHomeEdit} />
          <Route path="/stories" component={StoriesHome} />
          <Route exact={true} path="/" component={Home}/>
        </Switch>
      </App>
   </BrowserRouter>
 </Provider>
  )

render(router, document.getElementById('root'));
