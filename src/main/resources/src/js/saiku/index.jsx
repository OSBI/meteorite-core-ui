'use strict';

var React = require('react');
var MenuBar = require('./components/MenuBar/MenuBar');

var data = {"item":[{"name":"File","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true,"action":"#"},{"name":"Dropdown Option 2","visible":true,"action":"#"},{"name":"Dropdown Option 3","visible":true,"action":"#"}]},{"name":"Edit","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true,"action":"#"},{"name":"Dropdown Option 2","visible":true,"action":"#"},{"name":"Dropdown Option 3","visible":true,"action":"#"}]},{"name":"Tools","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true,"action":"#"},{"name":"Dropdown Option 2","visible":true,"action":"#"},{"name":"Dropdown Option 3","visible":true,"action":"#"}]}]};

React.render(<MenuBar data={data} />, document.getElementById('content'));