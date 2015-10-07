/** @jsx React.DOM  */

'use strict';

var React = require('react');
var MenuBar = require('./MenuBar/MenuBar');

React.renderComponent(<MenuBar />, document.getElementById('content'));