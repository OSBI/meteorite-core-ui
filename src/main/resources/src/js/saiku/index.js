import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import Login from './components/saiku/Login';
import '../../../dist/saiku/saiku.css';

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Login} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
