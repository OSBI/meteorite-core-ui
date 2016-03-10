/*
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import Login from './components/saiku/Login';
import LockScreen from './components/saiku/LockScreen';
import Workspace from './components/saiku/Workspace';
import QueryDesigner from './components/saiku/query_designer';
import NotFound from './components/saiku/NotFound';

// webpack loaders
import '../../index.html';
import '../../dist/saiku/saiku.css';

/**
 * React router component allows you to define routes in React application.
 * @see https://github.com/reactjs/react-router
 */
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Login} />
    <Route path="/workspace/" component={Workspace} />
    <Route path="/query_designer/" component={QueryDesigner} />
    <Route path="/lockscreen/" component={LockScreen} />
    <Route path="*" component={NotFound} />
  </Router>
);

// The primary API for rendering into the DOM.
ReactDOM.render(routes, document.querySelector('#app'));
