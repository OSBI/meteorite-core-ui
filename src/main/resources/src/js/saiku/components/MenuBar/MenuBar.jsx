'use strict';

var React = require('react');
var MenuBarItem = require('./MenuBarItem');

var MenuBar = React.createClass({
	render: function() {
		var itemNode = this.props.data.item.map(function(item) {
			return <MenuBarItem item={item} />
		});

		return (
			<nav className="top-bar" data-topbar role="navigation">
				{itemNode}
			</nav>
		);
	}
});

module.exports = MenuBar;