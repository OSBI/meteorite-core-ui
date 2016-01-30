import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import Login from './components/saiku/Login';
import Workspace from './components/saiku/Workspace';
import NotFound from './components/saiku/NotFound';

// webpack loaders
import '../../index.html';
import '../../dist/saiku/saiku.css';

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Login} />
    <Route path="/workspace/" component={Workspace} />
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
