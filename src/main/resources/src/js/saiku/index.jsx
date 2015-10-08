'use strict';

var React = require('react');
var MenuBar = require('./components/MenuBar/MenuBar');

var data = {"item":[{"name":"File","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true},{"name":"Dropdown Option 2","visible":true},{"name":"Dropdown Option 3","visible":true}]},{"name":"Edit","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true},{"name":"Dropdown Option 2","visible":true},{"name":"Dropdown Option 3","visible":true}]},{"name":"Tools","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true},{"name":"Dropdown Option 2","visible":true},{"name":"Dropdown Option 3","visible":true}]}]};

React.render(<MenuBar data={data} />, document.getElementById('content'));