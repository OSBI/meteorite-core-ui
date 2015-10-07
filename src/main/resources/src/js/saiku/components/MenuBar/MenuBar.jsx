/** @jsx React.DOM  */

'use strict';

var React = require('react');
var MenuBarItem = require('./MenuBarItem');

module.export = React.createClass({
	render: function() {
		return (
			<nav className="top-bar" data-topbar role="navigation">
				<MenuBarItem />
			</nav>
		);
	}
});