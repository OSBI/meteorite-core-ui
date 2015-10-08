'use strict';

var React = require('react');
var MenuBarItem = require('./MenuBarItem');

var MenuBar = React.createClass({
	render: function() {
		var data = this.props.data;

		var menuBarItem = data.item.map(function(item) {
			return <MenuBarItem key={item.id} item={item} />
		});

		return (
			<nav className="top-bar" data-topbar role="navigation">
				{menuBarItem}
			</nav>
		);
	}
});

module.exports = MenuBar;