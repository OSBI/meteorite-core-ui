'use strict';

var React = require('react');
var MenuBarItem = require('./MenuBarItem');

var MenuBar = React.createClass({
	render: function() {
		return (
			<nav className="top-bar" data-topbar role="navigation">
				<MenuBarItem />
			</nav>
		);
	}
});

module.exports = MenuBar;