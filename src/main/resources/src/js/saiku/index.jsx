'use strict';

var React = require('react');
var MenuBar = require('./components/MenuBar/MenuBar');
var Toolbar = require('./components/Toolbar/Toolbar');

var MenuBarData = {"item":[{"name":"File","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true,"action":"#"},{"name":"Dropdown Option 2","visible":true,"action":"#"},{"name":"Dropdown Option 3","visible":true,"action":"#"}]},{"name":"Edit","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true,"action":"#"},{"name":"Dropdown Option 2","visible":true,"action":"#"},{"name":"Dropdown Option 3","visible":true,"action":"#"}]},{"name":"Tools","visible":true,"subitem":[{"name":"Dropdown Option 1","visible":true,"action":"#"},{"name":"Dropdown Option 2","visible":true,"action":"#"},{"name":"Dropdown Option 3","visible":true,"action":"#"}]}]};
var ToolbarData = {"item":[{"name":"New query","visible":true,"icon":"fa fa-file"},{"name":"Open query","visible":true,"icon":"fa fa-folder-open"},{"name":"Logout","visible":true,"icon":"fa fa-power-off"},{"name":"About","visible":true,"icon":"fa fa-info-circle"},{"name":"Admin Console","visible":true,"icon":"fa fa-cog"},{"name":"Schema Designer","visible":true,"icon":"fa fa-cube"},{"name":"Dashboards","visible":true,"icon":"fa fa-tachometer"}]};

// React.render(<MenuBar data={MenuBarData} />, document.getElementById('content'));
React.render(<Toolbar data={ToolbarData} />, document.getElementById('content'));